/*
 * 材料個別編集用JS
 */
// グローバル変数
var gTopPath = "";
var gSubMaterialModal;

// フォーム送信前の入力内容チェック
function doSubmitForm() {
	var error = "";

	if ($("#selLargeCateId").val() == "0") {
		error = "大分類が選択されていません";
	} else if ($("#selTypeId").val() == "0") {
		error = "種類が選択されていません";
	} else if ($("#txName").val() == "") {
		error = "名称が入力されていません";
	}

	if (error == "") {
		$("h2.error,h2.message").empty();
		document.form1.submit();
	} else {
		alert(error);
	}

	return false;
}

// 大分類の変更
function doCategoryChanged(obj) {
	var $typeMenu, $nameList, $materialList;
	var params = "";

	if (obj.id == "selLargeCateId") {
		$typeMenu = $("#selTypeId");
		$nameList = $("#cboZaiName");
		$materialList = $("#cboMaterial");
		params = "&all=1";
	} else { // 副資材選択ポップアップ
		$typeMenu = $("#subTypeId");
	}

	$("option:first", $typeMenu).text("ロード中...");
	$typeMenu.val("0");
	$("option:gt(0)", $typeMenu).remove();

	if ($nameList) {
		$nameList.empty();
		$materialList.empty();
	}

	$.ajax({
		type: "get",
		url: gTopPath + "/ajax/ajax_get_material_options.php?category=" + obj.value + params,
		cache: false,
		success: function(data) {
			$("option:first", $typeMenu).text("未選択");

			if (data.result == "ok") {
				$("option:first", $typeMenu).after(data.types);
				// 材料名称と材質の候補入れ替え
				if (data.names && $nameList) {
					$nameList.append(data.names);
				}
				if (data.materials && $materialList) {
					$materialList.append(data.materials);
				}
			} else {
				alert(data.error);
			}
		},
		error: function() {
			$("option:first", $typeMenu).text("未選択");
			alert("サーバと通信できなかったため種類・名称・材質の候補を構成できませんでした。");
		}
	});
}

// 種類の変更
function doTypeChanged(obj) {
	var $categoryMenu, $nameList, $materialList;

	if (obj.id == "selTypeId") {
		$categoryMenu = $("#selLargeCateId");
		$nameList = $("#cboZaiName");
		$materialList = $("#cboMaterial");
	} else { // 副資材選択ポップアップ
		$categoryMenu = $("#subLargeCateId");
		$nameList = $("#cboSubZaiName");
		$materialList = $("#cboSubMaterial");
	}

	var params = "?category=" + $categoryMenu.val() + "&type=" + obj.value;
	$nameList.empty();
	$materialList.empty();

	$.ajax({
		type: "get",
		url: gTopPath + "/ajax/ajax_get_material_options.php" + params,
		cache: false,
		success: function(data) {
			if (data.result == "ok") {
				// 材料名称と材質の候補入れ替え
				if (data.names) {
					$nameList.append(data.names);
				}
				if (data.materials) {
					$materialList.append(data.materials);
				}
			} else {
				alert(data.error);
			}
		},
		error: function() {
			alert("サーバと通信できなかったため名称・材質の候補を構成できませんでした。");
		}
	});
}

// 副資材の検索
function doSearchSubMaterial(form) {
	var $context = $("#submaterial-modal-dialog");
	$(".dashuboard", $context).addClass("hide");
	$(".loading-box", $context).removeClass("hide");
	$("#btn-add-submaterial", $context).addClass("hide");

	$.ajax({
		type: "post",
		url: gTopPath + "/ajax/ajax_get_material_list.php",
		data: $(form).serialize(),
		dataType: "json",
		async: false,
		cache: true,
		success: function(json_data) {
			if (json_data.result == "ok") {
				$("#TblCandidates tbody", $context).empty().append(json_data.contents);
				$("#btn-add-submaterial", $context).removeClass("hide");
			} else if (json_data.error) {
				alert(json_data.error);
			}
		},
		error: function() {
			alert("サーバとの通信に失敗しました。資材を検索できませんでした。");
		},
		complete: function() {
			$(".loading-box", $context).addClass("hide");
			$(".dashuboard", $context).removeClass("hide");
		}
	});
}

function doInsertRow(key, row) {
	// 挿入場所は常に末尾
	var insId = parseInt(key);

	if ($("#sub-material-block #TblResult tbody tr").length > 0) {
		$("#sub-material-block #TblResult tbody tr:last").after(row);
	} else {
		$("#sub-material-block #TblResult tbody").append(row);
	}

	$("#TblCandidates input[name=sel-" + insId + "]").addClass("checked");
}

// 副資材削除（未確定）
function doDeleteSubMaterial(obj) {
	var selName = obj.id.replace("del-", "sel-");
	var $chk = $("#submaterial-modal-dialog #TblCandidates input[name=" + selName + "]");

	if ($chk.length > 0) {
		$chk.removeClass("checked").prop("checked", false);
	}

	$(obj).addClass("hide");
	$("input", $(obj).closest("td.del")).removeClass("subids").attr("name", "ignore[]");
	$(obj).closest("tr").addClass("deleted");
	return false;
}

// 副資材選択・選択解除の反映
function doUpdateSubMaterialList() {
	var $context = $("#submaterial-modal-dialog #TblCandidates");
	var $origin = $("input.checked", $context);

	if ($origin.length > 0) {
		$origin.each(function(){
			if (!$(this).prop("checked")) {
				doDeleteSubMaterial($("#del-" + this.value).get(0));
			}
		});
	}

	var addedIds = [];
	var $selection = $("input:checked", $context);

	if ($selection.length > 0) {
		$selection.each(function(){
			if (!$(this).hasClass("checked")) {
				var $delBtn = $("#del-" + this.value);

				if ($delBtn.length > 0) { // 復活分
					$delBtn.removeClass("hide");
					$("input", $delBtn.closest("td.del")).addClass("subids").attr("name", "submaterial[]");
					$delBtn.closest("tr").removeClass("deleted");
					$(this).addClass("checked");
				} else {
					addedIds.push(this.value);
				}
			}
		});
	}

	if (addedIds.length > 0) { // 追加分
		$context = $("#container-inner");
		$("#sub-material-block", $context).addClass("hide");
		$(".loading-box", $context).removeClass("hide");

		$.ajax({
			type: "post",
			url: gTopPath + "/ajax/ajax_get_submaterial_list.php",
			data: {ids:addedIds},
			dataType: "json",
			async: false,
			cache: true,
			success: function(json_data) {
				if (json_data.result == "ok") {
					for (var key in json_data.contents) {
						doInsertRow(key, json_data.contents[key]);
					}
				} else if (json_data.error) {
					alert(json_data.error);
				}
			},
			error: function() {
				alert("サーバとの通信に失敗しました。副資材のリストを更新できませんでした。");
			},
			complete: function() {
				$(".loading-box", $context).addClass("hide");
				$("#sub-material-block", $context).removeClass("hide");
			}
		});
	}
}

// 金額計算
function doCalcPrice() {
	var theForm = document.form1;
	var regPrice = parseInt(JS_Comma_Del(theForm.RegPrice.value));
	var rate1 = parseFloat(theForm.MituKake.value);
	var rate2 = parseFloat(theForm.ZaiKake.value);
	var error = "";

	if (isNaN(regPrice)) {
		error += "定価が数値でないため計算できません。";
	} else {
		if (isNaN(rate1)) {
			error += "見積掛率が数値でないため計算できません。";
		} else {
			theForm.Mitu.value = JS_Comma_Ins(parseInt(regPrice * rate1 / 100));
		}

		if (isNaN(rate2)) {
			alert("材料掛率が数値でないため計算できません。");
		} else {
			theForm.Zai.value = JS_Comma_Ins(parseInt(regPrice * rate2 / 100));
		}

		theForm.RegPrice.value = JS_Comma_Ins(regPrice);
	}

	if (error != "") {
		alert(error);
	}

	return false;
}

// 編集終了
function doDone() {
	window.close();
	return false;
}

$(document).ready(function() {
	$("input.gofwd,select.gofwd").on("keydown", function(e) {
		doAdvanceFocus(this, e);
	});

	// 副資材選択モーダルダイアログ作成
	gSubMaterialModal = $("#submaterial-modal-dialog").dialog({
		classes: {"ui-dialog":"submaterial-modal-dialog"},
		autoOpen: false,
		modal: true,
		width: 700,
		minWidth: 600,
		maxWidth: 800,
		maxHeight: 670,
		title: "副資材検索",
		position: {my: "center top", at: "center top", of: window}
	});

	// 副資材選択モーダルダイアログ呼び出し
	$("#submaterial-open").click(function(){
		var subIds = [];

		$("input.subids").each(function(){
			subIds.push(this.value);
		});

		if (subIds.length > 0) {
			$("#subMaterialIds").val(subIds.join(","));
		} else {
			$("#subMaterialIds").val("");
		}

		gSubMaterialModal.dialog("open");
	});

	// 副資材選択モーダルダイアログ終了
	$("#btn-add-submaterial").click(function(){
		gSubMaterialModal.dialog("close");
		// 選択・選択解除の反映
		doUpdateSubMaterialList();
	});

	// 副資材選択モーダルダイアログ終了
	$("#btn-modal-close").click(function(){
		gSubMaterialModal.dialog("close");
	});

});
