// 関数名：doInsertComma（旧JS_Txt_Comma_Ins）
// 機　能：テキストブラー時カンマ挿入
function doInsertComma(elm) {
	if (elm.value.length > 0) {
		var junk = elm.value.replace(/,/g, "");

		if (isNaN(junk)) {
			elm.value = "";
		} else {
			var str = elm.value;

			while (str != (junk = str.replace(/^([+-]?\d+)(\d\d\d)/,"$1,$2"))) {
				str = junk;
			}

			elm.value = str;
		}
	}
}

// 関数名：doRemoveComma（旧JS_Txt_Comma_Del）
// 機　能：テキストフォーカス時カンマ削除
function doRemoveComma(elm) {
	if (elm.value.length > 0) {
		var junk = elm.value.replace(/,/g, "");

		if (isNaN(junk)) {
			elm.value = "";
		} else {
			elm.value = junk;
		}
	}
}

// 関数名：doAdjustDecimal（旧JS_Txt_Decimal_Set）
// 機　能：テキストブラー時小数点以下桁数揃え
function doAdjustDecimal(elm, decimal) {
	if (elm.value.length > 0) {
		var junk = elm.value.replace(/,/g, "");

		if (isNaN(junk)) {
			elm.value = "";
		} else {
			elm.value = parseFloat(elm.value).toFixed(decimal);
		}
	}
}

// 関数名：doAdvanceFocus（旧JS_Focus_Move）
// 機　能：フォーカス移動
function doAdvanceFocus(elm, e) {
	var c = e.which ? e.which : e.keyCode;

	if (c == 13) {
		var tabOrder = $(elm).attr("tabindex");

		if (typeof(tabOrder) != "undefined" && $("[tabindex='" + (1 + tabOrder) + "']").length() > 0) {
			$("[tabindex='" + (1 + tabOrder) + "']").focus();
		} else {
			var $targetElm = $("input[type=text],input[type=password],input[type=submit],input[type=button],input[type=checkbox],select,textarea,button");

			for (var k = (1 + $targetElm.index(elm)); k < $targetElm.length; k++) {
				var dstObj = $targetElm.eq(k);
				if (dstObj && dstObj.get(0).form == elm.form) {
					if (!dstObj.prop("readonly") && !dstObj.prop("disabled")) {
						dstObj.focus();
						break;
					}
				} else {
					break;
				}
			}
		}
	}
}
