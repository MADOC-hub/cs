// グローバル変数名：gCopyLines
// 意味：コピー対象の行番号を格納する配列
var gCopyLines = [];

// グローバル変数名：gCopyRefLines
// 意味：参照コピー対象の行番号を格納する配列
var gCopyRefLines = [];

// グローバル変数名：gDetailModal
// 意味：行明細モーダルダイアログのインスタンス
var gDetailModal;

// グローバル変数名：gMaterialModal
// 意味：材料選択モーダルダイアログのインスタンス
var gMaterialModal;

// グローバル変数名：gRefSearchModal
// 意味：参照元見積検索モーダルダイアログのインスタンス
var gRefSearchModal;

// グローバル変数名：gReferModal
// 意味：参照元見積明細選択モーダルダイアログのインスタンス
var gReferModal;

// グローバル変数名：gLoadingModal
// 意味：ロード中モーダルダイアログのインスタンス
var gLoadingModal;

// グローバル変数名：gComputingModal
// 意味：計算中モーダルダイアログのインスタンス
var gComputingModal;

// グローバル変数名：gOpenReferModalFlag
// 意味：true: 参照元見積明細選択モーダルダイアログを開く
var gOpenReferModalFlag = false;

// グローバル変数名：gReferId
// 意味：integer: 参照元見積ID
var gReferId = 0;

// グローバル変数名：gInitDetailModal
// 意味：true: 行明細モーダルダイアログの初期化中
var gInitDetailModal = false;

// グローバル変数名：gDetailChanged
// 意味：true: 変更あり
var gDetailChanged = false;

// グローバル変数名：gHasPrevPrice
// 意味：true: 単価調整キャンセル可能
var gHasPrevPrice = false;

// グローバル変数名：gTypeId
// 意味：integer: 新しい種類ID
var gTypeId = 0;

// グローバル変数名：gRoundOption
// 意味：integer: 端数処理モード
var gRoundOption = -1;

// グローバル変数名：gPrintWindows
// 意味：array: 印刷用ウィンドウの配列
var gPrintWindows = [null, null, null, null, null, null, null, null, null, null];


// 関数名：JS_New
// 機　能：見積新規作成
function JS_New(){
	if (window.confirm("表示中のデータをクリアしますか？")) {
		var theForm = document.mitsumori_sub;
		theForm.target = "_self";
		theForm.action = "./mitsumori.php";
		theForm.method = "POST";
		theForm.submit();
	}
}


// 関数名：JS_Update
// 機　能：見積登録
// target="①～④"
// ① _blank	新規のウィンドウに表示
// ② _self		現在のフレーム（ウィンドウ）に表示
// ③ _parent	親フレームに表示
// ④ _top		フレーム分割を解除してウィンドウ全体に表示
function JS_Update(pVal){
	var theForm = document.Mitsumori;

	if ((theForm.MituCode.value).length > 8) {
		window.alert("コンバートした見積は更新できません");
		return false;
	}

	if (pVal == 1) {
		if (window.confirm('この内容で登録しますか？')) {
			theForm.Func.value = 1;
			theForm.target = "_self";
			theForm.action = "./Mitsumori-Update.php";
			theForm.method = "POST";
			theForm.submit();
		}
	} else {
		if (window.confirm('この内容で更新しますか？')) {
			theForm.Func.value = 2;
			theForm.target = "_self";
			theForm.action = "./Mitsumori-Update.php";
			theForm.method = "POST";
			theForm.submit();
		}
	}
}

// 関数名：JS_Open_Search
// 機　能：見積検索画面を開く
function JS_Open_Search(){
	if (window.confirm("保存されていない編集内容を破棄して検索画面へ移動しますか？")) {
		location.href = "./mitsumori-list.php";
	}
}

// 関数名：JS_Open_Divert
// 機　能：見積流用画面を開く
function JS_Open_Divert(){

	window.name = "MituParentDiv";

	x = (screen.width) / 1;
	y = (screen.height) / 1;

	var strTarget = "Divert";

	window.open("",strTarget,"screenX=0,screenY=0,left="+x/2+",top=0,width="+x/2+",height="+y+",scrollbars=1,toolbar=1,menubar=1,staus=1,resizable=1");

	var theForm = document.mitsumori_sub;
	theForm.target = "Divert";
	theForm.action = "./mitsumori-div.php";
	theForm.method = "POST";
	theForm.submit();
}

// 関数名：JS_Ins_Row
// 機　能：内訳行数を追加　※23行づつ
function JS_Ins_Row(){
	var theForm = document.Mitsumori;
	theForm.RowIns.value = 1;
	theForm.action = "./mitsumori.php";
	theForm.method = "POST";
	theForm.submit();
}

// 関数名：JS_Open_Material_Dialog
// 機　能：材料選択ダイアログを開く
// 引　数：pButton(参照ボタン)
function JS_Open_Material_Dialog(pButton){
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
		url: "/ajax_get_options.php",
		data: data,
		dataType: "json",
		async: false,
		cache: false,
		success: function(json_data) {
			if (json_data.result == "ok") {
				$("table#TblResult > tbody").append(json_data.options);
				$("table#TblResult .btnSelMaterial").click(function(){
					JS_Select_Material(this);
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


// 関数名：JS_Complete_Material_Dialog
// 機　能：材料情報をセットしてから材料選択ダイアログを閉じる
function JS_Complete_Material_Dialog(){

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
		url: "/ajax_get_material.php",
		data: data,
		dataType: "json",
		async: false,
		cache: false,
		success: function(json_data) {
			if (json_data.result == "ok") {
				// 材料の初期値をフォームに設定
				var theForm = document.form_detail;
				theForm.ZaiID.value = json_data.spec.AutoID;
				theForm.UPrice.value = JS_Int_To_Txt(json_data.spec.Mitu);
				theForm.MituUPrice.value = theForm.UPrice.value;
				theForm.Unit.value = json_data.spec.MituUnit;
				theForm.MituUnit.value = json_data.spec.MituUnit;
				theForm.ZaiUPrice.value = JS_Int_To_Txt(json_data.spec.Zai);
				theForm.ZaiUnit.value = json_data.spec.ZaiUnit;
				theForm.ZaiKei.value = parseFloat(json_data.spec.ZaiKei).toFixed(4);
				theForm.ZaiLoss.value = parseFloat(json_data.spec.ZaiLoss).toFixed(2);
				theForm.KakouUPrice.value = JS_Int_To_Txt(json_data.spec.Kakou);
				theForm.KakouUnit.value = json_data.spec.KakouUnit;
				theForm.KakouKei.value = parseFloat(json_data.spec.KakouKei).toFixed(4);
				theForm.KakouLoss.value = parseFloat(json_data.spec.KakouLoss).toFixed(2);
				theForm.SekouUPrice.value = JS_Int_To_Txt(json_data.spec.Sekou);
				theForm.SekouUnit.value = json_data.spec.SekouUnit;
				theForm.SekouKei.value = parseFloat(json_data.spec.SekouKei).toFixed(4);
				theForm.SekouLoss.value = parseFloat(json_data.spec.SekouLoss).toFixed(2);
				theForm.CostKei.value = "1.0000";
				theForm.CostLoss.value = "0.00";
				theForm.CostUnit.value = json_data.spec.MituUnit;
				theForm.CostUPrice.value = "0";
				// 材料の初期値には追加経費の値はない
				// 金額再計算
				JS_Detail_Calc(2);
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


// 関数名：JS_Select_Material
// 機　能：選択された材料名称をinputへセット
function JS_Select_Material(obj) {
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
		JS_Open_Material_Dialog($(next_btn).get(0));
	} else {
		JS_Complete_Material_Dialog();
	}
}


// 関数名：JS_Material_Get
// 機　能：材料マスターデータを反映
function JS_Material_Get() {
	if (gInitDetailModal) { // 初期化中は何もしない
		return;
	}

	JS_Init_Values(document.form_detail, "Quantity", document.form_detail.MituQuantity.value);
	gDetailChanged = true;
}


// 関数名：JS_Material_Save_Confirm
// 機　能：材料マスターデータ保存の事前調査
function JS_Material_Save_Confirm() {
	var error = "";

	$("#save-material-result").text("");

	// [1] 大分類、種類、名称が未入力でないことを確認
	if ($("select#detail_LargeCateID").val() == "0") {
		error = "大分類を選択してください。\n材料の登録には大分類と種類と名称が必要です。";
	} else if ($("select#detail_TypeID").val() == "0") {
		error = "種類を選択してください。\n材料の登録には大分類と種類と名称が必要です。";
	} else if ($("select#detail_ZaiName").val() == "") {
		error = "名称を入力してください。\n材料の登録には大分類と種類と名称が必要です。";
	}

	if (error != "") {
		alert(error);
		return false;
	}

	// [2] 大分類、種類、名称、材質、寸法で材料IDを検索
	var params = {
		mode: "getId",
		cat_id: $("select#detail_LargeCateID").val(),
		type_id: $("select#detail_TypeID").val(),
		name: $("input#detail_ZaiName").val(),
		material: $("input#detail_Material").val(),
		size: $("input#detail_Size").val()
	};

	$.ajax({
		type: "post",
		data: params,
		url: "/ajax_get_material.php",
		dataType: "json",
		async: false,
		cache: false,
		success: function(json_data) {
			if (json_data.result == "ok") {
				if (json_data.spec.AutoID == "NotFound") {
					// [3] 該当レコードが存在しない場合は新規登録確認
					if (confirm("新規登録します。")) {
						$("#id_ZaiID").val("");
						JS_Material_Save();
					}
				} else {
					// [4] 該当レコードが存在する場合は更新確認
					if (confirm("既にデータがあります。上書きしてよろしいですか？")) {
						$("#id_ZaiID").val(json_data.spec.AutoID);
						JS_Material_Save();
					}
				}
			} else if (json_data.error) {
				alert(json_data.error);
			}
		},
		error: function() {
			alert("サーバとの通信に失敗しました。材料の登録を開始できませんでした。");
		}
	});
}


// 関数名：JS_Material_Save
// 機　能：材料マスターデータを保存
function JS_Material_Save() {
	var params = {
		AutoID: $("#id_ZaiID").val(),
		LargeCateID: $("select#detail_LargeCateID").val(), //大分類
		TypeID: $("select#detail_TypeID").val(), //種類
		ZaiName: $("input#detail_ZaiName").val(), //名称
		Material: $("input#detail_Material").val(), //材質
		Size: $("input#detail_Size").val(), //寸法
		Mitu: $("input#id_UPrice").val(), //見積単価
		MituUnit: $("input#id_Unit").val(), //見積単位（※文字列）
		Zai: $("input#id_ZaiUPrice").val(), //材料単価
		ZaiUnit: $("input#id_ZaiUnit").val(), //材料単位（※文字列）
		ZaiKei: $("input#id_ZaiKei").val(), //材料係数
		ZaiLoss: $("input#id_ZaiLoss").val(), //材料ロス率
		Kakou: $("input#id_KakouUPrice").val(), //加工単価
		KakouUnit: $("input#id_KakouUnit").val(), //加工単位（※文字列）
		KakouKei: $("input#id_KakouKei").val(), //加工係数
		KakouLoss: $("input#id_KakouLoss").val(), //加工ロス率
		Sekou: $("input#id_SekouUPrice").val(), //施工単価
		SekouUnit: $("input#id_SekouUnit").val(), //施工単位（※文字列）
		SekouKei: $("input#id_SekouKei").val(), //施工係数
		SekouLoss: $("input#id_SekouLoss").val() //施工ロス率
	};

	$.ajax({
		type: "post",
		data: params,
		url: "/ajax_save_material.php",
		dataType: "json",
		async: false,
		cache: false,
		success: function(json_data) {
			if (json_data.result == "ok") {
				if ($("#id_ZaiID").val() == "") {
					$("#save-material-result").text("材料を登録しました。");
				} else {
					$("#save-material-result").text("材料を更新しました。");
				}

				$("#id_ZaiID").val(json_data.AutoID);
			} else if (json_data.error) {
				alert(json_data.error);
			}
		},
		error: function() {
			alert("サーバとの通信に失敗しました。材料の登録を完了できませんでした。");
		}
	});
}


// 関数名：JS_Open_Detail_Dialog
// 機　能：行明細ダイアログを開く
// 引　数：pButton(内訳編集ボタン)
function JS_Open_Detail_Dialog(pButton){
	var srcId = $(pButton).attr("id").replace("id_Row", "");

	JS_Configure_Detail_Dialog(srcId);

	// 行明細ダイアログを表示する
	gDetailModal.dialog("open");
}

// 関数名：JS_Configure_Detail_Dialog
// 機　能：行明細ダイアログ内の各要素の値を構成する
// 引　数：srcId(明細行No.)
function JS_Configure_Detail_Dialog(srcId){
	gInitDetailModal = true;

	$("#save-material-result").text("");

	var srcElms = document.Mitsumori.elements;
	var dstElms = document.form_detail.elements;
	var costTotal = 0;

	// 編集対象の明細行を記憶する
	dstElms["CurRow"].value = srcId;

	// 行明細ダイアログのタイトルを設定する
	gDetailModal.dialog("option", "title", ("行明細：" + srcId + "行目"));

	// 行明細ダイアログに編集用のデータを設定する
	dstElms["Heading"].value = srcElms[("Heading" + srcId)].value;

	// 大分類が未指定の場合は直前の行の値をコピーする
	if (srcElms[("LargeCateID" + srcId)].value == 0 && srcId > 1) {
		gTypeId = srcElms[("TypeID" + (srcId - 1))].value;
		JS_Set_Large_Category(srcElms[("LargeCateID" + (srcId - 1))].value);
	} else {
		gTypeId = srcElms[("TypeID" + srcId)].value;
		JS_Set_Large_Category(srcElms[("LargeCateID" + srcId)].value);
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

	dstElms["ZaiKei"].value      = srcElms[("ZaiKei" + srcId)].value;
	dstElms["ZaiLoss"].value     = srcElms[("ZaiLoss" + srcId)].value;
	dstElms["ZaiQuantity"].value = srcElms[("ZaiQuantity" + srcId)].value;
	dstElms["ZaiUnit"].value     = srcElms[("ZaiUnit" + srcId)].value;
	dstElms["ZaiKake"].value     = srcElms[("ZaiKake" + srcId)].value;
	dstElms["ZaiUPrice"].value   = srcElms[("ZaiUPrice" + srcId)].value;
	dstElms["ZaiPrice"].value    = srcElms[("ZaiPrice" + srcId)].value;

	dstElms["KakouKei"].value      = srcElms[("KakouKei" + srcId)].value;
	dstElms["KakouLoss"].value     = srcElms[("KakouLoss" + srcId)].value;
	dstElms["KakouQuantity"].value = srcElms[("KakouQuantity" + srcId)].value;
	dstElms["KakouUnit"].value     = srcElms[("KakouUnit" + srcId)].value;
	dstElms["KakouKake"].value     = srcElms[("KakouKake" + srcId)].value;
	dstElms["KakouUPrice"].value   = srcElms[("KakouUPrice" + srcId)].value;
	dstElms["KakouPrice"].value    = srcElms[("KakouPrice" + srcId)].value;

	dstElms["SekouKei"].value      = srcElms[("SekouKei" + srcId)].value;
	dstElms["SekouLoss"].value     = srcElms[("SekouLoss" + srcId)].value;
	dstElms["SekouQuantity"].value = srcElms[("SekouQuantity" + srcId)].value;
	dstElms["SekouUnit"].value     = srcElms[("SekouUnit" + srcId)].value;
	dstElms["SekouKake"].value     = srcElms[("SekouKake" + srcId)].value;
	dstElms["SekouUPrice"].value   = srcElms[("SekouUPrice" + srcId)].value;
	dstElms["SekouPrice"].value    = srcElms[("SekouPrice" + srcId)].value;

	dstElms["CostKei"].value      = srcElms[("CostKei" + srcId)].value;
	dstElms["CostLoss"].value     = srcElms[("CostLoss" + srcId)].value;
	dstElms["CostQuantity"].value = srcElms[("CostQuantity" + srcId)].value;
	dstElms["CostUnit"].value     = srcElms[("CostUnit" + srcId)].value;
	dstElms["CostKake"].value     = srcElms[("CostKake" + srcId)].value;
	dstElms["CostUPrice"].value   = srcElms[("CostUPrice" + srcId)].value;
	dstElms["CostPrice"].value    = srcElms[("CostPrice" + srcId)].value;

	dstElms["Memo"].value       = srcElms[("Memo" + srcId)].value;
	dstElms["ZaiMemo"].value    = srcElms[("ZaiMemo" + srcId)].value;
	dstElms["KakouMemo"].value  = srcElms[("KakouMemo" + srcId)].value;
	dstElms["SekouMemo"].value  = srcElms[("SekouMemo" + srcId)].value;
	dstElms["CostMemo"].value   = srcElms[("CostMemo" + srcId)].value;

	dstElms["Profit"].value     = srcElms[("Profit" + srcId)].value;
	dstElms["ProfitRate"].value = srcElms[("ProfitRate" + srcId)].value;
	dstElms["Cost"].value       = srcElms[("Cost" + srcId)].value;
	dstElms["ZaiID"].value    = "";

	// 空白時の初期値設定
	if (dstElms["ZaiKake"].value == "") {
		dstElms["ZaiKake"].value = "100.0";
	}
	if (dstElms["ZaiLoss"].value == "") {
		dstElms["ZaiLoss"].value = "0.00";
	}
	if (dstElms["KakouKake"].value == "") {
		dstElms["KakouKake"].value = "100.0";
	}
	if (dstElms["KakouLoss"].value == "") {
		dstElms["KakouLoss"].value = "0.00";
	}
	if (dstElms["SekouKake"].value == "") {
		dstElms["SekouKake"].value = "100.0";
	}
	if (dstElms["SekouLoss"].value == "") {
		dstElms["SekouLoss"].value = "0.00";
	}
	if (dstElms["CostKei"].value == "" || dstElms["CostPrice"].value == "") {
		dstElms["CostKei"].value = "1.0000";
		dstElms["CostLoss"].value = "0.00";
		dstElms["CostQuantity"].value = dstElms["MituQuantity"].value;
		dstElms["CostUnit"].value = "";
		dstElms["CostKake"].value = "100.0";
		dstElms["CostUPrice"].value = "";
		dstElms["CostPrice"].value = "0";
	}

	// 明細にないデータを作る（原価率、経費、原単価）
	// 原価率 = 原価÷見積金額×100
	if (dstElms["MituQuantity"].value != 0) {
		dstElms["CostRate"].value = JS_Float_To_Txt(JS_Txt_To_Float(dstElms["Cost"].value) / JS_Txt_To_Float(dstElms["MituPrice"].value) * 100);
	} else {
		dstElms["CostRate"].value = "";
	}
	// 経費 =（材料費＋加工費＋施工費＋追加経費）×経費率
	costTotal = JS_Txt_To_Int(dstElms["ZaiPrice"].value) + JS_Txt_To_Int(dstElms["KakouPrice"].value) + JS_Txt_To_Int(dstElms["SekouPrice"].value) + JS_Txt_To_Int(dstElms["CostPrice"].value);

	if (document.Mitsumori.ExpenseRate.value != "") {
		dstElms["Expenses"].value = JS_Float_To_Txt(costTotal * (parseFloat(document.Mitsumori.ExpenseRate.value) / 100));
	} else {
		dstElms["Expenses"].value = JS_Float_To_Txt(JS_Txt_To_Int(dstElms["Cost"].value) - costTotal);
	}
	// 原単価 = 原価÷見積数量
	if (dstElms["MituQuantity"].value != 0) {
		dstElms["UCost"].value = JS_Float_To_Txt(JS_Txt_To_Float(dstElms["Cost"].value) / JS_Txt_To_Float(dstElms["MituQuantity"].value));
	} else {
		dstElms["UCost"].value = "";
	}

	if (dstElms["Heading"].value.length > 0) { // 見出
		$("#tabs").tabs("option", "active", 0);
	} else { // 明細
		$("#tabs").tabs("option", "active", 1);
	}

	gInitDetailModal = false;
	gDetailChanged = false;
}


// 関数名：JS_Save_Detail
// 機　能：行明細ダイアログの編集内容を見積明細行へ保存する
// 引　数：pNewVal(大分類ID)
function JS_Save_Detail() {
	var srcElms = document.form_detail.elements;
	var dstElms = document.Mitsumori.elements;
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

	dstElms[("Cost" + srcId)].value       = srcElms["Cost"].value;
	dstElms[("Profit" + srcId)].value     = srcElms["Profit"].value;
	dstElms[("ProfitRate" + srcId)].value = srcElms["ProfitRate"].value;

	dstElms[("ZaiQuantity" + srcId)].value = srcElms["ZaiQuantity"].value;
	dstElms[("ZaiUnit" + srcId)].value     = srcElms["ZaiUnit"].value;
	dstElms[("ZaiUPrice" + srcId)].value   = srcElms["ZaiUPrice"].value;
	dstElms[("ZaiPrice" + srcId)].value    = srcElms["ZaiPrice"].value;
	dstElms[("ZaiKei" + srcId)].value      = srcElms["ZaiKei"].value;
	dstElms[("ZaiLoss" + srcId)].value     = srcElms["ZaiLoss"].value;
	dstElms[("ZaiKake" + srcId)].value     = srcElms["ZaiKake"].value;

	dstElms[("KakouQuantity" + srcId)].value = srcElms["KakouQuantity"].value;
	dstElms[("KakouUnit" + srcId)].value     = srcElms["KakouUnit"].value;
	dstElms[("KakouUPrice" + srcId)].value   = srcElms["KakouUPrice"].value;
	dstElms[("KakouPrice" + srcId)].value    = srcElms["KakouPrice"].value;
	dstElms[("KakouKei" + srcId)].value      = srcElms["KakouKei"].value;
	dstElms[("KakouLoss" + srcId)].value     = srcElms["KakouLoss"].value;
	dstElms[("KakouKake" + srcId)].value     = srcElms["KakouKake"].value;

	dstElms[("SekouQuantity" + srcId)].value = srcElms["SekouQuantity"].value;
	dstElms[("SekouUnit" + srcId)].value     = srcElms["SekouUnit"].value;
	dstElms[("SekouUPrice" + srcId)].value   = srcElms["SekouUPrice"].value;
	dstElms[("SekouPrice" + srcId)].value    = srcElms["SekouPrice"].value;
	dstElms[("SekouKei" + srcId)].value      = srcElms["SekouKei"].value;
	dstElms[("SekouLoss" + srcId)].value     = srcElms["SekouLoss"].value;
	dstElms[("SekouKake" + srcId)].value     = srcElms["SekouKake"].value;

	dstElms[("CostQuantity" + srcId)].value = srcElms["CostQuantity"].value;
	dstElms[("CostUnit" + srcId)].value     = srcElms["CostUnit"].value;
	dstElms[("CostUPrice" + srcId)].value   = srcElms["CostUPrice"].value;
	dstElms[("CostPrice" + srcId)].value    = srcElms["CostPrice"].value;
	dstElms[("CostKei" + srcId)].value      = srcElms["CostKei"].value;
	dstElms[("CostLoss" + srcId)].value     = srcElms["CostLoss"].value;
	dstElms[("CostKake" + srcId)].value     = srcElms["CostKake"].value;

	dstElms[("Memo" + srcId)].value      = srcElms["Memo"].value;
	dstElms[("ZaiMemo" + srcId)].value   = srcElms["ZaiMemo"].value;
	dstElms[("KakouMemo" + srcId)].value = srcElms["KakouMemo"].value;
	dstElms[("SekouMemo" + srcId)].value = srcElms["SekouMemo"].value;
	dstElms[("CostMemo" + srcId)].value  = srcElms["CostMemo"].value;

	gDetailChanged = false;
	JS_UchiwakeTotal_Calc();
}


// 関数名：JS_Set_Large_Category
// 機　能：行明細ダイアログの大分類を指定する
// 引　数：pNewVal(大分類ID)
function JS_Set_Large_Category(pNewVal) {
	var prevValue = $("#detail_LargeCateID").val();

	if (pNewVal != prevValue) {
		$("#detail_LargeCateID").val(pNewVal).change();
	} else {
		$("select#detail_TypeID").val(gTypeId);
	}
}


// 関数名：JS_Reset_Type_Options
// 機　能：行明細ダイアログの種類の選択肢をajaxでリロードする
// 引　数：pSelect(大分類の<select>)
function JS_Reset_Type_Options(pSelect) {
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
			url: "/ajax_get_options.php",
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

					JS_Init_Values(document.form_detail, "Quantity", document.form_detail.MituQuantity.value);
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


// 関数名：JS_Open_Cust
// 機　能：顧客選択画面を開く
function JS_Open_Cust(){

	x = 600 / 1;
	y = 600 / 1;

	window.open("","Cust","screenX=0,screenY=0,left=0,top=0,width="+x+",height="+y+",scrollbars=1,toolbar=1,menubar=1,staus=1,resizable=1");

	var theForm = document.Mitsumori;
	theForm.target = "Cust" ;
	theForm.action = "./mitsumori-cust.php";
	theForm.method = "POST";
	theForm.submit();
}

// 関数名：JS_Uchiwake_Recalc_All
// 機　能：経費率変更や単価調整による見積金額の再計算
// 引　数：なし
function JS_Uchiwake_Recalc_All() {
	var iRowCnt     = $("table#tbl2 > tbody > tr").length;

	for (var i = 1; i <= iRowCnt; i++) {
		// 明細ごとの経費と粗利再計算
		JS_Uchiwake_Calc(i, 5);
	}

	gDetailChanged = false;
	JS_UchiwakeTotal_Calc();

	if (gComputingModal.dialog("isOpen")) {
		gComputingModal.dialog("close");
	}
}

// 関数名：JS_UchiwakeTotal_Calc
// 機　能：内訳合計計算　消費税を含む見積金額の計算
// 引　数：none
function JS_UchiwakeTotal_Calc() {

	var iRowCnt     = $("table#tbl2 > tbody > tr").length;
	var theForm     = document.Mitsumori;
	var formElms    = theForm.elements;

	// 内訳合計--------------------------
	// 見積金額
	var intMituPrice = 0;
	var intDiscount  = 0; // 値引金額合計（自動計算分）
	// 原価金額
	var intTotalCost = 0;
	// 粗利金額
	var intTotalProfit = 0;
	// 施工費（法定福利費）
	var intSekouTotal = 0;
	var varName = "";
	var varValue = "";

	for (var i = 1; i <= iRowCnt; i++) {
		// 見積金額
		varName  = "Price" + i;
		varValue = JS_Comma_Del(formElms[varName].value);

		if (JS_Check_If_Number(varValue)) {
			if (varValue != "") { // 非ゼロ
				if (parseFloat(varValue) >= 0) { // 見積に加算
					intMituPrice += parseInt(varValue);
				} else { // 負数は値引きとして加算
					intDiscount -= parseInt(varValue);
				}
			}

			formElms[varName].value = JS_Comma_Ins(varValue);
		}

		// 原価
		varName  = "Cost" + i;
		varValue = JS_Comma_Del(formElms[varName].value);

		if (JS_Check_If_Number(varValue)) {
			if (varValue != "") { // 非ゼロ
				intTotalCost += parseInt(varValue);
			}

			formElms[varName].value = JS_Comma_Ins(varValue);
		}

		// 粗利
		varName  = "Profit" + i;
		varValue = JS_Comma_Del(formElms[varName].value);

		if (JS_Check_If_Number(varValue)) {
			if (varValue != "") { // 非ゼロ
				intTotalProfit += parseInt(varValue);
			}

			formElms[varName].value = JS_Comma_Ins(varValue);
		}

		// 施工費（法定福利費）
		varName = "SekouPrice" + i;
		varValue = JS_Comma_Del(formElms[varName].value);

		if (JS_Check_If_Number(varValue)) {
			if (varValue != "") { // 非ゼロ
				intSekouTotal += parseInt(varValue);
			}
		}
	} // for (var i = 1; i <= iRowCnt; i++)

	// 消費税の設定
	var bolTaxFlg  = $(theForm.TaxFlg).prop("checked");
	// 消費税率
	var fltTaxRate = 1.0 + parseFloat(theForm.TaxRate.value);
	var intDiscountAfter = 0;
	// 税後値引の税額相当分
	var intDiscountAfterTax = 0;

	// 税後値引の設定
	if (theForm.MituTaxDiscount.value != "") {
		intDiscountAfter = parseInt(JS_Comma_Del(theForm.MituTaxDiscount.value));

		// 税後値引の税抜き金額
		if (intDiscountAfter != 0) {
			intDiscountAfterTax = JS_Rounding((intDiscountAfter / fltTaxRate * (fltTaxRate - 1.0)), 0, gRoundOption);
		}
	}

	// 見積金額(税抜)
	var intMituPriceNoTax = intMituPrice - (intDiscount + intDiscountAfter - intDiscountAfterTax);

	// ヘッダ４項目（カンマ挿入は後ほど）
	// 1:見積合計(税抜, 税後値引適用)
//	theForm.TotalPrice.value = intMituPriceNoTax;
    // 2:原価合計(税抜)
	theForm.TotalCost.value = intTotalCost;

	var cancelNetBaseMode = false;

	// ベース金額の切り替え
	if (theForm.chkNetBaseFlag.checked) { // ネット金額
		var intNetPrice = JS_Comma_Del(theForm.MituNetPrice.value);

		if (JS_Check_If_Number(intNetPrice) && intNetPrice != "0") {
			intNetPrice = parseInt(intNetPrice);
			// 3:粗利合計(税抜)
			intTotalProfit = intNetPrice - intTotalCost;
			theForm.TotalProfit.value = intTotalProfit;
			// 4:粗利率 = 粗利÷ネット金額*100
			if (intNetPrice != 0) {
				var fltTotalProfitRate = (parseFloat(intTotalProfit) / parseFloat(intNetPrice)) * 100;
				theForm.TotalProfitRate.value = parseFloat(fltTotalProfitRate).toFixed(2);
			} else {
				theForm.TotalProfitRate.value = "";
			}
		} else {
			cancelNetBaseMode = true;
		}
	} else { // 見積積算
		// 3:粗利合計(税抜)
		theForm.TotalProfit.value = intTotalProfit;
		// 4:粗利率 = 粗利÷金額(見積)*100
		if (parseFloat(intMituPrice) != 0) {
			var fltTotalProfitRate = (parseFloat(intTotalProfit) / parseFloat(intMituPriceNoTax)) * 100;
			theForm.TotalProfitRate.value = parseFloat(fltTotalProfitRate).toFixed(2);
		} else {
			theForm.TotalProfitRate.value = "";
		}
	}


	// 帳票印刷情報８項目（カンマ挿入は後ほど）
	// 税後値引適用前の見積合計
	intMituPriceNoTax  = intMituPrice - intDiscount;

	// 1:見積合計(税抜, 内訳値引適用済)
	theForm.MituPriceNoTax.value = intMituPriceNoTax;
	// 2:内訳値引合計(税抜)
	theForm.MituDiscount.value = intDiscount;
	// 3:見積合計(税込)
	// 内訳合計（値引き算入・消費税込）
	theForm.MituPrice.value = JS_Rounding((fltTaxRate * intMituPriceNoTax), 0, gRoundOption);
	// ネット金額（帳票へ反映）
	// 税後値引（帳票へ反映）
	// 4:見積金額合計（見積合計に税後値引適用）
	theForm.MituTotalPrice.value = theForm.MituPrice.value - intDiscountAfter;

	// 帳票印刷―請求書表紙のフォームにも金額をセットする
	// 消費税率
	$(document.InvoiceOption.TaxRate).val($(theForm.TaxRate).val());
	// 消費税額
	document.InvoiceOption.TaxPrice.value = theForm.MituPrice.value - theForm.MituPriceNoTax.value;
	JS_Append_Comma(document.InvoiceOption.TaxPrice);

    // カンマ挿入
	JS_Append_Comma(theForm.MituPriceNoTax);
	JS_Append_Comma(theForm.MituDiscount);
	JS_Append_Comma(theForm.MituPrice);
	JS_Append_Comma(theForm.MituTotalPrice);
//	JS_Append_Comma(theForm.TotalPrice);
	JS_Append_Comma(theForm.TotalCost);
	JS_Append_Comma(theForm.TotalProfit);
	JS_Append_Comma(theForm.TotalProfitRate);

	// 帳票印刷―請求書表紙のフォームにも金額をセットする
	// 請求金額
	document.InvoiceOption.MituPriceNoTax.value = theForm.MituPriceNoTax.value;
	// 税込請求金額
	document.InvoiceOption.TotalPrice.value = theForm.MituPrice.value;

	if (cancelNetBaseMode) {
		$(theForm.chkNetBaseFlag).prop("checked", false).change();
	}

	// 施工費（法定福利費）
	if (intSekouTotal > 0) {
		theForm.SekouTotal.value = JS_Comma_Ins(intSekouTotal);
	} else {
		theForm.SekouTotal.value = "0";
	}

	document.PrintOption.print_ConstCost.value = theForm.SekouTotal.value;
}

// 関数名：JS_Uchiwake_Calc
// 機　能：内訳計算（見積明細画面用）
// 引　数：pVal(行番号) pMode(bit0(1):金額再計算 bit1(2):見積数量変更 bit2(4):合計値を再計算しない)
function JS_Uchiwake_Calc(pVal, pMode) {

	var formElms = document.Mitsumori.elements;
	var noErr = true;
	var arrData = {
		Quantity: "",
		Unit: "",
		UPrice: "",
		Price: "",
		ZaiKei: "",
		ZaiLoss: "",
		ZaiQuantity: "",
		ZaiUnit: "",
		ZaiKake: "",
		ZaiUPrice: "",
		ZaiPrice: "",
		KakouKei: "",
		KakouLoss: "",
		KakouQuantity: "",
		KakouUnit: "",
		KakouKake: "",
		KakouUPrice: "",
		KakouPrice: "",
		SekouKei: "",
		SekouLoss: "",
		SekouQuantity: "",
		SekouUnit: "",
		SekouKake: "",
		SekouUPrice: "",
		SekouPrice: "",
		CostKei: "",
		CostLoss: "",
		CostQuantity: "",
		CostUnit: "",
		CostKake: "",
		CostUPrice: "",
		CostPrice: "",
		Cost: "",
		Expenses: "",
		Profit: "",
		ProfitRate: ""
	};

	// 単価調整前の復元用単価破棄
	if (gHasPrevPrice) {
		JS_Remove_Prev_Price();
	}

	// ▼数量変更
	if ((pMode & 3) == 2) {
		// 見積数量
		arrData.Quantity = JS_Comma_Del(formElms[("Quantity" + pVal)].value);
		// 材料費数量を算出する根拠（見積数量×係数×ロス率）
		arrData.ZaiKei = JS_Comma_Del(formElms[("ZaiKei" + pVal)].value);
		arrData.ZaiLoss = JS_Comma_Del(formElms[("ZaiLoss" + pVal)].value);
		// 加工費数量を算出する根拠（見積数量×係数×ロス率）
		arrData.KakouKei = JS_Comma_Del(formElms[("KakouKei" + pVal)].value);
		arrData.KakouLoss = JS_Comma_Del(formElms[("KakouLoss" + pVal)].value);
		// 施工費数量を算出する根拠（見積数量×係数×ロス率）
		arrData.SekouKei = JS_Comma_Del(formElms[("SekouKei" + pVal)].value);
		arrData.SekouLoss = JS_Comma_Del(formElms[("SekouLoss" + pVal)].value);
		// 追加経費数量を算出する根拠（見積数量×係数×ロス率）
		arrData.CostKei = JS_Comma_Del(formElms[("CostKei" + pVal)].value);
		arrData.CostLoss = JS_Comma_Del(formElms[("CostLoss" + pVal)].value);

		// 数量変更
		noErr = JS_Uchiwake_Calc_Sub((pMode & 3), arrData);

		// 見積数量変更→材料費・加工費・施工費・追加経費の数量変更→金額再計算

		//---見積---
		if (noErr) {
			formElms[("Quantity" + pVal)].value = JS_Comma_Ins(arrData.Quantity.toFixed(2));
		} else {
			return false;
		}

		//---材料費---
		if (JS_Check_If_Number(arrData.ZaiQuantity)) {
			formElms[("ZaiQuantity" + pVal)].value = JS_Comma_Ins(arrData.ZaiQuantity.toFixed(2));
		} else {
			formElms[("ZaiQuantity" + pVal)].value = "";
		}

		//---加工費---
		if (JS_Check_If_Number(arrData.KakouQuantity)) {
			formElms[("KakouQuantity" + pVal)].value = JS_Comma_Ins(arrData.KakouQuantity.toFixed(2));
		} else {
			formElms[("KakouQuantity" + pVal)].value = "";
		}

		//---施工費---
		if (JS_Check_If_Number(arrData.SekouQuantity)) {
			formElms[("SekouQuantity" + pVal)].value = JS_Comma_Ins(arrData.SekouQuantity.toFixed(2));
		} else {
			formElms[("SekouQuantity" + pVal)].value = "";
		}

		//---追加経費---
		if (JS_Check_If_Number(arrData.CostQuantity)) {
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

		// 材料費金額 = 材料費数量×材料費単価×材料費掛率
		if (arrData.ZaiQuantity === "") {
			arrData.ZaiQuantity = JS_Comma_Del(formElms[("ZaiQuantity" + pVal)].value);
		}
		arrData.ZaiUPrice = JS_Comma_Del(formElms[("ZaiUPrice" + pVal)].value);
		arrData.ZaiKake   = JS_Comma_Del(formElms[("ZaiKake" + pVal)].value);

		// 加工費金額 = 加工費数量×加工費単価×加工費掛率
		if (arrData.KakouQuantity === "") {
			arrData.KakouQuantity = JS_Comma_Del(formElms[("KakouQuantity" + pVal)].value);
		}
		arrData.KakouUPrice = JS_Comma_Del(formElms[("KakouUPrice" + pVal)].value);
		arrData.KakouKake   = JS_Comma_Del(formElms[("KakouKake" + pVal)].value);

		// 施工費金額 = 施工費数量×施工費単価×施工費掛率
		if (arrData.SekouQuantity === "") {
			arrData.SekouQuantity = JS_Comma_Del(formElms[("SekouQuantity" + pVal)].value);
		}
		arrData.SekouUPrice = JS_Comma_Del(formElms[("SekouUPrice" + pVal)].value);
		arrData.SekouKake   = JS_Comma_Del(formElms[("SekouKake" + pVal)].value);

		// 追加経費金額 = 追加経費数量×追加経費単価×追加経費掛率
		if (arrData.CostQuantity === "") {
			arrData.CostQuantity = JS_Comma_Del(formElms[("CostQuantity" + pVal)].value);
		}
		arrData.CostUPrice = JS_Comma_Del(formElms[("CostUPrice" + pVal)].value);
		arrData.CostKake   = JS_Comma_Del(formElms[("CostKake" + pVal)].value);


		// 金額再計算
		noErr = JS_Uchiwake_Calc_Sub((pMode & 3), arrData);

		if (JS_Check_If_Number(arrData.Price)) {
			formElms[("Price" + pVal)].value = JS_Comma_Ins(parseInt(arrData.Price));
		} else {
			formElms[("Price" + pVal)].value = "";
		}

		if (JS_Check_If_Number(arrData.ZaiQuantity) && JS_Check_If_Number(arrData.ZaiPrice)) {
			formElms[("ZaiPrice" + pVal)].value = JS_Comma_Ins(parseInt(arrData.ZaiPrice));
		} else {
			formElms[("ZaiPrice" + pVal)].value = "";
		}

		if (JS_Check_If_Number(arrData.KakouQuantity) && JS_Check_If_Number(arrData.KakouPrice)) {
			formElms[("KakouPrice" + pVal)].value = JS_Comma_Ins(parseInt(arrData.KakouPrice));
		} else {
			formElms[("KakouPrice" + pVal)].value = "";
		}

		if (JS_Check_If_Number(arrData.SekouQuantity) && JS_Check_If_Number(arrData.SekouPrice)) {
			formElms[("SekouPrice" + pVal)].value = JS_Comma_Ins(parseInt(arrData.SekouPrice));
		} else {
			formElms[("SekouPrice" + pVal)].value = "";
		}

		if (JS_Check_If_Number(arrData.CostQuantity) && JS_Check_If_Number(arrData.CostPrice)) {
			formElms[("CostPrice" + pVal)].value = JS_Comma_Ins(parseInt(arrData.CostPrice));
		} else {
			formElms[("CostPrice" + pVal)].value = "";
		}

		// 原価 = （材料費＋加工費＋施工費＋追加経費）×（1.00＋経費率）
		if (JS_Check_If_Number(arrData.Cost)) {
			formElms[("Cost" + pVal)].value = JS_Comma_Ins(parseInt(arrData.Cost));
		} else {
			formElms[("Cost" + pVal)].value = "";
		}

		// 粗利
		if (JS_Check_If_Number(arrData.Profit)) {
			formElms[("Profit" + pVal)].value = JS_Comma_Ins(parseInt(arrData.Profit));
		} else {
			formElms[("Profit" + pVal)].value = "";
		}

		// 粗利率
		if (JS_Check_If_Number(arrData.ProfitRate)) {
			formElms[("ProfitRate" + pVal)].value = JS_Comma_Ins(arrData.ProfitRate.toFixed(2));
		} else {
			formElms[("ProfitRate" + pVal)].value = "";
		}
	}
	// ▲金額再計算((pMode & 3) == 1)

	// 別関数　内訳合計計算　消費税を含む見積金額の計算
	if ((pMode & 4) == 0) {
		JS_UchiwakeTotal_Calc();
	}
}


// 関数名：JS_Detail_Calc
// 機　能：内訳計算（行明細ダイアログ用）
// 引　数：pMode(1:金額再計算 2:見積数量変更)
function JS_Detail_Calc(pMode) {
	gDetailChanged = true;

	var formElms = document.form_detail.elements;
	var noErr = true;
	var arrData = {
		Quantity: "",
		Unit: "",
		UPrice: "",
		Price: "",
		ZaiKei: "",
		ZaiLoss: "",
		ZaiQuantity: "",
		ZaiUnit: "",
		ZaiKake: "",
		ZaiUPrice: "",
		ZaiPrice: "",
		KakouKei: "",
		KakouLoss: "",
		KakouQuantity: "",
		KakouUnit: "",
		KakouKake: "",
		KakouUPrice: "",
		KakouPrice: "",
		SekouKei: "",
		SekouLoss: "",
		SekouQuantity: "",
		SekouUnit: "",
		SekouKake: "",
		SekouUPrice: "",
		SekouPrice: "",
		CostKei: "",
		CostLoss: "",
		CostQuantity: "",
		CostUnit: "",
		CostKake: "",
		CostUPrice: "",
		CostPrice: "",
		Cost: "",
		Expenses: "",
		Profit: "",
		ProfitRate: ""
	};

	// 単価調整前の復元用単価破棄
	if (gHasPrevPrice) {
		JS_Remove_Prev_Price();
	}

	// ▼数量変更
	if (pMode == 2) {
		// 見積数量
		arrData.Quantity = JS_Txt_To_Float(formElms["Quantity"].value);
		// 材料費数量を算出する根拠（見積数量×係数×ロス率）
		arrData.ZaiKei = JS_Txt_To_Float(formElms["ZaiKei"].value);
		arrData.ZaiLoss = JS_Txt_To_Float(formElms["ZaiLoss"].value);
		// 加工費数量を算出する根拠（見積数量×係数×ロス率）
		arrData.KakouKei = JS_Txt_To_Float(formElms["KakouKei"].value);
		arrData.KakouLoss = JS_Txt_To_Float(formElms["KakouLoss"].value);
		// 施工費数量を算出する根拠（見積数量×係数×ロス率）
		arrData.SekouKei = JS_Txt_To_Float(formElms["SekouKei"].value);
		arrData.SekouLoss = JS_Txt_To_Float(formElms["SekouLoss"].value);
		// 追加経費数量を算出する根拠（見積数量×係数×ロス率）
		arrData.CostKei = JS_Txt_To_Float(formElms["CostKei"].value);
		arrData.CostLoss = JS_Txt_To_Float(formElms["CostLoss"].value);

		// 数量変更サブ
		noErr = JS_Uchiwake_Calc_Sub(pMode, arrData);

		// 見積数量変更→材料費・加工費・施工費・追加経費の数量変更→金額再計算

		//---見積---
		if (noErr) {
			formElms["Quantity"].value = JS_Comma_Ins(arrData.Quantity.toFixed(2));
			formElms["MituQuantity"].value = formElms["Quantity"].value;

			//---材料費---
			if (JS_Check_If_Number(arrData.ZaiQuantity)) {
				formElms["ZaiKei"].value = JS_Comma_Ins(arrData.ZaiKei.toFixed(4));
				formElms["ZaiLoss"].value = JS_Comma_Ins(arrData.ZaiLoss.toFixed(2));
				formElms["ZaiQuantity"].value = JS_Comma_Ins(arrData.ZaiQuantity.toFixed(2));
			} else {
				formElms["ZaiQuantity"].value = "";
			}

			//---加工費---
			if (JS_Check_If_Number(arrData.KakouQuantity)) {
				formElms["KakouKei"].value = JS_Comma_Ins(arrData.KakouKei.toFixed(4));
				formElms["KakouLoss"].value = JS_Comma_Ins(arrData.KakouLoss.toFixed(2));
				formElms["KakouQuantity"].value = JS_Comma_Ins(arrData.KakouQuantity.toFixed(2));
			} else {
				formElms["KakouQuantity"].value = "";
			}

			//---施工費---
			if (JS_Check_If_Number(arrData.SekouQuantity)) {
				formElms["SekouKei"].value = JS_Comma_Ins(arrData.SekouKei.toFixed(4));
				formElms["SekouLoss"].value = JS_Comma_Ins(arrData.SekouLoss.toFixed(2));
				formElms["SekouQuantity"].value = JS_Comma_Ins(arrData.SekouQuantity.toFixed(2));
			} else {
				formElms["SekouQuantity"].value = "";
			}

			//---追加経費---
			if (JS_Check_If_Number(arrData.CostQuantity)) {
				formElms["CostKei"].value = JS_Comma_Ins(arrData.CostKei.toFixed(4));
				formElms["CostLoss"].value = JS_Comma_Ins(arrData.CostLoss.toFixed(2));
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
			arrData.Quantity = JS_Txt_To_Float(formElms["Quantity"].value);
		}
		arrData.UPrice   = JS_Txt_To_Int(formElms["UPrice"].value);

		// 材料費金額 = 材料費数量×材料費単価×材料費掛率
		if (arrData.ZaiQuantity === "") {
			arrData.ZaiQuantity = JS_Txt_To_Float(formElms["ZaiQuantity"].value);
		}
		arrData.ZaiUPrice = JS_Txt_To_Int(formElms["ZaiUPrice"].value);
		arrData.ZaiKake   = JS_Txt_To_Float(formElms["ZaiKake"].value);

		// 加工費金額 = 加工費数量×加工費単価×加工費掛率
		if (arrData.KakouQuantity === "") {
			arrData.KakouQuantity = JS_Txt_To_Float(formElms["KakouQuantity"].value);
		}
		arrData.KakouUPrice = JS_Txt_To_Int(formElms["KakouUPrice"].value);
		arrData.KakouKake   = JS_Txt_To_Float(formElms["KakouKake"].value);

		// 施工費金額 = 施工費数量×施工費単価×施工費掛率
		if (arrData.SekouQuantity === "") {
			arrData.SekouQuantity = JS_Txt_To_Float(formElms["SekouQuantity"].value);
		}
		arrData.SekouUPrice = JS_Txt_To_Int(formElms["SekouUPrice"].value);
		arrData.SekouKake   = JS_Txt_To_Float(formElms["SekouKake"].value);

		// 追加経費金額 = 追加経費数量×追加経費単価×追加経費掛率
		if (arrData.CostQuantity === "") {
			arrData.CostQuantity = JS_Txt_To_Float(formElms["CostQuantity"].value);
		}
		arrData.CostUPrice = JS_Txt_To_Int(formElms["CostUPrice"].value);
		arrData.CostKake   = JS_Txt_To_Float(formElms["CostKake"].value);


		// 金額再計算サブ
		noErr = JS_Uchiwake_Calc_Sub(pMode, arrData);

		if (JS_Check_If_Number(arrData.Price)) {
			formElms["MituPrice"].value = JS_Comma_Ins(parseInt(arrData.Price));
		} else {
			formElms["MituPrice"].value = "";
		}

		if (JS_Check_If_Number(arrData.ZaiPrice)) {
			formElms["ZaiPrice"].value = JS_Comma_Ins(parseInt(arrData.ZaiPrice));
		} else {
			formElms["ZaiPrice"].value = "";
		}

		if (JS_Check_If_Number(arrData.KakouPrice)) {
			formElms["KakouPrice"].value = JS_Comma_Ins(parseInt(arrData.KakouPrice));
		} else {
			formElms["KakouPrice"].value = "";
		}

		if (JS_Check_If_Number(arrData.SekouPrice)) {
			formElms["SekouPrice"].value = JS_Comma_Ins(parseInt(arrData.SekouPrice));
		} else {
			formElms["SekouPrice"].value = "";
		}

		if (JS_Check_If_Number(arrData.CostPrice)) {
			formElms["CostPrice"].value = JS_Comma_Ins(parseInt(arrData.CostPrice));
		} else {
			formElms["CostPrice"].value = "";
		}

		// 経費 = （材料費＋加工費＋施工費＋追加経費）×経費率
		if (JS_Check_If_Number(arrData.Expenses)) {
			formElms["Expenses"].value = JS_Float_To_Txt(arrData.Expenses);
		} else {
			formElms["Expenses"].value = "";
		}

		// 原価 = （材料費＋加工費＋施工費＋追加経費＋経費）×（1.00＋経費率）
		if (JS_Check_If_Number(arrData.Cost)) {
			formElms["Cost"].value = JS_Comma_Ins(parseInt(arrData.Cost));
		} else {
			formElms["Cost"].value = "";
		}

		// 原価率 = 原価÷見積金額×100(%)
		if (JS_Check_If_Number(arrData.Cost) && JS_Check_If_Number(arrData.Price) && arrData.Price > 0) {
			formElms["CostRate"].value = JS_Comma_Ins(parseFloat(arrData.Cost / arrData.Price * 100).toFixed(2));
		} else {
			formElms["CostRate"].value = "";
		}

		// 原単価 = 原価÷見積数量
		if (JS_Check_If_Number(arrData.Cost) && JS_Check_If_Number(arrData.Quantity)) {
			formElms["UCost"].value = JS_Float_To_Txt(arrData.Cost / arrData.Quantity);
		} else {
			formElms["UCost"].value = "";
		}

		// 粗利
		if (JS_Check_If_Number(arrData.Profit)) {
			formElms["Profit"].value = JS_Comma_Ins(parseInt(arrData.Profit));
		} else {
			formElms["Profit"].value = "";
		}

		// 粗利率
		if (JS_Check_If_Number(arrData.ProfitRate)) {
			formElms["ProfitRate"].value = JS_Comma_Ins(arrData.ProfitRate.toFixed(2));
		} else {
			formElms["ProfitRate"].value = "";
		}
	}
	// ▲金額再計算(pMode == 1)
}


// 関数名：JS_Uchiwake_Calc_Sub
// 機　能：内訳計算（共通部分）
// 引　数：pMode(1:金額再計算 2:見積数量変更), pData(明細データ) 
function JS_Uchiwake_Calc_Sub(pMode, pData) {
	var noErr = true;

	// ▼数量変更
	if (pMode == 2) {
		// 見積数量変更→材料費・加工費・施工費の数量変更
		var fltLossRate = 0;

		// 見積数量
		if (JS_Check_If_Number(pData.Quantity)) {
			pData.Quantity = parseFloat(pData.Quantity);
		} else {
			return false;
		}

		// 材料費数量 = 見積数量×材料費係数×材料費ロス率
		if (JS_Check_If_Number(pData.ZaiKei) && JS_Check_If_Number(pData.ZaiLoss)) {
			pData.ZaiKei = parseFloat(pData.ZaiKei);
			fltLossRate = parseFloat(pData.ZaiLoss) * 0.01 + 1;
			pData.ZaiQuantity = parseFloat(pData.Quantity * pData.ZaiKei * fltLossRate);
		}

		// 加工費数量 = 見積数量×加工費係数×加工費ロス率
		if (JS_Check_If_Number(pData.KakouKei) && JS_Check_If_Number(pData.KakouLoss)) {
			pData.KakouKei = parseFloat(pData.KakouKei);
			fltLossRate = parseFloat(pData.KakouLoss) * 0.01 + 1;
			pData.KakouQuantity = parseFloat(pData.Quantity * pData.KakouKei * fltLossRate);
		}

		// 施工費数量 = 見積数量×施工費係数×施工費ロス率
		if (JS_Check_If_Number(pData.SekouKei) && JS_Check_If_Number(pData.SekouLoss)) {
			pData.SekouKei = parseFloat(pData.SekouKei);
			fltLossRate = parseFloat(pData.SekouLoss) * 0.01 + 1;
			pData.SekouQuantity = parseFloat(pData.Quantity * pData.SekouKei * fltLossRate);
		}

		// 追加経費数量 = 追加経費数量×追加経費係数×追加経費ロス率
		if (JS_Check_If_Number(pData.CostKei) && JS_Check_If_Number(pData.CostLoss)) {
			pData.CostKei = parseFloat(pData.CostKei);
			fltLossRate = parseFloat(pData.CostLoss) * 0.01 + 1;
			pData.CostQuantity = parseFloat(pData.Quantity * pData.CostKei * fltLossRate);
		}

		return noErr;
	}
	// ▲数量変更

	// ▼金額再計算（価格系は最終的に整数値になるが計算は小数点以下2桁までみる）
	if (pMode == 1) {
		var fltRate = 0;

		// 見積金額 = 見積数量×見積単価（見積の掛率は常に1.00なので省略）
		if (JS_Check_If_Number(pData.Quantity) && JS_Check_If_Number(pData.UPrice)) {
			pData.Quantity = parseFloat(pData.Quantity);
			pData.Price    = JS_Rounding(pData.Quantity * parseInt(pData.UPrice), 0, gRoundOption);
		} else {
			noErr = false;
		}

		// 材料費金額 = 材料費数量×材料費単価×材料費掛率
		if (JS_Check_If_Number(pData.ZaiQuantity) && JS_Check_If_Number(pData.ZaiKake) && JS_Check_If_Number(pData.ZaiUPrice)) {
			pData.ZaiQuantity = parseFloat(pData.ZaiQuantity);
			fltRate           = parseFloat(pData.ZaiKake) * 0.01;
			pData.ZaiPrice    = JS_Rounding(pData.ZaiQuantity * fltRate * parseInt(pData.ZaiUPrice), 0, gRoundOption);
		} else {
			pData.ZaiPrice = 0;
			//noErr = false;
		}

		// 加工費金額 = 加工費数量×加工費単価×加工費掛率
		if (JS_Check_If_Number(pData.KakouQuantity) && JS_Check_If_Number(pData.KakouKake) && JS_Check_If_Number(pData.KakouUPrice)) {
			pData.KakouQuantity = parseFloat(pData.KakouQuantity);
			fltRate             = parseFloat(pData.KakouKake) * 0.01;
			pData.KakouPrice    = JS_Rounding(pData.KakouQuantity * fltRate * parseInt(pData.KakouUPrice), 0, gRoundOption);
		} else {
			pData.KakouPrice = 0;
			//noErr = false;
		}

		// 施工費金額 = 施工費数量×施工費単価×施工費掛率
		if (JS_Check_If_Number(pData.SekouQuantity) && JS_Check_If_Number(pData.SekouKake) && JS_Check_If_Number(pData.SekouUPrice)) {
			pData.SekouQuantity = parseFloat(pData.SekouQuantity);
			fltRate             = parseFloat(pData.SekouKake) * 0.01;
			pData.SekouPrice    = JS_Rounding(pData.SekouQuantity * fltRate * parseInt(pData.SekouUPrice), 0, gRoundOption);
		} else {
			pData.SekouPrice = 0;
			//noErr = false;
		}

		// 追加経費金額 = 追加経費数量×追加経費単価×追加経費掛率
		if (JS_Check_If_Number(pData.CostQuantity) && JS_Check_If_Number(pData.CostKake) && JS_Check_If_Number(pData.CostUPrice)) {
			pData.CostQuantity = parseFloat(pData.CostQuantity);
			fltRate            = parseFloat(pData.CostKake) * 0.01;
			pData.CostPrice    = JS_Rounding(pData.CostQuantity * fltRate * parseInt(pData.CostUPrice), 0, gRoundOption);
		} else {
			pData.CostPrice = 0;
			//noErr = false;
		}

		// 粗利計算
		// 経費率(％)
		var fltExpenseRate  = document.Mitsumori.ExpenseRate.value != "" ? parseFloat(document.Mitsumori.ExpenseRate.value) : 0;
		// 経費込原価 = （材料費＋加工費＋施工費＋追加経費）×（1.00＋経費率）
		var fltCost = 0.0;

		if (noErr) {
			fltCost = parseFloat(pData.ZaiPrice + pData.KakouPrice + pData.SekouPrice + pData.CostPrice);

			if (JS_Check_If_Number(fltCost)) {
				// 経費 = 原価×経費率
				pData.Expenses = JS_Rounding(fltCost * (fltExpenseRate / 100), 2, gRoundOption);
				pData.Cost = JS_Rounding(fltCost + pData.Expenses, 0, gRoundOption);
			} else {
				noErr = false;
			}
		}

		// 粗利 = 見積金額－経費込原価
		if (noErr) {
			pData.Profit = JS_Rounding(parseFloat(pData.Price) - parseFloat(pData.Cost), 2, gRoundOption);

			if (! JS_Check_If_Number(pData.Profit)) {
				noErr = false;
			}
		}


		// 粗利率 = 粗利÷見積金額×100
		if (noErr) {
			pData.ProfitRate = parseFloat(pData.Profit / pData.Price * 100);

			if (! JS_Check_If_Number(pData.ProfitRate)) {
				noErr = false;
			}
		}

		return noErr;
	}
	// ▲金額再計算(pMode == 1)

	return false;
}

// 関数名：JS_Sync_Value
// 機　能：行明細ダイアログ内のヘッダーとリストを同期　※数量,単位,単価
// 引　数：pObj(値が変更されたinputオブジェクト) 
function JS_Sync_Value(pObj) {
	var theForm = document.form_detail;

	switch (pObj.name) {
		case "Quantity":
			theForm.MituQuantity.value = JS_Float_To_Txt(theForm.Quantity.value);

			// 材料未選択の場合
			if (theForm.ZaiName.value == "") {
				// 材料費・加工費・施工費・追加経費の係数・ロス率・数量・単位・掛率に初期値を入れる
				JS_Init_Values(theForm, "Quantity", theForm.MituQuantity.value);
			}
			break;
		case "Unit":
			theForm.MituUnit.value = theForm.Unit.value;

			// 材料未選択の場合
			if (theForm.ZaiName.value == "") {
				// 材料費・加工費・施工費・追加経費の単位にもコピーする
				JS_Init_Values(theForm, "Unit", theForm.MituUnit.value);
			}
			break;
		case "UPrice":
			theForm.MituUPrice.value = JS_Int_To_Txt(theForm.UPrice.value);
			break;
		case "MituQuantity":
			theForm.Quantity.value = JS_Float_To_Txt(theForm.MituQuantity.value);
			break;
		case "MituUnit":
			theForm.Unit.value = theForm.MituUnit.value;
			break;
		case "MituUPrice":
			theForm.UPrice.value = JS_Int_To_Txt(theForm.MituUPrice.value);
			break;
		case "ZaiQuantity": // 材料費係数 = 材料費数量÷材料費ロス率÷見積数量
			var var1 = JS_Txt_To_Float(pObj.value);
			var var2 = JS_Txt_To_Float(theForm.ZaiLoss.value);
			var var3 = JS_Txt_To_Float(theForm.MituQuantity.value);

			if (JS_Check_If_Number(var1) && JS_Check_If_Number(var2) && JS_Check_If_Number(var3)) {
				var var4 = JS_Rounding(parseFloat(var1 / (var2 * 0.01 + 1) / var3), 4, gRoundOption);
				theForm.ZaiKei.value = JS_Float_To_Txt(var4, 4);
			} else {
				pObj.value = "0.00";
				theForm.ZaiKei.value = JS_Float_To_Txt(0);
			}
			break;
		case "KakouQuantity": // 加工費係数 = 加工費数量÷加工費ロス率÷見積数量
			var var1 = JS_Txt_To_Float(pObj.value);
			var var2 = JS_Txt_To_Float(theForm.KakouLoss.value);
			var var3 = JS_Txt_To_Float(theForm.MituQuantity.value);

			if (JS_Check_If_Number(var1) && JS_Check_If_Number(var2) && JS_Check_If_Number(var3)) {
				var var4 = JS_Rounding(parseFloat(var1 / (var2 * 0.01 + 1) / var3), 4, gRoundOption);
				theForm.KakouKei.value = JS_Float_To_Txt(var4, 4);
			} else {
				pObj.value = "0.00";
				theForm.KakouKei.value = JS_Float_To_Txt(0);
			}
			break;
		case "SekouQuantity": // 施工費係数 = 施工費数量÷施工費ロス率÷見積数量
			var var1 = JS_Txt_To_Float(pObj.value);
			var var2 = JS_Txt_To_Float(theForm.SekouLoss.value);
			var var3 = JS_Txt_To_Float(theForm.MituQuantity.value);

			if (JS_Check_If_Number(var1) && JS_Check_If_Number(var2) && JS_Check_If_Number(var3)) {
				var var4 = JS_Rounding(parseFloat(var1 / (var2 * 0.01 + 1) / var3), 4, gRoundOption);
				theForm.SekouKei.value = JS_Float_To_Txt(var4, 4);
			} else {
				pObj.value = "0.00";
				theForm.SekouKei.value = JS_Float_To_Txt(0);
			}
			break;
		case "CostQuantity": // 追加経費係数 = 追加経費数量÷追加経費ロス率÷見積数量
			var var1 = JS_Txt_To_Float(pObj.value);
			var var2 = JS_Txt_To_Float(theForm.CostLoss.value);
			var var3 = JS_Txt_To_Float(theForm.MituQuantity.value);

			if (JS_Check_If_Number(var1) && JS_Check_If_Number(var2) && JS_Check_If_Number(var3)) {
				var var4 = JS_Rounding(parseFloat(var1 / (var2 * 0.01 + 1) / var3), 4, gRoundOption);
				theForm.CostKei.value = JS_Float_To_Txt(var4, 4);
			} else {
				pObj.value = "0.00";
				theForm.CostKei.value = JS_Float_To_Txt(0);
			}
			break;
	}
}

// 関数名：JS_Init_Values
// 機　能：行明細ダイアログ内の材料費・加工費・施工費・追加経費の係数・ロス率・数量・単位・掛率を初期化する
// 引　数：pForm(formオブジェクト), pKey(input名) , pValue(値) 
function JS_Init_Values(pForm, pKey, pValue) {
	if (pKey == "Quantity") {
		if (pForm.ZaiKei.value.length == 0) {
			// 材料費
			pForm.ZaiKei.value = "1.0000";
			pForm.ZaiLoss.value = "0.00";
			pForm.ZaiQuantity.value = pValue;
			pForm.ZaiUnit.value = pForm.Unit.value;
			pForm.ZaiKake.value = "100.0";

			// 加工費
			pForm.KakouKei.value = "1.0000";
			pForm.KakouLoss.value = "0.00";
			pForm.KakouQuantity.value = pValue;
			pForm.KakouUnit.value = pForm.Unit.value;
			pForm.KakouKake.value = "100.0";

			// 施工費
			pForm.SekouKei.value = "1.0000";
			pForm.SekouLoss.value = "0.00";
			pForm.SekouQuantity.value = pValue;
			pForm.SekouUnit.value = pForm.Unit.value;
			pForm.SekouKake.value = "100.0";
		}

		if (pForm.CostKei.value.length == 0) {
			// 追加経費
			pForm.CostKei.value = "1.0000";
			pForm.CostLoss.value = "0.00";
			pForm.CostQuantity.value = pValue;
			pForm.CostUnit.value = pForm.Unit.value;
			pForm.CostKake.value = "100.0";
		}
	} else if (pKey == "Unit") {
		if (pForm.ZaiUnit.value.length == 0) {
			pForm.ZaiUnit.value = pValue;
			pForm.KakouUnit.value = pValue;
			pForm.SekouUnit.value = pValue;
			pForm.CostUnit.value  = pValue;
		}
	}
}

// 関数名：JS_Row_Ins
// 機　能：明細行挿入
// 引　数：insRowNo(挿入する行番号)
function JS_Row_Ins(insRowNo) {
	var $detailRows = $("table#tbl2 > tbody > tr");
	var $srcRowElms, $dstRowElms;

	if (insRowNo > $detailRows.length) {
		alert("挿入する行の指定が不正です。");
		return;
	}

	for (var i = $detailRows.length; i > insRowNo; i--) { // データを移動する
		$srcRowElms = $("input[type=text],input[name*=Memo]", $detailRows.get(i - 2));
		$dstRowElms = $("input[type=text],input[name*=Memo]", $detailRows.get(i - 1));

		$srcRowElms.each(function(index){
			$($dstRowElms.get(index)).val($(this).val());
		});
	}

	// 最終行は行データを消すだけ
	$("input[type=text],input[name*=Memo]", $detailRows.get(insRowNo - 1)).each(function(){
		$(this).val("");
	});
}

// 関数名：JS_Row_Del
// 機　能：明細行削除
// 引　数：delRowNo(削除する行番号)
function JS_Row_Del(delRowNo) {
	var $detailRows = $("table#tbl2 > tbody > tr");
	var $srcRowElms, $dstRowElms;

	if (delRowNo > $detailRows.length) {
		alert("削除する行の指定が不正です。");
		return;
	}

	while (delRowNo < $detailRows.length) { // データを移動する
		$srcRowElms = $("input[type=text],input[name*=Memo]", $detailRows.get(delRowNo - 1));
		$dstRowElms = $("input[type=text],input[name*=Memo]", $detailRows.get(delRowNo));

		$srcRowElms.each(function(index){
			$(this).val($($dstRowElms.get(index)).val());
		});

		delRowNo++;
	}

	// 最終行は行データを消すだけ
	$("input[type=text],input[name*=Memo]", $detailRows.get($detailRows.length - 1)).each(function(){
		$(this).val("");
	});
}

// 関数名：JS_ExpenseRate_Changed
// 機　能：見積固有経費率変更時の処理（DOMオブジェクト版）
// 説　明：半角数値以外の文字を削除した後、空文字だったらデフォルトの経費率をセットする
// 引　数：DOM<input>オブジェクト
function JS_ExpenseRate_Changed(obj) {
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

// 関数名：JS_Append_Comma
// 機　能：テキストブラー時カンマ挿入（DOMオブジェクト版）
// 引　数：DOM<input>オブジェクト
function JS_Append_Comma(obj) {
	if (obj.value.match(/^[+-]?[\d,.]+$/)) {
		obj.value = JS_Comma_Ins(obj.value);
	} else {
		obj.value = "";
	}
}

// 関数名：JS_Remove_Comma
// 機　能：inputからカンマを除去する（DOMオブジェクト版）
// 引　数：DOM<input>オブジェクト
function JS_Remove_Comma(obj) {
	obj.value = JS_Comma_Del(obj.value);
}

// 関数名：JS_Only_Numbers
// 機　能：テキストブラー時文字列削除（DOMオブジェクト版）
// 説　明：数値のみテキストの文字削除
// 引　数：DOM<input>オブジェクト
function JS_Only_Numbers(obj) {
	if (obj && obj.value.length > 0){
		if (isNaN(obj.value)) {
			obj.value = "";
		}
	}
}

// 関数名：JS_Check_If_Number
// 機　能：渡された値が数値か判断する
// 説　明：空文字なら数値とは見なされない
// 引　数：判断する値
function JS_Check_If_Number(val) {
	if (val === "" || isNaN(val)) {
		return false;
	}

	return true;
}

// 関数名：JS_Txt_To_Int
// 機　能：カンマ区切り数字を整数型に変換
function JS_Txt_To_Int(pVal) {
	pVal = JS_Comma_Del(pVal);

	if (JS_Check_If_Number(pVal)) {
		pVal = parseInt(pVal);
	}

	return pVal;
}

// 関数名：JS_Int_To_Txt
// 機　能：整数をカンマ区切り数字に変換
function JS_Int_To_Txt(pVal) {
	if (JS_Check_If_Number(pVal)) {
		pVal = JS_Comma_Ins(parseInt(pVal));
	}

	return pVal;
}

// 関数名：JS_Txt_To_Float
// 機　能：カンマ区切り数字を浮動小数型に変換
function JS_Txt_To_Float(pVal) {
	pVal = JS_Comma_Del(pVal);

	if (JS_Check_If_Number(pVal)) {
		pVal = parseFloat(pVal);
	}

	return pVal;
}

// 関数名：JS_Float_To_Txt
// 機　能：整数をカンマ区切り数字に変換
function JS_Float_To_Txt(pVal, pDecimal = 2) {
	if (JS_Check_If_Number(pVal)) {
		pVal = JS_Comma_Ins(parseFloat(pVal).toFixed(pDecimal));
	} else {
		pVal = "";
	}

	return pVal;
}

// 関数名：JS_Copy_Line
// 機　能：明細行を１行コピーする
// 引　数：from:コピー元, to:コピー先, srcForm:コピー元のformオブジェクト
function JS_Copy_Line(from, to, srcForm) {
	var dstForm = document.Mitsumori;

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
		dstForm["Cost" + to].value = srcForm["Cost" + from].value;
		dstForm["Profit" + to].value = srcForm["Profit" + from].value;
		dstForm["ProfitRate" + to].value = srcForm["ProfitRate" + from].value;
		dstForm["ZaiQuantity" + to].value = srcForm["ZaiQuantity" + from].value;
		dstForm["ZaiUnit" + to].value = srcForm["ZaiUnit" + from].value;
		dstForm["ZaiUPrice" + to].value = srcForm["ZaiUPrice" + from].value;
		dstForm["ZaiPrice" + to].value = srcForm["ZaiPrice" + from].value;
		dstForm["ZaiKei" + to].value = srcForm["ZaiKei" + from].value;
		dstForm["ZaiLoss" + to].value = srcForm["ZaiLoss" + from].value;
		dstForm["ZaiKake" + to].value = srcForm["ZaiKake" + from].value;
		dstForm["KakouQuantity" + to].value = srcForm["KakouQuantity" + from].value;
		dstForm["KakouUnit" + to].value = srcForm["KakouUnit" + from].value;
		dstForm["KakouUPrice" + to].value = srcForm["KakouUPrice" + from].value;
		dstForm["KakouPrice" + to].value = srcForm["KakouPrice" + from].value;
		dstForm["KakouKei" + to].value = srcForm["KakouKei" + from].value;
		dstForm["KakouLoss" + to].value = srcForm["KakouLoss" + from].value;
		dstForm["KakouKake" + to].value = srcForm["KakouKake" + from].value;
		dstForm["SekouQuantity" + to].value = srcForm["SekouQuantity" + from].value;
		dstForm["SekouUnit" + to].value = srcForm["SekouUnit" + from].value;
		dstForm["SekouUPrice" + to].value = srcForm["SekouUPrice" + from].value;
		dstForm["SekouPrice" + to].value = srcForm["SekouPrice" + from].value;
		dstForm["SekouKei" + to].value = srcForm["SekouKei" + from].value;
		dstForm["SekouLoss" + to].value = srcForm["SekouLoss" + from].value;
		dstForm["SekouKake" + to].value = srcForm["SekouKake" + from].value;
		dstForm["CostQuantity" + to].value = srcForm["CostQuantity" + from].value;
		dstForm["CostUnit" + to].value = srcForm["CostUnit" + from].value;
		dstForm["CostUPrice" + to].value = srcForm["CostUPrice" + from].value;
		dstForm["CostPrice" + to].value = srcForm["CostPrice" + from].value;
		dstForm["CostKei" + to].value = srcForm["CostKei" + from].value;
		dstForm["CostLoss" + to].value = srcForm["CostLoss" + from].value;
		dstForm["CostKake" + to].value = srcForm["CostKake" + from].value;
		dstForm["Memo" + to].value = srcForm["Memo" + from].value;
		dstForm["ZaiMemo" + to].value = srcForm["ZaiMemo" + from].value;
		dstForm["KakouMemo" + to].value = srcForm["KakouMemo" + from].value;
		dstForm["SekouMemo" + to].value = srcForm["SekouMemo" + from].value;
		dstForm["CostMemo" + to].value = srcForm["CostMemo" + from].value;
	}
}

// 関数名：JS_Check_Room
// 機　能：明細行を貼付ける余裕があるかチェックする
// 引　数：request:行数, insertPoint:貼付位置
function JS_Check_Room(request, insertPoint) {
	var theForm = $("form#form2").get(0);
	var i = theForm.UchiwakeCnt.value;

	for (var j = request; j > 0; j--) {
		if (theForm["Heading" + i].value !== ""
				 || theForm["ZaiName" + i].value !== "" 
				 || theForm["Material" + i].value !== ""
				 || theForm["Quantity" + i].value != "" || theForm["Price" + i].value != "") {
			//	alert("" + request + "行コピーしようとしましたが十分な空きがありません（残り" + (request - j) + "行です）。");
			return j;
		} else if (insertPoint) {
			if (insertPoint == i && j > 1) {
			//	alert("" + insertPoint + "行目から" + request + "行貼付けようとしましたが十分な空きがありません（残り" + (theForm.UchiwakeCnt.value - i + 1) + "行です）。");
				return request - (theForm.UchiwakeCnt.value - i + 1);
			}
		}

		i--;
	}

	return 0;
}

// 関数名：JS_Handle_Click
// 機　能：明細行チェックボックスのイベントハンドラ
// 引　数：obj:チェックされたDOMオブジェクト
function JS_Handle_Click(obj) {
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

		if (gCopyRefLines.length > 0) { // 参照ペースト可能
			if (numChecked > 0) {
				$("#container-inner #btn-ref-paste").removeClass("input-off").addClass("input-on");
			} else {
				$("#container-inner #btn-ref-paste").removeClass("input-on").addClass("input-off");
			}
		}
	}
}

// 関数名：JS_Handle_Click_Ref
// 機　能：参照する見積の明細行チェックボックスのイベントハンドラ
// 引　数：obj:チェックされたDOMオブジェクト
function JS_Handle_Click_Ref(obj) {
	var numChecked = $("#form-refview input.chkref:checked").length;

	if (!$(obj).prop("checked") & $("#refview-modal-dialog input#checkAllRef").prop("checked")) {
		$("#form-refview input#checkAllRef").prop("checked", false);
	}

	if (numChecked > 0) {
		$("#form-refview .linecopy-btn input").removeClass("input-off").addClass("input-on");
	} else {
		$("#form-refview .linecopy-btn input").removeClass("input-on").addClass("input-off");
	}
}

// 関数名：JS_Add_Detail_Rows
// 機　能：明細行をページ（23行）単位で追加する
// 引　数：shortage:貼付に不足する行素
function JS_Add_Detail_Rows(shortage) {
	// 不足分の空白行を末尾にページ単位で追加する。
	var morepage = parseInt((shortage + 22) / 23);
	var row_count = parseInt(document.Mitsumori.UchiwakeCnt.value);
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
		JS_Handle_Click(this);
	});

	$("input.open-detail-dialog-new").click(function(){
		JS_Open_Detail_Dialog(this);
	});

	$("input.chkrow-new").removeClass("chkrow-new").addClass("chkrow").removeClass("open-detail-dialog-new").addClass("open-detail-dialog");

	document.Mitsumori.UchiwakeCnt.value = new_max;
	$("#label-max-line-page").text("" + new_max + "行／" + parseInt((new_max + 22) / 23) + "ページ");

	// 行数変更selectのoptionsを調整する
	$("select#sel04 > option:lt(" + morepage + ")").remove();

	$("select#sel04 > option").each(function(){
		var lines = 1 * $(this).val();
		var delta = parseInt((lines - new_max) / 23);
		$(this).text("" + delta + "ページ追加　【" + lines + "行／" + (delta + max_page) + "ページ】");
	});
}

// 関数名：JS_Ref_Search
// 機　能：参照元見積リストの取得
function JS_Ref_Search() {
	$("#reference-search-result").addClass("hide");
	$("#refer-modal-dialog-inner .loading-box").removeClass("hide");

	$.ajax({
		type: "post",
		url: "/ajax_search_reference.php",
		data: $("form#form_reference").serialize(),
		dataType: "json",
		async: true,
		cache: false,
		success: function(json_data) {
			var $context = $("#reference-search-result .dashuboard");

			if (json_data.result == "ok") {
				$(".search-result-count", $context).text(json_data.count);
				$(".search-result-error", $context).text("");

				if ($("table.found-records > tbody > tr", $context).length > 1) {
					$("table.found-records > tbody > tr:gt(0)", $context).remove();
				}

				$("table.found-records", $context).removeClass("hide");
				$("table.found-records > tbody", $context).append(json_data.rows);

				$("table.found-records button.refrow", $context).click(function(){
					JS_Ref_View(this);
				});

				$("#reference-search-result").removeClass("hide");
			} else if (json_data.error) {
				$(".search-result-count", $context).text("0");
				$(".search-result-error", $context).text(json_data.error);
				$("table.found-records").addClass("hide");
				$("#reference-search-result").removeClass("hide");
			}
		},
		error: function() {
			alert("サーバとの通信に失敗しました。参照元の見積を検索できませんでした。");
		},
		complete: function() {
			$("#refer-modal-dialog-inner .loading-box").addClass("hide");
		}
	});
}

// 関数名：JS_Open_Reference_Dialog
// 機　能：参照元見積のダイアログを開く
function JS_Open_Reference_Dialog(){
	if (gReferId == 0) {
		gReferModal.dialog("close");
		return;
	}

	gReferModal.dialog("open");
}

// 関数名：JS_Ref_View
// 機　能：参照元見積の表示
// 引　数：btn(表示ボタン)
function JS_Ref_View(btn) {
	gRefSearchModal.dialog("close");

	if (gReferId == btn.id.replace("ref-", "")) {
		$("#btn-ref-select").click();
		return;
	}

	gReferId = btn.id.replace("ref-", "");
	gLoadingModal.dialog("open");

	$.ajax({
		type: "get",
		url: "/ajax_get_reference.php",
		data: {id:gReferId},
		dataType: "json",
		async: true,
		cache: false,
		success: function(json_data) {
			if (json_data.result == "ok") {
				var $context = $("#refview-modal-dialog-inner");

				if ($("p.open", $context).hasClass("active")) {
					$(".input-cell", $context).slideToggle();
					$("p.open", $context).removeClass("active");
				}

				$("p.open", $context).text(json_data.header.KoujiName);
				$("#refMituCode", $context).val(json_data.header.MituCode);
				$("#refMituDate", $context).val(json_data.header.MituDate);
				$("#refLimitValue", $context).val(json_data.header.LimitValue);
				$("#refLimitFlg", $context).val(json_data.header.LimitFlg);
				$("#refCustName", $context).val(json_data.header.CustName);
				$("#refHonorificFlg", $context).val(json_data.header.HonorificFlg);
				$("#refKoujiName", $context).val(json_data.header.KoujiName);
				$("#refTantoName", $context).val(json_data.header.TantoName);
				$("#refMituCorpID", $context).val(json_data.header.MituCorpID);
				$("#refSekouName", $context).val(json_data.header.SekouName);
				$("#refConstDate", $context).val(json_data.header.ConstDate);
				$("#refCompDate", $context).val(json_data.header.CompDate);
				$("#refPay", $context).val(json_data.header.Pay);
				$("#refMituPriceNoTax", $context).val(json_data.header.MituPriceNoTax);
				$("#refTaxRate", $context).val(json_data.header.TaxRate);
				$("#refTaxFlag", $context).prop("checked", json_data.header.TaxFlag != "0" ? true : false);
				$("#refMituDiscount", $context).val(json_data.header.MituDiscount);
				$("#refDiscountFlag", $context).prop("checked", json_data.header.DiscountFlag != "0" ? true : false);
				$("#refMituPrice", $context).val(json_data.header.MituPrice);
				$("#refMituNetPrice", $context).val(json_data.header.MituNetPrice);
				$("#refMituTaxDiscount", $context).val(json_data.header.MituTaxDiscount);
				$("#refMituTotalPrice", $context).val(json_data.header.MituTotalPrice);
				$("#refRemark", $context).val(json_data.header.Remark);
				$("#refMemo", $context).val(json_data.header.Memo);
				$("#refFootNote", $context).val(json_data.header.FootNote);

				if ($("table#ref-tbl-detail > tbody > tr", $context).length > 0) {
					$("table#ref-tbl-detail > tbody > tr", $context).remove();
				}

				$("table#ref-tbl-detail > tbody", $context).append(json_data.rows);

				$("#form-refview input.chkref", $context).click(function(){
					JS_Handle_Click_Ref(this);
				});

				$("#btn-ref-select").removeClass("input-off").addClass("input-on");
				JS_Open_Reference_Dialog();
			} else if (json_data.error) {
				gReferId = 0;
				$("#btn-ref-select").removeClass("input-on").addClass("input-off");
				gLoadingModal.dialog("close");
				alert(json_data.error);
			}
		},
		error: function() {
			gReferId = 0;
			$("#btn-ref-select").removeClass("input-on").addClass("input-off");
			gLoadingModal.dialog("close");
			alert("サーバとの通信に失敗しました。参照する見積を取得できませんでした。");
		}
	});
}

// 関数名：JS_NetPrice_Changed
// 機　能：ネット金額の変更を粗利確認ボードへ反映する
// 引　数：pSortId:ソートID
function JS_NetPrice_Changed() {
	var $netPrice = $("input#frm-MituNetPrice");
	JS_Append_Comma($netPrice.get(0));

	if ($("input#chkNetBaseFlag").prop("checked")) {
		$("input#chkNetBaseFlag").change();
	}
}

// 関数名：JS_Ref_Sort
// 機　能：参照元見積リストの並び順を変更する
// 引　数：pSortId:ソートID
function JS_Ref_Sort(pSortId) {
	if (pSortId != "") {
		document.form_reference.Sort.value = pSortId;
		JS_Ref_Search();
	}

	return false;
}

// 関数名：JS_PreOpen
// 機　能：モーダルダイアログが表示される直前に呼ばれるコールバック
// 引　数：obj:モーダルダイアログ
function JS_PreOpen(obj) {
	switch ($(obj).attr("id")) {
		case "modal_print_menu":
			$("#modal_print_menu .dashuboard").addClass("nodisp");
			break;
		case "modal_convert5_menu":
			// 現在の見積金額と粗利率をセットする
			$("form#form_convert5 #cur_price").val($("#frm-MituPriceNoTax").val());
			$("form#form_convert5 #cur_rate").val($("#frm-TotalProfitRate").val());

			// 目標が金額か粗利率かによってUIを切り替える
			if ($("form#form_convert5 #cnv5_target").val() == "0") {
				// 目標金額に近付ける
				$("div#modal_convert5_menu li.price").removeClass("nodisp");
				$("div#modal_convert5_menu li.rate").addClass("nodisp");
			} else {
				// 目標粗利率に近付ける
				$("div#modal_convert5_menu li.price").addClass("nodisp");
				$("div#modal_convert5_menu li.rate").removeClass("nodisp");
			}
			break;
		default:
			break;
	}

	return true;
}

// 関数名：JS_PostClose
// 機　能：モーダルダイアログが閉じた直後に呼ばれるコールバック
// 引　数：obj:モーダルダイアログ
function JS_PostClose(obj) {
	switch ($(obj).attr("id")) {
		case "modal_print_menu":
			$("#modal_print_menu .dashuboard").removeClass("nodisp");
			break;
		default:
			break;
	}

	return true;
}

// 関数名：JS_ShowInvoiceOption
// 機　能：請求書の表紙のオプションを表示する
// 引　数：none
function JS_ShowInvoiceOption() {
	// 請求書表紙フォームの値を構成する
	var srcForm = document.forms["Mitsumori"];
	var dstForm = document.forms["InvoiceOption"];
	// 請求No
	dstForm.MituCode.value = srcForm.MituCode.value;
	// 請求日付
	dstForm.MituDate.value = srcForm.MituDate.value;
	// 顧客名称
	dstForm.CustName.value = srcForm.CustName.value;
	// 敬称 1=御中, 2=様, 3=殿
	switch($(srcForm.HonorificFlg).val()) {
		case "1":
			dstForm.Honorific.value = "御中";
			break;
		case "2":
			dstForm.Honorific.value = "様";
			break;
		case "3":
			dstForm.Honorific.value = "殿";
			break;
		default:
			dstForm.Honorific.value = "";
			break;
	}
	// 工事名称
	dstForm.KoujiName.value = srcForm.KoujiName.value;
	// 支払条件
	dstForm.Pay.value = srcForm.Pay.value;
	// 備考
	dstForm.Remark.value = srcForm.Remark.value;
	// 金額は明細自動計算時に反映済

	$("#modal_print_menu .dashuboard").removeClass("nodisp");
}

// 関数名：JS_RecalcInvoiceValues
// 機　能：請求書の表紙の金額を再計算する
// 引　数：none
function JS_RecalcInvoiceValues() {
	// 消費税率
	var fltTaxRate = parseFloat($("#invoiceTaxRate").val());
	// 請求金額
	var intMituPriceNoTax = JS_Comma_Del($("#invoiceMituPriceNoTax").val());
	// 消費税額
	var fltTax = parseFloat(intMituPriceNoTax) * fltTaxRate;
	$("#invoiceTaxPrice").val(JS_Rounding(fltTax, 0, gRoundOption));
	// 合計金額
	$("#invoiceTotalPrice").val(parseFloat(intMituPriceNoTax) + JS_Rounding(fltTax, 0, gRoundOption));
	// コンマ挿入
	$("#invoiceTaxPrice").val(JS_Comma_Ins($("#invoiceTaxPrice").val()));
	$("#invoiceTotalPrice").val(JS_Comma_Ins($("#invoiceTotalPrice").val()));
}

// 関数名：JS_Print_Sub
// 機　能：見積表示印刷ウィンドウを開く
// 引　数：pWinName, pAction, pForm, pCount
function JS_Print_Sub(pWinName, pAction, pForm, pCount) {
	var index = pCount - 1;

	if (gPrintWindows[index] && gPrintWindows[index].closed == false) {
		gPrintWindows[index].close();
	}

	var left = 10 * pCount;
	var top  = 10 * pCount;
	var width  = screen.availWidth > 1000 ? 1000 : parseInt(screen.availWidth * 0.9);
	var height = screen.availHeight > 600 ? 600 : parseInt(screen.availHeight * 0.9);

	gPrintWindows[index] = window.open("", pWinName, "left=" + left + ",top=" + top + ",width=" + width + ",height=" + height + ",scrollbars=1,toolbar=0,menubar=0,staus0,resizable=1");

	var savedAction = pForm.action;
	var savedTarget = pForm.target;
	pForm.action = pAction;
	pForm.target = pWinName;

	switch (pWinName) {
		case "EstCover": // 見積表紙
			pForm.PrintOption1.value = $("#print_type1_op1").prop("checked") ? $("#print_type1_op1").val() : ""; // 見積日付
			pForm.PrintOption2.value = $("#print_type1_op2").prop("checked") ? $("#print_type1_op2").val() : ""; // 値引き
			break;
		case "EstDetail": // 見積内訳
			pForm.PrintOption1.value = $("#print_type2_op1").prop("checked") ? $("#print_type2_op1").val() : ""; // 小計
			pForm.PrintOption2.value = $("#print_type2_op2").prop("checked") ? $("#print_type2_op2").val() : ""; // 単価
			pForm.PrintOption3.value = $("#print_type2_op3").prop("checked") ? $("#print_type2_op3").val() : ""; // 金額

			if ($("#print_type2_op4").prop("checked")) { // 法定福利費
				pForm.PrintOption4.value = $("#print_type2_op5").prop("checked") ? $("#print_type2_op5").val() : $("#print_type2_op6").val();
				pForm.PrintOption5.value = $("#print_ConstCost").val(); // 法定福利費（施工費）
				pForm.PrintOption6.value = $("#print_LaborCost").val(); // 法定福利費（労務費）
			}
			break;
		case "Material": // 材料一覧
			pForm.PrintOption1.value = $("#print_type4_op1").prop("checked") ? $("#print_type4_op1").val() : ""; // 小計
			break;
		case "Process": // 加工一覧
			pForm.PrintOption1.value = $("#print_type5_op1").prop("checked") ? $("#print_type5_op1").val() : ""; // 小計
			break;
		case "Construct": // 施工一覧
			pForm.PrintOption1.value = $("#print_type6_op1").prop("checked") ? $("#print_type6_op1").val() : ""; // 小計
			break;
		case "Budget": // 実行予算表
			pForm.PrintOption1.value = $("#print_type7_op1").prop("checked") ? $("#print_type7_op1").val() : ""; // 小計
			break;
		case "CostEst": // 原価見積対比表
			pForm.PrintOption1.value = $("#print_type8_op1").prop("checked") ? $("#print_type8_op1").val() : ""; // 小計
			break;
		case "InvoiceCover": // 請求表紙
			pForm.PrintOption1.value = $("#invoiceMituCode").val(); // 請求No
			pForm.PrintOption2.value = $("#invoiceMituDate").val(); // 請求日付
			pForm.PrintOption3.value = $("#invoiceTaxRate").val(); // 消費税
			pForm.PrintOption4.value = $("#invoiceCustName").val(); // 顧客名称
			pForm.PrintOption5.value = $("#invoiceHonorific").val(); // 敬称
			pForm.PrintOption6.value = $("#invoiceKoujiName").val(); // 工事名称
			pForm.PrintOption7.value = $("#invoiceMituPriceNoTax").val(); // 請求金額
			pForm.PrintOption8.value = $("#invoiceTaxPrice").val(); // 消費税金額
			pForm.PrintOption9.value = $("#invoiceTotalPrice").val(); // 合計金額
			pForm.PrintOption10.value = $("#invoicePay").val(); // 支払条件
			pForm.PrintOption11.value = $("#invoiceRemark").val(); // 備考
			break;
		default: // 見積合計, 請求内訳
			break;
	}

	pForm.submit();

	pForm.action = savedAction;
	pForm.target = savedTarget;

	switch (pWinName) {
		case "Material": // 材料一覧
		case "Process": // 加工一覧
		case "Construct": // 施工一覧
			pForm.PrintOption1.value = "";
			break;
		case "EstCover": // 見積表紙
		case "EstDetail": // 見積内訳
		case "Budget": // 実行予算表
		case "CostEst": // 原価見積対比表
			pForm.PrintOption1.value = "";
			pForm.PrintOption2.value = "";
			pForm.PrintOption3.value = "";
			break;
		case "EstDetail": // 見積内訳
			pForm.PrintOption1.value = "";
			pForm.PrintOption2.value = "";
			pForm.PrintOption3.value = "";
			pForm.PrintOption4.value = "";
			pForm.PrintOption5.value = "";
			pForm.PrintOption6.value = "";
			break;
		case "InvoiceCover": // 請求表紙
			pForm.PrintOption1.value = "";
			pForm.PrintOption2.value = "";
			pForm.PrintOption3.value = "";
			pForm.PrintOption4.value = "";
			pForm.PrintOption5.value = "";
			pForm.PrintOption6.value = "";
			pForm.PrintOption7.value = "";
			pForm.PrintOption8.value = "";
			pForm.PrintOption9.value = "";
			pForm.PrintOption10.value = "";
			pForm.PrintOption11.value = "";
			break;
		default: // 見積合計, 請求内訳
			break;
	}
}

// 関数名：JS_PrintOnce
// 機　能：帳票印刷ダイアログで選択された全ての帳票を印刷する
// 引　数：none
function JS_PrintOnce() {
	var theForm = document.Mitsumori;

	if (theForm.Heading1.value == '' && theForm.ZaiName1.value == '' && theForm.Material1.value == '' && theForm.Size1.value == '') {
		alert("帳票印刷は見積明細の１行目を入力してから実行してください。");
		return false;
	}

	// 選択されているタイプを一つずつ開いていく
	var count = 0;

	// 見積表紙 print_type1 オプション＝見積日付, 見積日付, 値引き
	if ($("#modal_print_menu #print_type1").prop("checked")) {
		count++;
		JS_Print_Sub("EstCover", "./Print-Hyoshi.php", theForm, count);
	}

	// 見積内訳 print_type2 オプション＝小計, 単価, 金額, 法定福利費
	if ($("#modal_print_menu #print_type2").prop("checked")) {
		count++;
		JS_Print_Sub("EstDetail", "./Print-Uchiwake.php", theForm, count);
	}

	// 見積合計 print_type3
	if ($("#modal_print_menu #print_type3").prop("checked")) {
		count++;
		JS_Print_Sub("EstSummary", "./Print-HeadingSum.php", theForm, count);
	}

	// 材料一覧 print_type4
	if ($("#modal_print_menu #print_type4").prop("checked")) {
		count++;
		JS_Print_Sub("Material", "./Print-Material.php", theForm, count);
	}

	// 加工一覧 print_type5
	if ($("#modal_print_menu #print_type5").prop("checked")) {
		count++;
		JS_Print_Sub("Process", "./Print-Process.php", theForm, count);
	}

	// 施工一覧 print_type6
	if ($("#modal_print_menu #print_type6").prop("checked")) {
		count++;
		JS_Print_Sub("Construct", "./Print-Construct.php", theForm, count);
	}

	// 実行予算表 print_type7 オプション＝小計
	if ($("#modal_print_menu #print_type7").prop("checked")) {
		count++;
		JS_Print_Sub("Budget", "./Print-Yosan.php", theForm, count);
	}

	// 原価見積対比表 print_type8 オプション＝小計
	if ($("#modal_print_menu #print_type8").prop("checked")) {
		count++;
		JS_Print_Sub("CostEst", "./Print-GenkaMitsumori.php", theForm, count);
	}

	// 請求表紙 print_type9 オプション＝11個
	if ($("#modal_print_menu #print_type9").prop("checked")) {
		count++;
		JS_Print_Sub("InvoiceCover", "./Print-Claim.php", theForm, count);
	}

	// 請求内訳 print_type10
	if ($("#modal_print_menu #print_type10").prop("checked")) {
		count++;
		JS_Print_Sub("InvoiceDetail", "./Print-ClaimUchiwake.php", theForm, count);
	}

	if (count < 1) {
		alert("印刷するタイプが選択されていません。");
	}
}

// 関数名：JS_CloseDialog
// 機　能：pButtonが所属するダイアログを閉じる
// 引　数：pButton
function JS_CloseDialog(pButton) {
	var par_div = $(pButton).closest("div.modal-content");
	par_div.dialog("close");
	return true;
}

// 関数名：JS_AdjustUnitPrice
// 機　能：単価調整（変換レート可変）
function JS_AdjustUnitPrice() {
	var curValue, targetValue;

	if ($("#form_convert5 #cnv5_target").val() == "0") {
		// 目標金額に近付ける
		curValue = $("#form_convert5 #cur_price").val();
		targetValue = $("#form_convert5 #cnv5_price").val();

		if (curValue == "" || targetValue == "" || curValue == targetValue) {
			return;
		}

		curValue = parseInt(JS_Comma_Del(curValue));
		targetValue = parseInt(JS_Comma_Del(targetValue));
	} else {
		// 目標粗利率に近付ける
		var costValue  = $("#frm-TotalCost").val();
		var targetRate = $("#form_convert5 #cnv5_rate").val();
		curValue   = $("#form_convert5 #cur_price").val();

		if (curValue == "" || costValue == "" || targetRate == "" || curValue == targetValue) {
			return;
		}

		curValue  = parseInt(JS_Comma_Del(curValue));
		costValue = parseInt(JS_Comma_Del(costValue));
		targetValue = costValue * 100 / (100 - targetRate);
	}

	var numRows = 1 * document.Mitsumori.UchiwakeCnt.value;

	$("table#tbl2 > tbody > tr").each(function(){
		if (targetValue == curValue) {
			return false;
		}

		var $curInput = $("input[name^=UPrice]", this);
		var curVal = $curInput.val();

		if (curVal.length > 0) {
			// 復帰用単価保存
			$curInput.data("prev-val", curVal);
			// 変換レート計算
			var cnvRate = targetValue / curValue;
			curVal = parseFloat(JS_Comma_Del(curVal));
			var newVal = JS_Rounding((curVal * cnvRate), 0, gRoundOption);
			$curInput.val(JS_Comma_Ins(newVal));

			var qty = parseFloat(JS_Comma_Del($("input[name^=Quantity]", this).val()));
			curValue -= JS_Rounding((curVal * qty), 0, gRoundOption);
			targetValue -= JS_Rounding((newVal * qty), 0, gRoundOption);
		}
	});

	gHasPrevPrice = false; // JS_Uchiwake_Recalc_Allの中でJS_Remove_Prev_Priceを呼ばないように
	JS_Uchiwake_Recalc_All();
	gHasPrevPrice = true;

	$("#form_convert5 #cur_price").val($("#frm-MituPriceNoTax").val());
	$("#form_convert5 #cur_rate").val($("#frm-TotalProfitRate").val());

	// 単価調整ボタンの表示切替
	$("#wrapperInner header .head .head-menu2 .head-conversion2").addClass("hide");
	$("#wrapperInner header .head .head-menu2 .head-conversion2-c").removeClass("hide");

	$(".modal-overlay").click();
}

// 関数名：JS_Rewind_Unit_Price
// 機　能：調整前の単価に戻す
// 引　数：なし
function JS_Rewind_Unit_Price() {
	$("table#tbl2 > tbody > tr").each(function(){
		var $curInput = $("input[name^=UPrice]", this);
		var curVal = $curInput.data("prev-val");

		if (curVal && curVal.length > 0) {
			// 調整前単価復元
			$curInput.val(curVal);
		}
	});

	JS_Uchiwake_Recalc_All();

	$("#form_convert5 #cur_price").val($("#frm-MituPriceNoTax").val());
	$("#form_convert5 #cur_rate").val($("#frm-TotalProfitRate").val());
}

// 関数名：JS_Remove_Prev_Price
// 機　能：単価調整前の復元用単価破棄
// 引　数：なし
function JS_Remove_Prev_Price() {
	$("table#tbl2 > tbody > tr").each(function(){
		$("input[name^=UPrice]", this).data("prev-val", "");
	});

	// 単価調整ボタンの表示切替
	$("#wrapperInner header .head .head-menu2 .head-conversion2").removeClass("hide");
	$("#wrapperInner header .head .head-menu2 .head-conversion2-c").addClass("hide");

	gHasPrevPrice = false;
}

// 関数名：JS_UpdateLaborCost
// 機　能：労務費の入力値をメインのフォームへ反映する
function JS_UpdateLaborCost(obj) {
	JS_Append_Comma(obj);
	$("#frm-LaborCost").val(obj.value);

	if (obj.value != "" && obj.value != "0") {
		$("#print_type2_op6").prop("checked", true);
	} else {
		$("#print_type2_op5").prop("checked", true);
	}
}


// onready
$(document).ready(function() {
	$("#MituDate,#ConstDate,#CompDate,#SrcDateFrom,#SrcDateTo").datepicker({
		dateFormat: "yy-mm-dd",
	});

	$(".open").click(function() {
		var $context = $(this).closest("div");
		$(".input-cell", $context).slideToggle("slow");
		$(this).toggleClass("active");
	});
 
 	$(".open2").click(function() {
		var $context = $(this).closest("div");
		$(".input-cell", $context).slideToggle("slow");
		$(this).toggleClass("active2");
	});
 

	$(".mid-menu2-title").click(function() {
		$(".head-keisan").slideToggle("slow");
	});

	$("input#chkNetBaseFlag").change(function(){
		if ($(this).prop("checked")) { // NET金額ベース
			var netVal = $("input#frm-MituNetPrice").val();

			if (netVal.length > 0 && netVal != "0") {
				var totalBase = JS_Comma_Del(netVal);
			} else {
				alert("ネット金額が入力されていません。");
				$(this).prop("checked", false).change();
			}
		} else { // 見積積算金額ベース
			var totalBase = JS_Comma_Del($("input#frm-MituPriceNoTax").val());
		}

		var totalCost = JS_Comma_Del($("input#frm-TotalCost").val());

		if (JS_Check_If_Number(totalBase) && JS_Check_If_Number(totalCost)) {
			totalCost = parseInt(totalCost);
			totalBase = parseInt(totalBase);
			var totalProfit = totalBase - totalCost;
			var profitRate = 1.0 * totalProfit / totalBase * 100;
			// 粗利
			$("input#frm-TotalProfit").val(JS_Int_To_Txt(totalProfit));
			// 粗利率
			$("input#frm-TotalProfitRate").val(JS_Float_To_Txt(profitRate));
		}

		return true;
	});

	$("input#checkAll").click(function(){
		var context = this.form;
		var isChecked = $(this).prop("checked");

		$("input.chkrow", context).each(function(){
			$(this).prop("checked", isChecked);
		});

		if (gCopyRefLines.length > 0) {
			if (isChecked) {
				$("#btn-row-copy").removeClass("input-off").addClass("input-on");
				$("#btn-row-delete").removeClass("input-off").addClass("input-on");
			} else {
				$("#btn-row-copy").removeClass("input-on").addClass("input-off");
				$("#btn-row-delete").removeClass("input-on").addClass("input-off");
			}
		}

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
		JS_Handle_Click(this);
	});

	// 行明細ボタン押下
	$("input.open-detail-dialog").click(function(){
		JS_Open_Detail_Dialog(this);
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
			if (gCopyRefLines.length > 0) {
				gCopyRefLines = []; // 参照コピーモード解除
				$("#container-inner #btn-ref-paste").removeClass("input-on").addClass("input-off").val("貼付");
			}

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
		var shortage = JS_Check_Room(gCopyLines.length, insertPoint);

		if (shortage > 0) {
			JS_Add_Detail_Rows(shortage);
		}

		// 貼付処理
		for (var i = (gCopyLines.length - 1); i >= 0; i--) {
			JS_Row_Ins(insertPoint);
			// 参照位置をシフト
			for (var j = (gCopyLines.length - 1); j >= 0; j--) {
				if (gCopyLines[j] >= insertPoint) {
					gCopyLines[j]++;
				}
			}
			// 行コピー
			JS_Copy_Line(gCopyLines[i], insertPoint, document.Mitsumori);
		}

		JS_UchiwakeTotal_Calc();

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
				JS_Row_Ins(rowIds[i]);
			}

			JS_UchiwakeTotal_Calc();

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
				JS_Row_Del(rowIds[i]);
			}

			JS_UchiwakeTotal_Calc();

			selRows.prop("checked", false);
			$("#btn-row-copy").removeClass("input-on").addClass("input-off");
			$("#btn-row-insert").removeClass("input-on").addClass("input-off");
			$("#btn-row-delete").removeClass("input-on").addClass("input-off");
		}
	});

	// 見積り流用ボタン押下
	$("#btn-reuse").click(function(){
		if (confirm("別の見積りから新しい見積りを作成します。\nこの見積りで保存されていない編集内容は破棄されます。\nこの見積りを保存する場合は、見積り流用を一旦キャンセルしてください。")) {
			location.href = "./mitsumori-reuse.php";
		}

		return false;
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

	// 参照元検索モーダルダイアログ作成
	gRefSearchModal = $("#refer-modal-dialog").dialog({
		classes: {"ui-dialog":"refer-modal-dialog"},
		autoOpen: false,
		modal: true,
		width: "90%",
		minWidth: 600,
		maxHeight: 670,
		position: {my: "center top", at: "center top", of: window}
	});

	// 参照元明細選択モーダルダイアログ作成
	gReferModal = $("#refview-modal-dialog").dialog({
		classes: {"ui-dialog":"refview-modal-dialog"},
		autoOpen: false,
		modal: true,
		width: "95%",
		position: {my: "center top", at: "center top", of: window},
		open: function(event, ui) {
			gOpenReferModalFlag = false;

			if (gLoadingModal.dialog("isOpen")) {
				gLoadingModal.dialog("close");
			}
		}
	});

	// ロード中モーダルダイアログ作成
	gLoadingModal = $("#loading-modal-dialog").dialog({
		classes: {"ui-dialog":"loading-modal-dialog"},
		autoOpen: false,
		modal: true,
		position: {my: "center center", at: "center center", of: window},
		open: function(event, ui) {
			if (gOpenReferModalFlag) {
				setTimeout(function(){
					gReferModal.dialog("open");
				}, 250);
			}
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
				JS_Uchiwake_Recalc_All();
			}, 250);
		}
	});

	// ［貼付］ボタン押下（参照明細貼付）
	$("#container-inner #btn-ref-paste").click(function(){
		if ($(this).hasClass("input-on")) {
			if (gCopyRefLines.length < 1) {
				$(this).removeClass("input-on").addClass("input-off");
				return false;
			}
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
		var shortage = JS_Check_Room(gCopyRefLines.length, insertPoint);

		if (shortage > 0) {
			JS_Add_Detail_Rows(shortage);
		}

		// 貼付処理
		for (var i = (gCopyRefLines.length - 1); i >= 0; i--) {
			JS_Row_Ins(insertPoint);
			// 行コピー
			JS_Copy_Line(gCopyRefLines[i], insertPoint, document.formRefView);
		}

		JS_UchiwakeTotal_Calc();

		alert("" + insertPoint + "行目から" + gCopyRefLines.length + "行貼付けました。");

		// 参照コピー行のクリア
		gCopyRefLines = [];

		$("#container-inner #btn-ref-paste").removeClass("input-on").addClass("input-off").val("貼付");
		$("input.chkrow:checked").prop("checked", false);

		return false;
	});

	// ［参照］ボタン押下（参照明細選択）
	$("#btn-ref-select").click(function(){
		if (gReferId != 0) {
			gOpenReferModalFlag = true;
			gLoadingModal.dialog("open");
		}
	});

	// 参照元検索ボタン押下
	$("#btn-ref-search").click(function(){
		gRefSearchModal.dialog("open");
	});

	// 行明細モーダルダイアログ前へボタン押下
	$("#detail-modal-dialog .modal-backward").click(function(){
		if (gDetailChanged) {
			JS_Save_Detail();
		}

		var curRow = 1 * document.form_detail.CurRow.value;

		if (curRow > 1) {
			JS_Configure_Detail_Dialog(curRow - 1);
		} else {
			alert("これより前の明細行はありません。");
		}
	});

	// 行明細モーダルダイアログ次へボタン押下
	$("#detail-modal-dialog .modal-forward").click(function(){
		if (gDetailChanged) {
			JS_Save_Detail();
		}

		var curRow = 1 * document.form_detail.CurRow.value;
		var maxRow = 1 * document.Mitsumori.UchiwakeCnt.value;

		if (curRow < maxRow) {
			JS_Configure_Detail_Dialog(curRow + 1);
		} else {
			alert("これより後の明細行はありません。");
		}
	});

	// 行明細モーダルダイアログ閉じるボタン押下
	$("#detail-modal-dialog .modal-done").click(function(){
		if (gDetailChanged) {
			JS_Save_Detail();
		}

		gDetailModal.dialog("close");
	});

	// 見出し・備考・単位の変更
	$("input#id_Heading,input#id_Remark,input#id_MituUnit,input#id_ZaiUnit,input#id_KakouUnit,input#id_SekouUnit,input#id_CostUnit").change(function(){
		if (! gInitDetailModal) {
			gDetailChanged = true;
		}
	});

	// メモの変更
	$("input#id_Memo,input#id_ZaiMemo,input#id_KakouMemo,input#id_SekouMemo,input#id_CostMemo").change(function(){
		if (! gInitDetailModal) {
			gDetailChanged = true;
		}
	});

	$("#tabs").tabs({active: 1});
 	$(".jikko #tabs").tabs({active: 0});

	// 見積参照モーダルダイアログ［戻る］ボタン押下
	$("#refer-modal-dialog input#btn-cancel").click(function(){
		gRefSearchModal.dialog("close");
	});

	// 見積参照モーダルダイアログ［条件クリア］ボタン押下
	$("#refer-modal-dialog input#btn-reset").click(function(){
		document.form_reference.reset();
	});

	// 見積参照モーダルダイアログ［検索］ボタン押下
	$("#refer-modal-dialog input#btn-search").click(function(){
		document.form_reference.Sort.value = "";
		JS_Ref_Search();
	});

	// 見積参照［全て］チェックボックスクリック
	$("input#checkAllRef").click(function(){
		var context = this.form;
		var isChecked = $(this).prop("checked");

		$("input.chkref", context).each(function(){
			$(this).prop("checked", isChecked);
		});
/*
		if (isChecked) {
			$("#btn-row-copy").removeClass("input-off").addClass("input-on");
			$("#btn-row-delete").removeClass("input-off").addClass("input-on");
		} else {
			$("#btn-row-copy").removeClass("input-on").addClass("input-off");
			$("#btn-row-delete").removeClass("input-on").addClass("input-off");
		}

		$("#btn-row-insert").removeClass("input-on").addClass("input-off");
*/
	});

	// 見積参照モーダルダイアログ［検索一覧へ］ボタン押下
	$("#refview-modal-dialog .return2-btn input").click(function(){
		gReferModal.dialog("close");
		gRefSearchModal.dialog("open");
	});

	// 見積参照モーダルダイアログ［行コピー］ボタン押下
	$("#refview-modal-dialog .linecopy-btn input").click(function(){
		var $this = $(this);

		if ($this.hasClass("input-on")) {
			// コピー行の取得
			var selRows = $("#form-refview input.chkref:checked");

			if (selRows.length > 0) {
				gCopyLines = [];
				gCopyRefLines = [];

				selRows.each(function(){
					gCopyRefLines.push(parseInt($(this).attr("id").replace("chkref_", "")));
				});

				gCopyRefLines.sort((a, b) => a - b);
				selRows.prop("checked", false);

				$("#container-inner #btn-ref-paste").val("" + gCopyRefLines.length + "行貼付");
				$("#container-inner #btn-ref-paste").removeClass("input-on").addClass("input-off");
				// モーダルダイアログ終了
				gReferModal.dialog("close");
			}
		}

		return false;
	});

	// 見積参照モーダルダイアログ［見積作成へ］ボタン押下
	$("#refview-modal-dialog .filecopy-btn input").click(function(){
		gReferModal.dialog("close");
	});

	// 請求表紙オプション表示トグル
	$("#modal_print_menu .toggle_switch").click(function(){
		if ($("#modal_print_menu .dashuboard").hasClass("nodisp")) {
			JS_ShowInvoiceOption();
		} else {
			$("#modal_print_menu .dashuboard").addClass("nodisp");
		}
	});

	// 帳票印刷メニューモーダルダイアログ［帳票印刷］ボタン押下
	$("#modal_print_menu #btn-print").click(function(){
		JS_PrintOnce();
	});

	// ヘッダメニュー［単価調整キャンセル］ボタン押下
	$("#wrapperInner header .head .head-menu2 .head-conversion2-c input").click(function(){
		if (gHasPrevPrice) {
			JS_Rewind_Unit_Price();
		}
	});

	// 帳票印刷メニューで印刷タイプをチェックしたら、関連するオプションもチェックする
	$("#modal_print_menu input.has_option").click(function(){
		if ($(this).prop("checked")) {
			$("#modal_print_menu input[id^=" + this.id + "_op][type=checkbox]").prop("checked", true);
		}
	});

	// 単価調整オプション表示トグル
	$("#form_convert5 #cnv5_target").click(function(){
		if ($(this).val() == "0") {
			$("div#modal_convert5_menu li.price").removeClass("nodisp");
			$("div#modal_convert5_menu li.rate").addClass("nodisp");
		} else {
			$("div#modal_convert5_menu li.price").addClass("nodisp");
			$("div#modal_convert5_menu li.rate").removeClass("nodisp");
		}
	});

	gRoundOption = 1 * ($("form#form3").get(0).Op7.value);
});
//$(document).ready(function()
