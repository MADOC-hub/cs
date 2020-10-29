/*
 * 材料一括編集用JS
 */
// グローバル変数
var gChanged = false;
var gSavingModal;
var gWarningModal;

function doResetForm() {
	$("#selLargeCateId").val("");
	$("#selTypeId").val("");
	$("#txName").val("");
	$("#txMaterial").val("");
	$("#txSize").val("");
	return false;
}

// 大分類の変更
function doCategoryChanged(obj) {
	if ($("#chkLinked").prop("checked")) {
		$("#selTypeId option:first").text("ロード中...");
		$("#selTypeId").val("0");
		$("#selTypeId option:gt(0)").remove();
		$("#cboZaiName").empty();
		$("#cboMaterial").empty();
		$("#cboSize").empty();

		$.ajax({
			type: "get",
			url: gTopPath + "/ajax/ajax_get_material_options.php?category=" + obj.value + "&all=1",
			async: false,
			cache: false,
			success: function(data) {
				$("#selTypeId option:first").text("未選択");

				if (data.result == "ok") {
					$("#selTypeId option:first").after(data.types);

					if (data.names) {
						$("#cboZaiName").append(data.names);
					}
					if (data.materials) {
						$("#cboMaterial").append(data.materials);
					}
					if (data.sizes) {
						$("#cboSize").append(data.sizes);
					}
				} else {
					alert(data.error);
				}
			},
			error: function() {
				$("#selTypeId option:first").text("未選択");
				alert("サーバと通信できなかったため種類のリストを構成できませんでした。");
			}
		});
	}
}

// 種類の変更
function doTypeChanged(obj) {
	if ($("#chkLinked").prop("checked")) {
		var params = "?category=" + $("#selLargeCateId").val();

		if (obj.value == "0") {
			params += "&all=1";
		} else {
			params += "&type=" + obj.value;
		}

		$("#cboZaiName").empty();
		$("#cboMaterial").empty();
		$("#cboSize").empty();

		$.ajax({
			type: "get",
			url: gTopPath + "/ajax/ajax_get_material_options.php" + params,
			async: false,
			cache: false,
			success: function(data) {
				if (data.result == "ok") {
					// 材料名称と材質の候補入れ替え
					if (data.names) {
						$("#cboZaiName").append(data.names);
					}
					if (data.materials) {
						$("#cboMaterial").append(data.materials);
					}
					if (data.sizes) {
						$("#cboSize").append(data.sizes);
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
}

// CSVエクスポート
function doExport() {
	var theForm1 = document.form1;
	var theForm2 = document.form_export;
	theForm2.LargeCateID.value = theForm1.LargeCateID.value;
	theForm2.TypeID.value = theForm1.TypeID.value;
	theForm2.ZaiName.value = theForm1.ZaiName.value;
	theForm2.Material.value = theForm1.Material.value;
	theForm2.Size.value = theForm1.Size.value;
	theForm2.submit();
}

// 材料削除
function doDeleteMaterial(obj) {
	var delId = obj.id.replace("delete-", "");
	var delRow = $(obj).closest("tr");

	$("input[type=text],select", delRow).each(function(){
		$(this).prop("disabled", true);
	});

	delRow.addClass("deleted");
	$(obj).remove();
	gChanged = true;
}

$(document).ready(function() {
	$("table#TblResult").floatThead({
		scrollContainer: true,
		floatContainerClass: "dashuboard",
		zIndex: "auto"
	});
	// フォーカス移動
	$("input.gofwd,select.gofwd").on("keydown", function(e){
		doAdvanceFocus(this, e);
	});
	$("input.price").focus(function(){
		doRemoveComma(this);
	});
	$("input.price").blur(function(){
		doInsertComma(this);
	});
	$("input,select", "table#TblResult").change(function(){
		$("input[name^='Changed-']", $(this).closest("tr")).val("1");
		gChanged = true;
	});
	$("table#TblResult select.select-category").change(function(){
		var recId = this.id.replace("selLargeCateID-", "");
		$("#selTypeID-" + recId + " option:first").text("ロード中...");
		$("#selTypeID-" + recId).val("0");
		$("#selTypeID-" + recId + " option:gt(0)").remove();

		$.ajax({
			type: "get",
			url: gTopPath + "/ajax/ajax_get_material_options.php?category=" + this.value,
			async: false,
			cache: false,
			success: function(data) {
				$("#selTypeID-" + recId + " option:first").text("未選択");

				if (data.result == "ok") {
					$("#selTypeID-" + recId + " option:first").after(data.types);
				} else {
					alert(data.error);
				}
			},
			error: function() {
				$("#selTypeID-" + recId + " option:first").text("未選択");
				alert("サーバと通信できなかったため種類のリストを再構成できませんでした。");
			}
		});
	});
	$("#btn-save").click(function(){
		if (gChanged) {
			gSavingModal.dialog("open");

			$.ajax({
				type: "post",
				url: gTopPath + "/material-multi-save.php",
				data: $(document.form2).serialize(),
				dataType: "json",
				cache: false,
				success: function(json_data) {
					if (json_data.result == "ok") {
						document.form1.export.value = "";
						// redraw
						document.form1.submit();
					} else if (json_data.error) {
						gSavingModal.dialog("close");
						alert(json_data.error);
					} else {
						gSavingModal.dialog("close");
						alert("不明な処理結果が返されました。");
					}
				},
				error: function() {
					gSavingModal.dialog("close");
					alert("サーバとの通信に失敗しました。編集内容を保存できませんでした。");
				}
			});
		} else {
			alert("何も変更されていないので保存する必要はありません。");
		}
	});

	$("#btn-export").click(function(){
		if (gChanged) {
			gWarningModal.dialog("open");
			return;
		}

		doExport();
	});

	$("#btn-save-export").click(function(){
		gWarningModal.dialog("close");
		gSavingModal.dialog("open");

		$.ajax({
			type: "post",
			url: gTopPath + "/material-multi-save.php",
			data: $(document.form2).serialize(),
			dataType: "json",
			cache: false,
			success: function(json_data) {
				if (json_data.result == "ok") {
					// auto-start exporting
					document.form1.export.value = "1";
					// redraw current page
					document.form1.submit();
				} else if (json_data.error) {
					gSavingModal.dialog("close");
					alert(json_data.error);
				} else {
					gSavingModal.dialog("close");
					alert("不明な処理結果が返されました。");
				}
			},
			error: function() {
				gSavingModal.dialog("close");
				alert("サーバとの通信に失敗しました。編集内容を保存できませんでした。");
			}
		});
	});

	$("#btn-close-warning").click(function(){
		gWarningModal.dialog("close");
	});

	$("#btn-import").click(function(){
		alert("まだ実装されていません。");
	});

	// 保存中モーダルダイアログ作成
	gWarningModal = $("#warning-modal-dialog").dialog({
		classes: {"ui-dialog":"warning-modal-dialog"},
		autoOpen: false,
		modal: true,
		width: 560,
		position: {my: "center center", at: "center center", of: window}
	});

	// 保存中モーダルダイアログ作成
	gSavingModal = $("#saving-modal-dialog").dialog({
		classes: {"ui-dialog":"saving-modal-dialog"},
		autoOpen: false,
		modal: true,
		width: 360,
		position: {my: "center center", at: "center center", of: window}
	});

	if (document.form1.export.value == "1") {
		document.form1.export.value = "";
		// export csv on blank page
		doExport();
	}

});

