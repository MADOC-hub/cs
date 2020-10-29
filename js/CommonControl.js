// 関数名：JS_Rounding
// 機　能：端数処理
// 引　数：pNum(数字), pDigit(小数点以下桁数), pMode(端数処理方法)
function JS_Rounding(pNum, pDigit, pMode) {
	var result, pow = Math.pow(10, pDigit);

	switch (pMode) {
		case 1: // 切り上げ
			result = Math.ceil(pNum * pow) / pow;
			break;
		case 2: // 切り捨て
			result = Math.floor(pNum * pow) / pow;
			break;
		default: // 四捨五入
			result = Math.round(pNum * pow) / pow;
			break;
	}

	return result;
	
	/*-----------------------------------------------------------------------------------
	書式				説明				使用例				結果
	-------------------------------------------------------------------------------------
	Math.floor(n)		小数点以下 切り捨て	Math.floor(1234.56)	1234
	Math.ceil(n)		小数点以下 切り上げ	Math.ceil(1234.56)	1235
	Math.round(n)		小数点以下 四捨五入	Math.round(1234.56)	1235
	Math.abs(n)			絶対値				Math.abs(-1234)		1234
	Math.random()		乱数				Math.random()		0.010385091205171948
	-----------------------------------------------------------------------------------*/
}

// 関数名：JS_Comma_Ins
// 機　能：カンマ挿入
function JS_Comma_Ins(sourceStr) {
	var destStr = "" + sourceStr;
	var tmpStr = "";
	while (destStr != (tmpStr = destStr.replace(/^([+-]?\d+)(\d\d\d)/,"$1,$2"))) {
		destStr = tmpStr;
  	}
	return destStr;
}

// 関数名：JS_Txt_Comma_Ins
// 機　能：テキストブラー時カンマ挿入
function JS_Txt_Comma_Ins(pVal,pVal2) {
	//window.alert('JS_Txt_Comma_Ins');
	var FormsName = pVal;
	var ElementsName = pVal2;
	if(window.document.forms[FormsName].elements[ElementsName].value != "" && isNaN(JS_Comma_Del(window.document.forms[FormsName].elements[ElementsName].value)) == false){
		window.document.forms[FormsName].elements[ElementsName].value = JS_Comma_Ins(window.document.forms[FormsName].elements[ElementsName].value);
	}else{
		window.document.forms[FormsName].elements[ElementsName].value = "";
	}
}

// 関数名：JS_Comma_Del
// 機　能：カンマ削除
function JS_Comma_Del(w) {
	var z = w.replace(/,/g,"");
	return (z);
}

// 関数名：JS_Txt_Comma_Del
// 機　能：テキストフォーカス時カンマ削除
function JS_Txt_Comma_Del(pVal,pVal2) {
	//window.alert('JS_Txt_Comma_Del');
	var FormsName = pVal;
	var ElementsName = pVal2;
	if(window.document.forms[FormsName].elements[ElementsName].value != "" && isNaN(JS_Comma_Del(window.document.forms[FormsName].elements[ElementsName].value)) == false){
		window.document.forms[FormsName].elements[ElementsName].value = JS_Comma_Del(window.document.forms[FormsName].elements[ElementsName].value);
	}else{
		window.document.forms[FormsName].elements[ElementsName].value = "";
	}
}

// 関数名：JS_Txt_Decimal_Set
// 機　能：テキストブラー時小数点以下桁数揃え
function JS_Txt_Decimal_Set(pVal,pVal2,pVal3) {
	//window.alert('JS_Txt_Decimal_Set');
	var FormsName = pVal;
	var ElementsName = pVal2;
	if(window.document.forms[FormsName].elements[ElementsName].value != "" && isNaN(JS_Comma_Del(window.document.forms[FormsName].elements[ElementsName].value)) == false){
		window.document.forms[FormsName].elements[ElementsName].value = parseFloat(window.document.forms[FormsName].elements[ElementsName].value).toFixed(pVal3);
	}else{
		window.document.forms[FormsName].elements[ElementsName].value = "";
	}
}

// 関数名：JS_Txt_Str_Del
// 機　能：テキストブラー時文字列削除
// 説　明：数値のみテキストの文字削除
function JS_Txt_Str_Del(pVal,pVal2) {
	//window.alert('JS_Txt_Comma_Ins');
	var FormsName = pVal;
	var ElementsName = pVal2;
	if(window.document.forms[FormsName].elements[ElementsName].value != "" && isNaN(window.document.forms[FormsName].elements[ElementsName].value)){
		window.document.forms[FormsName].elements[ElementsName].value = "";
	}
}
