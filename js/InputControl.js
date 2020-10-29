// 関数名：JS_Focus_Move
// 機　能：フォーカス移動
function JS_Focus_Move(pVal){
	var targetElm = "input[type=text],input[type=password],input[type=submit],select,input[type=button],input[type=checkbox],textarea,a,button";
	$targetElm = $( targetElm );
	$(function () {
		var elements = "input[type=text],input[type=password],select,input[type=checkbox]";
		$(elements).keypress(function (e) {
		var c = e.which ? e.which : e.keyCode;
		if (c == 13) {
			var tabindex = $( this ).attr( "tabindex" );
			if( typeof( tabindex ) != "undefined" && $( "[tabindex='" + ( tabindex - 0 + 1 ) + "']" ).size() > 0 ){
				$( "[tabindex='" + ( tabindex - 0 + 1 ) + "']" ).focus();
			}else{
				var index = $targetElm.index(this);
				$targetElm.eq( index + pVal ).focus();
			}
			e.preventDefault();
		}
		});
	});
}