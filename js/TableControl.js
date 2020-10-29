//-----------------------------------------------------------------------------
//グローバル変数
var delRow = new Array();	//削除された行(配列)
var delNum = 0;				//削除された行数
//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------
//関数名：JS_Del_Ajax_Cust
//説　明：顧客一覧　行削除
//-----------------------------------------------------------------------------
//引数①：pRow		行番号
//引数②：pCode 	削除コード
//-----------------------------------------------------------------------------
//補　足：<table id="TblResult">指定
//-----------------------------------------------------------------------------
function JS_Del_Ajax_Cust(pRow,pCode)
{
	if (window.confirm('この顧客を削除しますか？')) {
		
		//alert(pRow);
		//alert(pCode);
		
		var tbl = document.getElementById("TblResult");
		
		var cnt = 0;
			
		for(var i=0; i<delRow.length; i++){
			if(delRow[i]<pRow) cnt++;
		}
		
		var getRow = pRow - cnt;
		//※thが2行ある場合は下記のように1行足す
		//var getRow = pRow - cnt + 1;
		
		tbl.deleteRow(getRow);
		
		delRow[delNum++] = pRow;
		
		//PHP実行ファイル用ダミーパラメータ
		var date = new Date();
		
		url = './del_MainCust.php?AutoID='+pCode+'&gettime='+date;
		
		new Ajax.Request(url,{method:"get"});
	}
}

//-----------------------------------------------------------------------------
//関数名：JS_Del_Ajax_Material
//説　明：材料一覧　行削除
//-----------------------------------------------------------------------------
//引数①：pRow		行番号
//引数②：pCode 	削除コード
//-----------------------------------------------------------------------------
//補　足：<table id="TblResult">指定
//-----------------------------------------------------------------------------
function JS_Del_Ajax_Material(pRow,pCode)
{
	if (window.confirm('この材料を削除しますか？')) {
		
		//alert(pRow);
		//alert(pCode);
		
		var tbl = document.getElementById("TblResult");
		
		var cnt = 0;
			
		for(var i=0; i<delRow.length; i++){
			if(delRow[i]<pRow) cnt++;
		}
		
		var getRow = pRow - cnt;
		//※thが2行ある場合は下記のように1行足す
		//var getRow = pRow - cnt + 1;
		
		tbl.deleteRow(getRow);
		
		delRow[delNum++] = pRow;
		
		//PHP実行ファイル用ダミーパラメータ
		var date = new Date();
		
		url = './del_MainMaterial.php?AutoID='+pCode+'&gettime='+date;
		
		new Ajax.Request(url,{method:"get"});
	}
}