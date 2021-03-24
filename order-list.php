<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=1000">
<title>受注一覧｜リフォーム倶楽部</title>
<link type="text/css" rel="stylesheet" href="css/style.css">
<link rel="shortcut icon" href="">

<script src="js/jquery-2.2.4.min.js"></script>
<script src="js/InputControl-v3.js"></script>
<script type="text/javascript">
window.paceOptions = {
  restartOnPushState: false,
  ajax: false
};
</script>
<script src="js/pace-min.js?v=20200531_20200612"></script>
<script src="js/jquery-2.2.4.min.js"></script>
<script src="js/jquery-ui.min.js"></script>
<script src="js/jquery.ui-1.10.4.datepicker.min.js"></script>
<script src="js/jquery.ui.datepicker-ja.js"></script>
<script src="js/jquery.floatThead.js"></script>
<script src="js/DataTables/datatables.min.js"></script>
<script src="js/InputControl-v3.js?v=20200531_20200612"></script>
<script src="js/CommonControl.js?v=20200531_20200612"></script>
<script src="js/modal.js?v=20200531_20200612"></script>
<script type="text/javascript">
gTopPath = "";
</script>
<script src="js/estimate.js?v=20200531_20200612"></script>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
<script>
function doEditBudget(key) {
	if (key != "") {
		if ($("#budget-" + key).length > 0) {
			location.href = "/budget-edit.php?AutoID=" + key;
		}
	}

	return false;
}

function doEditOrder(key) {
	if (key != "") {
		if ($("#order-" + key).length > 0) {
			location.href = "/order-edit.php?AutoID=" + key;
		}
	}

	return false;
}

function doSearch() {
	document.form1.default.value = "";
	document.form1.submit();
	return false;
}

function doSort(key) {
	if (key != "") {
		var theForm = document.form1;
		theForm.Sort.value = key;
		theForm.submit();
	}

	return false;
}


$(function() {
	$("input.datepicker").datepicker({
		dateFormat: "yy-mm-dd"
	});

	$("input.gofwd").on("keydown", function(e) {
		doAdvanceFocus(this, e);
	});

});
</script>
</head>
<body class="page-mitsumori">
<div class="modal-overlay" style="display:block;"></div>
<div id="wrapper">
  <div id="wrapperInner">
    <header>
      <span>
        <a href="/user-edit.php">株式会社日弘ヒーティング</a>
      </span>
      <div class="head">
        <a href="/main.php"><div class="head-name">リフォーム倶楽部</div></a>
        <div class="clear"><hr></div>
      </div><!-- .head -->
    </header>

    <div id="container">
      <div id="container-inner">
        <h2>受注一覧：受注検索</h2>
        <div class="mitsumori">
          <form name="form1" id="form1" action="/order-list.php" method="POST">
            <input type="hidden" name="default" value="">
            <input type="hidden" name="Sort" value="0">

            <table border="0" cellspacing="0" cellpadding="0" class="regist-table">
              <tr>
                <th>契約Ｎｏ</th>
                <td>
                  <input type="text" name="OrderCode" class="gofwd" value=""> ※完全一致
                </td>
              </tr>
              <tr>
                <th>見積Ｎｏ</th>
                <td>
                  <input type="text" name="MituCode" class="gofwd" value=""> ※完全一致
                </td>
              </tr>
              <tr>
                <th>契約日付</th>
                <td>
                  <input type="text" name="OrderDateS" class="datepicker gofwd" value="2020-05-07">
                  ～
                  <input type="text" name="OrderDateE" class="datepicker gofwd" value="2021-02-11">
                </td>
              </tr>
              <tr>
                <th>顧客名</th>
                <td>
                  <input type="text" name="CustName"  class="input-300 gofwd" value=""> ※あいまい検索
                </td>
              </tr>
              <tr>
                <th>工事名</th>
                <td>
                  <input type="text" name="Subject"  class="input-300 gofwd" value=""> ※あいまい検索
                </td>
              </tr>
              <tr>
                <th>担当者</th>
                <td>
                  <input type="text" name="Staff" class="textField gofwd" list="cboStaff" value=""> ※あいまい検索
                  <datalist id="cboStaff">
                    <option value="朝霧　真也"></option>
                    <option value="越懸澤　直"></option>
                    <option value="高瀬　所長"></option>
                  </datalist>
                </td>
              </tr>
              <tr>
                <th>メモ</th>
                <td>
                  <input type="text" name="Memo" class="input-300 stop-gofwd" value=""> ※あいまい検索
                </td>
              </tr>
<tr>
<th>請求可能</th>
<td>
<input type="checkbox" name="checkbox3" id="checkbox3">
</td>
</tr>
            </table>

          <span class="regi-btn"><span class="search-btn"><input type="button" class="input" value="検　索" onclick="return doSearch();"></span></span>

            <div class="clear"><hr></div>

          </form><!-- #form1 -->

          <br><hr><br>

          <div class="dashuboard">
            <h2>検索結果　2件　（更新日時 降順）</h2>

            <table id="TblResult" border="0" cellspacing="0" cellpadding="0">
              <thead>
                <tr>
<th nowrap class="w-30">一括請求</th>
                  <th nowrap class="w-30">&nbsp;</th>
                  <th nowrap>契約Ｎｏ<span><a href="#" onclick="return doSort(1);">▲</a><a href="#" onclick="return doSort(2);">▼</a></span></th>
                  <th nowrap>工事名<span><a href="#" onclick="return doSort(3);">▲</a><a href="#" onclick="return doSort(4);">▼</a></span></th>
                  <th nowrap>顧客名<span><a href="#" onclick="return doSort(5);">▲</a><a href="#" onclick="return doSort(6);">▼</a></span></th>
                  <th nowrap>担当者<span><a href="#" onclick="return doSort(13);">▲</a><a href="#" onclick="return doSort(14);">▼</a></span></th>
                  <th nowrap>契約日付<span><a href="#" onclick="return doSort(7);">▲</a><a href="#" onclick="return doSort(8);">▼</a></span></th>
<th nowrap>売上確定日<span><a href="#" onclick="return doSort(11);">▲</a><a href="#" onclick="return doSort(12);">▼</a></span></th>
                  <th nowrap>請求日付<span><a href="#" onclick="return doSort(11);">▲</a><a href="#" onclick="return doSort(12);">▼</a></span></th>
                  <th nowrap>金額<span><a href="#" onclick="return doSort(9);">▲</a><a href="#" onclick="return doSort(10);">▼</a></span></th>
                  <th nowrap>工種</th>
                  <th nowrap>メモ</th>
                  <th nowrap class="w-30">売確</th>
</tr>
              </thead>
              <tbody>
                 <tr>
<td class="center"><input type="checkbox" name="checkbox" id="checkbox"></td>
                  <td>
                    <input type="button" name="btnEditBudget" id="budget-7495" value="実行予算" onClick="return doEditBudget(7495);">
                    <input type="button" name="btnEditOrder" id="order-7495" value="受注台帳" onClick="return doEditOrder(7495);">
                    <span id="message-7495" style="color:#e80000;"></span>
                  </td>
                  <td>00300009</td>
                  <td><a href="#" onclick="return doEditBudget(7495);">テスト</a></td>
                  <td>人工</td>
                  <td>高瀬　所長</td>
                  <td nowrap="nowrap">2020年05月08日</td>
<td nowrap="nowrap">2020年05月08日</td>
                  <td nowrap="nowrap">2020年05月08日</td>
                  <td class="mn-td">313,000</td>
                  <td class="">床暖房</td>
                  <td class=""></td>
                  <td class="center">●</td>
</tr>
                 <tr>
<td class="center"><input type="checkbox" name="checkbox2" id="checkbox2"></td>
                  <td>
                    <input type="button" name="btnEditBudget" id="budget-7493" value="実行予算" onClick="return doEditBudget(7493);">
                    <input type="button" name="btnEditOrder" id="order-7493" value="受注台帳" onClick="return doEditOrder(7493);">
                    <span id="message-7493" style="color:#e80000;"></span>
                  </td>
                  <td>00300007</td>
                  <td><a href="#" onclick="return doEditBudget(7493);">テスト</a></td>
                  <td>複数回値引きテスト</td>
                  <td>高瀬　所長</td>
                  <td nowrap="nowrap">2020年05月08日</td>
<td nowrap="nowrap">2020年05月15日</td>
                  <td nowrap="nowrap">2020年05月15日</td>
                  <td class="mn-td">741,850</td>
                  <td class="">エアコン</td>
                  <td class=""></td>
                  <td class="center">●</td>
</tr>
               </tbody>
            </table>
            <input type="button" name="" id="" value="一括請求"  class="modal-open" data-target="modal_print_menu" >
          <div class="clear"><hr></div>
          </div><!-- .dashuboard -->

        </div><!-- .mitsumori -->
        <div class="clear"><hr></div>
      </div><!-- #container-inner -->
    </div><!-- #container -->
  </div><!-- #wrapperInner -->
</div><!-- #wrapper -->
<div id="foot"></div>

<!-- ▼請求ポップアップ -->
<div id="modal_print_menu" class="modal-content" data-pre-open="JS_PreOpen" data-post-close="JS_PostClose">
  <h2>請求書発行メニュー</h2>
  <form name="PrintOption" id="" method="POST" accept-charset="UTF-8" onSubmit="return JS_Input_Chk();">
  
 
    
    
<div >
    <table border="0" cellspacing="0" cellpadding="0" class="regist-table">
<tbody>
<tr>
<th>請求日付</th>
<td><input type="text" name="OrderDate" class="datepicker gofwd" value="2020-05-07"></td>
</tr>
<tr>
<th>入金予定日</th>
<td><input type="text" name="OrderDate" class="datepicker gofwd" value="2020-05-07"></td>
</tr>
</tbody>
</table>
    
    </div>
    
    
    <!-- .print_menu_groups -->
    
    
    <!-- .print_menu_groups -->
<div class="print_menu_group"><input type="button" id="btn-print" class="button-print" value="帳票印刷"></div>
    <!-- .print_menu_groups -->

    <!-- .print_menu_groups -->
  </form><!-- #form_print_option -->

  <!-- .dashuboard -->
</div><!-- #modal_print_menu -->
<!-- ▲帳票印刷用ポップアップ -->

<script src="/js/component.js?v=20210118"></script>
</body>
</html>
