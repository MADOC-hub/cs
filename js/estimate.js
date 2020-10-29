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

// グローバル変数名：gDeletingModal
// 意味：見積削除中モーダルダイアログのインスタンス
var gDeletingModal;

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

// グローバル変数名：gDataChanged
// 意味：true: 変更あり
var gDataChanged = false;

// グローバル変数名：gInitialRecalc
// 意味：true: 最初の再計算（onload）
var gInitialRecalc = true;

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

// グローバル変数名：gIsPrinting
// 意味：array: 印刷用ウィンドウを開いているフラグ
var gIsPrinting = false;

// グローバル変数名：gParentCode
// 意味：string: 親資材の材料コード
var gParentCode = "";

// グローバル変数名：gGroupCode
// 意味：string: 材料のグループコード（gParentCodeの16進数表現）
var gGroupCode = "";

// グローバル変数名：gSubRowCount
// 意味：integer: 見積明細に表示されている副資材の行数
var gSubRowCount = 0;

// 関数名：JS_New
// 機　能：見積新規作成
function JS_New(){
	var msg = "表示中のデータをクリアしますか？";

	if (gDataChanged) {
		msg = "編集内容が保存されていません。\n編集内容を破棄して新しい見積りを作りますか？";
	}

	if (window.confirm(msg)) {
		gDataChanged = false;
		var theForm = document.form1;
		theForm.target = "_self";
		theForm.action = "./estimate-edit.php";
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
	var theForm = document.form_main;

	if ((theForm.MituCode.value).length > 8) {
		window.alert("コンバートした見積は更新できません。");
		return false;
	}

	if ((theForm.WorkType.value) == "0") {
		window.alert("工種が選択されていないと登録・更新できません。");
		return false;
	}

	if (theForm.AutoID.value == "") {
		if (window.confirm('この内容で登録しますか？')) {
			gDataChanged = false;
			$("div#container > h2").hide();
			theForm.target = "_self";
			theForm.action = "./estimate-save.php";
			theForm.method = "POST";
			theForm.submit();
		}
	} else {
		if (window.confirm('この内容で更新しますか？')) {
			gDataChanged = false;
			$("div#container > h2").hide();
			theForm.target = "_self";
			theForm.action = "./estimate-save.php";
			theForm.method = "POST";
			theForm.submit();
		}
	}
}

// 関数名：JS_Open_Search
// 機　能：見積検索画面を開く
function JS_Open_Search(){
	if (gDataChanged) {
		if (!window.confirm("保存されていない編集内容を破棄して検索画面へ移動しますか？")) {
			return false;
		}

		gDataChanged = false;
	}

	location.href = "./estimate-list.php";
}

// 関数名：DoDeleteThis
// 機　能：見積削除確認
function DoDeleteThis() {
	if (confirm("この見積りを削除してよろしいですか？")) {
		// 見積削除中ダイアログを表示してからajax/GET
		gDeletingModal.dialog("open");
	}

	return false;
}

// 関数名：JS_Ins_Row
// 機　能：内訳行数を追加　※23行づつ
function JS_Ins_Row(){
	var theForm = document.form_main;
	theForm.RowIns.value = 1;
	theForm.action = "./estimate-edit.php";
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
		url: "./ajax/ajax_get_options.php",
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
		size: $("input#" + prefix + "_Size").val(),
	};

	$.ajax({
		type: "post",
		url: "./ajax/ajax_get_material.php",
		data: data,
		dataType: "json",
		async: false,
		cache: false,
		success: function(json_data) {
			if (json_data.result == "ok") {
				// 材料の初期値をフォームに設定
				var theForm = document.form_detail;

				if (theForm.ZaiID.value != json_data.spec.AutoID) {
					// 副資材の有無
					if (json_data.tbody) {
						// 親の材料コードとグループコード更新
						gParentCode = json_data.spec.ZaiCode;
						gGroupCode = ("00000000" + ((1 * gParentCode).toString(16))).substr(-8);
						// 副資材一覧表示
						$("#subMaterialList #TblChildren tbody").replaceWith(json_data.tbody);

						if (document.form_detail.CurGroupID.value.substr(0, 8) == gGroupCode) {
							var srcElms = document.form_main.elements;
							var srcId = document.form_detail.CurRow.value;
							var groupId = srcElms[("GroupID" + srcId)].value;
							AdjustSubMaterialSelection(srcElms, srcId, groupId);
						}

						$("#subMaterialList").removeClass("hide");
					} else {
						// 副資材情報クリア
						ClearSubMaterialList();
					}
				}

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
				// 定価・見積単価掛率・材料単価掛率の導入
				theForm.RegPrice.value  = JS_Int_To_Txt(json_data.spec.RegPrice);
				theForm.MituRatio.value = JS_Float_To_Txt(json_data.spec.MituKake, 1);
				theForm.ZaiRatio.value  = JS_Float_To_Txt(json_data.spec.ZaiKake, 1);
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
		url: "./ajax/ajax_get_material.php",
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
		SekouLoss: $("input#id_SekouLoss").val(), //施工ロス率
		RegPrice: $("input#id_RegPrice").val(), //定価
		MituKake: $("input#id_MituRatio").val(), //見積単価掛率
		ZaiKake: $("input#id_ZaiRatio").val() //材料単価掛率
	};

	$.ajax({
		type: "post",
		data: params,
		url: "./ajax/ajax_save_material.php",
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


// 関数名：JS_Prepare_SubMaterial
// 機　能：副資材のテーブルを構成する
// 引　数：srcElms(見積明細のフォーム要素), srcId(明細行No.)
function JS_Prepare_SubMaterial(srcElms, srcId){
	var groupId = srcElms[("GroupID" + srcId)].value;
	var parentCode = "";

	if (groupId.length > 0) { // グループIDを根拠に副資材のテーブルを構成する
		var regExp = /^([0-9A-F]{8})-([0-9A-F]+)(-[0-9A-F]+)?$/i;
		var test = groupId.match(regExp);

		if (test && test.length >= 3) { // 編集しようとする材料は親または副資材
			if (test.length == 3 || !test[3]) { // 親資材
				parentCode = ("0000000000" + parseInt(test[1], 16)).substr(-10);

				if (gParentCode != parentCode) {
					LoadSubMateials(parentCode, srcElms[("Quantity" + srcId)].value, srcElms, srcId, groupId);
				} else {
					AdjustSubMaterialSelection(srcElms, srcId, groupId);
					document.form_detail.SubRowCount.value = gSubRowCount;
				}
			} else { // 副資材
				// 副資材の明細は編集できない
				// 副資材の明細行を編集しようとした場合は親資材の行を編集させる
				var orgSrcId = srcId;

				// 親資材を探す
				while (srcId > 1) {
					srcId--;
					groupId = srcElms[("GroupID" + srcId)].value;

					if (groupId.length > 0) {
						test = groupId.match(regExp);

						if (test) {
							if (test.length == 3 || !test[3]) { // 親資材
								parentCode = ("0000000000" + parseInt(test[1], 16)).substr(-10);

								if (gParentCode != parentCode) { // 副資材のテーブルを構成し直す
									LoadSubMateials(parentCode, srcElms[("Quantity" + srcId)].value, srcElms, srcId, groupId);
								} else {
									AdjustSubMaterialSelection(srcElms, srcId, groupId);
									document.form_detail.SubRowCount.value = gSubRowCount;
								}
								break;
							}
						} else { // 親資材が行方不明
							ClearSubMaterialList();
							srcId = orgSrcId;
							break;
						}
					} else { // 親資材が行方不明
						ClearSubMaterialList();
						srcId = orgSrcId;
						break;
					}
				}
			}
		}
	} else {
		// 資材の名前などを根拠に副資材のテーブル構成を試行する
		// グループIDが空でも副資材を持っていないとは限らない
		// 材料IDも材料コードも分からないので材料名などを根拠に副資材を持っているか調べる
		TryLoadSubMateials(srcElms, srcId);
	}

	return srcId;
}


// 関数名：JS_Configure_Detail_Dialog
// 機　能：行明細ダイアログ内の各要素の値を構成する
// 引　数：srcId(明細行No.)
function JS_Configure_Detail_Dialog(srcId){
	gInitDetailModal = true;

	$("#save-material-result").text("");

	var srcElms = document.form_main.elements;
	var dstElms = document.form_detail.elements;

	// 副資材のテーブルを構成する
	srcId = JS_Prepare_SubMaterial(srcElms, srcId);

	// 編集対象の明細行を記憶する
	dstElms["CurRow"].value = srcId;
	dstElms["CurGroupID"].value = srcElms[("GroupID" + srcId)].value;

	// 行明細ダイアログのタイトルを設定する
	gDetailModal.dialog("option", "title", ("行明細：" + srcId + "行目"));

	// 行明細ダイアログに編集用のデータを設定する
	dstElms["Heading"].value = srcElms[("Heading" + srcId)].value;

	gTypeId = -1;
	// 大分類が未指定の場合、材料名が入っていなければ直前の行の値をコピーする
	if (srcElms[("LargeCateID" + srcId)].value == 0 && srcElms[("ZaiName" + srcId)].value == "" && srcId > 1) {
		if (srcElms[("ZaiName" + (srcId - 1))].value != "") {
			gTypeId = srcElms[("TypeID" + (srcId - 1))].value;
			JS_Set_Large_Category(srcElms[("LargeCateID" + (srcId - 1))].value);
		}
	}

	if (gTypeId == -1) {
		gTypeId = srcElms[("TypeID" + srcId)].value;
		JS_Set_Large_Category(srcElms[("LargeCateID" + srcId)].value);
	}

	// 定価・見積単価掛率・材料単価掛率の導入
	dstElms["RegPrice"].value  = srcElms[("RegPrice" + srcId)].value;
	dstElms["MituRatio"].value = srcElms[("MituRatio" + srcId)].value;
	dstElms["ZaiRatio"].value  = srcElms[("ZaiRatio" + srcId)].value;

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
	dstElms["MituKake"].value     = srcElms[("MituKake" + srcId)].value;

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

	// 数量・単位・単価が全て空の行は原価系の数量・単価・金額は空で良い
	var emptyRow = ("" + dstElms["Quantity"].value + dstElms["Unit"].value + dstElms["UPrice"].value).length > 0 ? false : true;

	// 空白時の初期値設定
	if (dstElms["MituKake"].value == "") { dstElms["MituKake"].value = "100.0"; }
	if (dstElms["ZaiKake"].value == "") { dstElms["ZaiKake"].value = "100.0"; }
	if (dstElms["ZaiLoss"].value == "") { dstElms["ZaiLoss"].value = "0.00"; }
	if (dstElms["KakouKake"].value == "") { dstElms["KakouKake"].value = "100.0"; }
	if (dstElms["KakouLoss"].value == "") { dstElms["KakouLoss"].value = "0.00"; }
	if (dstElms["SekouKake"].value == "") { dstElms["SekouKake"].value = "100.0"; }
	if (dstElms["SekouLoss"].value == "") { dstElms["SekouLoss"].value = "0.00"; }
	if (dstElms["CostKake"].value == "") { dstElms["CostKake"].value = "100.0"; }
	if (dstElms["CostLoss"].value == "") { dstElms["CostLoss"].value = "0.00"; }

	if (!emptyRow) {
		if (dstElms["MituQuantity"].value == "") { dstElms["MituQuantity"].value = "0.00"; }
		if (dstElms["ZaiQuantity"].value == "") { dstElms["ZaiQuantity"].value = "0.00"; }
		if (dstElms["KakouQuantity"].value == "") { dstElms["KakouQuantity"].value = "0.00"; }
		if (dstElms["SekouQuantity"].value == "") { dstElms["SekouQuantity"].value = "0.00"; }

		// 追加経費は後付けなので全体が空の場合はデフォルト値を入れる
		if (dstElms["CostKei"].value == "" || dstElms["CostPrice"].value == "") {
			dstElms["CostKei"].value = "1.0000";
			dstElms["CostQuantity"].value = dstElms["MituQuantity"].value;
			dstElms["CostUnit"].value = "";
			dstElms["CostUPrice"].value = "0";
			dstElms["CostPrice"].value = "0";
		}
	}

	// 明細にないデータを作る（原価率、経費、原単価）
	// 原価率 = 原価÷見積金額×100
	if (dstElms["MituQuantity"].value != 0) {
		dstElms["CostRate"].value = JS_Float_To_Txt(JS_Txt_To_Float(dstElms["Cost"].value) / JS_Txt_To_Float(dstElms["MituPrice"].value) * 100);
	} else {
		dstElms["CostRate"].value = "";
	}
	// 経費 =（材料費＋加工費＋施工費＋追加経費）×経費率
	var costTotal = 0;
	costTotal += JS_Txt_To_Int(dstElms["ZaiPrice"].value);
	costTotal += JS_Txt_To_Int(dstElms["KakouPrice"].value);
	costTotal += JS_Txt_To_Int(dstElms["SekouPrice"].value);
	costTotal += JS_Txt_To_Int(dstElms["CostPrice"].value);

	if (document.form_main.ExpenseRate.value != "") {
		dstElms["Expenses"].value = JS_Float_To_Txt(costTotal * (parseFloat(document.form_main.ExpenseRate.value) / 100));
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
function JS_Save_Detail() {
	var srcElms = document.form_detail.elements;
	var dstElms = document.form_main.elements;
	var srcId = srcElms["CurRow"].value;

	// 副資材の処理を先行させる
	// 副資材の行数を調整する
	JS_Adjust_SubRows(srcElms, srcId);
	// 副資材の行をコピーする
	JS_Save_Detail_Sub(dstElms, srcId);

	// 行明細ダイアログに編集用のデータを設定する
	dstElms[("Heading" + srcId)].value     = srcElms["Heading"].value;
	dstElms[("GroupID" + srcId)].value     = srcElms["CurGroupID"].value;
	dstElms[("LargeCateID" + srcId)].value = $("select#detail_LargeCateID").val();
	dstElms[("TypeID" + srcId)].value      = $("select#detail_TypeID").val();

	// 定価・見積単価掛率・材料単価掛率の導入
	dstElms[("RegPrice" + srcId)].value  = srcElms["RegPrice"].value;
	dstElms[("MituRatio" + srcId)].value = srcElms["MituRatio"].value;
	dstElms[("ZaiRatio" + srcId)].value  = srcElms["ZaiRatio"].value;

	dstElms[("ZaiName" + srcId)].value  = srcElms["ZaiName"].value;
	dstElms[("Material" + srcId)].value = srcElms["Material"].value;
	dstElms[("Size" + srcId)].value     = srcElms["Size"].value;
	dstElms[("Quantity" + srcId)].value = srcElms["Quantity"].value;
	dstElms[("Unit" + srcId)].value     = srcElms["Unit"].value;
	dstElms[("UPrice" + srcId)].value   = srcElms["UPrice"].value;
	dstElms[("Price" + srcId)].value    = srcElms["MituPrice"].value;
	dstElms[("MituKake" + srcId)].value = srcElms["MituKake"].value;
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

// 関数名：JS_Adjust_SubRows
// 機　能：副資材の行数を調整する
// 引　数：srcElms(行明細ダイアログのフォーム要素), srcId(親資材の明細行)
function JS_Adjust_SubRows(srcElms, srcId) {
	var curSubRows = 1 * srcElms["SubRowCount"].value;
	var subRowNo = 1 * srcId + 1;

	// 必要な行数を確保する
	if (!$("#subMaterialList").hasClass("hide")) {
		// 選択された副資材の数
		var selected = $("#form_sub_material input.check-sel:checked").length;
		var delta = 0;

		if (selected > curSubRows) { // 行数追加
			delta = selected - curSubRows;

			while (delta > 0) {
				JS_Row_Ins(subRowNo);
				delta--;
			}
		} else if (selected < curSubRows) { // 行数減少
			delta = curSubRows - selected;

			while (delta > 0) {
				JS_Row_Del(subRowNo);
				delta--;
			}
		}
	} else if (curSubRows > 0) { // 編集した材料の副資材の行を削除する
		while (curSubRows > 0) {
			JS_Row_Del(subRowNo);
			curSubRows--;
		}
	}
}

// 関数名：JS_Save_Detail_Sub
// 機　能：行明細ダイアログの副資材の編集内容を見積明細行へ保存する
// 引　数：dstElms(見積明細行のフォーム要素), srcId(親資材の明細行)
function JS_Save_Detail_Sub(dstElms, srcId) {
	if (!$("#subMaterialList").hasClass("hide")) {
		// 材料グループIDを生成する
		if (document.form_detail.CurGroupID.value.substr(0, 8) != gGroupCode) {
			JS_Generate_GroupID(dstElms);
		}

		var srcElms = document.form_sub_material.elements;
		var gid = document.form_detail.CurGroupID.value;
		var rowNo = srcId;
		var branchNo = 0;

		$("#form_sub_material input.check-sel").each(function(){
			branchNo++;

			if (!$(this).prop("checked")) {
				return true;
			}

			rowNo++;

			var $srcRow = $(this).closest("tr");
			var $dstRow = $(dstElms["chkrow_" + rowNo]).closest("tr");

			// 属性のセット
			$dstRow.addClass("SubMaterial");
			$(("input#id_Row" + rowNo), $dstRow).prop("disabled", true);
			$("input[type=text].sub-inactive", $dstRow).attr("readonly", true);

			// 値のコピー
			dstElms["GroupID" + rowNo].value = gid + "-" + (("00" + branchNo.toString(16)).substr(-2));
			dstElms["LargeCateID" + rowNo].value = $("span.category-id", $srcRow).text();
			dstElms["TypeID" + rowNo].value = $("span.type-id", $srcRow).text();
			dstElms["ZaiRatio" + rowNo].value = $("input.input-rate", $srcRow).val();
			dstElms["Heading" + rowNo].value = "";
			dstElms["ZaiName" + rowNo].value = $("td.zai-name", $srcRow).text();
			dstElms["Material" + rowNo].value = $("td.material", $srcRow).text();
			dstElms["Size" + rowNo].value = $("td.size", $srcRow).text();
			dstElms["Quantity" + rowNo].value = srcElms["Quantity-" + branchNo].value;
			dstElms["Unit" + rowNo].value = srcElms["Unit-" + branchNo].value;
			dstElms["RegPrice" + rowNo].value = "";
			dstElms["MituRatio" + rowNo].value = "";
			dstElms["UPrice" + rowNo].value = srcElms["UPrice-" + branchNo].value;
			dstElms["Price" + rowNo].value = srcElms["Price-" + branchNo].value;
			dstElms["MituKake" + rowNo].value = srcElms["MituKake-" + branchNo].value;
			dstElms["Memo" + rowNo].value = "";
			dstElms["Cost" + rowNo].value = srcElms["Cost-" + branchNo].value;
			dstElms["Profit" + rowNo].value = "";
			dstElms["ProfitRate" + rowNo].value = "";
			dstElms["ZaiQuantity" + rowNo].value = srcElms["ZaiQuantity-" + branchNo].value;
			dstElms["ZaiUnit" + rowNo].value = srcElms["ZaiUnit-" + branchNo].value;
			dstElms["ZaiUPrice" + rowNo].value = srcElms["ZaiUPrice-" + branchNo].value;
			dstElms["ZaiPrice" + rowNo].value = srcElms["ZaiPrice-" + branchNo].value;
			dstElms["ZaiKei" + rowNo].value = srcElms["ZaiKei-" + branchNo].value;
			dstElms["ZaiLoss" + rowNo].value = srcElms["ZaiLoss-" + branchNo].value;
			dstElms["ZaiKake" + rowNo].value = srcElms["ZaiKake-" + branchNo].value;
			dstElms["KakouQuantity" + rowNo].value = srcElms["KakouQuantity-" + branchNo].value;
			dstElms["KakouUnit" + rowNo].value = srcElms["KakouUnit-" + branchNo].value;
			dstElms["KakouUPrice" + rowNo].value = srcElms["KakouUPrice-" + branchNo].value;
			dstElms["KakouPrice" + rowNo].value = srcElms["KakouPrice-" + branchNo].value;
			dstElms["KakouKei" + rowNo].value = srcElms["KakouKei-" + branchNo].value;
			dstElms["KakouLoss" + rowNo].value = srcElms["KakouLoss-" + branchNo].value;
			dstElms["KakouKake" + rowNo].value = srcElms["KakouKake-" + branchNo].value;
			dstElms["SekouQuantity" + rowNo].value = srcElms["SekouQuantity-" + branchNo].value;
			dstElms["SekouUnit" + rowNo].value = srcElms["SekouUnit-" + branchNo].value;
			dstElms["SekouUPrice" + rowNo].value = srcElms["SekouUPrice-" + branchNo].value;
			dstElms["SekouPrice" + rowNo].value = srcElms["SekouPrice-" + branchNo].value;
			dstElms["SekouKei" + rowNo].value = srcElms["SekouKei-" + branchNo].value;
			dstElms["SekouLoss" + rowNo].value = srcElms["SekouLoss-" + branchNo].value;
			dstElms["SekouKake" + rowNo].value = srcElms["SekouKake-" + branchNo].value;
			dstElms["CostQuantity" + rowNo].value = srcElms["CostQuantity-" + branchNo].value;
			dstElms["CostUnit" + rowNo].value = srcElms["CostUnit-" + branchNo].value;
			dstElms["CostUPrice" + rowNo].value = srcElms["CostUPrice-" + branchNo].value;
			dstElms["CostPrice" + rowNo].value = srcElms["CostPrice-" + branchNo].value;
			dstElms["CostKei" + rowNo].value = srcElms["CostKei-" + branchNo].value;
			dstElms["CostLoss" + rowNo].value = srcElms["CostLoss-" + branchNo].value;
			dstElms["CostKake" + rowNo].value = srcElms["CostKake-" + branchNo].value;
			dstElms["Remark" + rowNo].value = srcElms["Remark-" + branchNo].value;
		});
	} else {
		// 副資材を持たない材料はグループIDをクリア
		document.form_detail.CurGroupID.value = "";
	}
}

// 関数名：JS_Generate_GroupID
// 機　能：材料グループIDを生成する
// 引　数：dstElms(見積明細行のフォーム要素)
function JS_Generate_GroupID(dstElms) {
	// 見積明細行を全行チェックして出現番号（最小値）を得る
	var regExp = new RegExp("^" + gGroupCode + "-([0-9a-f]+)$", "i");
	var row_count = parseInt(dstElms["UchiwakeCnt"].value);
	var idxs = [];

	for (var i = 1; i <= row_count; i++) {
		var gid = dstElms["GroupID" + i].value;
		var test = gid.match(regExp);

		if (test) {
			idxs.push(parseInt(test[1], 16));
		}
	}

	var idx = 0;

	if (idxs.length > 0) { // 1以上の空いている最も小さい数を得る
		idxs.sort((a, b) => a - b);

		$.each(idxs, function(key, val){
			idx = (1 + key);

			if (idx < val) {
				idx--;
				return false;
			}
		});
	}

	idx++;
	document.form_detail.CurGroupID.value = gGroupCode + "-" + (("00" + idx.toString(16)).substr(-2));
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
			url: "./ajax/ajax_get_options.php",
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

	window.open("./customer-select.php","Cust-V3","screenX=0,screenY=0,left=0,top=0,width="+x+",height="+y+",scrollbars=1,toolbar=1,menubar=1,staus=1,resizable=1");
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

	// 行明細ダイアログの副資材をロードするように
	gParentCode = "";

	if (gComputingModal.dialog("isOpen")) {
		gComputingModal.dialog("close");
	}
}

// 関数名：JS_UchiwakeTotal_Calc
// 機　能：内訳合計計算　消費税を含む見積金額の計算
// 引　数：none
function JS_UchiwakeTotal_Calc() {

	var iRowCnt     = $("table#tbl2 tbody tr").length;
	var theForm     = document.form_main;
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

		// 粗利は見積金額－原価に変更（明細の粗利の合計とする考え方は廃止）

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
		intTotalProfit = intMituPriceNoTax - intTotalCost;
		theForm.TotalProfit.value = intTotalProfit;
		// 4:粗利率 = 粗利÷金額(見積)*100
		if (parseFloat(intMituPriceNoTax) != 0) {
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
	theForm.SekouTotal.value = JS_Comma_Ins(intSekouTotal);

	document.PrintOption.print_ConstCost.value = theForm.SekouTotal.value;
	// 雛形A～C用の施工費
	document.PrintOption.print_format_abc_opt4.value = theForm.SekouTotal.value;

	if (!gInitialRecalc) {
		gDataChanged = true;
	}

	gInitialRecalc = false;
}

// 関数名：JS_Recalc_Row_By_Quantity
// 機　能：数量が変化した時の内訳計算（見積明細画面用）
// 引　数：pObj(値が変更されたinputオブジェクト)
function JS_Recalc_Row_By_Quantity(pObj) {
	var theForm = document.form_main;
	var myVal = pObj.value;
	var objQuantity = $("input[name^='Quantity']", $(pObj).closest("tr")).get(0);
	var rowId = objQuantity.name.replace("Quantity", "");
	var motherVal = JS_Txt_To_Float(objQuantity.value); // 見積数量

	if (JS_Check_If_Number(motherVal) && motherVal != 0) {
		myVal = JS_Txt_To_Float(myVal);

		if (JS_Check_If_Number(myVal)) {
			// 材料 | 加工 | 施工 | 経費
			var myType = pObj.name.replace(rowId, "");
			var myZone = myType.replace("Quantity", "");
			var objLoss = theForm[myZone + "Loss" + rowId];
			var lossVal = objLoss.value.length == 0 ? "0.00" : JS_Txt_To_Float(objLoss.value);

			if (JS_Check_If_Number(lossVal)) {
				// 新しい係数
				var rateVal = JS_Rounding(parseFloat(myVal / (lossVal * 0.01 + 1) / motherVal), 4, gRoundOption);
				theForm[myZone + "Kei" + rowId].value = JS_Float_To_Txt(rateVal, 4);

				if (objLoss.value.length == 0) { // 空のロス率には0を入れる
					theForm[myZone + "Loss" + rowId].value = "0.00";
				}
			} else {
				pObj.value = "0.00";
				theForm[myZone + "Kei" + rowId].value = JS_Float_To_Txt(0);
			}
		} else { // 自分の値が数値でなければ何もできない
			pObj.value = "0.00";
		}
	} else { // 見積数量が数値でなければ何もできない
		pObj.value = "0.00";
	}

	JS_Uchiwake_Calc(rowId, 1);
}

// 関数名：JS_Uchiwake_Calc
// 機　能：内訳計算（見積明細画面用）
// 引　数：pVal(行番号) pMode(bit0(1):金額再計算 bit1(2):見積数量変更 bit2(4):合計値を再計算しない bit3(8):副資材)
function JS_Uchiwake_Calc(pVal, pMode) {

	var formElms = document.form_main.elements;
	var noErr = true;
	var arrData = {
		Quantity: "",
		Unit: "",
		UPrice: "",
		Price: "",
		MituKake: "",
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

	// 副資材の判断
	if (IsSubMaterialRow(formElms[("GroupID" + pVal)])) {
		pMode |= 8;
	}

	// ▼数量変更
	if ((pMode & 3) == 2) {
		// 見積数量
		arrData.Quantity = JS_Comma_Del(formElms[("Quantity" + pVal)].value);
		// 材料費数量を算出する根拠（見積数量×係数×ロス率）
		arrData.ZaiKei = JS_Comma_Del(formElms[("ZaiKei" + pVal)].value);
		arrData.ZaiLoss = JS_Comma_Del(formElms[("ZaiLoss" + pVal)].value);
		arrData.ZaiLoss = arrData.ZaiLoss.length == 0 ? "0" : arrData.ZaiLoss;
		// 加工費数量を算出する根拠（見積数量×係数×ロス率）
		arrData.KakouKei = JS_Comma_Del(formElms[("KakouKei" + pVal)].value);
		arrData.KakouLoss = JS_Comma_Del(formElms[("KakouLoss" + pVal)].value);
		arrData.KakouLoss = arrData.KakouLoss.length == 0 ? "0" : arrData.KakouLoss;
		// 施工費数量を算出する根拠（見積数量×係数×ロス率）
		arrData.SekouKei = JS_Comma_Del(formElms[("SekouKei" + pVal)].value);
		arrData.SekouLoss = JS_Comma_Del(formElms[("SekouLoss" + pVal)].value);
		arrData.SekouLoss = arrData.SekouLoss.length == 0 ? "0" : arrData.SekouLoss;
		// 追加経費数量を算出する根拠（見積数量×係数×ロス率）
		arrData.CostKei = JS_Comma_Del(formElms[("CostKei" + pVal)].value);
		arrData.CostLoss = JS_Comma_Del(formElms[("CostLoss" + pVal)].value);
		arrData.CostLoss = arrData.CostLoss.length == 0 ? "0" : arrData.CostLoss;

		// 数量変更
		noErr = JS_Uchiwake_Calc_Sub((pMode & 11), arrData);

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
		pMode = (pMode & 12) | 1;
	}
	// ▲数量変更((pMode & 3) == 2)

	// ▼金額再計算
	if ((pMode & 3) == 1) {
		// 見積金額 = 見積数量×見積単価×見積掛率
		if (arrData.Quantity === "") {
			arrData.Quantity = JS_Comma_Del(formElms[("Quantity" + pVal)].value);
		}
		arrData.UPrice   = JS_Comma_Del(formElms[("UPrice" + pVal)].value);
		arrData.MituKake = JS_Comma_Del(formElms[("MituKake" + pVal)].value);

		// 見積数量と見積単価が入力されていて見積掛率が空の時は見積掛率に100を入れる
		if (arrData.Quantity != "" && arrData.UPrice != "" && arrData.MituKake == "") {
			formElms[("MituKake" + pVal)].value = "100.0";
			arrData.MituKake = 100.0;
		}

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
		noErr = JS_Uchiwake_Calc_Sub((pMode & 11), arrData);

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
		if (JS_Check_If_Number(arrData.Cost) && arrData.Cost != 0) { // 0は表示しない
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
		MituKake: "",
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

	// 係数・ロス率・数量・掛率・単価が空の項目にデフォルト値を入れる
	if (formElms["MituKake"].value == "") { formElms["MituKake"].value = "100.0"; }
	if (formElms["ZaiKei"].value == "") { formElms["ZaiKei"].value = "1.00"; }
	if (formElms["ZaiLoss"].value == "") { formElms["ZaiLoss"].value = "0.00"; }
	if (formElms["ZaiQuantity"].value == "") { formElms["ZaiQuantity"].value = "0.00"; }
	if (formElms["ZaiUPrice"].value == "") { formElms["ZaiUPrice"].value = "0"; }
	if (formElms["ZaiKake"].value == "") { formElms["ZaiKake"].value = "100.0"; }
	if (formElms["KakouKei"].value == "") { formElms["KakouKei"].value = "1.00"; }
	if (formElms["KakouLoss"].value == "") { formElms["KakouLoss"].value = "0.00"; }
	if (formElms["KakouQuantity"].value == "") { formElms["KakouQuantity"].value = "0.00"; }
	if (formElms["KakouUPrice"].value == "") { formElms["KakouUPrice"].value = "0"; }
	if (formElms["KakouKake"].value == "") { formElms["KakouKake"].value = "100.0"; }
	if (formElms["SekouKei"].value == "") { formElms["SekouKei"].value = "1.00"; }
	if (formElms["SekouLoss"].value == "") { formElms["SekouLoss"].value = "0.00"; }
	if (formElms["SekouQuantity"].value == "") { formElms["SekouQuantity"].value = "0.00"; }
	if (formElms["SekouUPrice"].value == "") { formElms["SekouUPrice"].value = "0"; }
	if (formElms["SekouKake"].value == "") { formElms["SekouKake"].value = "100.0"; }
	if (formElms["CostKei"].value == "") { formElms["CostKei"].value = "1.00"; }
	if (formElms["CostLoss"].value == "") { formElms["CostLoss"].value = "0.00"; }
	if (formElms["CostQuantity"].value == "") { formElms["CostQuantity"].value = "0.00"; }
	if (formElms["CostUPrice"].value == "") { formElms["CostUPrice"].value = "0"; }
	if (formElms["CostKake"].value == "") { formElms["CostKake"].value = "100.0"; }

	// ▼数量変更
	if ((pMode & 3) == 2) {
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

		// 副資材がある時は副資材の数量を同期させる
		if (!$("#subMaterialList").hasClass("hide")) {
			$("#subMaterialList #TblChildren tbody tr").each(function(){
				JS_Detail_Calc_Sub($("input[name^=Quantity-]", this).get(0), true);
			});
		}

		// 数量が変化したので金額再計算
		pMode = 1;
	}
	// ▲数量変更

	// ▼金額再計算
	if ((pMode & 3) == 1) {
		// 見積金額 = 見積数量×見積単価×見積掛率
		if (arrData.Quantity === "") {
			arrData.Quantity = JS_Txt_To_Float(formElms["Quantity"].value);
		}
		arrData.UPrice   = JS_Txt_To_Int(formElms["UPrice"].value);
		arrData.MituKake = JS_Txt_To_Float(formElms["MituKake"].value);

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
	// ▲金額再計算((pMode & 3) == 1)
}


// 関数名：JS_Detail_Calc_Sub
// 機　能：副資材内訳再計算（行明細ダイアログ用）
// 引　数：obj:副資材行のinput要素, keepQuantity:true=副資材の係数を維持する
function JS_Detail_Calc_Sub(obj, keepRate) {
	// keepRateはJS_Detail_Calc()から呼ばれる時のみtrue
	if (typeof(keepRate) === "undefined") {
		keepRate = false;
	}

	var $row = $(obj).closest("tr");
	var Volume = JS_Txt_To_Float(document.form_detail.Quantity.value);
	var Cost = 0;
	var junk, Rate, Quantity, Kake;

	if (!JS_Check_If_Number(Volume)) {
		Volume = 0;
	}

	if (obj.name.match(/Quantity-/)) {
		if (keepRate) { // 親資材の数量が変更された
			// 親資材の数量に連動するのは副資材の係数ではなく数量
			junk = $("input[name^=Rate-]", $row).val();

			if (!JS_Check_If_Number(junk)) {
				Rate = 1.0;
				$("input[name^=Rate-]", $row).val(JS_Float_To_Txt(Rate));
			} else {
				Rate = parseFloat(junk);
			}

			Quantity = Volume * Rate;
			$("input[name^=Quantity-]", $row).val(JS_Float_To_Txt(Quantity))
		} else { // 副資材の数量が変更された
			// 副資材の数量が変更された時は副資材の係数が変化する
			junk = $("input[name^=Quantity-]", $row).val();
			Quantity = JS_Check_If_Number(junk) ? parseFloat(junk) : 0;
			$("input[name^=Quantity-]", $row).val(JS_Float_To_Txt(Quantity))
			Rate = Quantity / Volume;
			$("input[name^=Rate-]", $row).val(JS_Float_To_Txt(Rate));
		}

		Volume = Quantity;
	} else {
		junk = $("input[name^=Rate-]", $row).val();
		Rate = JS_Check_If_Number(junk) ? parseFloat(junk) : 1.0;
		Volume = Volume * Rate;
		$("input[name^=Quantity-]", $row).val(JS_Float_To_Txt(Volume));
	}

	junk = JS_Txt_To_Int($("input[name^=UPrice-]", $row).val());
	var UPrice = JS_Check_If_Number(junk) ? junk : 0;
	junk = $("input[name^=MituKake-]", $row).val();
	Kake = JS_Check_If_Number(junk) ? parseFloat(junk) : 100.0;
	$("input[name^=UPrice-]", $row).val(JS_Int_To_Txt(UPrice))
	$("input[name^=Price-]", $row).val(Volume != 0 ? JS_Int_To_Txt(UPrice * 0.01 * Kake * Volume) : "");

	junk = $("input[name^=ZaiKei-]", $row).val();
	var Kei = JS_Check_If_Number(junk) ? parseFloat(junk) : 1.0;
	junk = $("input[name^=ZaiLoss-]", $row).val();
	var Loss = JS_Check_If_Number(junk) ? parseFloat(junk) : 0;
	Quantity = Volume * Kei * (0.01 * Loss + 1.0);
	junk = JS_Txt_To_Int($("input[name^=ZaiUPrice-]", $row).val());
	UPrice = JS_Check_If_Number(junk) ? junk : 0;
	junk = $("input[name^=ZaiKake-]", $row).val();
	Kake = JS_Check_If_Number(junk) ? parseFloat(junk) : 100.0;
	var Price = UPrice * (0.01 * Kake) * Quantity;
	Cost += Price;
	$("input[name^=ZaiQuantity-]", $row).val(Quantity != 0 ? JS_Float_To_Txt(Quantity) : "");
	$("input[name^=ZaiPrice-]", $row).val(Price != 0 ? JS_Int_To_Txt(Price) : "");
	$("input[name^=ZaiUPrice-]", $row).val(UPrice != 0 ? JS_Int_To_Txt(UPrice) : "");

	junk = $("input[name^=KakouKei-]", $row).val();
	Kei = JS_Check_If_Number(junk) ? parseFloat(junk) : 1.0;
	junk = $("input[name^=KakouLoss-]", $row).val();
	Loss = JS_Check_If_Number(junk) ? parseFloat(junk) : 0;
	Quantity = Volume * Kei * (0.01 * Loss + 1.0);
	junk = JS_Txt_To_Int($("input[name^=KakouUPrice-]", $row).val());
	UPrice = JS_Check_If_Number(junk) ? junk : 0;
	junk = $("input[name^=KakouKake-]", $row).val();
	Kake = JS_Check_If_Number(junk) ? parseFloat(junk) : 100.0;
	Price = UPrice * (0.01 * Kake) * Quantity;
	Cost += Price;
	$("input[name^=KakouQuantity-]", $row).val(Quantity != 0 ? JS_Float_To_Txt(Quantity) : "");
	$("input[name^=KakouPrice-]", $row).val(Price != 0 ? JS_Int_To_Txt(Price) : "");
	$("input[name^=KakouUPrice-]", $row).val(UPrice != 0 ? JS_Int_To_Txt(UPrice) : "");

	junk = $("input[name^=SekouKei-]", $row).val();
	Kei = JS_Check_If_Number(junk) ? parseFloat(junk) : 1.0;
	junk = $("input[name^=SekouLoss-]", $row).val();
	Loss = JS_Check_If_Number(junk) ? parseFloat(junk) : 0;
	Quantity = Volume * Kei * (0.01 * Loss + 1.0);
	junk = JS_Txt_To_Int($("input[name^=SekouUPrice-]", $row).val());
	UPrice = JS_Check_If_Number(junk) ? junk : 0;
	junk = $("input[name^=SekouKake-]", $row).val();
	Kake = JS_Check_If_Number(junk) ? parseFloat(junk) : 100.0;
	Price = UPrice * (0.01 * Kake) * Quantity;
	Cost += Price;
	$("input[name^=SekouQuantity-]", $row).val(Quantity != 0 ? JS_Float_To_Txt(Quantity) : "");
	$("input[name^=SekouPrice-]", $row).val(Price != 0 ? JS_Int_To_Txt(Price) : "");
	$("input[name^=SekouUPrice-]", $row).val(UPrice != 0 ? JS_Int_To_Txt(UPrice) : "");

	junk = $("input[name^=CostKei-]", $row).val();
	Kei = JS_Check_If_Number(junk) ? parseFloat(junk) : 1.0;
	junk = $("input[name^=CostLoss-]", $row).val();
	Loss = JS_Check_If_Number(junk) ? parseFloat(junk) : 0;
	Quantity = Volume * Kei * (0.01 * Loss + 1.0);
	junk = JS_Txt_To_Int($("input[name^=CostUPrice-]", $row).val());
	UPrice = JS_Check_If_Number(junk) ? junk : 0;
	junk = $("input[name^=CostKake-]", $row).val();
	Kake = JS_Check_If_Number(junk) ? parseFloat(junk) : 100.0;
	Price = UPrice * (0.01 * Kake) * Quantity;
	Cost += Price;
	$("input[name^=CostQuantity-]", $row).val(Quantity != 0 ? JS_Float_To_Txt(Quantity) : "");
	$("input[name^=CostPrice-]", $row).val(Price != 0 ? JS_Int_To_Txt(Price) : "");
	$("input[name^=CostUPrice-]", $row).val(UPrice != 0 ? JS_Int_To_Txt(UPrice) : "");

	$("input[name^=Cost-]", $row).val(Cost != 0 ? JS_Int_To_Txt(Cost) : "");

	gDetailChanged = true;
}


// 関数名：JS_Detail_Changed
// 機　能：行明細変更のマーク（行明細ダイアログ用）
function JS_Detail_Changed() {
	gDetailChanged = true;
}


// 関数名：JS_Uchiwake_Calc_Sub
// 機　能：内訳計算（共通部分）
// 引　数：pMode(1:金額再計算 2:見積数量変更 8:副資材), pData(明細データ) 
function JS_Uchiwake_Calc_Sub(pMode, pData) {
	var noErr = true;

	// ▼数量変更
	if ((pMode & 3) == 2) {
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
	if ((pMode & 3) == 1) {
		var fltRate = 0;

		// 見積金額 = 見積数量×見積単価×見積掛率
		if (JS_Check_If_Number(pData.Quantity)) {
			pData.Quantity = parseFloat(pData.Quantity);

			if (JS_Check_If_Number(pData.MituKake) && JS_Check_If_Number(pData.UPrice)) {
				fltRate = parseFloat(pData.MituKake) * 0.01;
				pData.Price = JS_Rounding(pData.Quantity * fltRate * parseInt(pData.UPrice), 0, gRoundOption);
			} else if ((pMode & 8) != 0) { // 副資材は見積金額を持たない（経費のみ）
				pData.Price = "";
			} else {
				pData.Price = "";
				noErr = false;
			}
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
		var fltExpenseRate  = document.form_main.ExpenseRate.value != "" ? parseFloat(document.form_main.ExpenseRate.value) : 0;
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

		if ((pMode & 8) == 0) { // 副資材でなければ粗利と粗利率を計算
			// 粗利 = 見積金額－経費込原価
			if (noErr) {
				pData.Profit = JS_Rounding(parseFloat(pData.Price) - parseFloat(pData.Cost), 2, gRoundOption);

				if (! JS_Check_If_Number(pData.Profit)) {
					noErr = false;
				}
			}

			// 粗利率 = 粗利÷見積金額×100
			if (noErr) {
				if (JS_Check_If_Number(pData.Price) && pData.Price != 0) {
					pData.ProfitRate = parseFloat(pData.Profit / pData.Price * 100);

					if (! JS_Check_If_Number(pData.ProfitRate)) {
						noErr = false;
					}
				} else { // -Infinity回避
					if (pData.Profit < 0) {
						pData.ProfitRate = -100;
					} else {
						pData.ProfitRate = "";
					}
				}
			}
		}

		return noErr;
	}
	// ▲金額再計算((pMode & 3) == 1)

	return false;
}

// 関数名：JS_Sync_Value
// 機　能：行明細ダイアログ内のヘッダーとリストを同期　※数量,単位,単価
// 引　数：pObj(値が変更されたinputオブジェクト) 
function JS_Sync_Value(pObj) {
	var theForm = document.form_detail;
	var hasSubMaterial = false;

	switch (pObj.name) {
		case "Quantity":
			theForm.MituQuantity.value = JS_Float_To_Txt(theForm.Quantity.value);

			// 材料未選択の場合
			if (theForm.ZaiName.value == "") {
				// 材料費・加工費・施工費・追加経費の係数・ロス率・数量・単位・掛率に初期値を入れる
				JS_Init_Values(theForm, "Quantity", theForm.MituQuantity.value);
			} else if(hasSubMaterial) { // 副資材を持っていたら各副資材の数量を連動させる
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

			if(hasSubMaterial) { // 副資材を持っていたら各副資材の数量を連動させる
			}
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
		if (pForm.MituKake.value.length == 0) {
			pForm.MituKake.value = "100.0";
		}

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
	var $srcRow, $srcRowElms, $dstRow, $dstRowElms;

	if (insRowNo > $detailRows.length) {
		alert("挿入する行の指定が不正です。");
		return;
	}

	for (var i = $detailRows.length; i > insRowNo; i--) { // データを移動する
		$srcRow = $($detailRows.get(i - 2));
		$dstRow = $($detailRows.get(i - 1));
		$srcRowElms = $("input[type=hidden],input[type=text],input[name*=Memo]", $srcRow);
		$dstRowElms = $("input[type=hidden],input[type=text],input[name*=Memo]", $dstRow);

		$srcRowElms.each(function(index){
			$($dstRowElms.get(index)).val($(this).val());
		});

		if ($srcRow.hasClass("SubMaterial")) {
			if (!$dstRow.hasClass("SubMaterial")) {
				$dstRow.addClass("SubMaterial");
				$("input[type=text].sub-inactive", $dstRow).attr("readonly", true);
				$("input[type=button].sub-inactive", $dstRow).prop("disabled", true);
			}
		} else if ($dstRow.hasClass("SubMaterial")) {
			$dstRow.removeClass("SubMaterial");
			$("input[type=text].sub-inactive", $dstRow).attr("readonly", false);
			$("input[type=button].sub-inactive", $dstRow).prop("disabled", false);
		}
	}

	// 最終行は行データを消すだけ
	$dstRow = $($detailRows.get(insRowNo - 1));

	if ($dstRow.hasClass("SubMaterial")) {
		$dstRow.removeClass("SubMaterial");
		$("input[type=text].sub-inactive", $dstRow).attr("readonly", false);
		$("input[type=button].sub-inactive", $dstRow).prop("disabled", false);
	}

	$("input[type=hidden],input[type=text],input[name*=Memo]", $dstRow).each(function(){
		$(this).val("");
	});
}

// 関数名：JS_Row_Del
// 機　能：明細行削除
// 引　数：delRowNo(削除する行番号)
function JS_Row_Del(delRowNo) {
	var $detailRows = $("table#tbl2 > tbody > tr");
	var $srcRow, $srcRowElms, $dstRow, $dstRowElms;

	if (delRowNo > $detailRows.length) {
		alert("削除する行の指定が不正です。");
		return;
	}

	while (delRowNo < $detailRows.length) { // データを移動する
		$srcRow = $($detailRows.get(delRowNo));
		$dstRow = $($detailRows.get(delRowNo - 1));
		$srcRowElms = $("input[type=hidden],input[type=text],input[name*=Memo]", $srcRow);
		$dstRowElms = $("input[type=hidden],input[type=text],input[name*=Memo]", $dstRow);

		$srcRowElms.each(function(index){
			$($dstRowElms.get(index)).val($(this).val());
		});

		if ($srcRow.hasClass("SubMaterial")) {
			if (!$dstRow.hasClass("SubMaterial")) {
				$dstRow.addClass("SubMaterial");
				$("input[type=text].sub-inactive", $dstRow).attr("readonly", true);
				$("input[type=button].sub-inactive", $dstRow).attr("disabled", true);
			}
		} else if ($dstRow.hasClass("SubMaterial")) {
			$dstRow.removeClass("SubMaterial");
			$("input[type=text].sub-inactive", $dstRow).attr("readonly", false);
			$("input[type=button].sub-inactive", $dstRow).attr("disabled", false);
		}

		delRowNo++;
	}

	// 最終行は行データを消すだけ
	$dstRow = $($detailRows.get($detailRows.length - 1));

	if ($dstRow.hasClass("SubMaterial")) {
		$dstRow.removeClass("SubMaterial");
		$("input[type=text].sub-inactive", $dstRow).attr("readonly", false);
		$("input[type=button].sub-inactive", $dstRow).attr("disabled", false);
	}

	$("input[type=hidden],input[type=text],input[name*=Memo]", $dstRow).each(function(){
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
		obj.value = document.form_options.Op4.value != "" ? document.form_options.Op4.value : "0";
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
	if (val == null || val === "" || isNaN(val)) {
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
	var dstForm = document.form_main;

	if (srcForm["LargeCateID" + from] && dstForm["LargeCateID" + to]) {
		dstForm["GroupID" + to].value = srcForm["GroupID" + from].value;
		dstForm["LargeCateID" + to].value = srcForm["LargeCateID" + from].value;
		dstForm["TypeID" + to].value = srcForm["TypeID" + from].value;
		dstForm["ZaiRatio" + to].value = srcForm["ZaiRatio" + from].value;
		dstForm["Heading" + to].value = srcForm["Heading" + from].value;
		dstForm["ZaiName" + to].value = srcForm["ZaiName" + from].value;
		dstForm["Material" + to].value = srcForm["Material" + from].value;
		dstForm["Size" + to].value = srcForm["Size" + from].value;
		dstForm["Quantity" + to].value = srcForm["Quantity" + from].value;
		dstForm["Unit" + to].value = srcForm["Unit" + from].value;
		dstForm["RegPrice" + to].value = srcForm["RegPrice" + from].value;
		dstForm["MituRatio" + to].value = srcForm["MituRatio" + from].value;
		dstForm["UPrice" + to].value = srcForm["UPrice" + from].value;
		dstForm["Price" + to].value = srcForm["Price" + from].value;
		dstForm["MituKake" + to].value = srcForm["MituKake" + from].value;
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

		if (dstForm["GroupID" + to].value.match(/^[0-9a-f]{8,}-[0-9a-f]{2,}-[0-9a-f]{2,}$/)) { // 副資材
			var $dstRow = $(dstForm["GroupID" + to]).closest("tr");
			$dstRow.addClass("SubMaterial");
			$("input[type=text].sub-inactive", $dstRow).attr("readonly", false);
			$("input[type=button].sub-inactive", $dstRow).attr("disabled", false);
		}
	}
}

// 関数名：JS_Check_Room
// 機　能：明細行を貼付ける余裕があるかチェックする
// 引　数：request:行数, insertPoint:貼付位置
function JS_Check_Room(request, insertPoint) {
	var theForm = $("form#form_main").get(0);
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
			// ■ 副資材の直前にはペースト禁止
			if (IsSubMaterialRow(obj)) {
				alert("副資材の直前には貼付けできません。");
				$(obj).prop("checked", false);
			} else {
				$("#container-inner #btn-row-paste").removeClass("input-off").addClass("input-on");
			}
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
				if (IsSubMaterialRow(obj)) {
					alert("副資材の直前には貼付けできません。");
					$(obj).prop("checked", false);
				} else {
					$("#container-inner #btn-ref-paste").removeClass("input-off").addClass("input-on");
				}
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
// 引　数：shortage:貼付に不足する行数
function JS_Add_Detail_Rows(shortage) {
	// 不足分の空白行を末尾にページ単位で追加する。
	var morepage = parseInt((shortage + 22) / 23);
	var row_count = parseInt(document.form_main.UchiwakeCnt.value);
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

	// フォーカス移動
	$("input.gofwdx").on("keydown", function(e) {
		doAdvanceFocus(this, e);
	});

	$("input.gofwdx").removeClass("gofwdx").addClass("gofwd")

	document.form_main.UchiwakeCnt.value = new_max;
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
		url: "./ajax/ajax_search_reference.php",
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
		url: "./ajax/ajax_get_reference.php",
		data: {
			id: gReferId,
			ExpenseRate: $("#ExpenseRate").val()
		},
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
		case "modal_subtotal":
			PrepareSubtotalRows();
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
		case "modal_subtotal":
			$("#modal_subtotal table.subtotal-table tr.subtotal-row").remove();
			$("#modal_subtotal table.subtotal-table tr.result").remove();
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
	var srcForm = document.form_main;
	var dstForm = document.InvoiceOption;
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
		case "EstCustom-A": // 雛形Ａ
			pForm.PrintOption1.value = $("#print_format_abc_opt1").prop("checked") ? $("#print_format_abc_opt1").val() : ""; // 様邸を表示
			pForm.PrintOption2.value = $("#print_format_abc_opt2").prop("checked") ? $("#print_format_abc_opt2").val() : ""; // 見積内訳内に値引表示

			if ($("#print_format_abc_opt3").prop("checked")) { // 法定福利費ON
				pForm.PrintOption4.value = $("#print_format_abc_opt3v1").prop("checked") ? $("#print_format_abc_opt3v1").val() : $("#print_format_abc_opt3v2").val();
				pForm.PrintOption5.value = $("#print_format_abc_opt4").val(); // 法定福利費（施工費）
				pForm.PrintOption6.value = $("#print_format_abc_opt5").val(); // 法定福利費（労務費）
			}
			break;
		case "EstCustom-B": // 雛形Ｂ
			pForm.PrintOption1.value = $("#print_format_abc_opt1").prop("checked") ? $("#print_format_abc_opt1").val() : ""; // 様邸を表示
			pForm.PrintOption2.value = $("#print_format_abc_opt2").prop("checked") ? $("#print_format_abc_opt2").val() : ""; // 見積内訳内に値引表示
			pForm.PrintOption3.value = $("#print_format_b_opt1").val(); // 顧客担当者

			if ($("#print_format_abc_opt3").prop("checked")) { // 法定福利費ON
				pForm.PrintOption4.value = $("#print_format_abc_opt3v1").prop("checked") ? $("#print_format_abc_opt3v1").val() : $("#print_format_abc_opt3v2").val();
				pForm.PrintOption5.value = $("#print_format_abc_opt4").val(); // 法定福利費（施工費）
				pForm.PrintOption6.value = $("#print_format_abc_opt5").val(); // 法定福利費（労務費）
			}
			break;
		case "EstCustom-C": // 雛形Ｃ
			pForm.PrintOption1.value = $("#print_format_abc_opt1").prop("checked") ? $("#print_format_abc_opt1").val() : ""; // 様邸を表示
			pForm.PrintOption2.value = $("#print_format_abc_opt2").prop("checked") ? $("#print_format_abc_opt2").val() : ""; // 見積内訳内に値引表示
			pForm.PrintOption3.value = $("#print_format_c_opt1").prop("checked") ? $("#print_format_c_opt1").val() : ""; // 小計

			if ($("#print_format_abc_opt3").prop("checked")) { // 法定福利費ON
				pForm.PrintOption4.value = $("#print_format_abc_opt3v1").prop("checked") ? $("#print_format_abc_opt3v1").val() : $("#print_format_abc_opt3v2").val();
				pForm.PrintOption5.value = $("#print_format_abc_opt4").val(); // 法定福利費（施工費）
				pForm.PrintOption6.value = $("#print_format_abc_opt5").val(); // 法定福利費（労務費）
			}
			break;
		case "EstCoverV3": // 見積表紙
			pForm.PrintOption1.value = $("#print_type1_op1").prop("checked") ? $("#print_type1_op1").val() : ""; // 見積日付
			pForm.PrintOption2.value = $("#print_type1_op2").prop("checked") ? $("#print_type1_op2").val() : ""; // 値引き
			break;
		case "EstDetailV3": // 見積内訳
			pForm.PrintOption1.value = $("#print_type2_op1").prop("checked") ? $("#print_type2_op1").val() : ""; // 小計
			pForm.PrintOption2.value = $("#print_type2_op2").prop("checked") ? $("#print_type2_op2").val() : ""; // 単価
			pForm.PrintOption3.value = $("#print_type2_op3").prop("checked") ? $("#print_type2_op3").val() : ""; // 金額
			pForm.PrintOption7.value = $("#print_type2_op7").prop("checked") ? $("#print_type2_op7").val() : ""; // 見積日付

			if ($("#print_type2_op4").prop("checked")) { // 法定福利費
				pForm.PrintOption4.value = $("#print_type2_op5").prop("checked") ? $("#print_type2_op5").val() : $("#print_type2_op6").val();
				pForm.PrintOption5.value = $("#print_ConstCost").val(); // 法定福利費（施工費）
				pForm.PrintOption6.value = $("#print_LaborCost").val(); // 法定福利費（労務費）
			}
			break;
		case "MaterialV3": // 材料一覧
			pForm.PrintOption1.value = $("#print_type4_op1").prop("checked") ? $("#print_type4_op1").val() : ""; // 小計
			break;
		case "ProcessV3": // 加工一覧
			pForm.PrintOption1.value = $("#print_type5_op1").prop("checked") ? $("#print_type5_op1").val() : ""; // 小計
			break;
		case "ConstructV3": // 施工一覧
			pForm.PrintOption1.value = $("#print_type6_op1").prop("checked") ? $("#print_type6_op1").val() : ""; // 小計
			break;
		case "BudgetV3": // 実行予算表
			pForm.PrintOption1.value = $("#print_type7_op1").prop("checked") ? $("#print_type7_op1").val() : ""; // 小計
			break;
		case "CostEstV3": // 原価見積対比表
			pForm.PrintOption1.value = $("#print_type8_op1").prop("checked") ? $("#print_type8_op1").val() : ""; // 小計
			break;
		case "InvoiceCoverV3": // 請求表紙
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

	gIsPrinting = true;
}

// 関数名：JS_PrintOnce
// 機　能：帳票印刷ダイアログで選択された全ての帳票を印刷する
// 引　数：none
function JS_PrintOnce() {
	var theForm = document.form_main;

	if (theForm.Heading1.value == '' && theForm.ZaiName1.value == '' && theForm.Material1.value == '' && theForm.Size1.value == '') {
		alert("帳票印刷は見積明細の１行目を入力してから実行してください。");
		return false;
	}

	// 選択されているタイプを一つずつ開いていく
	var count = 0;

	if ($("#modal_print_menu #print_format1").prop("checked")) { // 標準書式
		// 見積表紙 print_type1 オプション＝見積日付, 見積日付, 値引き
		if ($("#modal_print_menu #print_type1").prop("checked")) {
			count++;
			JS_Print_Sub("EstCoverV3", "./print-estimate-cover.php", theForm, count);
		}

		// 見積内訳 print_type2 オプション＝小計, 単価, 金額, 法定福利費
		if ($("#modal_print_menu #print_type2").prop("checked")) {
			count++;
			JS_Print_Sub("EstDetailV3", "./print-estimate-detail.php", theForm, count);
		}

		// 見積合計 print_type3
		if ($("#modal_print_menu #print_type3").prop("checked")) {
			count++;
			JS_Print_Sub("EstSummaryV3", "./print-estimate-summary.php", theForm, count);
		}
	} else { // 雛形Ａ～Ｃ
		if ($("#modal_print_menu #print_format2").prop("checked")) {
			count++;
			JS_Print_Sub("EstCustom-A", "./print-estimate-custom-a.php", theForm, count);
		} else if ($("#modal_print_menu #print_format3").prop("checked")) {
			count++;
			JS_Print_Sub("EstCustom-B", "./print-estimate-custom-b.php", theForm, count);
		} else if ($("#modal_print_menu #print_format4").prop("checked")) {
			count++;
			JS_Print_Sub("EstCustom-C", "./print-estimate-custom-c.php", theForm, count);
		}
	}

	// 材料一覧 print_type4
	if ($("#modal_print_menu #print_type4").prop("checked")) {
		count++;
		JS_Print_Sub("MaterialV3", "./print-material.php", theForm, count);
	}

	// 加工一覧 print_type5
	if ($("#modal_print_menu #print_type5").prop("checked")) {
		count++;
		JS_Print_Sub("ProcessV3", "./print-process.php", theForm, count);
	}

	// 施工一覧 print_type6
	if ($("#modal_print_menu #print_type6").prop("checked")) {
		count++;
		JS_Print_Sub("ConstructV3", "./print-construct.php", theForm, count);
	}

	// 実行予算表 print_type7 オプション＝小計
	if ($("#modal_print_menu #print_type7").prop("checked")) {
		count++;
		JS_Print_Sub("BudgetV3", "./print-budget-plan.php", theForm, count);
	}

	// 原価見積対比表 print_type8 オプション＝小計
	if ($("#modal_print_menu #print_type8").prop("checked")) {
		count++;
		JS_Print_Sub("CostEstV3", "./print-profit-detail.php", theForm, count);
	}

	// 請求表紙 print_type9 オプション＝11個
	if ($("#modal_print_menu #print_type9").prop("checked")) {
		count++;
		JS_Print_Sub("InvoiceCoverV3", "./print-bill-cover.php", theForm, count);
	}

	// 請求内訳 print_type10
	if ($("#modal_print_menu #print_type10").prop("checked")) {
		count++;
		JS_Print_Sub("InvoiceDetailV3", "./print-bill-detail.php", theForm, count);
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

	var numRows = 1 * document.form_main.UchiwakeCnt.value;

	$("table#tbl2 > tbody > tr").each(function(){
		if (targetValue == curValue) {
			return false;
		}

		var $curInput = $("input[name^=UPrice]", this);
		var curVal = $curInput.val();
		var qty = $("input[name^=Quantity]", this).val();

		if (curVal.length > 0 && qty.length > 0) {
			// 復帰用単価保存
			$curInput.data("prev-val", curVal);
			curVal = parseFloat(JS_Comma_Del(curVal));
			// 変換レート計算
			var cnvRate = targetValue / curValue;
			var newVal = JS_Rounding((curVal * cnvRate), 0, gRoundOption);
			$curInput.val(JS_Comma_Ins(newVal));

			qty = parseFloat(JS_Comma_Del(qty));
			curValue -= JS_Rounding((curVal * qty), 0, gRoundOption);
			targetValue -= JS_Rounding((newVal * qty), 0, gRoundOption);
		} else {
			$curInput.data("prev-val", curVal);
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

	if (obj.id == "print_LaborCost") {
		// 標準書式側の編集を雛形Ａ～Ｃ側へ反映
		$("#print_format_abc_opt5").val(obj.value);
	} else {
		// 雛形Ａ～Ｃ側の編集を標準書式側へ反映
		$("#print_LaborCost").val(obj.value);
	}

	if (obj.value != "" && obj.value != "0") {
		$("#print_type2_op6").prop("checked", true);
		$("#print_format_abc_opt3v2").prop("checked", true);
	} else {
		$("#print_type2_op5").prop("checked", true);
		$("#print_format_abc_opt3v1").prop("checked", true);
	}
}

// 関数名：AffectSubMaterial
// 機　能：親資材の数量変更を副資材に伝播させる
// 引　数：obj:数量変更した行のDOMオブジェクト
function AffectSubMaterial(obj) {
	var rowNo = parseInt(obj.name.replace("Quantity", ""));
	var groupId = obj.form["GroupID" + rowNo].value;

	if (!groupId.match(/^[0-9a-f]+-[0-9a-f]+$/i)) {
		return false;
	}

	var parQuantity = parseFloat(JS_Comma_Del(obj.value));
	var regx = new RegExp("^" + groupId + "-[0-9a-f]+$", "i");
	var numChild = 0;

	while (1) {
		rowNo++;

		if (regx.test(obj.form["GroupID" + rowNo].value)) {
			var ratio = obj.form["ZaiRatio" + rowNo].value;

			if (JS_Check_If_Number(ratio)) {
				obj.form["Quantity" + rowNo].value = JS_Rounding((parQuantity * parseFloat(ratio)), 3, gRoundOption);
				JS_Uchiwake_Calc(rowNo, 6); // 合計値算出は最後
				numChild++;
			}
		} else {
			break;
		}
	}

	if (numChild > 0) { // 合計値算出
		JS_UchiwakeTotal_Calc();
	}
}

// 関数名：IsParentMaterialRow
// 機　能：親資材行かチェックする
// 引　数：obj:チェックする行のDOMオブジェクト
function IsParentMaterialRow(obj) {
	if (obj) {
		var groupId = $("input[name^='GroupID']", $(obj).closest("tr")).val();

		if (groupId.match(/^[0-9a-f]+-[0-9a-f]+$/i)) {
			return true;
		}
	}

	return false;
}

// 関数名：IsSubMaterialRow
// 機　能：副資材行かチェックする
// 引　数：obj:チェックする行のDOMオブジェクト
function IsSubMaterialRow(obj) {
	if (obj) {
		var groupId = $("input[name^='GroupID']", $(obj).closest("tr")).val();

		if (groupId.match(/^[0-9a-f]+-[0-9a-f]+-[0-9a-f]+$/i)) {
			return true;
		}
	}

	return false;
}

// 関数名：AddSubMarialRowIds
// 機　能：副資材行の行IDを追加する
// 引　数：obj:親資材行のDOMオブジェクト, rowIds:選択されている行のIDの配列
function AddSubMarialRowIds(obj, rowIds) {
	var inputObj = $("input[name^='GroupID']", $(obj).closest("tr")).get(0);
	var theForm = inputObj.form;
	var groupId = $(inputObj).val();

	if (groupId.match(/^[0-9a-f]+-[0-9a-f]+$/i)) {
		var patt = new RegExp("^" + groupId + "-[0-9a-f]+$", "i");
		var rowId = parseInt($(inputObj).attr("name").replace("GroupID", "")) + 1;

		while ($("input[name='GroupID" + rowId + "']", theForm).length > 0) {
			if (!patt.exec($("input[name='GroupID" + rowId + "']", theForm).val())) {
				break;
			}

			if ($.inArray(rowId, rowIds) == -1) {
				rowIds.push(rowId);
			}

			rowId++;
		}
	}

	return rowIds;
}

// 関数名：ClearSubMaterialList
// 機　能：副資材のリストを初期化する
function ClearSubMaterialList(){
	if (gParentCode != "" || gGroupCode != "") {
		gParentCode = "";
		gGroupCode = "";
	}

	$("#subMaterialList").addClass("hide");
}

// 関数名：LoadSubMateials
// 機　能：副資材のリストを作る
// 引　数：parentCode(親の材料コード), parentQuantity(親の見積数量), srcElms(見積明細のフォーム要素), srcId(明細行No.), groupId(グループID)
function LoadSubMateials(parentCode, parentQuantity, srcElms, srcId, groupId){
	ClearSubMaterialList();

	if (parentCode == "") { // パラメータ異常
		alert("親の材料コードが不正なため副資材のリストを作れませんでした。");
		return;
	}

	gLoadingModal.dialog("open");

	$.ajax({
		type: "get",
		url: "./ajax/ajax_get_submaterials.php",
		data: {
			parent: parentCode,
			quantity: parentQuantity,
			Op7: document.form_options.Op7.value,
			ExpenseRate: $("#ExpenseRate").val()
		},
		dataType: "json",
		async: true,
		cache: false,
		success: function(json_data) {
			if (json_data.result == "ok") {
				gParentCode = parentCode;
				gGroupCode = ("00000000" + ((1 * gParentCode).toString(16))).substr(-8);
				$("#subMaterialList #TblChildren tbody").replaceWith(json_data.tbody);
				AdjustSubMaterialSelection(srcElms, srcId, groupId);
				document.form_detail.SubRowCount.value = gSubRowCount;
				$("#subMaterialList").removeClass("hide");
				gLoadingModal.dialog("close");
			} else {
				gLoadingModal.dialog("close");
				alert(json_data.error);
			}
		},
		error: function() {
			gLoadingModal.dialog("close");
			alert("サーバとの通信に失敗しました。副資材のリストを作れませんでした。");
		}
	});
}

// 関数名：TryLoadSubMateials
// 機　能：副資材のリストを作る
// 引　数：srcElms(見積明細のフォーム要素), srcId(明細行No.)
function TryLoadSubMateials(srcElms, srcId){
	ClearSubMaterialList();
	// グループIDが無いので副資材は選択されていないものとする
	gSubRowCount = 0;
	document.form_detail.SubRowCount.value = 0;

	var data = {
		mode: "altSearch",
		cat_id: srcElms[("LargeCateID" + srcId)].value,
		type_id: srcElms[("TypeID" + srcId)].value,
		name: srcElms[("ZaiName" + srcId)].value,
		material: srcElms[("Material" + srcId)].value,
		size: srcElms[("Size" + srcId)].value,
		quantity: srcElms[("Quantity" + srcId)].value,
		Op7: document.form_options.Op7.value,
		ExpenseRate: $("#ExpenseRate").val()
	};

	if (data.cat_id == "" || data.type_id == "" || data.name == "" || data.material == "" || data.size == "") {
		return;
	}

	gLoadingModal.dialog("open");

	$.ajax({
		type: "post",
		url: "./ajax/ajax_get_submaterials.php",
		data: data,
		dataType: "json",
		async: true,
		cache: false,
		success: function(json_data) {
			if (json_data.result == "ok") {
				gParentCode = json_data.parentCode;

				if (json_data.tbody) {
					gGroupCode = ("00000000" + ((1 * gParentCode).toString(16))).substr(-8);
					$("#subMaterialList #TblChildren tbody").replaceWith(json_data.tbody);
					$("#subMaterialList").removeClass("hide");
				} else {
					$("#subMaterialList").addClass("hide");
				}

				gLoadingModal.dialog("close");
			} else {
				gLoadingModal.dialog("close");
				alert(json_data.error);
			}
		},
		error: function() {
			gLoadingModal.dialog("close");
			alert("サーバとの通信に失敗しました。副資材の有無を確認できませんでした。");
		}
	});
}

// 関数名：AdjustSubMaterialSelection
// 機　能：取り込まれている副資材の状態を再現する
// 引　数：formElms:form要素, rowNo:親資材行の番号, parId:親資材行のUID
function AdjustSubMaterialSelection(formElms, rowNo, parId){
	gSubRowCount = 0;

	$("#subMaterialList #TblChildren input.check-sel").each(function(){
		$(this).prop("checked", false);
	});

	if (formElms[("GroupID" + rowNo)].value != parId) {
		return;
	}

	var parQty = parseFloat(JS_Comma_Del(document.form_detail.Quantity.value));
	var $dstRows = $("#subMaterialList #TblChildren tbody tr");
	var patt = new RegExp("^" + parId + "-[0-9a-f]+$", "i");

	var maxRowNo = $("table#tbl2 > tbody > tr").length;
	rowNo++;

	while (rowNo <= maxRowNo) {
		if (!patt.exec(formElms[("GroupID" + rowNo)].value)) {
			break;
		}

		gSubRowCount++;
		var categoryId = formElms[("LargeCateID" + rowNo)].value;
		var typeId     = formElms[("TypeID" + rowNo)].value;
		var zaiName    = formElms[("ZaiName" + rowNo)].value;
		var material   = formElms[("Material" + rowNo)].value;
		var size       = formElms[("Size" + rowNo)].value;

		$dstRows.each(function(){
			if (categoryId == $("span.category-id", this).text()) {
				if (typeId == $("span.type-id", this).text()) {
					if (zaiName == $("td.zai-name", this).text()) {
						if (material == $("td.material", this).text()) {
							if (size == $("td.size", this).text()) {
								$("input.check-sel", this).prop("checked", true);
								// 明細行から値をコピー
								CopySubMaterialParams(formElms, rowNo, $("td:first", this).text(), parQty);
								return false;
							}
						}
					}
				}
			}
		});

		rowNo++;
	}
}

// 関数名：CopySubMaterialParams
// 機　能：明細行から副資材の値をコピー
// 引　数：srcElms:明細行のform要素, srcRowNo:明細行の番号, dstRowNo:副資材テーブルの行番号
function CopySubMaterialParams(srcElms, srcRowNo, dstRowNo, parQty){
	var dstElms = document.form_sub_material.elements;

	// 見積数量
	dstElms[("Quantity-" + dstRowNo)].value = srcElms[("Quantity" + srcRowNo)].value;
	// 親資材の数量に対する係数（親資材の数量はどこだ？）
	var junk = parseFloat(JS_Comma_Del(srcElms[("Quantity" + srcRowNo)].value));
	dstElms[("Rate-" + dstRowNo)].value = JS_Float_To_Txt(junk / parQty);
	// 原価
	dstElms[("Cost-" + dstRowNo)].value = srcElms[("Cost" + srcRowNo)].value;
	// 見積単価
	dstElms[("UPrice-" + dstRowNo)].value = srcElms[("UPrice" + srcRowNo)].value;
	// 見積金額
	dstElms[("Price-" + dstRowNo)].value = srcElms[("Price" + srcRowNo)].value;
	// 見積掛率
	dstElms[("MituKake-" + dstRowNo)].value = srcElms[("MituKake" + srcRowNo)].value;
	// 材料係数
	dstElms[("ZaiKei-" + dstRowNo)].value = srcElms[("ZaiKei" + srcRowNo)].value;
	// 材料ロス率
	dstElms[("ZaiLoss-" + dstRowNo)].value = srcElms[("ZaiLoss" + srcRowNo)].value;
	// 材料数量
	dstElms[("ZaiQuantity-" + dstRowNo)].value = srcElms[("ZaiQuantity" + srcRowNo)].value;
	// 材料単位
	dstElms[("ZaiUnit-" + dstRowNo)].value = srcElms[("ZaiUnit" + srcRowNo)].value;
	// 材料単価
	dstElms[("ZaiUPrice-" + dstRowNo)].value = srcElms[("ZaiUPrice" + srcRowNo)].value;
	// 材料掛率
	dstElms[("ZaiKake-" + dstRowNo)].value = srcElms[("ZaiKake" + srcRowNo)].value;
	// 材料金額
	dstElms[("ZaiPrice-" + dstRowNo)].value = srcElms[("ZaiPrice" + srcRowNo)].value;
	// 加工係数
	dstElms[("KakouKei-" + dstRowNo)].value = srcElms[("KakouKei" + srcRowNo)].value;
	// 加工ロス率
	dstElms[("KakouLoss-" + dstRowNo)].value = srcElms[("KakouLoss" + srcRowNo)].value;
	// 加工数量
	dstElms[("KakouQuantity-" + dstRowNo)].value = srcElms[("KakouQuantity" + srcRowNo)].value;
	// 加工単位
	dstElms[("KakouUPrice-" + dstRowNo)].value = srcElms[("KakouUPrice" + srcRowNo)].value;
	// 加工単価
	dstElms[("KakouUPrice-" + dstRowNo)].value = srcElms[("KakouUPrice" + srcRowNo)].value;
	// 加工掛率
	dstElms[("KakouKake-" + dstRowNo)].value = srcElms[("KakouKake" + srcRowNo)].value;
	// 加工金額
	dstElms[("KakouPrice-" + dstRowNo)].value = srcElms[("KakouPrice" + srcRowNo)].value;
	// 施工係数
	dstElms[("SekouKei-" + dstRowNo)].value = srcElms[("SekouKei" + srcRowNo)].value;
	// 施工ロス率
	dstElms[("SekouLoss-" + dstRowNo)].value = srcElms[("SekouLoss" + srcRowNo)].value;
	// 施工数量
	dstElms[("SekouQuantity-" + dstRowNo)].value = srcElms[("SekouQuantity" + srcRowNo)].value;
	// 施工単位
	dstElms[("SekouUnit-" + dstRowNo)].value = srcElms[("SekouUnit" + srcRowNo)].value;
	// 施工単価
	dstElms[("SekouUPrice-" + dstRowNo)].value = srcElms[("SekouUPrice" + srcRowNo)].value;
	// 施工掛率
	dstElms[("SekouKake-" + dstRowNo)].value = srcElms[("SekouKake" + srcRowNo)].value;
	// 施工金額
	dstElms[("SekouPrice-" + dstRowNo)].value = srcElms[("SekouPrice" + srcRowNo)].value;
	// 経費係数
	dstElms[("CostKei-" + dstRowNo)].value = srcElms[("CostKei" + srcRowNo)].value;
	// 経費ロス率
	dstElms[("CostLoss-" + dstRowNo)].value = srcElms[("CostLoss" + srcRowNo)].value;
	// 経費数量
	dstElms[("CostQuantity-" + dstRowNo)].value = srcElms[("CostQuantity" + srcRowNo)].value;
	// 経費単位
	dstElms[("CostUnit-" + dstRowNo)].value = srcElms[("CostUnit" + srcRowNo)].value;
	// 経費単価
	dstElms[("CostUPrice-" + dstRowNo)].value = srcElms[("CostUPrice" + srcRowNo)].value;
	// 経費掛率
	dstElms[("CostKake-" + dstRowNo)].value = srcElms[("CostKake" + srcRowNo)].value;
	// 経費金額
	dstElms[("CostPrice-" + dstRowNo)].value = srcElms[("CostPrice" + srcRowNo)].value;
	// 備考
	dstElms[("Remark-" + dstRowNo)].value = srcElms[("Remark" + srcRowNo)].value;
}

// 関数名：PrepareSubtotalRows
// 機　能：小計確認ダイアログのテーブル行を構成する
function PrepareSubtotalRows(){
	var iRowCnt       = $("table#tbl2 tbody tr").length;
	var theForm       = document.form_main;
	var formElms      = theForm.elements;
	var src           = "";
	var curGroup      = "";
	var estimateGTL   = 0;
	var materialGTL   = 0;
	var processGTL    = 0;
	var installGTL    = 0;
	var costGTL       = 0;
	var estimateTotal = 0;
	var materialTotal = 0;
	var processTotal  = 0;
	var installTotal  = 0;
	var costTotal     = 0;
	var curValue      = "";

	for (var i = 1; i <= iRowCnt; i++) {
		curValue = formElms[("Heading" + i)].value;

		if (i > 1) {
			if (curValue != "") {
				// 1つのグループ終了
				src += "<tr class=\"subtotal-row\">\n";
				src += "  <td>" + curGroup + "</td>\n";
				src += "  <td>" + JS_Comma_Ins(estimateTotal) + "</td>\n";
				src += "  <td>" + JS_Comma_Ins(materialTotal) + "</td>\n";
				src += "  <td>" + JS_Comma_Ins(processTotal) + "</td>\n";
				src += "  <td>" + JS_Comma_Ins(installTotal) + "</td>\n";
				src += "  <td>" + JS_Comma_Ins(costTotal) + "</td>\n";
				src += "</tr>\n";
				// 次のグループ開始
				estimateGTL   += estimateTotal;
				materialGTL   += materialTotal;
				processGTL    += processTotal;
				installGTL    += installTotal;
				costGTL       += costTotal;
				curGroup      = curValue;
				estimateTotal = 0;
				materialTotal = 0;
				processTotal  = 0;
				installTotal  = 0;
				costTotal     = 0;
			}
		} else {
			// 最初のグループ開始
			curGroup = curValue;
		}

		estimateTotal += 1 * JS_Txt_To_Int(formElms[("Price" + i)].value);
		materialTotal += 1 * JS_Txt_To_Int(formElms[("ZaiPrice" + i)].value);
		processTotal  += 1 * JS_Txt_To_Int(formElms[("KakouPrice" + i)].value);
		installTotal  += 1 * JS_Txt_To_Int(formElms[("SekouPrice" + i)].value);
		costTotal     += 1 * JS_Txt_To_Int(formElms[("CostPrice" + i)].value);
	}

	// 最後のグループ終了
	src += "<tr class=\"subtotal-row\">\n";
	src += "  <td>" + curGroup + "</td>\n";
	src += "  <td>" + JS_Comma_Ins(estimateTotal) + "</td>\n";
	src += "  <td>" + JS_Comma_Ins(materialTotal) + "</td>\n";
	src += "  <td>" + JS_Comma_Ins(processTotal) + "</td>\n";
	src += "  <td>" + JS_Comma_Ins(installTotal) + "</td>\n";
	src += "  <td>" + JS_Comma_Ins(costTotal) + "</td>\n";
	src += "</tr>\n";

	estimateGTL += estimateTotal;
	materialGTL += materialTotal;
	processGTL  += processTotal;
	installGTL  += installTotal;
	costGTL     += costTotal;

	src += "<tr class=\"result\">\n";
	src += "  <td>総合計</td>\n";
	src += "  <td>" + JS_Comma_Ins(estimateGTL) + "</td>\n";
	src += "  <td>" + JS_Comma_Ins(materialGTL) + "</td>\n";
	src += "  <td>" + JS_Comma_Ins(processGTL) + "</td>\n";
	src += "  <td>" + JS_Comma_Ins(installGTL) + "</td>\n";
	src += "  <td>" + JS_Comma_Ins(costGTL) + "</td>\n";
	src += "</tr>\n";

	$("#modal_subtotal table.subtotal-table tr.header_lower").after(src);
}


// onready
$(document).ready(function() {
	Pace.on("hide", function(){
		$(".modal-overlay").remove();
	});

	$(window).on("beforeunload", function(){
		if (gDataChanged) {
			return "編集内容が保存されていません。\n編集内容を破棄してよろしいですか？";
		}

		return;
	});

	$(window).on("unload", function(){
		$("body").append("<div class='modal-overlay' style='display:block;'></div>");
	});

	$("#MituDate,#ConstDate,#CompDate,#SrcDateFrom,#SrcDateTo").datepicker({
		dateFormat: "yy-mm-dd",
	});

	// http://mkoryak.github.io/floatThead/
	$("table#tbl2").floatThead({
		scrollContainer: true,
		floatContainerClass: "dashuboard-m",
		zIndex: "auto"
	});

	$(".open").click(function() {
		var $context = $(this).closest("div");
		$(".input-cell", $context).slideToggle("slow");
		$(this).toggleClass("active");
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
	// ■■■■■ 副資材のみのコピーは禁止 ■■■未実装■■■
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
			JS_Copy_Line(gCopyLines[i], insertPoint, document.form_main);
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
				// 副資材の直前には行挿入禁止
				if (IsSubMaterialRow(this)) {
					alert("副資材の直前には行を挿入できません。");
					return false;
				}

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
	// ■ 親資材を削除した時は副資材も削除
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
				var row_id = parseInt($(this).attr("id").replace("chkrow_", ""));

				if ($.inArray(row_id, rowIds) == -1) {
					rowIds.push(row_id);
				}

				// 選択状況を把握してから副資材を追加すべきか調べる
				if (IsParentMaterialRow(this)) {
					rowIds = AddSubMarialRowIds(this, rowIds);
				}
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
			location.href = "./estimate-select.php";
		}

		return false;
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

	// 見積削除中モーダルダイアログ作成
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
						url: gTopPath + "/ajax/ajax_delete_estimate.php",
						data: {"AutoID": document.form_main.AutoID.value, "LeaveSuccessMessage": 1},
						dataType: "json",
						cache: false,
						success: function(json_data) {
							if (json_data.result == "success") {
								location.href = gTopPath + "/estimate-list.php";
							} else if (json_data.error) {
								alert(json_data.error);
								gDeletingModal.dialog("close");
							}
						},
						error: function() {
							alert("サーバとの通信に失敗しました。\n\nこの見積りを削除できませんでした。");
							gDeletingModal.dialog("close");
						}
					});
				}, 250);
			}
		});
	}

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
		var maxRow = 1 * document.form_main.UchiwakeCnt.value;

		if (curRow < maxRow) {
			var theForm = document.form_main;
			curRow++;
			// 次の明細行が副資材の場合は先へ進める
			while (curRow <= maxRow) {
				var groupId = theForm["GroupID" + curRow].value;

				if (!groupId.match(/^[0-9a-f]+-[0-9a-f]+-[0-9a-f]+$/i)) {
					break;
				}

				curRow++;
			}

			if (curRow <= maxRow) {
				JS_Configure_Detail_Dialog(curRow);
				return;
			}
		}

		alert("これより後の明細行はありません。");
	});

	// 行明細モーダルダイアログ閉じるボタン押下
	$("#detail-modal-dialog .modal-done").click(function(){
		if (gDetailChanged) {
			JS_Save_Detail();
		}

		gDetailModal.dialog("close");
	});

	// 行明細モーダルダイアログ単価計算ボタン押下
	$("#detail-modal-dialog #btn-calc-unitprice").click(function(){
		var theForm = document.form_detail;
		var ratio   = 0;
		var newVal  = 0;
		var curVal  = 0;
		var changed = false;

		// 定価に非ゼロの数字が入力されている場合のみ先へ進む
		var regPrice = JS_Txt_To_Int(theForm.RegPrice.value);

		if (JS_Check_If_Number(regPrice) && regPrice != 0) {
			// 見積掛率に非ゼロの数字が入力されている場合のみ見積単価再計算
			ratio = JS_Txt_To_Float(theForm.MituRatio.value);

			if (JS_Check_If_Number(ratio) && ratio != 0) {
				newVal = JS_Rounding((regPrice * ratio * 0.01), 0, gRoundOption);
				curVal = JS_Txt_To_Int(theForm.UPrice.value);

				if (newVal != curVal) { // 見積単価が変化する場合は値をセットして変更フラグを立てる
					theForm.UPrice.value = JS_Int_To_Txt(newVal);
					theForm.MituUPrice.value = theForm.UPrice.value;
					changed = true;
				}
			}

			// 材料掛率に非ゼロの数字が入力されている場合のみ材料単価再計算
			ratio = JS_Txt_To_Float(theForm.ZaiRatio.value);

			if (JS_Check_If_Number(ratio) && ratio != 0) {
				newVal = JS_Rounding((regPrice * ratio * 0.01), 0, gRoundOption);
				curVal = JS_Txt_To_Int(theForm.ZaiUPrice.value);

				if (newVal != curVal) { // 材料単価が変化する場合は値をセットして変更フラグを立てる
					theForm.ZaiUPrice.value = JS_Int_To_Txt(newVal);
					changed = true;
				}
			}
		}

		// 見積単価か材料単価が変化していたら見積りを再計算
		if (changed) {
			JS_Detail_Calc(1); // 金額変更による再計算
		}
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

		if (isChecked) {
			$("#form-refview .linecopy-btn input").removeClass("input-off").addClass("input-on");
		//	$("#btn-row-copy").removeClass("input-off").addClass("input-on");
		//	$("#btn-row-delete").removeClass("input-off").addClass("input-on");
		} else {
			$("#form-refview .linecopy-btn input").removeClass("input-on").addClass("input-off");
		//	$("#btn-row-copy").removeClass("input-on").addClass("input-off");
		//	$("#btn-row-delete").removeClass("input-on").addClass("input-off");
		}

	//	$("#btn-row-insert").removeClass("input-on").addClass("input-off");
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
				$("#form-refview #checkAllRef").prop("checked", false);

				$("#container-inner #btn-ref-paste").val("" + gCopyRefLines.length + "行貼付");
				$("#container-inner #btn-ref-paste").removeClass("input-on").addClass("input-off");
				$("#form-refview .linecopy-btn input").removeClass("input-on").addClass("input-off");
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

		$(window).resize();
	});

	// 帳票印刷メニューモーダルダイアログ［帳票印刷］ボタン押下
	$("#modal_print_menu #btn-print").click(function(){
		JS_PrintOnce();
	});

	// 帳票印刷メニューモーダルダイアログ［条件クリア］ボタン押下
	$("#modal_print_menu #btn-clear").click(function(){
		$("#modal_print_menu input[type=checkbox]").prop("checked", false);
	});

	$(window).focus(function(){
		if (gIsPrinting) {
			gIsPrinting = false;

			$.each(gPrintWindows, function(index, printWindow){
				if (printWindow && printWindow.closed == false) {
					if (printWindow.ready2close) {
						printWindow.close();
					} else {
						gIsPrinting = true;
					}
				}
			});
		}
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
			var prev_stat = false;

			if (this.id == "print_type2") {
				prev_stat = $("#print_type2_op4").prop("checked");
			}

			$("#modal_print_menu input[id^=" + this.id + "_op][type=checkbox]").prop("checked", true);

			if (this.id == "print_type2") {
				$("#print_type2_op4").prop("checked", prev_stat);
			}
		} else {
			$("#modal_print_menu input[id^=" + this.id + "_op][type=checkbox]").prop("checked", false);
		}
	});

	// 帳票印刷メニューで書式によってオプションの表示・非表示を切替える
	$("#modal_print_menu .format-selector > label > input").click(function(){
		if (this.value == "1") {
			$("#modal_print_menu .print_menu_groups .format-abc").addClass("hide");
			$("#modal_print_menu .print_menu_groups .format-b").addClass("hide");
			$("#modal_print_menu .print_menu_groups .format-c").addClass("hide");
			$("#modal_print_menu .print_menu_groups .format-std").removeClass("invisible");
		} else {
			$("#modal_print_menu .print_menu_groups .format-std").addClass("invisible");
			$("#modal_print_menu .print_menu_groups .format-abc").removeClass("hide");

			if (this.value == "3") {
				$("#modal_print_menu .print_menu_groups .format-b").removeClass("hide");
				$("#modal_print_menu .print_menu_groups .format-c").addClass("hide");
			} else if (this.value == "4") {
				$("#modal_print_menu .print_menu_groups .format-b").addClass("hide");
				$("#modal_print_menu .print_menu_groups .format-c").removeClass("hide");
			} else {
				$("#modal_print_menu .print_menu_groups .format-b").addClass("hide");
				$("#modal_print_menu .print_menu_groups .format-c").addClass("hide");
			}
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

	gRoundOption = 1 * ($("form#form_options").get(0).Op7.value);

	// ▼紹介者選択ダイアログ
  $("#referer-list").DataTable({
    pageLength: 25,
    language: {
      url: "./js/DataTables/JapaneseDefaults.json",
      infoEmpty: "該当する紹介者はいません。",
      emptyTable: "紹介者は登録されていません。",
      zeroRecords: "該当する紹介者はいません。検索条件を変更してください。",
      search: "絞り込み"
    }
  });

  $(".referer-select").click(function(){
    document.form_main.RefererID.value = this.id.replace("referer-", "");
    document.form_main.RefererName.value = $(this).text();
    $(".modal-overlay").click();
  });
	// ▲紹介者選択ダイアログ

	if ($("div#container > h2").length > 0) {
		setTimeout(function(){
			$("div#container > h2").hide("slow");
		}, 5000);
	}
});
//$(document).ready(function()
