// 関数名：JS_Cbo_Change_Ajax
// 機　能：コンボ選択から該当する項目を別コンボに反映　※大分類⇒種類
function JS_Cbo_Change_Ajax(objname,tblname,valid)
{	
	var select = document.getElementById(valid);
	var options = document.getElementById(valid).options;
	var value = options.item(select.selectedIndex).value;
		
	var url = 'data_'+tblname+'.php?param='+value;
	
	new Ajax.Request(url,{
		method:"get",
		onSuccess: function(xmlhttp){
		
		var buf = xmlhttp.responseText;
		ar = buf.split(",");	   		
		
		//if(objname.hasChildNode == true){
			while (objname.childNodes.length > 0){
				objname.removeChild(objname.firstChild)
			}
		//}
		
		var select = new String();
		var cnt = 0;
		var val = '';
		var start = 1;
		
   		for(var i=0 ; i<ar.length ; i++ ){
			// デフォルト未選択項目
			if(start==1){
				var insert = cnt;
				var opt = document.createElement("option");
				opt.value = 0;
				var str = document.createTextNode('未選択');
				opt.appendChild(str);				
				objname.insertBefore(opt, objname.options[insert]);
				start = 0;
			}
			cnt = cnt+1;
			if(cnt % 2 == 0){
				var insert = cnt;
				var opt = document.createElement("option");
				opt.value = val;
				var str = document.createTextNode(ar[i]);
				opt.appendChild(str);				
				objname.insertBefore(opt, objname.options[insert]);
			}else{
				val = ar[i];
				//alert(ar[i]);
			}
		}			
		
    }
  	});
}

// 関数名：JS_DataList_Change_Ajax
// 機　能：コンボ選択から該当する項目をデータリストに反映
function JS_DataList_Change_Ajax(tblname,valid)
{	
	var select 	= document.getElementById(valid);
	var options = document.getElementById(valid).options;
	var value	= options.item(select.selectedIndex).value;
		
	// 名称　DataList項目
	var url = 'data_' + tblname + '.php?param=' + value + '&mode=1';
	
	new Ajax.Request(url,{
		method:"get",
		onSuccess: function(xmlhttp){
		
		var buf = xmlhttp.responseText;
		ar = buf.split(",");	   		
			
		var val = '';
		
   		for(var i=0 ; i<ar.length ; i++ ){
			val += '<option value="' + ar[i] + '"></option>';			
		}
		
		//window.prompt("OPTION",val);
		document.getElementById("id_ZaiNameLst").innerHTML = val;
    }
  	});
  	
  	// 材質　DataList項目
	var url = 'data_' + tblname + '.php?param=' + value + '&mode=2';
  	
  	new Ajax.Request(url,{
		method:"get",
		onSuccess: function(xmlhttp){
		
		var buf = xmlhttp.responseText;
		ar = buf.split(",");	   		
			
		var val = '';
		
   		for(var i=0 ; i<ar.length ; i++ ){
			val += '<option value="' + ar[i] + '"></option>';			
		}
		
		//window.prompt("OPTION",val);
		document.getElementById("id_MaterialLst").innerHTML = val;
    }
  	});
  	
  	// 寸法　DataList項目
	var url = 'data_' + tblname + '.php?param=' + value + '&mode=3';
  	
  	new Ajax.Request(url,{
		method:"get",
		onSuccess: function(xmlhttp){
		
		var buf = xmlhttp.responseText;
		ar = buf.split(",");	   		
			
		var val = '';
		
   		for(var i=0 ; i<ar.length ; i++ ){
			val += '<option value="' + ar[i] + '"></option>';			
		}
		
		//window.prompt("OPTION",val);
		document.getElementById("id_SizeLst").innerHTML = val;
    }
  	});  	
}
