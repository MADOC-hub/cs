// ▼グローバル変数
// ルートディレクトリパス
gTopPath = "";
// floatThead初期化済フラグ
gFloatTheadInited = false;
// 明細テーブルのフルセット時のカラム幅
gDetailsColWidth = [];
// コピー対象の行番号を格納する配列
var gCopyLines = [];
// 行明細モーダルダイアログのインスタンス
var gDetailModal;
// 材料選択モーダルダイアログのインスタンス
var gMaterialModal;
// ロード中モーダルダイアログのインスタンス
var gLoadingModal;
// 計算中モーダルダイアログのインスタンス
var gComputingModal;
// 材料発注先業者選択モーダルダイアログのインスタンス
var gMaterialContractorModal;
// 加工発注先業者選択モーダルダイアログのインスタンス
var gProcessContractorModal;
// 施工発注先業者選択モーダルダイアログのインスタンス
var gConstructContractorModal;
// 経費発注先業者選択モーダルダイアログのインスタンス
var gCostContractorModal;
// 売上解除中モーダルダイアログのインスタンス
var gCancelingModal;
// 実行予算削除中モーダルダイアログのインスタンス
var gDeletingModal;
// 経費発注先業者選択ダイアログの呼び出し元
var gContractorSelectCaller;
// true: 行明細モーダルダイアログの初期化中
var gInitDetailModal = false;
// true: 変更あり
var gDetailChanged = false;
// integer: 新しい種類ID
var gTypeId = 0;
// integer: 端数処理モード
var gRoundOption = -1;
// ▲グローバル変数

// 関数名：DoSave
// 機　能：実行予算登録・更新
function DoSave(){
	var msg = "この内容で更新しますか？";
	var theForm = document.form_main;

	if (theForm.AutoID.value == 0) {
		msg = "この内容で登録しますか？";
	}

	$("#result-message,#errors").empty();

	if (window.confirm(msg)) {
		theForm.Mode.value = "";
		theForm.action = gTopPath + "/budget-save.php";
		theForm.submit();
	}

	return false;
}

// 関数名：DoPreFixOrder
// 機　能：売上確定モーダルダイアログが表示される直前に呼ばれるコールバック
function DoPreFixOrder(obj){
	var theForm = document.form_main;

	if (theForm.OrderPrice.value == "" || theForm.OrderDate.value == "" || theForm.StartDate.value == "") {
		alert("契約金額、契約日付、着工日付が全て入力されていないと売上を確定できません。");
		return false;
	} else { // 施工業者のアサイン漏れチェック
		var yet = false;
		var row = 0;

		$("input[name^='SekouPrice']", $("form#form_main")).each(function(){
			if (this.value.length > 0 && this.value != "0") {
				row = this.name.replace("SekouPrice", "");

				if (document.form_main["SekouContract" + row].value == 0) {
					yet = true;
					return false;
				}
			}
		});

		if (yet) {
			alert("施工業者が全て選択されていないと売上を確定できません。");
			return false;
		}
	}

	return true;
}

// 関数名：DoFixOrder
// 機　能：売上確定
function DoFixOrder(){
	var theForm = document.form_main;

	// 契約金額、契約日付、着工日付の入力を確認
	if (theForm.OrderPrice.value != "" && theForm.OrderDate.value != "" && theForm.StartDate.value != "" && $("#frm-SalesDate").val() != "") {
		$("#result-message,#errors").empty();

		if (window.confirm("この内容で売上を確定します。\nよろしいですか？")) {
			theForm.Mode.value = "FixOrder";
			theForm.SalesDate.value = $("#frm-SalesDate").val();
			theForm.action = gTopPath + "/budget-save.php";
			theForm.submit();
			theForm.Mode.value = "";
		}
	} else {
		alert("契約金額、契約日付、着工日付、売上確定日が全て入力されていないと売上を確定できません。");
	}

	return false;
}

// 関数名：DoAddRows
// 機　能：内訳行数を追加　※23行づつ
function DoAddRows(){
	var theForm = document.form_main;
	theForm.Mode.value = "AddRows";
	theForm.action = gTopPath + "/budget-edit.php";
	theForm.submit();
	theForm.Mode.value = "";
}

// 関数名：DoPrintSalesInvoice
// 機　能：売上伝票の印刷
function DoPrintSalesInvoice(){
	var theForm = document.form_main;
	theForm.action = gTopPath + "/print-sales-invoice.php";
	theForm.target = "_blank";
	theForm.submit();
	theForm.target = "_self";
}

// 関数名：DoOpenMaterialDialog
// 機　能：材料選択ダイアログを開く
// 引　数：pButton(参照ボタン)
function DoOpenMaterialDialog(pButton){
	var prefix = $(pButton).attr("id").match(/^detail/) ? "detail" : "ref";
	var type = $(pButton).attr("id").replace(prefix, "");
	var categoryId = $("select#" + prefix + "_LargeCateID").val();
	var typeId = $("select#" + prefix + "_TypeID").val();

	if (categoryId == "0") {
		alert("大分類が選択されていません。\n大分類と種類を選択してから名称の［参照］ボタンをクリックしてください。");
		return;
	} else if (typeId == "0") {
		alert("種類が選択されていません。\n大分類と種類を選択してから名称の［参照］ボタンをクリックしてください。");
		return;
	}

	switch (type) {
		case "ZaiName":
			title = "材料「名称」";
			break;
		case "Material":
			title = "材料「材質」";
			break;
		case "Size":
			title = "材料「寸法」";
			break;
		default:
			return;
	}

	document.form_material.cur_prefix.value = prefix;
	document.form_material.cur_target.value = type;

	// 材料選択ダイアログのタイトル設定
	gMaterialModal.dialog("option", "title", (title + "選択" ));

	// 2番目以降の<tr>を削除
	if ($("table#TblResult > tbody > tr:gt(0)").length > 0) {
		$("table#TblResult > tbody > tr:gt(0)").remove();
	}

	var data = {
		type: type,
		cat_id: categoryId,
		type_id: typeId,
		name: $("input#" + prefix + "_ZaiName").val(),
		material: $("input#" + prefix + "_Material").val(),
		size: $("input#" + prefix + "_Size").val()
	};

	$.ajax({
		type: "post",
		url: gTopPath + "/ajax/ajax_get_options.php",
		data: data,
		dataType: "json",
		async: false,
		cache: false,
		success: function(json_data) {
			if (json_data.result == "ok") {
				$("table#TblResult > tbody").append(json_data.options);
				$("table#TblResult .btnSelMaterial").click(function(){
					DoSelectMaterial(this);
				});

				// 材料選択ダイアログを表示する
				gMaterialModal.dialog("open");
			} else if (json_data.error) {
				alert(json_data.error);
			}
		},
		error: function() {
			alert("サーバとの通信に失敗しました。" + title + "の選択肢を設定できませんでした。");
		}
	});
}


// 関数名：DoCompleteMaterialDialog
// 機　能：材料情報をセットしてから材料選択ダイアログを閉じる
function DoCompleteMaterialDialog(){

	var prefix = document.form_material.cur_prefix.value;

	if (prefix != "detail") {
		gMaterialModal.dialog("close");
		document.form_material.cur_prefix.value = "";
		return;
	}

	var data = {
		mode: "getRecord",
		cat_id: $("select#" + prefix + "_LargeCateID").val(),
		type_id: $("select#" + prefix + "_TypeID").val(),
		name: $("input#" + prefix + "_ZaiName").val(),
		material: $("input#" + prefix + "_Material").val(),
		size: $("input#" + prefix + "_Size").val()
	};

	$.ajax({
		type: "post",
		url: gTopPath + "/ajax/ajax_get_material.php",
		data: data,
		dataType: "json",
		async: false,
		cache: false,
		success: function(json_data) {
			if (json_data.result == "ok") {
				// 材料の初期値をフォームに設定
				var theForm = document.form_detail;
				theForm.ZaiID.value = json_data.spec.AutoID;
				theForm.UPrice.value = DoIntToTxt(json_data.spec.Mitu);
				theForm.MituUPrice.value = theForm.UPrice.value;
				theForm.Unit.value = json_data.spec.MituUnit;
				theForm.MituUnit.value = json_data.spec.MituUnit;
				theForm.ZaiUPrice.value = DoIntToTxt(json_data.spec.Zai);
				theForm.ZaiUnit.value = json_data.spec.ZaiUnit;
				theForm.KakouUPrice.value = DoIntToTxt(json_data.spec.Kakou);
				theForm.KakouUnit.value = json_data.spec.KakouUnit;
				theForm.SekouUPrice.value = DoIntToTxt(json_data.spec.Sekou);
				theForm.SekouUnit.value = json_data.spec.SekouUnit;
				theForm.CostUnit.value = json_data.spec.MituUnit;
				theForm.CostUPrice.value = "0";
				// 材料の初期値には追加経費の値はない
				// 金額再計算
				DoDetailCalc(2);
				// 材料選択ダイアログを閉じる
				gMaterialModal.dialog("close");
				document.form_material.cur_prefix.value = "";
				$("#detail-modal-dialog #id_Quantity").get(0).focus();
			} else if (json_data.error) {
				alert(json_data.error);
			}
		},
		error: function() {
			alert("サーバとの通信に失敗しました。選択された材料の情報を設定できませんでした。");
		}
	});
}


// 関数名：DoSelectMaterial
// 機　能：選択された材料名称をinputへセット
function DoSelectMaterial(obj) {
	var next_btn = "";
	var prefix = document.form_material.cur_prefix.value;
	var dstId = "input#" + prefix  + "_" + document.form_material.cur_target.value;
	$(dstId).val($(obj).parent("td").text()).change();

	switch (document.form_material.cur_target.value) {
		case "ZaiName":
			next_btn = "input#" + prefix + "Material";
			break;
		case "Material":
			next_btn = "input#" + prefix + "Size";
			break;
		case "Size":
			break;
	}

	$("table#TblResult > tbody > tr:gt(0)").remove();
	document.form_material.cur_target.value = "";

	if (next_btn != "") {
		DoOpenMaterialDialog($(next_btn).get(0));
	} else {
		DoCompleteMaterialDialog();
	}
}


// 関数名：DoMaterialGet
// 機　能：材料マスターデータを反映
function DoMaterialGet() {
	if (gInitDetailModal) { // 初期化中は何もしない
		return;
	}

	DoInitValues(document.form_detail, "Quantity", document.form_detail.MituQuantity.value);
	gDetailChanged = true;
}


// 関数名：DoOpenDetailDialog
// 機　能：行明細ダイアログを開く
// 引　数：pButton(内訳編集ボタン)
function DoOpenDetailDialog(pButton){
	var srcId = $(pButton).attr("id").replace("id_Row", "");

	DoPrepareDetailDialog(srcId);

	// 行明細ダイアログを表示する
	gDetailModal.dialog("open");
}

// 関数名：DoPrepareDetailDialog
// 機　能：行明細ダイアログ内の各要素の値を構成する
// 引　数：srcId(明細行No.)
function DoPrepareDetailDialog(srcId){
	gInitDetailModal = true;

	$("#save-material-result").text("");

	var srcElms = document.form_main.elements;
	var dstElms = document.form_detail.elements;

	// 編集対象の明細行を記憶する
	dstElms["CurRow"].value = srcId;

	// 行明細ダイアログのタイトルを設定する
	gDetailModal.dialog("option", "title", ("行明細：" + srcId + "行目"));

	// 行明細ダイアログに編集用のデータを設定する
	dstElms["Heading"].value = srcElms[("Heading" + srcId)].value;

	// 大分類が未指定の場合は直前の行の値をコピーする
	if (srcElms[("LargeCateID" + srcId)].value == 0 && srcId > 1) {
		gTypeId = srcElms[("TypeID" + (srcId - 1))].value;
		DoSetLargeCategory(srcElms[("LargeCateID" + (srcId - 1))].value);
	} else {
		gTypeId = srcElms[("TypeID" + srcId)].value;
		DoSetLargeCategory(srcElms[("LargeCateID" + srcId)].value);
	}

	dstElms["ZaiName"].value  = srcElms[("ZaiName" + srcId)].value;
	dstElms["Material"].value = srcElms[("Material" + srcId)].value;
	dstElms["Size"].value     = srcElms[("Size" + srcId)].value;
	dstElms["Quantity"].value = srcElms[("Quantity" + srcId)].value;
	dstElms["Unit"].value     = srcElms[("Unit" + srcId)].value;
	dstElms["UPrice"].value   = srcElms[("UPrice" + srcId)].value;
	// 材料コードは明細にない（空白でOK）
	dstElms["Remark"].value   = srcElms[("Remark" + srcId)].value;

	dstElms["MituQuantity"].value = dstElms["Quantity"].value;
	dstElms["MituUnit"].value     = dstElms["Unit"].value;
	dstElms["MituUPrice"].value   = dstElms["UPrice"].value;
	dstElms["MituPrice"].value    = srcElms[("Price" + srcId)].value;

	dstElms["ZaiQuantity"].value = srcElms[("ZaiQuantity" + srcId)].value;
	dstElms["ZaiUnit"].value     = srcElms[("ZaiUnit" + srcId)].value;
	dstElms["ZaiUPrice"].value   = srcElms[("ZaiUPrice" + srcId)].value;
	dstElms["ZaiPrice"].value    = srcElms[("ZaiPrice" + srcId)].value;

	dstElms["KakouQuantity"].value = srcElms[("KakouQuantity" + srcId)].value;
	dstElms["KakouUnit"].value     = srcElms[("KakouUnit" + srcId)].value;
	dstElms["KakouUPrice"].value   = srcElms[("KakouUPrice" + srcId)].value;
	dstElms["KakouPrice"].value    = srcElms[("KakouPrice" + srcId)].value;

	dstElms["SekouQuantity"].value = srcElms[("SekouQuantity" + srcId)].value;
	dstElms["SekouUnit"].value     = srcElms[("SekouUnit" + srcId)].value;
	dstElms["SekouUPrice"].value   = srcElms[("SekouUPrice" + srcId)].value;
	dstElms["SekouPrice"].value    = srcElms[("SekouPrice" + srcId)].value;

	dstElms["CostQuantity"].value = srcElms[("CostQuantity" + srcId)].value;
	dstElms["CostUnit"].value     = srcElms[("CostUnit" + srcId)].value;
	dstElms["CostUPrice"].value   = srcElms[("CostUPrice" + srcId)].value;
	dstElms["CostPrice"].value    = srcElms[("CostPrice" + srcId)].value;

	dstElms["ZaiID"].value      = "";

	if (dstElms["Heading"].value.length > 0) { // 見出
		$("#detail-modal-dialog #tabs").tabs("option", "active", 0);
	} else { // 明細
		$("#detail-modal-dialog #tabs").tabs("option", "active", 1);
	}

	gInitDetailModal = false;
	gDetailChanged = false;
}


// 関数名：DoSaveDetail
// 機　能：行明細ダイアログの編集内容を見積明細行へ保存する
// 引　数：pNewVal(大分類ID)
function DoSaveDetail() {
	var srcElms = document.form_detail.elements;
	var dstElms = document.form_main.elements;
	var srcId = srcElms["CurRow"].value;

	// 行明細ダイアログに編集用のデータを設定する
	dstElms[("Heading" + srcId)].value     = srcElms["Heading"].value;
	dstElms[("LargeCateID" + srcId)].value = $("select#detail_LargeCateID").val();
	dstElms[("TypeID" + srcId)].value      = $("select#detail_TypeID").val();

	dstElms[("ZaiName" + srcId)].value  = srcElms["ZaiName"].value;
	dstElms[("Material" + srcId)].value = srcElms["Material"].value;
	dstElms[("Size" + srcId)].value     = srcElms["Size"].value;
	dstElms[("Quantity" + srcId)].value = srcElms["Quantity"].value;
	dstElms[("Unit" + srcId)].value     = srcElms["Unit"].value;
	dstElms[("UPrice" + srcId)].value   = srcElms["UPrice"].value;
	dstElms[("Price" + srcId)].value    = srcElms["MituPrice"].value;
	dstElms[("Remark" + srcId)].value   = srcElms["Remark"].value;

	dstElms[("ZaiQuantity" + srcId)].value = srcElms["ZaiQuantity"].value;
	dstElms[("ZaiUnit" + srcId)].value     = srcElms["ZaiUnit"].value;
	dstElms[("ZaiUPrice" + srcId)].value   = srcElms["ZaiUPrice"].value;
	dstElms[("ZaiPrice" + srcId)].value    = srcElms["ZaiPrice"].value;

	dstElms[("KakouQuantity" + srcId)].value = srcElms["KakouQuantity"].value;
	dstElms[("KakouUnit" + srcId)].value     = srcElms["KakouUnit"].value;
	dstElms[("KakouUPrice" + srcId)].value   = srcElms["KakouUPrice"].value;
	dstElms[("KakouPrice" + srcId)].value    = srcElms["KakouPrice"].value;

	dstElms[("SekouQuantity" + srcId)].value = srcElms["SekouQuantity"].value;
	dstElms[("SekouUnit" + srcId)].value     = srcElms["SekouUnit"].value;
	dstElms[("SekouUPrice" + srcId)].value   = srcElms["SekouUPrice"].value;
	dstElms[("SekouPrice" + srcId)].value    = srcElms["SekouPrice"].value;

	dstElms[("CostQuantity" + srcId)].value = srcElms["CostQuantity"].value;
	dstElms[("CostUnit" + srcId)].value     = srcElms["CostUnit"].value;
	dstElms[("CostUPrice" + srcId)].value   = srcElms["CostUPrice"].value;
	dstElms[("CostPrice" + srcId)].value    = srcElms["CostPrice"].value;

	// 発注先の表示に反映
	DoAdjustContractor(dstElms, srcId);

	gDetailChanged = false;
	DoDetailRecalcTotal();
}


// 関数名：DoSetLargeCategory
// 機　能：行明細ダイアログの大分類を指定する
// 引　数：pNewVal(大分類ID)
function DoSetLargeCategory(pNewVal) {
	var prevValue = $("#detail_LargeCateID").val();

	if (pNewVal != prevValue) {
		$("#detail_LargeCateID").val(pNewVal).change();
	} else {
		$("select#detail_TypeID").val(gTypeId);
	}
}


// 関数名：DoResetTypeOptions
// 機　能：行明細ダイアログの種類の選択肢をajaxでリロードする
// 引　数：pSelect(大分類の<select>)
function DoResetTypeOptions(pSelect) {
	var largeCatId = $(pSelect).val();
	var dstSelectId = pSelect.id == "detail_LargeCateID" ? "detail_TypeID" : "ref_TypeID";

	// 2番目以降のoptionを削除
	$("select#" + dstSelectId + " option:gt(0)").remove();
	gDetailChanged = true;

	// 大分類IDが0でなければajaxで選択肢を取得して再設定する
	if (largeCatId != 0) {
		var data = {type:"Type", cat_id:largeCatId};

		$.ajax({
			type: "post",
			url: gTopPath + "/ajax/ajax_get_options.php",
			data: data,
			dataType: "json",
			async: (gInitDetailModal ? false : true),
			cache: false,
			success: function(json_data) {
				if (json_data.result == "ok") {
					$("select#" + dstSelectId).append(json_data.options);

					if (gInitDetailModal) {
						$("select#" + dstSelectId).val(gTypeId);
					}

					DoInitValues(document.form_detail, "Quantity", document.form_detail.MituQuantity.value);
				} else if (json_data.error) {
					alert(json_data.error);
				}
			},
			error: function() {
				alert("サーバとの通信に失敗しました。種類の選択肢を設定できませんでした。");
			}
		});
	}
}

// 関数名：DoDetailRecalcAll
// 機　能：経費率変更による見積金額の再計算
// 引　数：なし
function DoDetailRecalcAll() {
	var iRowCnt     = $("table#tbl2 > tbody > tr").length;

	for (var i = 1; i <= iRowCnt; i++) {
		// 明細ごとの経費と粗利再計算
		DoDetailRecalc(i, 5);
	}

	gDetailChanged = false;
	DoDetailRecalcTotal();

	if (gComputingModal.dialog("isOpen")) {
		gComputingModal.dialog("close");
	}
}

// 関数名：DoDetailRecalcTotal
// 機　能：内訳合計計算　消費税を含む見積金額の計算
// 引　数：none
function DoDetailRecalcTotal() {

	var iRowCnt     = $("table#tbl2 > tbody > tr").length;
	var theForm     = document.form_main;
	var formElms    = theForm.elements;

	// 内訳合計--------------------------
	// 見積金額
	var intMituPrice = 0;
	var intDiscount  = 0; // 値引金額合計（自動計算分）
	// 原価金額
	var intTotalCost = 0;
	// 粗利金額（実行予算では明細の粗利を積み上げることはしない）
//	var intTotalProfit = 0;
	// 材料費
	var intMaterialCost = 0;
	// 加工費
	var intProcessCost = 0;
	// 外注施工費
	var intOutsourceCost = 0;
	// 社内施工費（工務課への割り当て）
	var intInhouseCost = 0;
	// 外注先未定施工費
	var intPendingCost = 0;
	// 追加経費
	var intMoreCost = 0;

/* ▼経費率の計算は一旦除害（見積りとは異なる）
	// 経費（原価×経費率）
	var intExpense = 0;
	// 経費率
	var fltExpRate = parseFloat(document.form_main.ExpRate.value) / 100;
*/

	var varName = "";
	var varValue = "";

	for (var i = 1; i <= iRowCnt; i++) {
		// 明細別原価（経費率適用前）
		var intCost = 0;

		// 見積金額
		varName  = "Price" + i;
		varValue = JS_Comma_Del(formElms[varName].value);

		if (DoCheckIfNumber(varValue)) {
			if (varValue != "") { // 非ゼロ
				if (parseFloat(varValue) >= 0) { // 見積に加算
					intMituPrice += parseInt(varValue);
				} else { // 負数は値引きとして加算
					intDiscount -= parseInt(varValue);
				}
			}

			formElms[varName].value = JS_Comma_Ins(varValue);
		}

		// 材料費
		varName  = "ZaiPrice" + i;
		varValue = JS_Comma_Del(formElms[varName].value);

		if (DoCheckIfNumber(varValue)) {
			if (varValue != "") { // 非ゼロ
				intMaterialCost += parseInt(varValue);
				intCost += parseInt(varValue);
			}
		}

		// 加工費
		varName  = "KakouPrice" + i;
		varValue = JS_Comma_Del(formElms[varName].value);

		if (DoCheckIfNumber(varValue)) {
			if (varValue != "") { // 非ゼロ
				intProcessCost += parseInt(varValue);
				intCost += parseInt(varValue);
			}
		}

		// 施工費（外注｜社内）
		varName  = "SekouPrice" + i;
		varValue = JS_Comma_Del(formElms[varName].value);

		if (DoCheckIfNumber(varValue)) {
			if (varValue != "") { // 非ゼロ
				if (formElms["SekouContract" + i].value != 0) { // 外注業者選択済
					if (formElms["SekouContract" + i].value == 1) { // 社内施工費（工務課）
						intInhouseCost += parseInt(varValue);
					} else { // 外注施工費
						intOutsourceCost += parseInt(varValue);
					}
				} else { // 外注先未割当
					intPendingCost += parseInt(varValue);
				}

				intCost += parseInt(varValue);
			}
		}

		// 追加経費
		varName  = "CostPrice" + i;
		varValue = JS_Comma_Del(formElms[varName].value);

		if (DoCheckIfNumber(varValue)) {
			if (varValue != 0) { // 非ゼロ
				intMoreCost += parseInt(varValue);
				intCost += parseInt(varValue);
			}
		}

		//経費率・原価率の計算はない（見積りとは異なる）

		intTotalCost += intCost; // 原価合計は各費目の合計とする
	} // for (var i = 1; i <= iRowCnt; i++)

	// 消費税率
	var fltTaxRate = 1.0 + parseFloat(theForm.TaxRate.value);
	// 税後値引は見積りから引き継いでいるが実行予算画面ではそれを含めた受注金額を手入力する

	// 見積金額(税抜)
	var intMituPriceNoTax = intMituPrice - intDiscount;

	// ヘッダ３項目（カンマ挿入は後ほど）
	// 1:見積合計(税抜) 
	// 実行予算ではネット金額や税後値引は契約金額に包含される
	theForm.MituPriceNoTax.value = intMituPriceNoTax;
	// 2:原価合計(税抜)
	// 現行版の実行予算では明細ごとの経費率で算出する経費は原価に含まない
	theForm.TotalCost.value = intTotalCost;
	// 3:粗利合計(税抜)
	// 実行予算では粗利＝契約金額－原価合計（明細の粗利の積算ではない）
	varValue = JS_Comma_Del(theForm.OrderPrice.value);

	if (DoCheckIfNumber(varValue)) {
		varValue = parseInt(varValue);
	} else {
		varValue = 0;
	}

	theForm.TotalProfit.value = varValue - intTotalCost;

	// 見積合計(税込) ※hidden
	theForm.MituPrice.value = JS_Rounding((fltTaxRate * intMituPriceNoTax), 0, gRoundOption);

	// 原価内訳（すべて税抜）
	// 材料費
	theForm.MaterialCost.value = intMaterialCost;
	// 加工費
	theForm.ProcessCost.value = intProcessCost;
	// 外注施工費
	theForm.OutsourceCost.value = intOutsourceCost;
	// 社内施工費
	theForm.InhouseCost.value = intInhouseCost;
	// 施工費計（外注＋社内＋未指定）
	theForm.ConstructCost.value = intOutsourceCost + intInhouseCost + intPendingCost;
	// 追加経費
	theForm.ExpCost.value = intMoreCost;

    // カンマ挿入
	DoAppendComma(theForm.MituPriceNoTax);
//	DoAppendComma(theForm.MituPrice); hidden項目はカンマ禁止
	DoAppendComma(theForm.TotalCost);
	DoAppendComma(theForm.TotalProfit);
	DoAppendComma(theForm.MaterialCost);
	DoAppendComma(theForm.ProcessCost);
	DoAppendComma(theForm.ConstructCost);
	DoAppendComma(theForm.ExpCost);

}

// 関数名：DoRecalcByRowQuantity
// 機　能：数量が変化した時の内訳計算（実行予算明細テーブル用）
// 引　数：pObj(値が変更されたinputオブジェクト)
function DoRecalcByRowQuantity(pObj) {
	var theForm = document.form_main;
	var myVal = pObj.value;
	var objQuantity = $("input[name^='Quantity']", $(pObj).closest("tr")).get(0);
	var rowId = objQuantity.name.replace("Quantity", "");
	var motherVal = DoTxtToFloat(objQuantity.value); // 見積数量

	if (DoCheckIfNumber(motherVal) && motherVal != 0) {
		myVal = DoTxtToFloat(myVal);

		if (DoCheckIfNumber(myVal)) {
			// 係数・掛率・ロス率は持っていないのでここで終わり
		} else { // 自分の値が数値でなければ何もできない
			pObj.value = "0.00";
		}
	} else { // 見積数量が数値でなければ何もできない
		pObj.value = "0.00";
	}

	DoDetailRecalc(rowId, 1);
}


// 関数名：DoDetailRecalc
// 機　能：内訳計算（実行予算明細画面用）
// 引　数：pVal(行番号) pMode(bit0(1):金額再計算 bit1(2):見積数量変更 bit2(4):合計値を再計算しない)
function DoDetailRecalc(pVal, pMode) {

	var formElms = document.form_main.elements;
	var noErr = true;
	var arrData = {
		Quantity: "",
		Unit: "",
		UPrice: "",
		Price: "",
		ZaiQuantity: "",
		ZaiUnit: "",
		ZaiUPrice: "",
		ZaiPrice: "",
		KakouQuantity: "",
		KakouUnit: "",
		KakouUPrice: "",
		KakouPrice: "",
		SekouQuantity: "",
		SekouUnit: "",
		SekouUPrice: "",
		SekouPrice: "",
		CostQuantity: "",
		CostUnit: "",
		CostUPrice: "",
		CostPrice: ""
	};

	// ▼数量変更
	if ((pMode & 3) == 2) {
		// 見積数量
		arrData.Quantity = JS_Comma_Del(formElms[("Quantity" + pVal)].value);
		// 各費目とも数量は手入力（係数やロス率の計算はない）
		arrData.ZaiQuantity   = JS_Comma_Del(formElms[("ZaiQuantity" + pVal)].value);
		arrData.KakouQuantity = JS_Comma_Del(formElms[("KakouQuantity" + pVal)].value);
		arrData.SekouQuantity = JS_Comma_Del(formElms[("SekouQuantity" + pVal)].value);
		arrData.CostQuantity  = JS_Comma_Del(formElms[("CostQuantity" + pVal)].value);
		// 数量変更
		noErr = DoDetailRecalc_Sub((pMode & 3), arrData);

		// 見積数量変更→材料費・加工費・施工費・追加経費の数量変更→金額再計算

		//---見積---
		if (noErr) {
			formElms[("Quantity" + pVal)].value = JS_Comma_Ins(arrData.Quantity.toFixed(2));
		} else {
			return false;
		}

		//---材料費---
		if (DoCheckIfNumber(arrData.ZaiQuantity)) {
			formElms[("ZaiQuantity" + pVal)].value = JS_Comma_Ins(arrData.ZaiQuantity.toFixed(2));
		} else {
			formElms[("ZaiQuantity" + pVal)].value = "";
		}

		//---加工費---
		if (DoCheckIfNumber(arrData.KakouQuantity)) {
			formElms[("KakouQuantity" + pVal)].value = JS_Comma_Ins(arrData.KakouQuantity.toFixed(2));
		} else {
			formElms[("KakouQuantity" + pVal)].value = "";
		}

		//---施工費---
		if (DoCheckIfNumber(arrData.SekouQuantity)) {
			formElms[("SekouQuantity" + pVal)].value = JS_Comma_Ins(arrData.SekouQuantity.toFixed(2));
		} else {
			formElms[("SekouQuantity" + pVal)].value = "";
		}

		//---追加経費---
		if (DoCheckIfNumber(arrData.CostQuantity)) {
			formElms[("CostQuantity" + pVal)].value = JS_Comma_Ins(arrData.CostQuantity.toFixed(2));
		} else {
			formElms[("CostQuantity" + pVal)].value = "";
		}

		// 数量が変化したので金額再計算
		pMode = (pMode & 4) | 1;
	}
	// ▲数量変更((pMode & 3) == 2)

	// ▼金額再計算
	if ((pMode & 3) == 1) {
		// 見積金額 = 見積数量×見積単価（見積の掛率は常に1.00なので省略）
		if (arrData.Quantity === "") {
			arrData.Quantity = JS_Comma_Del(formElms[("Quantity" + pVal)].value);
		}
		arrData.UPrice   = JS_Comma_Del(formElms[("UPrice" + pVal)].value);

		// 材料費金額 = 材料費数量×材料費単価（掛率の計算はない）
		if (arrData.ZaiQuantity === "") {
			arrData.ZaiQuantity = JS_Comma_Del(formElms[("ZaiQuantity" + pVal)].value);
		}
		arrData.ZaiUPrice = JS_Comma_Del(formElms[("ZaiUPrice" + pVal)].value);

		// 加工費金額 = 加工費数量×加工費単価（掛率の計算はない）
		if (arrData.KakouQuantity === "") {
			arrData.KakouQuantity = JS_Comma_Del(formElms[("KakouQuantity" + pVal)].value);
		}
		arrData.KakouUPrice = JS_Comma_Del(formElms[("KakouUPrice" + pVal)].value);

		// 施工費金額 = 施工費数量×施工費単価（掛率の計算はない）
		if (arrData.SekouQuantity === "") {
			arrData.SekouQuantity = JS_Comma_Del(formElms[("SekouQuantity" + pVal)].value);
		}
		arrData.SekouUPrice = JS_Comma_Del(formElms[("SekouUPrice" + pVal)].value);

		// 追加経費金額 = 追加経費数量×追加経費単価（掛率の計算はない）
		if (arrData.CostQuantity === "") {
			arrData.CostQuantity = JS_Comma_Del(formElms[("CostQuantity" + pVal)].value);
		}
		arrData.CostUPrice = JS_Comma_Del(formElms[("CostUPrice" + pVal)].value);


		// 金額再計算
		noErr = DoDetailRecalc_Sub((pMode & 3), arrData);

		if (DoCheckIfNonZeroNumber(arrData.Price)) {
			formElms[("Price" + pVal)].value = JS_Comma_Ins(parseInt(arrData.Price));
		} else {
			formElms[("Price" + pVal)].value = "";
		}

		if (DoCheckIfNumber(arrData.ZaiQuantity) && DoCheckIfNonZeroNumber(arrData.ZaiPrice)) {
			formElms[("ZaiPrice" + pVal)].value = JS_Comma_Ins(parseInt(arrData.ZaiPrice));
		} else {
			formElms[("ZaiPrice" + pVal)].value = "";
		}

		if (DoCheckIfNumber(arrData.KakouQuantity) && DoCheckIfNonZeroNumber(arrData.KakouPrice)) {
			formElms[("KakouPrice" + pVal)].value = JS_Comma_Ins(parseInt(arrData.KakouPrice));
		} else {
			formElms[("KakouPrice" + pVal)].value = "";
		}

		if (DoCheckIfNumber(arrData.SekouQuantity) && DoCheckIfNonZeroNumber(arrData.SekouPrice)) {
			formElms[("SekouPrice" + pVal)].value = JS_Comma_Ins(parseInt(arrData.SekouPrice));
		} else {
			formElms[("SekouPrice" + pVal)].value = "";
		}

		if (DoCheckIfNumber(arrData.CostQuantity) && DoCheckIfNonZeroNumber(arrData.CostPrice)) {
			formElms[("CostPrice" + pVal)].value = JS_Comma_Ins(parseInt(arrData.CostPrice));
		} else {
			formElms[("CostPrice" + pVal)].value = "";
		}

		// 原価・粗利・粗利率はなし

		// 発注先の表示に反映
		DoAdjustContractor(formElms, pVal);
	}
	// ▲金額再計算((pMode & 3) == 1)

	// 別関数　内訳合計計算　消費税を含む見積金額の計算
	if ((pMode & 4) == 0) {
		DoDetailRecalcTotal();
	}
}


// 関数名：DoDetailCalc
// 機　能：内訳計算（行明細ダイアログ用）
// 引　数：pMode(1:金額再計算 2:見積数量変更)
function DoDetailCalc(pMode) {
	gDetailChanged = true;

	var formElms = document.form_detail.elements;
	var noErr = true;
	var arrData = {
		Quantity: "",
		Unit: "",
		UPrice: "",
		Price: "",
		ZaiQuantity: "",
		ZaiUnit: "",
		ZaiUPrice: "",
		ZaiPrice: "",
		KakouQuantity: "",
		KakouUnit: "",
		KakouUPrice: "",
		KakouPrice: "",
		SekouQuantity: "",
		SekouUnit: "",
		SekouUPrice: "",
		SekouPrice: "",
		CostQuantity: "",
		CostUnit: "",
		CostUPrice: "",
		CostPrice: ""
	};

	// ▼数量変更
	if (pMode == 2) {
		// 見積数量
		arrData.Quantity = DoTxtToFloat(formElms["Quantity"].value);
		// 材料費数量は見積数量とは連動しない（実行予算では係数やロス率は考慮しない）
		arrData.ZaiQuantity = DoTxtToFloat(formElms["ZaiQuantity"].value);
		// 加工費数量は見積数量とは連動しない（実行予算では係数やロス率は考慮しない）
		arrData.KakouQuantity = DoTxtToFloat(formElms["KakouQuantity"].value);
		// 施工費数量は見積数量とは連動しない（実行予算では係数やロス率は考慮しない）
		arrData.SekouQuantity = DoTxtToFloat(formElms["SekouQuantity"].value);
		// 追加経費数量は見積数量とは連動しない（実行予算では係数やロス率は考慮しない）
		arrData.CostQuantity = DoTxtToFloat(formElms["CostQuantity"].value);

		// 数量変更サブ
		noErr = DoDetailRecalc_Sub(pMode, arrData);

		// 見積数量変更→材料費・加工費・施工費・追加経費の数量変更→金額再計算

		//---見積---
		if (noErr) {
			formElms["Quantity"].value = JS_Comma_Ins(arrData.Quantity.toFixed(2));
			formElms["MituQuantity"].value = formElms["Quantity"].value;

			//---材料費---
			if (DoCheckIfNonZeroNumber(arrData.ZaiQuantity)) {
				formElms["ZaiQuantity"].value = JS_Comma_Ins(arrData.ZaiQuantity.toFixed(2));
			} else {
				formElms["ZaiQuantity"].value = "";
			}

			//---加工費---
			if (DoCheckIfNonZeroNumber(arrData.KakouQuantity)) {
				formElms["KakouQuantity"].value = JS_Comma_Ins(arrData.KakouQuantity.toFixed(2));
			} else {
				formElms["KakouQuantity"].value = "";
			}

			//---施工費---
			if (DoCheckIfNonZeroNumber(arrData.SekouQuantity)) {
				formElms["SekouQuantity"].value = JS_Comma_Ins(arrData.SekouQuantity.toFixed(2));
			} else {
				formElms["SekouQuantity"].value = "";
			}

			//---追加経費---
			if (DoCheckIfNonZeroNumber(arrData.CostQuantity)) {
				formElms["CostQuantity"].value = JS_Comma_Ins(arrData.CostQuantity.toFixed(2));
			} else {
				formElms["CostQuantity"].value = "";
			}
		} else {
			formElms["Quantity"].value = "";
			formElms["MituQuantity"].value = "";
			formElms["ZaiQuantity"].value = "";
			formElms["KakouQuantity"].value = "";
			formElms["SekouQuantity"].value = "";
			formElms["CostQuantity"].value = "";
		}

		// 数量が変化したので金額再計算
		pMode = 1;
	}
	// ▲数量変更

	// ▼金額再計算
	if (pMode == 1) {
		// 見積金額 = 見積数量×見積単価（見積の掛率は常に1.00なので省略）
		if (arrData.Quantity === "") {
			arrData.Quantity = DoTxtToFloat(formElms["Quantity"].value);
		}
		arrData.UPrice = DoTxtToInt(formElms["UPrice"].value);

		// 材料費金額 = 材料費数量×材料費単価（掛率の計算はない）
		if (arrData.ZaiQuantity === "") {
			arrData.ZaiQuantity = DoTxtToFloat(formElms["ZaiQuantity"].value);
		}
		arrData.ZaiUPrice = DoTxtToInt(formElms["ZaiUPrice"].value);

		// 加工費金額 = 加工費数量×加工費単価（掛率の計算はない）
		if (arrData.KakouQuantity === "") {
			arrData.KakouQuantity = DoTxtToFloat(formElms["KakouQuantity"].value);
		}
		arrData.KakouUPrice = DoTxtToInt(formElms["KakouUPrice"].value);

		// 施工費金額 = 施工費数量×施工費単価（掛率の計算はない）
		if (arrData.SekouQuantity === "") {
			arrData.SekouQuantity = DoTxtToFloat(formElms["SekouQuantity"].value);
		}
		arrData.SekouUPrice = DoTxtToInt(formElms["SekouUPrice"].value);

		// 追加経費金額 = 追加経費数量×追加経費単価（掛率の計算はない）
		if (arrData.CostQuantity === "") {
			arrData.CostQuantity = DoTxtToFloat(formElms["CostQuantity"].value);
		}
		arrData.CostUPrice = DoTxtToInt(formElms["CostUPrice"].value);


		// 金額再計算サブ
		noErr = DoDetailRecalc_Sub(pMode, arrData);

		if (DoCheckIfNumber(arrData.Price)) {
			formElms["MituPrice"].value = JS_Comma_Ins(parseInt(arrData.Price));
		} else {
			formElms["MituPrice"].value = "";
		}

		if (DoCheckIfNonZeroNumber(arrData.ZaiPrice)) {
			formElms["ZaiPrice"].value = JS_Comma_Ins(parseInt(arrData.ZaiPrice));
		} else {
			formElms["ZaiPrice"].value = "";
		}

		if (DoCheckIfNonZeroNumber(arrData.KakouPrice)) {
			formElms["KakouPrice"].value = JS_Comma_Ins(parseInt(arrData.KakouPrice));
		} else {
			formElms["KakouPrice"].value = "";
		}

		if (DoCheckIfNonZeroNumber(arrData.SekouPrice)) {
			formElms["SekouPrice"].value = JS_Comma_Ins(parseInt(arrData.SekouPrice));
		} else {
			formElms["SekouPrice"].value = "";
		}

		if (DoCheckIfNonZeroNumber(arrData.CostPrice)) {
			formElms["CostPrice"].value = JS_Comma_Ins(parseInt(arrData.CostPrice));
		} else {
			formElms["CostPrice"].value = "";
		}

		// 原価・粗利・粗利率の計算はない
	}
	// ▲金額再計算(pMode == 1)
}


// 関数名：DoDetailRecalc_Sub
// 機　能：内訳計算（共通部分）
// 引　数：pMode(1:金額再計算 2:見積数量変更), pData(明細データ) 
function DoDetailRecalc_Sub(pMode, pData) {
	var noErr = true;

	// ▼数量変更
	if (pMode == 2) {
		// 見積数量変更→材料費・加工費・施工費の数量は連動しない（実行予算では係数やロス率は考慮しない）

		// 見積数量
		if (DoCheckIfNumber(pData.Quantity)) {
			pData.Quantity = parseFloat(pData.Quantity);
		} else {
			return false;
		}

		// 材料費数量 = 手入力（実行予算では見積数量との連動はない）
		if (DoCheckIfNumber(pData.ZaiQuantity)) {
			pData.ZaiQuantity = parseFloat(pData.ZaiQuantity);
		} else {
			pData.ZaiQuantity = "";
		}

		// 加工費数量 = 手入力（実行予算では見積数量との連動はない）
		if (DoCheckIfNumber(pData.KakouQuantity)) {
			pData.KakouQuantity = parseFloat(pData.KakouQuantity);
		} else {
			pData.KakouQuantity = "";
		}

		// 施工費数量 = 手入力（実行予算では見積数量との連動はない）
		if (DoCheckIfNumber(pData.Quantity)) {
			pData.SekouQuantity = parseFloat(pData.SekouQuantity);
		} else {
			pData.SekouQuantity = "";
		}

		// 追加経費数量 = 手入力（実行予算では見積数量との連動はない）
		if (DoCheckIfNumber(pData.Quantity)) {
			pData.CostQuantity = parseFloat(pData.CostQuantity);
		} else {
			pData.CostQuantity = "";
		}

		return noErr;
	}
	// ▲数量変更

	// ▼金額再計算（価格系は最終的に整数値になるが計算は小数点以下2桁までみる）
	if (pMode == 1) {
		var fltRate = 1.0;

		// 見積金額 = 見積数量×見積単価（掛率の計算はない）
		if (DoCheckIfNumber(pData.Quantity) && DoCheckIfNumber(pData.UPrice)) {
			pData.Quantity = parseFloat(pData.Quantity);
			pData.Price    = JS_Rounding(pData.Quantity * parseInt(pData.UPrice), 0, gRoundOption);
		} else {
			noErr = false;
		}

		// 材料費金額 = 材料費数量×材料費単価（掛率の計算はない）
		if (DoCheckIfNumber(pData.ZaiQuantity) && DoCheckIfNumber(pData.ZaiUPrice)) {
			pData.ZaiQuantity = parseFloat(pData.ZaiQuantity);
			pData.ZaiPrice    = JS_Rounding(pData.ZaiQuantity * fltRate * parseInt(pData.ZaiUPrice), 0, gRoundOption);
		} else {
			pData.ZaiPrice = 0;
			//noErr = false;
		}

		// 加工費金額 = 加工費数量×加工費単価（掛率の計算はない）
		if (DoCheckIfNumber(pData.KakouQuantity) && DoCheckIfNumber(pData.KakouUPrice)) {
			pData.KakouQuantity = parseFloat(pData.KakouQuantity);
			pData.KakouPrice    = JS_Rounding(pData.KakouQuantity * fltRate * parseInt(pData.KakouUPrice), 0, gRoundOption);
		} else {
			pData.KakouPrice = 0;
			//noErr = false;
		}

		// 施工費金額 = 施工費数量×施工費単価（掛率の計算はない）
		if (DoCheckIfNumber(pData.SekouQuantity) && DoCheckIfNumber(pData.SekouUPrice)) {
			pData.SekouQuantity = parseFloat(pData.SekouQuantity);
			pData.SekouPrice    = JS_Rounding(pData.SekouQuantity * fltRate * parseInt(pData.SekouUPrice), 0, gRoundOption);
		} else {
			pData.SekouPrice = 0;
			//noErr = false;
		}

		// 追加経費金額 = 追加経費数量×追加経費単価（掛率の計算はない）
		if (DoCheckIfNumber(pData.CostQuantity) && DoCheckIfNumber(pData.CostUPrice)) {
			pData.CostQuantity = parseFloat(pData.CostQuantity);
			pData.CostPrice    = JS_Rounding(pData.CostQuantity * fltRate * parseInt(pData.CostUPrice), 0, gRoundOption);
		} else {
			pData.CostPrice = 0;
			//noErr = false;
		}

		// 原価・粗利・粗利率の計算はない

		return noErr;
	}
	// ▲金額再計算(pMode == 1)

	return false;
}

// 関数名：DoSyncValue
// 機　能：行明細ダイアログ内のヘッダーとリストを同期　※数量,単位,単価
// 引　数：pObj(値が変更されたinputオブジェクト) 
function DoSyncValue(pObj) {
	var theForm = document.form_detail;

	switch (pObj.name) {
		case "Quantity":
			theForm.MituQuantity.value = DoFloatToTxt(theForm.Quantity.value);

			// 材料未選択の場合
			if (theForm.ZaiName.value == "") {
				// 材料費・加工費・施工費・追加経費の係数・ロス率・数量・単位・掛率に初期値を入れる
				DoInitValues(theForm, "Quantity", theForm.MituQuantity.value);
			}
			break;
		case "Unit":
			theForm.MituUnit.value = theForm.Unit.value;

			// 材料未選択の場合
			if (theForm.ZaiName.value == "") {
				// 材料費・加工費・施工費・追加経費の単位にもコピーする
				DoInitValues(theForm, "Unit", theForm.MituUnit.value);
			}
			break;
		case "UPrice":
			theForm.MituUPrice.value = DoIntToTxt(theForm.UPrice.value);
			break;
		case "MituQuantity":
			theForm.Quantity.value = DoFloatToTxt(theForm.MituQuantity.value);
			break;
		case "MituUnit":
			theForm.Unit.value = theForm.MituUnit.value;
			break;
		case "MituUPrice":
			theForm.UPrice.value = DoIntToTxt(theForm.MituUPrice.value);
			break;
		case "ZaiQuantity": // 材料費係数 = 係数の計算はない
		case "KakouQuantity": // 加工費係数 = 係数の計算はない
		case "SekouQuantity": // 施工費係数 = 係数の計算はない
		case "CostQuantity": // 追加経費係数 = 係数の計算はない
			break;
	}
}

// 関数名：DoInitValues
// 機　能：行明細ダイアログ内の材料費・加工費・施工費・追加経費の係数・ロス率・数量・単位・掛率を初期化する
// 引　数：pForm(formオブジェクト), pKey(input名) , pValue(値) 
function DoInitValues(pForm, pKey, pValue) {
	if (pKey == "Quantity") {
		// 係数・ロス率・掛率は存在しない
		if (pForm.ZaiUnit.value.length == 0) {
			// 材料費
			pForm.ZaiQuantity.value = pValue;
			pForm.ZaiUnit.value = pForm.Unit.value;

			// 加工費
			pForm.KakouQuantity.value = pValue;
			pForm.KakouUnit.value = pForm.Unit.value;

			// 施工費
			pForm.SekouQuantity.value = pValue;
			pForm.SekouUnit.value = pForm.Unit.value;
		}

			// 追加経費
		if (pForm.CostUnit.value.length == 0) {
			pForm.CostQuantity.value = pValue;
			pForm.CostUnit.value = pForm.Unit.value;
		}
	} else if (pKey == "Unit") {
		if (pForm.ZaiUnit.value.length == 0) {
			pForm.ZaiUnit.value   = pValue;
			pForm.KakouUnit.value = pValue;
			pForm.SekouUnit.value = pValue;
			pForm.CostUnit.value  = pValue;
		}
	}
}

// 関数名：DoAdjustContractor
// 機　能：外注業者のリンクの表示を制御する
// 引　数：pFormElms(フォーム要素) pPos(行番号)
function DoAdjustContractor(pFormElms, pPos) {
	var dstRow = $(pFormElms[("ZaiPrice" + pPos)]).closest("tr");

	if (pFormElms[("ZaiPrice" + pPos)].value == "") {
		$("a.material", dstRow).addClass("hide");

		if (pFormElms[("ZaiContract" + pPos)].value != "") {
			pFormElms[("ZaiContract" + pPos)].value = "0";
			$("a.material", dstRow).text("業者選択");
		}
	} else {
		$("a.material", dstRow).removeClass("hide");
	}

	if (pFormElms[("KakouPrice" + pPos)].value == "") {
		$("a.process", dstRow).addClass("hide");

		if (pFormElms[("KakouContract" + pPos)].value != "") {
			pFormElms[("KakouContract" + pPos)].value = "0";
			$("a.process", dstRow).text("業者選択");
		}
	} else {
		$("a.process", dstRow).removeClass("hide");
	}

	if (pFormElms[("SekouPrice" + pPos)].value == "") {
		$("a.construct", dstRow).addClass("hide");

		if (pFormElms[("SekouContract" + pPos)].value != "") {
			pFormElms[("SekouContract" + pPos)].value = "0";
			$("a.construct", dstRow).text("業者選択");
		}
	} else {
		$("a.construct", dstRow).removeClass("hide");
	}

	if (pFormElms[("CostPrice" + pPos)].value == "") {
		$("a.cost", dstRow).addClass("hide");

		if (pFormElms[("CostContract" + pPos)].value != "") {
			pFormElms[("CostContract" + pPos)].value = "0";
			$("a.cost", dstRow).text("業者選択");
		}
	} else {
		$("a.cost", dstRow).removeClass("hide");
	}
}

// 関数名：DoDetailRowInsert
// 機　能：明細行挿入
// 引　数：insRowNo(挿入する行番号)
function DoDetailRowInsert(insRowNo) {
	var $detailRows = $("table#tbl2 > tbody > tr");
	var $src_row, $dst_row, $srcRowElms, $dstRowElms;

	if (insRowNo > $detailRows.length) {
		alert("挿入する行の指定が不正です。");
		return;
	}

	for (var i = $detailRows.length; i > insRowNo; i--) { // データを移動する
		$src_row = $detailRows.get(i - 2);
		$dst_row = $detailRows.get(i - 1);
		$srcRowElms = $("input[type=hidden],input[type=text]", $src_row);
		$dstRowElms = $("input[type=hidden],input[type=text]", $dst_row);

		$srcRowElms.each(function(index){
			$($dstRowElms.get(index)).val($(this).val());
		});

		// 業者選択ラベル
		$("a.material", $dst_row).text($("a.material", $src_row).text());
		$("a.process", $dst_row).text($("a.process", $src_row).text());
		$("a.construct", $dst_row).text($("a.construct", $src_row).text());
		$("a.cost", $dst_row).text($("a.cost", $src_row).text());

		if ($("a.material", $src_row).hasClass("hide")) {
			$("a.material", $dst_row).addClass("hide");
		} else {
			$("a.material", $dst_row).removeClass("hide");
		}

		if ($("a.process", $src_row).hasClass("hide")) {
			$("a.process", $dst_row).addClass("hide");
		} else {
			$("a.process", $dst_row).removeClass("hide");
		}

		if ($("a.construct", $src_row).hasClass("hide")) {
			$("a.construct", $dst_row).addClass("hide");
		} else {
			$("a.construct", $dst_row).removeClass("hide");
		}

		if ($("a.cost", $src_row).hasClass("hide")) {
			$("a.cost", $dst_row).addClass("hide");
		} else {
			$("a.cost", $dst_row).removeClass("hide");
		}
	}

	// 最終行は行データを消すだけ
	$dst_row = $detailRows.get(insRowNo - 1);
	$("input[type=hidden],input[type=text]", $dst_row).each(function(){
		$(this).val("");
	});
	// 業者選択ラベル
	$("a", $dst_row).each(function(){
		$(this).text("業者選択").addClass("hide");
	});
}

// 関数名：DoDetailRowDelete
// 機　能：明細行削除
// 引　数：delRowNo(削除する行番号)
function DoDetailRowDelete(delRowNo) {
	var $detailRows = $("table#tbl2 > tbody > tr");
	var $src_row, $dst_row, $srcRowElms, $dstRowElms;

	if (delRowNo > $detailRows.length) {
		alert("削除する行の指定が不正です。");
		return;
	}

	while (delRowNo < $detailRows.length) { // データを移動する
		$src_row = $detailRows.get(delRowNo);
		$dst_row = $detailRows.get(delRowNo - 1);
		$srcRowElms = $("input[type=hidden],input[type=text]", $src_row);
		$dstRowElms = $("input[type=hidden],input[type=text]", $dst_row);

		$srcRowElms.each(function(index){
			$($dstRowElms.get(index)).val($(this).val());
		});

		// 業者選択ラベル
		$("a.material", $dst_row).text($("a.material", $src_row).text());
		$("a.process", $dst_row).text($("a.process", $src_row).text());
		$("a.construct", $dst_row).text($("a.construct", $src_row).text());
		$("a.cost", $dst_row).text($("a.cost", $src_row).text());

		if ($("a.material", $src_row).hasClass("hide")) {
			$("a.material", $dst_row).addClass("hide");
		} else {
			$("a.material", $dst_row).removeClass("hide");
		}

		if ($("a.process", $src_row).hasClass("hide")) {
			$("a.process", $dst_row).addClass("hide");
		} else {
			$("a.process", $dst_row).removeClass("hide");
		}

		if ($("a.construct", $src_row).hasClass("hide")) {
			$("a.construct", $dst_row).addClass("hide");
		} else {
			$("a.construct", $dst_row).removeClass("hide");
		}

		if ($("a.cost", $src_row).hasClass("hide")) {
			$("a.cost", $dst_row).addClass("hide");
		} else {
			$("a.cost", $dst_row).removeClass("hide");
		}

		delRowNo++;
	}

	// 最終行は行データを消すだけ
	$dst_row = $detailRows.get($detailRows.length - 1);
	$("input[type=hidden],input[type=text]", $dst_row).each(function(){
		$(this).val("");
	});
	// 業者選択ラベル
	$("a", $dst_row).each(function(){
		$(this).text("業者選択").addClass("hide");
	});
}

// 関数名：DoExpenseRateChanged
// 機　能：見積固有経費率変更時の処理（DOMオブジェクト版）
// 説　明：半角数値以外の文字を削除した後、空文字だったらデフォルトの経費率をセットする
// 引　数：DOM<input>オブジェクト
// ※経費率の計算は一旦除害
function DoExpenseRateChanged(obj) {
	if (obj.value.length > 0) {
		if (isNaN(obj.value)) {
			alert("経費率に半角数字以外の値が入っています。デフォルトの経費率で再計算します。");
			obj.value = "";
		}
	} else {
		alert("経費率が入力されていません。デフォルトの経費率で再計算します。");
	}

	if (obj.value.length < 1) {
		obj.value = document.OptionValues.Op4.value != "" ? document.OptionValues.Op4.value : "0";
	}

	gComputingModal.dialog("open");
}

// 関数名：DoAppendComma
// 機　能：テキストブラー時カンマ挿入（DOMオブジェクト版）
// 引　数：DOM<input>オブジェクト
function DoAppendComma(obj) {
	if (obj.value.match(/^[+-]?[\d,.]+$/)) {
		obj.value = JS_Comma_Ins(obj.value);
	} else {
		obj.value = "";
	}
}

// 関数名：DoRemoveComma
// 機　能：inputからカンマを除去する（DOMオブジェクト版）
// 引　数：DOM<input>オブジェクト
function DoRemoveComma(obj) {
	obj.value = JS_Comma_Del(obj.value);
}

// 関数名：DoOnlyNumbers
// 機　能：テキストブラー時文字列削除（DOMオブジェクト版）
// 説　明：数値のみテキストの文字削除
// 引　数：DOM<input>オブジェクト
function DoOnlyNumbers(obj) {
	if (obj && obj.value.length > 0){
		if (isNaN(obj.value)) {
			obj.value = "";
		}
	}
}

// 関数名：DoCheckIfNumber
// 機　能：渡された値が数値か判断する
// 説　明：空文字なら数値とは見なされない
// 引　数：判断する値
function DoCheckIfNumber(val) {
	if (val === "" || isNaN(val)) {
		return false;
	}

	return true;
}

// 関数名：DoCheckIfNonZeroNumber
// 機　能：渡された値が数値か判断する
// 説　明：空文字なら数値とは見なされない
// 引　数：判断する値
function DoCheckIfNonZeroNumber(val) {
	if (val === "" || isNaN(val) || val == 0) {
		return false;
	}

	return true;
}

// 関数名：DoTxtToInt
// 機　能：カンマ区切り数字を整数型に変換
function DoTxtToInt(pVal) {
	pVal = JS_Comma_Del(pVal);

	if (DoCheckIfNumber(pVal)) {
		pVal = parseInt(pVal);
	}

	return pVal;
}

// 関数名：DoIntToTxt
// 機　能：整数をカンマ区切り数字に変換
function DoIntToTxt(pVal) {
	if (DoCheckIfNumber(pVal)) {
		pVal = JS_Comma_Ins(parseInt(pVal));
	}

	return pVal;
}

// 関数名：DoTxtToFloat
// 機　能：カンマ区切り数字を浮動小数型に変換
function DoTxtToFloat(pVal) {
	pVal = JS_Comma_Del(pVal);

	if (DoCheckIfNumber(pVal)) {
		pVal = parseFloat(pVal);
	}

	return pVal;
}

// 関数名：DoFloatToTxt
// 機　能：整数をカンマ区切り数字に変換
function DoFloatToTxt(pVal, pDecimal = 2) {
	if (DoCheckIfNumber(pVal)) {
		pVal = JS_Comma_Ins(parseFloat(pVal).toFixed(pDecimal));
	} else {
		pVal = "";
	}

	return pVal;
}

// 関数名：DoCopyLine
// 機　能：明細行を１行コピーする
// 引　数：from:コピー元, to:コピー先, srcForm:コピー元のformオブジェクト
function DoCopyLine(from, to, srcForm) {
	var dstForm = document.form_main;

	if (srcForm["LargeCateID" + from] && dstForm["LargeCateID" + to]) {
		dstForm["LargeCateID" + to].value = srcForm["LargeCateID" + from].value;
		dstForm["TypeID" + to].value = srcForm["TypeID" + from].value;
		dstForm["Heading" + to].value = srcForm["Heading" + from].value;
		dstForm["ZaiName" + to].value = srcForm["ZaiName" + from].value;
		dstForm["Material" + to].value = srcForm["Material" + from].value;
		dstForm["Size" + to].value = srcForm["Size" + from].value;
		dstForm["Quantity" + to].value = srcForm["Quantity" + from].value;
		dstForm["Unit" + to].value = srcForm["Unit" + from].value;
		dstForm["UPrice" + to].value = srcForm["UPrice" + from].value;
		dstForm["Price" + to].value = srcForm["Price" + from].value;
		dstForm["Remark" + to].value = srcForm["Remark" + from].value;
		dstForm["ZaiQuantity" + to].value = srcForm["ZaiQuantity" + from].value;
		dstForm["ZaiUnit" + to].value = srcForm["ZaiUnit" + from].value;
		dstForm["ZaiUPrice" + to].value = srcForm["ZaiUPrice" + from].value;
		dstForm["ZaiPrice" + to].value = srcForm["ZaiPrice" + from].value;
		dstForm["KakouQuantity" + to].value = srcForm["KakouQuantity" + from].value;
		dstForm["KakouUnit" + to].value = srcForm["KakouUnit" + from].value;
		dstForm["KakouUPrice" + to].value = srcForm["KakouUPrice" + from].value;
		dstForm["KakouPrice" + to].value = srcForm["KakouPrice" + from].value;
		dstForm["SekouQuantity" + to].value = srcForm["SekouQuantity" + from].value;
		dstForm["SekouUnit" + to].value = srcForm["SekouUnit" + from].value;
		dstForm["SekouUPrice" + to].value = srcForm["SekouUPrice" + from].value;
		dstForm["SekouPrice" + to].value = srcForm["SekouPrice" + from].value;
		dstForm["CostQuantity" + to].value = srcForm["CostQuantity" + from].value;
		dstForm["CostUnit" + to].value = srcForm["CostUnit" + from].value;
		dstForm["CostUPrice" + to].value = srcForm["CostUPrice" + from].value;
		dstForm["CostPrice" + to].value = srcForm["CostPrice" + from].value;

		// 発注先業者ID
		dstForm["ZaiContract" + to].value   = srcForm["ZaiContract" + from].value;
		dstForm["KakouContract" + to].value = srcForm["KakouContract" + from].value;
		dstForm["SekouContract" + to].value = srcForm["SekouContract" + from].value;
		dstForm["CostContract" + to].value  = srcForm["CostContract" + from].value;
		// 業者選択ラベル
		var $src_row = $(srcForm["LargeCateID" + from]).closest("tr");
		var $dst_row = $(dstForm["LargeCateID" + to]).closest("tr");
		$("a.material", $dst_row).text($("a.material", $src_row).text());
		$("a.process", $dst_row).text($("a.process", $src_row).text());
		$("a.construct", $dst_row).text($("a.construct", $src_row).text());
		$("a.cost", $dst_row).text($("a.cost", $src_row).text());

		if ($("a.material", $src_row).hasClass("hide")) {
			$("a.material", $dst_row).addClass("hide");
		} else {
			$("a.material", $dst_row).removeClass("hide");
		}

		if ($("a.process", $src_row).hasClass("hide")) {
			$("a.process", $dst_row).addClass("hide");
		} else {
			$("a.process", $dst_row).removeClass("hide");
		}

		if ($("a.construct", $src_row).hasClass("hide")) {
			$("a.construct", $dst_row).addClass("hide");
		} else {
			$("a.construct", $dst_row).removeClass("hide");
		}

		if ($("a.cost", $src_row).hasClass("hide")) {
			$("a.cost", $dst_row).addClass("hide");
		} else {
			$("a.cost", $dst_row).removeClass("hide");
		}
	}
}

// 関数名：DoCheckRoom
// 機　能：明細行を貼付ける余裕があるかチェックする
// 引　数：request:行数, insertPoint:貼付位置
function DoCheckRoom(request, insertPoint) {
	var theForm = $("form#form_main").get(0);
	var i = theForm.NumDetails.value;

	for (var j = request; j > 0; j--) {
		if (theForm["Heading" + i].value !== ""
				 || theForm["ZaiName" + i].value !== "" 
				 || theForm["Material" + i].value !== ""
				 || theForm["Quantity" + i].value != "" || theForm["Price" + i].value != "") {
			//	alert("" + request + "行コピーしようとしましたが十分な空きがありません（残り" + (request - j) + "行です）。");
			return j;
		} else if (insertPoint) {
			if (insertPoint == i && j > 1) {
			//	alert("" + insertPoint + "行目から" + request + "行貼付けようとしましたが十分な空きがありません（残り" + (theForm.NumDetails.value - i + 1) + "行です）。");
				return request - (theForm.NumDetails.value - i + 1);
			}
		}

		i--;
	}

	return 0;
}

// 関数名：DoHandleClick
// 機　能：明細行チェックボックスのイベントハンドラ
// 引　数：obj:チェックされたDOMオブジェクト
function DoHandleClick(obj) {
	var numChecked = $("#container-inner input.chkrow:checked").length;

	if ($("#container-inner input#checkAll").hasClass("hide")) { // ペースト先選択モード
		if (numChecked == 1) {
			$("#container-inner #btn-row-paste").removeClass("input-off").addClass("input-on");
		} else if (numChecked > 1) {
			alert("行貼付位置は１ヵ所しか指定できません。");
			$(obj).prop("checked", false);
		} else {
			$("#container-inner #btn-row-paste").removeClass("input-on").addClass("input-off");
		}
	} else { // 通常モード
		if (!$(obj).prop("checked") & $("#container-inner input#checkAll").prop("checked")) {
			$("input#checkAll").prop("checked", false);
		}

		if (numChecked > 0) {
			$("#container-inner #btn-row-copy").removeClass("input-off").addClass("input-on");
			$("#container-inner #btn-row-insert").removeClass("input-off").addClass("input-on");
			$("#container-inner #btn-row-delete").removeClass("input-off").addClass("input-on");
		} else {
			$("#container-inner #btn-row-copy").removeClass("input-on").addClass("input-off");
			$("#container-inner #btn-row-insert").removeClass("input-on").addClass("input-off");
			$("#container-inner #btn-row-delete").removeClass("input-on").addClass("input-off");
		}
	}
}

// 関数名：DoAddDetailRows
// 機　能：明細行をページ（23行）単位で追加する
// 引　数：shortage:貼付に不足する行素
function DoAddDetailRows(shortage) {
	// 不足分の空白行を末尾にページ単位で追加する。
	var morepage = parseInt((shortage + 22) / 23);
	var row_count = parseInt(document.form_main.NumDetails.value);
	var new_max = 23 * morepage + row_count;
	var max_page = parseInt((new_max + 22) / 23);

	if (new_max > 1000) {
		alert("" + insertPoint + "行目から" + gCopyLines.length + "行貼付けると制限行数を越えるため実行できません。");
		return false;
	}

	for (var i = row_count + 1; i <= new_max; i++) {
		var tmplrow = $("table#tbl-template > tbody").html();
		$("table#tbl2 > tbody tr:last").after(tmplrow.replace(/NNNNN/g, i).replace("chkrow-tmpl", "chkrow-new").replace("open-detail-dialog-tmpl", "open-detail-dialog-new"));
	}

	$("input.chkrow-new").click(function(){
		DoHandleClick(this);
	});

	$("input.open-detail-dialog-new").click(function(){
		DoOpenDetailDialog(this);
	});

	$("input.chkrow-new").removeClass("chkrow-new").addClass("chkrow").removeClass("open-detail-dialog-new").addClass("open-detail-dialog");

	document.form_main.NumDetails.value = new_max;
	$("#label-max-line-page").text("" + new_max + "行／" + parseInt((new_max + 22) / 23) + "ページ");

	// 行数変更selectのoptionsを調整する
	$("select#sel04 > option:lt(" + morepage + ")").remove();

	$("select#sel04 > option").each(function(){
		var lines = 1 * $(this).val();
		var delta = parseInt((lines - new_max) / 23);
		$(this).text("" + delta + "ページ追加　【" + lines + "行／" + (delta + max_page) + "ページ】");
	});
}

// 関数名：DoPreOpen
// 機　能：モーダルダイアログが表示される直前に呼ばれるコールバック
// 引　数：obj:モーダルダイアログ
function DoPreOpen(obj) {
	switch ($(obj).attr("id")) {
		case "modal_print_menu":
			$("#modal_print_menu .dashuboard").addClass("nodisp");
			break;
		default:
			break;
	}

	return true;
}

// 関数名：DoPostClose
// 機　能：モーダルダイアログが閉じた直後に呼ばれるコールバック
// 引　数：obj:モーダルダイアログ
function DoPostClose(obj) {
	switch ($(obj).attr("id")) {
		case "modal_print_menu":
			$("#modal_print_menu .dashuboard").removeClass("nodisp");
			break;
		default:
			break;
	}

	return true;
}

// 関数名：DoContractorSelector
// 機　能：発注先業者選択ダイアログを開く
// 引　数：pCaller(呼び出し元リンク)
function DoContractorSelector(pCaller){
	gContractorSelectCaller = $(pCaller);
	gContractorSelectCaller.closest("td").addClass("selecting");

	if (gContractorSelectCaller.hasClass("material")) { // 材料発注先
		gMaterialContractorModal.dialog("open");
	} else if (gContractorSelectCaller.hasClass("process")) { // 加工発注先
		gProcessContractorModal.dialog("open");
	} else if (gContractorSelectCaller.hasClass("construct")) { // 施工発注先
		gConstructContractorModal.dialog("open");
	} else if (gContractorSelectCaller.hasClass("cost")) { // 経費発注先
		gCostContractorModal.dialog("open");
	}

	return false;
}

// 関数名：DoSetDetailsTableClass
// 機　能：明細テーブルの表示を切り替える
// 引　数：newClass(表示するクラス)
function DoSetDetailsTableClass(newClass) {
	var $theadTable = $("div.dashuboard-m table.floatThead-table");
	var $myTable = $("table#tbl2");
	var curClass = $myTable.data("current-class");

	if (curClass != "") {
		$theadTable.removeClass(curClass);
		$myTable.removeClass(curClass);
	}

	if (newClass != "") {
		$theadTable.addClass(newClass);
		$myTable.addClass(newClass);
	}

	$myTable.data("current-class", newClass);
	return false;
}

// 関数名：DoRecalcConstructShare
// 機　能：外注施工費と社内施工費を再計算する（総額は変化しない）
// 引　数：rowNo(明細行番号), newVal (新しい発注先業者ID)
function DoRecalcConstructShare(rowNo, newId) {
	var curId     = document.form_main[("SekouContract" + rowNo)].value;
	var curPrice  = DoTxtToInt(document.form_main[("SekouPrice" + rowNo)].value);
	var outsource = parseInt(document.form_main.OutsourceCost.value);
	var inhouse   = parseInt(document.form_main.InhouseCost.value);
	var changed   = false;

	if (curId == 0) { // 現在未指定
		if (newId == 1) { // 工務課
			inhouse   += curPrice;
			changed    = true;
		} else if (newId > 1) { // 外注
			outsource += curPrice;
			changed    = true;
		}
	} else if (curId == 1) { // 現在社内
		if (newId == 0) { // 社内→指定解除
			inhouse   -= curPrice;
			changed    = true;
		} else if (newId > 1) { // 社内→外注
			inhouse   -= curPrice;
			outsource += curPrice;
			changed    = true;
		}
	} else { // 現在外注
		if (newId == 0) { // 外注→指定解除
			outsource -= curPrice;
			changed    = true;
		} else if (newId == 1) { // 外注→社内
			outsource -= curPrice;
			inhouse   += curPrice;
			changed    = true;
		}
	}

	if (changed) {
		document.form_main.OutsourceCost.value = outsource;
		document.form_main.InhouseCost.value = inhouse;
	}
}

// 関数名：ConfirmCancelOrder
// 機　能：売上確定解除確認
function ConfirmCancelOrder() {
	if (confirm("売上確定を解除してよろしいですか？")) {
		// 売上確定解除中ダイアログを表示してからPOST
		gCancelingModal.dialog("open");
	}

	return false;
}

// 関数名：DoDeleteThis
// 機　能：実行予算削除確認
function DoDeleteThis() {
	if (confirm("この実行予算を削除してよろしいですか？")) {
		// 実行予算削除中ダイアログを表示してからajax/GET
		gDeletingModal.dialog("open");
	}

	return false;
}


// onready
$(document).ready(function() {
	$("#frm-OrderDate,#frm-StartDate,#frm-DoneDate,#frm-SalesDate").datepicker({
		dateFormat: "yy-mm-dd"
	});

	// callback from floatThead
	$("table#tbl2").on("reflowed", function(e, $floatContainer){
		if (gFloatTheadInited) {
			// 2回目以降はカラム幅の調整
			var curClass = $("table#tbl2").data("current-class");

			if (curClass != "") {
				// 表示されているカラムの最初の幅をセット
/* ChromeでfloatTheadに縦方向のスクロールバーが付くせいか幅の計算がおかしくなる？
				$("> table > thead > tr:first > th:visible", $floatContainer).each(function(index){
					// 最初のカラム幅を2つのテーブルのcolgroupに反映する
					var width = this.getAttribute("aria-fixed-width");
					$(".dashuboard-m table.floatThead-table > colgroup col:eq(" + index + ")").css("width", width);
					$("table#tbl2 > colgroup col:eq(" + index + ")").css("width", width);
				});
*/
			}
		} else {
			// 初回は#tbl2 thead thのクラスが消えているのを修復する
			var $dst_th = $("table#tbl2 > thead > tr:first th");

			$("> table > thead > tr:first > th", $floatContainer).each(function(index){
				var $this = $(this);
				var className = "";

				if ($this.hasClass("common")) {
					className = "common";
				} else if ($this.hasClass("default")) {
					className = "default";
				} else if ($this.hasClass("material")) {
					className = "material";
				} else if ($this.hasClass("material-only")) {
					className = "material-only";
				} else if ($this.hasClass("process")) {
					className = "process";
				} else if ($this.hasClass("process-only")) {
					className = "process-only";
				} else if ($this.hasClass("construct")) {
					className = "construct";
				} else if ($this.hasClass("construct-only")) {
					className = "construct-only";
				} else if ($this.hasClass("cost")) {
					className = "cost";
				} else if ($this.hasClass("cost-only")) {
					className = "cost-only";
				}

				if (className != "") {
					$($dst_th.get(index)).addClass(className);
				}

				// フルセット時のカラム幅を記憶しておく
				$this.attr("aria-fixed-width", $("> table > colgroup > col:eq(" + index + ")", $floatContainer).css("width"));
			});

			gFloatTheadInited = true;
		}
	});

	// http://mkoryak.github.io/floatThead/
	$("table#tbl2").floatThead({
		scrollContainer: true,
		floatContainerClass: "dashuboard-m",
	//	floatContainerCss: {"overflow-x": "hidden", "overflow-y": "hidden"}, // Chromeで縦がずれるようになる
		zIndex: "auto"
	});

  $(".jikko #tabs").tabs({active: 0});
  $("#detail-modal-dialog #tabs").tabs({active: 1});

 	$(".open2").click(function() {
		var $context = $(this).closest("div");
		$(".input-cell", $context).slideToggle("slow");
		$(this).toggleClass("active2");
	});

	$("input#checkAll").click(function(){
		var context = this.form;
		var isChecked = $(this).prop("checked");

		$("input.chkrow", context).each(function(){
			$(this).prop("checked", isChecked);
		});

		$("#btn-row-insert").removeClass("input-on").addClass("input-off");

		if (isChecked) {
			$("#btn-row-copy").removeClass("input-off").addClass("input-on");
			$("#btn-row-delete").removeClass("input-off").addClass("input-on");
		} else {
			$("#btn-row-copy").removeClass("input-on").addClass("input-off");
			$("#btn-row-delete").removeClass("input-on").addClass("input-off");
		}
	});

	// 行明細チェックボックスクリック
	$("input.chkrow").click(function(){
		DoHandleClick(this);
	});

	// 行明細ボタン押下
	$("input.open-detail-dialog").click(function(){
		DoOpenDetailDialog(this);
	});

	// 行コピーボタン押下
	$("#btn-row-copy").click(function(){
		var $this = $(this);

		if ($this.hasClass("input-off")) {
			return false;
		}

		// コピー行の取得
		var selRows = $("input.chkrow:checked");

		if (selRows.length > 0) {
			gCopyLines = [];

			selRows.each(function(){
				gCopyLines.push(parseInt($(this).attr("id").replace("chkrow_", "")));
			});

			gCopyLines.sort((a, b) => a - b);
			selRows.prop("checked", false);

			$("#btn-row-paste").val("" + gCopyLines.length + "行貼付");

			// ボタンの入れ替え
			$("#btn-row-copy").removeClass("input-on").addClass("input-off").addClass("hide");
			$("#btn-row-insert").removeClass("input-on").addClass("input-off").addClass("hide");
			$("#btn-row-delete").removeClass("input-on").addClass("input-off").addClass("hide");
			$("#btn-row-paste").removeClass("input-on").removeClass("hide").addClass("input-off");
			$("#btn-row-cancel").removeClass("hide");

			// 全行選択チェックを隠す（複数個所のペーストはサポートしない）
			$("input#checkAll").addClass("hide");
		}

		return false;
	});

	// 行貼付ボタン押下
	$("#btn-row-paste").click(function(){
		var $this = $(this);

		if ($this.hasClass("input-off")) {
			return false;
		}

		// 貼付位置取得（１ヵ所）
		var selRows = $("input.chkrow:checked");

		if (selRows.length < 1) {
			alert("行貼付位置が選択されていません。");
			return false;
		} else if (selRows.length > 1) {
			alert("行貼付位置は１ヵ所しか指定できません。");
			return false;
		}

		var insertPoint = parseInt(selRows.attr("id").replace("chkrow_", ""));
		var shortage = DoCheckRoom(gCopyLines.length, insertPoint);

		if (shortage > 0) {
			DoAddDetailRows(shortage);
		}

		// 貼付処理
		for (var i = (gCopyLines.length - 1); i >= 0; i--) {
			DoDetailRowInsert(insertPoint);
			// 参照位置をシフト
			for (var j = (gCopyLines.length - 1); j >= 0; j--) {
				if (gCopyLines[j] >= insertPoint) {
					gCopyLines[j]++;
				}
			}
			// 行コピー
			DoCopyLine(gCopyLines[i], insertPoint, document.form_main);
		}

		DoDetailRecalcTotal();

		alert("" + insertPoint + "行目から" + gCopyLines.length + "行貼付けました。");

		// コピー行のクリア
		gCopyLines = [];

		// ボタンの入れ替え
		$("#btn-row-paste").addClass("hide");
		$("#btn-row-cancel").addClass("hide");
		$("#btn-row-copy").removeClass("hide");
		$("#btn-row-insert").removeClass("hide");
		$("#btn-row-delete").removeClass("hide");

		// 全行選択チェック表示
		$("input#checkAll").removeClass("hide");
		$("input.chkrow:checked").prop("checked", false);

		return false;
	});

	// 行コピーキャンセルボタン押下
	$("#btn-row-cancel").click(function(){
		var $this = $(this);

		if ($this.hasClass("input-off")) {
			return false;
		}

		// コピー行のクリア
		gCopyLines = [];

		// ボタンの入れ替え
		$("#btn-row-paste").addClass("hide");
		$("#btn-row-cancel").addClass("hide");
		$("#btn-row-copy").removeClass("hide");
		$("#btn-row-insert").removeClass("hide");
		$("#btn-row-delete").removeClass("hide");

		// 全行選択チェック表示
		$("input#checkAll").removeClass("hide");
		$("input.chkrow:checked").prop("checked", false);

		return false;
	});

	// 行挿入ボタン押下
	$("#btn-row-insert").click(function(){
		var $this = $(this);

		if ($this.hasClass("input-off")) {
			return false;
		}

		// 挿入位置の取得
		var selRows = $("input.chkrow:checked");

		if (selRows.length > 0) {
			var rowIds = [];

			selRows.each(function(){
				rowIds.push(parseInt($(this).attr("id").replace("chkrow_", "")));
			});

			rowIds.sort((a, b) => a - b);

			for (var i = (rowIds.length - 1); i >= 0; i--) {
				DoDetailRowInsert(rowIds[i]);
			}

			DoDetailRecalcTotal();

			selRows.prop("checked", false);
			$("#btn-row-copy").removeClass("input-on").addClass("input-off");
			$("#btn-row-insert").removeClass("input-on").addClass("input-off");
			$("#btn-row-delete").removeClass("input-on").addClass("input-off");
		}

		return false;
	});

	// 行削除ボタン押下
	$("#btn-row-delete").click(function(){
		var $this = $(this);

		if ($this.hasClass("input-off")) {
			return false;
		}

		// 削除対象行の取得
		var selRows = $("input.chkrow:checked");

		if (selRows.length > 0) {
			var rowIds = [];

			selRows.each(function(){
				rowIds.push(parseInt($(this).attr("id").replace("chkrow_", "")));
			});

			rowIds.sort((a, b) => a - b);

			for (var i = (rowIds.length - 1); i >= 0; i--) {
				DoDetailRowDelete(rowIds[i]);
			}

			DoDetailRecalcTotal();

			selRows.prop("checked", false);
			$("#btn-row-copy").removeClass("input-on").addClass("input-off");
			$("#btn-row-insert").removeClass("input-on").addClass("input-off");
			$("#btn-row-delete").removeClass("input-on").addClass("input-off");
		}
	});

	// フォーカス移動
	$("input.gofwd,select.gofwd").on("keydown", function(e) {
		doAdvanceFocus(this, e);
	});

	// 行明細モーダルダイアログ作成
	gDetailModal = $("#detail-modal-dialog").dialog({
		classes: {"ui-dialog":"detail-modal-dialog"},
		autoOpen: false,
		modal: true,
		width: "90%",
		minWidth: 600,
		maxHeight: 670
	});

	// 材料選択モーダルダイアログ作成
	gMaterialModal = $("#material-modal-dialog").dialog({
		classes: {"ui-dialog":"material-modal-dialog"},
		autoOpen: false,
		modal: true,
		width: 400,
		minWidth: 300,
		maxWidth: 600,
		maxHeight: 670,
		position: {my: "center top", at: "center top", of: window}
	});

	// ロード中モーダルダイアログ作成
	gLoadingModal = $("#loading-modal-dialog").dialog({
		classes: {"ui-dialog":"loading-modal-dialog"},
		autoOpen: false,
		modal: true,
		position: {my: "center center", at: "center center", of: window},
		open: function(event, ui) {
		}
	});

	// 再計算中モーダルダイアログ作成
	gComputingModal = $("#computing-modal-dialog").dialog({
		classes: {"ui-dialog":"computing-modal-dialog"},
		autoOpen: false,
		modal: true,
		position: {my: "center center", at: "center center", of: window},
		focus: function(event, ui) {
			setTimeout(function(){
				// 再計算開始
				DoDetailRecalcAll();
			}, 250);
		}
	});

	// 材料発注先業者選択モーダルダイアログ作成
	gMaterialContractorModal = $("#material-contractor-menu").dialog({
		classes: {"ui-dialog":"contractor-selector"},
		autoOpen: false,
		modal: true,
		width: 400,
		position: {my: "center center", at: "center center", of: window},
		close: function(event, ui) {
				gContractorSelectCaller.closest("td").removeClass("selecting");
		}
	});

	// 加工発注先業者選択モーダルダイアログ作成
	gProcessContractorModal = $("#process-contractor-menu").dialog({
		classes: {"ui-dialog":"contractor-selector"},
		autoOpen: false,
		modal: true,
		width: 400,
		position: {my: "center center", at: "center center", of: window},
		close: function(event, ui) {
				gContractorSelectCaller.closest("td").removeClass("selecting");
		}
	});

	// 加工発注先業者選択モーダルダイアログ作成
	gConstructContractorModal = $("#construct-contractor-menu").dialog({
		classes: {"ui-dialog":"contractor-selector"},
		autoOpen: false,
		modal: true,
		width: 400,
		position: {my: "center center", at: "center center", of: window},
		close: function(event, ui) {
				gContractorSelectCaller.closest("td").removeClass("selecting");
		}
	});

	// 経費発注先業者選択モーダルダイアログ作成
	gCostContractorModal = $("#cost-contractor-menu").dialog({
		classes: {"ui-dialog":"contractor-selector"},
		autoOpen: false,
		modal: true,
		width: 400,
		position: {my: "center center", at: "center center", of: window},
		close: function(event, ui) {
				gContractorSelectCaller.closest("td").removeClass("selecting");
		}
	});

	// 売上確定解除中モーダルダイアログ作成
	if ($("#canceling-modal-dialog").length > 0) {
		gCancelingModal = $("#canceling-modal-dialog").dialog({
			classes: {"ui-dialog":"canceling-modal-dialog"},
			autoOpen: false,
			modal: true,
			width: 400,
			position: {my: "center center", at: "center center", of: window},
			focus: function(event, ui) {
				setTimeout(function(){
					// 売上確定解除開始
						var theForm = document.form_main;
						$("#result-message,#errors").empty();
						theForm.Mode.value = "CancelOrder";
						theForm.action = gTopPath + "/budget-save.php";
						theForm.submit();
				}, 250);
			}
		});
	}

	// 実行予算削除中モーダルダイアログ作成
	if ($("#deleting-modal-dialog").length > 0) {
		gDeletingModal = $("#deleting-modal-dialog").dialog({
			classes: {"ui-dialog":"deleting-modal-dialog"},
			autoOpen: false,
			modal: true,
			width: 400,
			position: {my: "center center", at: "center center", of: window},
			focus: function(event, ui) {
				setTimeout(function(){
					$.ajax({
						type: "get",
						url: gTopPath + "/ajax/ajax_delete_order.php",
						data: {"AutoID": document.form_main.AutoID.value, "LeaveSuccessMessage": 1},
						dataType: "json",
						cache: false,
						success: function(json_data) {
							if (json_data.result == "success") {
								location.href = gTopPath + "/order-list.php";
							} else if (json_data.error) {
								alert(json_data.error);
								gDeletingModal.dialog("close");
							}
						},
						error: function() {
							alert("サーバとの通信に失敗しました。\n\nこの実行予算を削除できませんでした。");
							gDeletingModal.dialog("close");
						}
					});
				}, 250);
			}
		});
	}

	// 行明細モーダルダイアログ前へボタン押下
	$("#detail-modal-dialog .modal-backward").click(function(){
		if (gDetailChanged) {
			DoSaveDetail();
		}

		var curRow = 1 * document.form_detail.CurRow.value;

		if (curRow > 1) {
			DoPrepareDetailDialog(curRow - 1);
		} else {
			alert("これより前の明細行はありません。");
		}
	});

	// 行明細モーダルダイアログ次へボタン押下
	$("#detail-modal-dialog .modal-forward").click(function(){
		if (gDetailChanged) {
			DoSaveDetail();
		}

		var curRow = 1 * document.form_detail.CurRow.value;
		var maxRow = 1 * document.form_main.NumDetails.value;

		if (curRow < maxRow) {
			DoPrepareDetailDialog(curRow + 1);
		} else {
			alert("これより後の明細行はありません。");
		}
	});

	// 行明細モーダルダイアログ閉じるボタン押下
	$("#detail-modal-dialog .modal-done").click(function(){
		if (gDetailChanged) {
			DoSaveDetail();
		}

		gDetailModal.dialog("close");
	});

	// 見出し・備考・単位の変更
	$("input#id_Heading,input#id_Remark,input#id_MituUnit,input#id_ZaiUnit,input#id_KakouUnit,input#id_SekouUnit,input#id_CostUnit").change(function(){
		if (! gInitDetailModal) {
			gDetailChanged = true;
		}
	});

	gRoundOption = 1 * ($("form#form_options").get(0).Op7.value);

	// 契約金額のハンドラ
	$("#frm-OrderPrice").focus(function(){
		$(this).data("prev-val", this.value);
		DoRemoveComma(this);
	}).on("keydown", function(e) {
		var c = e.which ? e.which : e.keyCode;

		if (c == 13) {
			this.blur();
		}
	}).blur(function(){
		if (DoCheckIfNumber(this.value)) {
			this.value = JS_Comma_Ins(this.value);
		} else {
			alert("契約金額に半角数字以外の値が入力されました。変更前の値に戻します。");
			this.value = $(this).data("prev-val");
		}
	}).change(function(){
		var orderPrice = JS_Comma_Del(this.value);

		if (DoCheckIfNumber(orderPrice)) {
			if (orderPrice != "") { // 非ゼロ
				var totalCost = parseInt(JS_Comma_Del($("#frm-TotalCost").val()));
				$("#frm-TotalProfit").val(JS_Comma_Ins(parseInt(orderPrice) - totalCost));
			}
		}
	});

	// ▼発注先業者選択ダイアログ
	$("#material-contractor-list,#process-contractor-list,#construct-contractor-list,#cost-contractor-list").DataTable({
	//paging: false,
		pageLength: 10,
		ordering:	 false,
		language: {
			url: "./js/DataTables/JapaneseDefaults.json",
			infoEmpty: "該当する業者はいません。",
			emptyTable: "業者は登録されていません。",
			zeroRecords: "該当する業者はいません。検索条件を変更してください。",
			search: "絞り込み"
		}
	});

	$(".contractor-select").click(function(){
		var $row = gContractorSelectCaller.closest("tr");
		var rowNo = $("td.check input[id^=chkrow_]", $row).val();
		var elm = this.id.split("-");

		if (elm[2] == "0") { // 業者選択クリア
			gContractorSelectCaller.text("業者選択");
		} else {
			var subject = $(this).text().split("] ");
			gContractorSelectCaller.text(subject[1]);
		}

		switch (elm[0]) {
			case "material":
				document.form_main[("ZaiContract" + rowNo)].value = elm[2];
				gMaterialContractorModal.dialog("close");
				break;
			case "process":
				document.form_main[("KakouContract" + rowNo)].value = elm[2];
				gProcessContractorModal.dialog("close");
				break;
			case "construct":
				// 外注施工費と社内施工費を再計算する（総額は変化しない）
				DoRecalcConstructShare(rowNo, elm[2]);
				document.form_main[("SekouContract" + rowNo)].value = elm[2];
				gConstructContractorModal.dialog("close");
				break;
			case "cost":
				document.form_main[("CostContract" + rowNo)].value = elm[2];
				gCostContractorModal.dialog("close");
				break;
		}

		gContractorSelectCaller = "";
	});
	// ▲発注先業者選択ダイアログ
});
//$(document).ready(function()
