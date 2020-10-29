var gLoadingModal;
var gEditId = "";
var gDeleteId = "";

// フォーム送信前の入力内容チェック
function doSubmitForm() {
	var theForm = document.form1;
	var error = "";

	$("div.message").empty();

	if (theForm.Code.value.length == 0) {
		error += "業者CDが入力されていません。\n";
	}

	if (theForm.RowNo.value.length == 0) {
		error += "行番号が入力されていません。\n";
	}

	if (theForm.Name.value.length == 0) {
		error += "業者名が入力されていません。\n";
	}

	if (!$("#chkTypeFlg1").prop("checked") && !$("#chkTypeFlg2").prop("checked") && !$("#chkTypeFlg3").prop("checked")) {
		error += "発注者区分が選択されていません。\n";
	}

	if (error == "") {
		theForm.submit();
	} else {
		alert(error);
	}

	return false;
}

function doCopyDueDate() {
	var srcForm = document.form2;
	var dstForm = document.form1;

	if (srcForm.Cutoff.value.length > 0 || srcForm.DueMonth.value.length > 0 ||  srcForm.DueDay.value.length > 0) {
		if (srcForm.Cutoff.value.length > 0 && srcForm.Cutoff.value != "0") {
			dstForm.Cutoff1.value = srcForm.Cutoff.value;
			$("#chkEoM1").prop("checked", false);
		} else {
			dstForm.Cutoff1.value = "";
			$("#chkEoM1").prop("checked", true);
		}
		if (srcForm.DueMonth.value.length > 0 && srcForm.DueMonth.value != "0") {
			$(dstForm.DueMonth1).val(srcForm.DueMonth.value);
		} else {
			$(dstForm.DueMonth1).val("");
		}
		if (srcForm.DueDay.value.length > 0 && srcForm.DueDay.value != "0") {
			dstForm.DueDay1.value = srcForm.DueDay.value;
			$("#chkEoM3").prop("checked", false);
		} else {
			dstForm.DueDay1.value = "";
			$("#chkEoM3").prop("checked", true);
		}
	} else {
		alert("自社の締め・支払日は設定されていません。");
	}
	return false;
}

function doCancelEditing() {
	if (gEditId != "") {
		var dstForm = document.form1;

		dstForm.AutoID.value = "";
		dstForm.Code.value = "";
		dstForm.RowNo.value = "";
		dstForm.Name.value = "";
		dstForm.Kana.value = "";
		dstForm.Zip.value = "";
		dstForm.Pref.value = "";
		dstForm.Address1.value = "";
		dstForm.Address2.value = "";
		dstForm.Contact.value = "";
		dstForm.Phone.value = "";
		dstForm.Fax.value = "";
		dstForm.Cutoff1.value = "";
		dstForm.Cutoff2.value = "";
		$(dstForm.DueMonth1).val("0");
		$(dstForm.DueMonth2).val("0");
		dstForm.DueDay1.value = "";
		dstForm.DueDay2.value = "";

		$("#chkTypeFlg1").prop("checked", false);
		$("#chkTypeFlg2").prop("checked", false);
		$("#chkTypeFlg3").prop("checked", false);
		$("#chkTypeFlg4").prop("checked", false);
		$("#chkEoM1").prop("checked", true);
		$("#chkEoM2").prop("checked", true);
		$("#chkEoM3").prop("checked", true);
		$("#chkEoM4").prop("checked", true);

		$("#message-" + gEditId).text("");
		$("#edit-" + gEditId).removeClass("hide");
		$("#delete-" + gEditId).removeClass("hide");
		$(".modify").addClass("hide");
		$(".create").removeClass("hide");
		gEditId = "";
		document.form1.AutoID = "";
	}

	$("tr.editing").removeClass("editing");
	$("div.message").text("");
	return false;
}

function doEditContractor(obj) {
	if (obj) {
		doCancelEditing();

		gEditId = obj.id.replace("edit-", "");
		$("html, body").animate({"scrollTop":$("#wrapper").offset().top});

		$("#edit-" + gEditId).addClass("hide");
		$("#delete-" + gEditId).addClass("hide");
		$("#message-" + gEditId).text("編集中");
		$(obj).closest("tr").addClass("editing");
		gLoadingModal.dialog("open");

		$.ajax({
			type: "get",
			url: gBaseUrl + "/ajax/ajax_get_contractor.php",
			data: {"id": gEditId},
			dataType: "json",
			async: false,
			cache: false,
			success: function(json_data) {
				if (json_data.result == "success") {
					$(".create").addClass("hide");
					$(".modify").removeClass("hide");
					var dstForm = document.form1;
					var srcForm = json_data.form;

					$(dstForm.AutoID).val(srcForm.AutoID);
					$(dstForm.Code).val(srcForm.Code);
					$(dstForm.RowNo).val(srcForm.RowNo);
					$(dstForm.Name).val(srcForm.Name);
					$(dstForm.Kana).val(srcForm.Kana);
					$(dstForm.Zip).val(srcForm.Zip);
					$(dstForm.Pref).val(srcForm.Pref);
					$(dstForm.Address1).val(srcForm.Address1);
					$(dstForm.Address2).val(srcForm.Address2);
					$(dstForm.Contact).val(srcForm.Contact);
					$(dstForm.Phone).val(srcForm.Phone);
					$(dstForm.Fax).val(srcForm.Fax);

					if (srcForm.Cutoff1.length > 0 && srcForm.Cutoff1 != "0") {
						$(dstForm.Cutoff1).val(srcForm.Cutoff1);
						$("#chkEoM1").prop("checked", false);
					} else {
						dstForm.Cutoff1.value = "";
						$("#chkEoM1").prop("checked", true);
					}

					if (srcForm.Cutoff2.length > 0 && srcForm.Cutoff2 != "0") {
						$(dstForm.Cutoff2).val(srcForm.Cutoff2);
						$("#chkEoM2").prop("checked", false);
					} else {
						dstForm.Cutoff2.value = "";
						$("#chkEoM2").prop("checked", true);
					}

					$(dstForm.DueMonth1).val(srcForm.DueMonth1);

					if (srcForm.DueDay1.length > 0 && srcForm.DueDay1 != "0") {
						$(dstForm.DueDay1).val(srcForm.DueDay1);
						$("#chkEoM3").prop("checked", false);
					} else {
						dstForm.DueDay1.value = "";
						$("#chkEoM3").prop("checked", true);
					}

					$(dstForm.DueMonth2).val(srcForm.DueMonth2);

					if (srcForm.DueDay2.length > 0 && srcForm.DueDay2 != "0") {
						$(dstForm.DueDay2).val(srcForm.DueDay2);
						$("#chkEoM4").prop("checked", false);
					} else {
						dstForm.DueDay2.value = "";
						$("#chkEoM4").prop("checked", true);
					}

					srcForm.Flags = parseInt(srcForm.Flags);

					if (isNaN(srcForm.Flags)) {
						srcForm.Flags = 0;
					}

					$("#chkTypeFlg1").prop("checked", (srcForm.Flags & 1) != 0);
					$("#chkTypeFlg2").prop("checked", (srcForm.Flags & 2) != 0);
					$("#chkTypeFlg3").prop("checked", (srcForm.Flags & 4) != 0);
					$("#chkTypeFlg4").prop("checked", (srcForm.Flags & 8) != 0);
				} else {
					alert(json_data.error);
					doCancelEditing();
				}
			},
			error: function() {
				alert("サーバとの通信に失敗しました。\n業者情報を取得できませんでした。");
				doCancelEditing();
			},
			complete: function() {
				if (gLoadingModal.dialog("isOpen")) {
					gLoadingModal.dialog("close");
				}
			}
		});
	}

	return false;
}

function doCancelDeleting() {
	if (gDeleteId != "") {
			$("#message-" + gDeleteId).text("");
			$("#edit-" + gDeleteId).removeClass("hide");
			$("#delete-" + gDeleteId).removeClass("hide");
			gDeleteId = "";
	}

	$("tr.deleting").removeClass("deleting");
}

function doDeleteContractor(obj) {
	if (obj) {
		if (window.confirm("この業者を削除しますか？\nこの処理は回復できません。")) {
			gDeleteId = obj.id.replace("delete-", "");
			$("#edit-" + gDeleteId).addClass("hide");
			$("#delete-" + gDeleteId).addClass("hide");
			$("#message-" + gDeleteId).text("削除中");
			gLoadingModal.dialog("open");

			$.ajax({
				type: "get",
				url: gBaseUrl + "/ajax/ajax_delete_contractor.php",
				data: {"id": gDeleteId},
				dataType: "json",
				async: false,
				cache: false,
				success: function(json_data) {
					if (json_data.result == "success") {
						$("#message-" + gDeleteId).text("削除済");
						$("#edit-" + gDeleteId).remove();
						$("#delete-" + gDeleteId).remove();
					} else if (json_data.error) {
						alert(json_data.error);
						doCancelDeleting();
					}
				},
				error: function() {
					alert("サーバとの通信に失敗しました。\n\n業者を削除できませんでした。");
					doCancelDeleting();
				},
				complete: function() {
					if (gLoadingModal.dialog("isOpen")) {
						gLoadingModal.dialog("close");
					}
				}
			});
		}
	}

	return false;
}

$("document").ready(function(){
	gLoadingModal = $("#loading-modal-dialog").dialog({
		classes: { "ui-dialog":"loading-modal-dialog" },
		autoOpen: false,
		modal: true,
		position: { my: "center center", at: "center center", of: window },
		width: 350,
		open: function(event, ui) {
		}
	});

	$("input.gofwd,select.gofwd").on("keydown", function(e) {
		doAdvanceFocus(this, e);
	});

	$("#txCutoff1").change(function(){
		if (this.value.length > 0) {
			$("#chkEoM1").prop("checked", false);
		}
	});

	$("#chkEoM1").change(function(){
		if ($(this).prop("checked")) {
			$("#txCutoff1").val("");
		}
	});

	$("#txCutoff2").change(function(){
		if (this.value.length > 0) {
			$("#chkEoM2").prop("checked", false);
		}
	});

	$("#chkEoM2").change(function(){
		if ($(this).prop("checked")) {
			$("#txCutoff2").val("");
		}
	});

	$("#txDueDay1").change(function(){
		if (this.value.length > 0) {
			$("#chkEoM3").prop("checked", false);
		}
	});

	$("#chkEoM3").change(function(){
		if ($(this).prop("checked")) {
			$("#txDueDay1").val("");
		}
	});

	$("#txDueDay2").change(function(){
		if (this.value.length > 0) {
			$("#chkEoM4").prop("checked", false);
		}
	});

	$("#chkEoM4").change(function(){
		if ($(this).prop("checked")) {
			$("#txDueDay2").val("");
		}
	});

	gEditId = document.form1.AutoID.value;
});
