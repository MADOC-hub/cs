<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=1000">
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<title>実行予算｜リフォーム倶楽部</title>
<link type="text/css" rel="stylesheet" href="css/style.css?v=20210118">
<link type="text/css" rel="stylesheet" href="css/datatables.min.css">
<script src="js/jquery-2.2.4.min.js"></script>
<script src="js/jquery-ui.min.js"></script>
<script src="js/jquery.ui-1.10.4.datepicker.min.js"></script>
<script src="js/jquery.ui.datepicker-ja.js"></script>
<script src="js/jquery.floatThead.js"></script>
<script src="js/DataTables/datatables.min.js"></script>
<script src="js/InputControl-v3.js?v=20210118"></script>
<script src="js/CommonControl.js?v=20210118"></script>
<script src="js/modal.js"></script>
<script src="js/budget.js?v=20210118"></script>
<!--[if lt IE 9]>
<script src="//cdn.jsdelivr.net/html5shiv/3.7.2/html5shiv.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js"></script>
<[endif]-->
<link rel="shortcut icon" href="">
<script type="text/javascript">
gTopPath = "";
</script>
</head>
<body class="page-mitsumori">

<div id="wrapper">
  <div id="wrapperInner">

    <header>
        <div class="username"><a href="/user-edit.php">株式会社日弘ヒーティング</a></div>
      <div class="head">
        <a href="/main.php"><div class="head-name">リフォーム倶楽部</div></a>
        <div class="head-menu2">
          <span class="regi-btn2"><input type="button" class="input" value="更新" onclick="return DoSave();"></span>
           <span class="sale-btn">
            <input type="button" class="modal-open" value="売上確定" data-target="modal_sales_menu">
          </span>
          <span class="del-btn"><input type="button" class="input" value="削 除" onclick="return DoDeleteThis();"></span>
         </div><!-- .head-menu2 -->
        <div class="clear"><hr></div>
      </div>
      <div id="menu"></div>
    </header>

    <div id="container">
      <div id="container-inner">
        <form name="form_main" id="form_main" action="" method="POST" accept-charset="UTF-8" onSubmit="return false;">
          <input type="hidden" name="Mode" value="">
          <input type="hidden" name="NumDetails" value="46">
          <input type="hidden" name="AutoID" value="7496">
          <input type="hidden" name="MituID" value="7803">
          <input type="hidden" name="WorkType" value="20">
          <input type="hidden" name="Section" value="1">
          <input type="hidden" name="StaffID" value="2">
          <input type="hidden" name="HonorificFlg" value="2">
          <input type="hidden" name="RefererID" value="0">
          <input type="hidden" name="CustID" value="0">
          <input type="hidden" name="OutsourceCost" value="0">
          <input type="hidden" name="InhouseCost" value="0">
          <input type="hidden" name="CurOrderPrice" value="1644000">

          <h2>実行予算</h2>
          <p class="open2">【実行予算】市川　悟志　D</p>

          <div class="input-cell">
            <table id="order-summary" cellspacing="0" cellpadding="0" border="0">
              <tbody>
                <tr>
                  <th>契約No</th>
                  <td class="ro"><input type="text" name="OrderCode" value="00200003" class="input-100p" readonly></td>
                  <th>見積No</th>
                  <td class="ro"><input type="text" name="MituCode" value="00200001" class="input-100p" readonly></td>
                  <th>契約金額</th>
                  <td class="mn"><input type="text" name="OrderPrice" id="frm-OrderPrice" class="input-110" value="1,644,000"></td>
                  <th colspan="2">原価内訳</th>
                </tr>
                <tr>
                  <th>契約日付</th>
                  <td nowrap="nowrap" class=""><input type="text" name="OrderDate" id="frm-OrderDate" class="input-80 gofwd" value=""></td>
                  <th>売上確定日</th>
                  <td nowrap="nowrap" class="ro"><input type="text" name="SalesDate" class="input-80" value="" readonly></td>
                  <th>見積金額</th>                  <td class="mn ro">
                    <input type="text" name="MituPriceNoTax" id="frm-MituPriceNoTax" class="input-110" value="1,644,000" readonly>
                    <input type="hidden" name="MituPrice" id="frm-MituPrice" value="1775520">                  </td>
                  <th>材料費</th>
                  <td class="mn ro"><input type="text" name="MaterialCost" id="frm-MaterialCost" class="input-110" value="789,356" readonly></td>
                </tr>
                <tr>
                  <th>着工日付</th>
                  <td nowrap="nowrap" class=""><input type="text" name="StartDate" id="frm-StartDate" class="input-80 gofwd" value=""></td>
                  <th>完工予定日</th>
                  <td nowrap="nowrap" class=""><input type="text" name="DoneDate" id="frm-DoneDate" class="input-80 gofwd" value=""></td>
                  <th>原価合計</th>
                  <td class="mn ro"><input type="text" name="TotalCost" id="frm-TotalCost" class="input-110" value="1,082,356" readonly></td>
                  <th>加工費</th>
                  <td class="mn ro"><input type="text" name="ProcessCost" id="frm-ProcessCost" class="input-110" value="0" readonly></td>
                </tr>
                <tr>
                  <th>顧客名</th>
                  <td class="ro"><input type="text" name="CustName" class="input-100p arbitrary" value="セキスイハイム信" readonly></td>
                  <th>紹介会社</th>
                  <td class="ro"><input type="text" name="RefererName" class="input-100p" value="" readonly></td>
                  <th>粗利金額</th>
                  <td class="mn ro"><input type="text" name="TotalProfit" id="frm-TotalProfit" class="input-110" value="561,644" readonly></td>
                  <th>施工費</th>
                  <td class="mn ro"><input type="text" name="ConstructCost" id="frm-ConstructCost" class="input-110" value="293,000" readonly></td>
                </tr>
                <tr>
                  <th>工事名称</th>
                  <td colspan="3" class="ro"><input type="text" name="Subject" class="input-100p" value="市川　悟志　D" readonly></td>
                  <th>消費税率</th>
                  <td class="input-size-50" nowrap="nowrap">
                    <select name="TaxRate" id="frm-TaxRate">
                      <option value="0.08" selected>8%</option>
                      <option value="0.1">10%</option>
                    </select><!-- TaxRate -->
                  </td>
                  <th>経費</th>
                  <td class="mn ro"><input type="text" name="ExpCost" id="frm-ExpCost" class="input-110" value="0" readonly></td>
                </tr>
                <tr>
                  <th>施工場所</th>
                  <td colspan="3" class="ro"><input type="text" name="Location" class="input-100p" value="" ></td>
                  <td colspan="4"></td>
                </tr>
<tr>
<th>担当者</th>
<td><input type="text" name="RefererName2" class="input-100p" value=""></td>
<th class="ro">メモ</th>
<td colspan="5"><input type="text" name="Location2" class="input-100p" value="" ></td>
</tr>
              </tbody>
            </table><!-- #order-summary -->

          <div class="clear"><hr></div>

        </div><!-- .input-cell -->

          <div id="detail-table-wrapper" class="jikko">
                  <div class="mid-menu">
                    <div class="mid-menu-1">
                      <h4>行操作</h4>
                      <article>
                        <input type="button" id="btn-row-copy" class="input-off" value="行コピー" title="選択されている行をコピーします。">
                        <input type="button" id="btn-row-paste" class="input-off hide" value="行貼付" title="選択されている行の直前にコピーした行を挿入します。">
                        <input type="button" id="btn-row-cancel" class="input-on hide" value="キャンセル" title="行のコピーを中止します。">
                        <input type="button" id="btn-row-insert" class="input-off" value="行挿入" title="選択されている行の直前に1行挿入します。">
                        <input type="button" id="btn-row-delete" class="input-off" value="行削除" title="選択されている行を削除します。">
                      </article>
                    </div><!-- .mid-menu-1 -->
                    <div id="add-rows">
                      <h4>ページ操作　
                        <span id="label-max-line-page">
                          46行／2ページ
                        </span>
                      </h4>
                      <article>
                        <select name="AddRowCbo" id="sel04">
                          <option value="69">1ページ追加　【69行／3ページ】</option>
                           <option value="92">2ページ追加　【92行／4ページ】</option>
                           <option value="115">3ページ追加　【115行／5ページ】</option>
                           <option value="138">4ページ追加　【138行／6ページ】</option>
                           <option value="161">5ページ追加　【161行／7ページ】</option>
                           <option value="184">6ページ追加　【184行／8ページ】</option>
                           <option value="207">7ページ追加　【207行／9ページ】</option>
                           <option value="230">8ページ追加　【230行／10ページ】</option>
                           <option value="253">9ページ追加　【253行／11ページ】</option>
                           <option value="276">10ページ追加　【276行／12ページ】</option>
                           <option value="299">11ページ追加　【299行／13ページ】</option>
                           <option value="322">12ページ追加　【322行／14ページ】</option>
                           <option value="345">13ページ追加　【345行／15ページ】</option>
                           <option value="368">14ページ追加　【368行／16ページ】</option>
                           <option value="391">15ページ追加　【391行／17ページ】</option>
                           <option value="414">16ページ追加　【414行／18ページ】</option>
                           <option value="437">17ページ追加　【437行／19ページ】</option>
                           <option value="460">18ページ追加　【460行／20ページ】</option>
                           <option value="483">19ページ追加　【483行／21ページ】</option>
                           <option value="506">20ページ追加　【506行／22ページ】</option>
                           <option value="529">21ページ追加　【529行／23ページ】</option>
                           <option value="552">22ページ追加　【552行／24ページ】</option>
                           <option value="575">23ページ追加　【575行／25ページ】</option>
                           <option value="598">24ページ追加　【598行／26ページ】</option>
                           <option value="621">25ページ追加　【621行／27ページ】</option>
                           <option value="644">26ページ追加　【644行／28ページ】</option>
                           <option value="667">27ページ追加　【667行／29ページ】</option>
                           <option value="690">28ページ追加　【690行／30ページ】</option>
                           <option value="713">29ページ追加　【713行／31ページ】</option>
                           <option value="736">30ページ追加　【736行／32ページ】</option>
                           <option value="759">31ページ追加　【759行／33ページ】</option>
                           <option value="782">32ページ追加　【782行／34ページ】</option>
                           <option value="805">33ページ追加　【805行／35ページ】</option>
                           <option value="828">34ページ追加　【828行／36ページ】</option>
                           <option value="851">35ページ追加　【851行／37ページ】</option>
                           <option value="874">36ページ追加　【874行／38ページ】</option>
                           <option value="897">37ページ追加　【897行／39ページ】</option>
                           <option value="920">38ページ追加　【920行／40ページ】</option>
                           <option value="943">39ページ追加　【943行／41ページ】</option>
                           <option value="966">40ページ追加　【966行／42ページ】</option>
                           <option value="989">41ページ追加　【989行／43ページ】</option>
                      </select><!-- #sel04 -->
                        <input type="button" class="input-on" value="行数変更" onClick="DoAddRows();">
                      </article>
                    </div><!-- #add-rows -->
                  </div><!-- .mid-menu -->

            <div class="pseudo-tab-tables">
              <div id="tabs">
                <ul>
                  <li><a href="#tabs-0" onclick="return DoSetDetailsTableClass('');">見積り</a></li>
                  <li><a href="#tabs-0" onclick="return DoSetDetailsTableClass('material');">材料</a></li>
                  <li><a href="#tabs-0" onclick="return DoSetDetailsTableClass('process');">加工</a></li>
                  <li><a href="#tabs-0" onclick="return DoSetDetailsTableClass('construct');">施工</a></li>
                  <li><a href="#tabs-0" onclick="return DoSetDetailsTableClass('cost');">経費</a></li>
                </ul>

                <div id="tabs-0">
                  <div class="mitsumori">
                    <div class="jikko-table">
                      <div class="dashuboard-m">
                        <input type="hidden" name="RowNo" value="">
                        <table id="tbl2" border="0" cellspacing="0" cellpadding="0" class="form-input" data-curent-class="">
                          <thead>
                            <tr>
                              <th class="common" nowrap><input type="checkbox" name="checkAll" id="checkAll" value="1"></th>
                              <th class="common" nowrap>&nbsp;</th>
                              <th class="common" nowrap>&nbsp;</th>
                              <th class="common" nowrap>見出</th>
                              <th class="common" nowrap>名称</th>
                              <th class="common" nowrap>材質</th>
                              <th class="common" nowrap>寸法</th>
                              <th class="default" nowrap>数量</th>
                              <th class="default" nowrap>単位</th>
                              <th class="default" nowrap>単価</th>
                              <th class="default" nowrap>金額</th>
                              <th class="default" nowrap>備考</th>
                              <th class="material" nowrap>材料数量</th>
                              <th class="material" nowrap>材料<br>単位</th>
                              <th class="material" nowrap>材料単価</th>
                              <th class="material" nowrap>材料金額</th>
                              <th class="process" nowrap>加工数量</th>
                              <th class="process" nowrap>加工<br>単位</th>
                              <th class="process" nowrap>加工単価</th>
                              <th class="process" nowrap>加工金額</th>
                              <th class="construct" nowrap>施工数量</th>
                              <th class="construct" nowrap>施工<br>単位</th>
                              <th class="construct" nowrap>施工単価</th>
                              <th class="construct" nowrap>施工金額</th>
                              <th class="cost" nowrap>経費数量</th>
                              <th class="cost" nowrap>経費<br>単位</th>
                              <th class="cost" nowrap>経費単価</th>
                              <th class="cost" nowrap>経費金額</th>
                              <th class="cost-only">経費発注先</th>
                              <th class="material-only">材料発注先</th>
                              <th class="process-only">加工発注先</th>
                              <th class="construct-only">施工発注先</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td class="check common">
                                <label>
                                  <input type="checkbox" name="chkrow_1" id="chkrow_1" class="chkrow" value="1">
                                </label>
                              </td>
                              <td class="mn-td common"><!--行番号-->
                                1
                                <input type="hidden" name="LargeCateID1" value="0">
                                <input type="hidden" name="TypeID1" value="0">
                                <input type="hidden" name="ZaiContract1" value="0">
                                <input type="hidden" name="KakouContract1" value="0">
                                <input type="hidden" name="SekouContract1" value="0">
                                <input type="hidden" name="CostContract1" value="0">
                              </td>
                              <td class="center common"><!--行明細ボタン--><input type="button" id="id_Row1" class="open-detail-dialog" value="行明細" data-target="modal-dialog-void"></td>
                              <td class="common"><!--見出-->
                                <input type="text" name="Heading1" class="input-form-100 gofwd" value="暖房設備工事" list="cboHeadingList">
                              </td>
                              <td class="common"><!--名称--><input type="text" name="ZaiName1" class="input-form-100 gofwd" value=""></td>
                              <td class="common"><!--材質--><input type="text" name="Material1" class="input-form-100 gofwd" value=""></td>
                              <td class="common"><!--寸法--><input type="text" name="Size1" class="input-form-100 gofwd" value=""></td>
                              <td class="mn default"><!--数量--><input type="text" name="Quantity1" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(1,2)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center default"><!--単位--><input type="text" name="Unit1" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn default"><!--単価--><input type="text" name="UPrice1" class="input-form-70 gofwd" value="" onchange="DoDetailRecalc(1,1)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro default"><!--金額--><input type="text" name="Price1" class="input-form-70 gofwd" value="" readonly></td>
                              <td class="default"><!--備考--><input type="text" name="Remark1" class="input-form-100 gofwd" value=""></td>
                              <td class="mn ro material"><!--材料数量--><input type="text" name="ZaiQuantity1" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center material"><!--材料単位--><input type="text" name="ZaiUnit1" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn material"><!--材料単価--><input type="text" name="ZaiUPrice1" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(1,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="right ro material"><!--材料金額--><input type="text" name="ZaiPrice1" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro process"><!--加工数量--><input type="text" name="KakouQuantity1" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center process"><!--加工単位--><input type="text" name="KakouUnit1" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn process"><!--加工単価--><input type="text" name="KakouUPrice1" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(1,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro process"><!--加工金額--><input type="text" name="KakouPrice1" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro construct"><!--施工数量--><input type="text" name="SekouQuantity1" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center construct"><!--施工単位--><input type="text" name="SekouUnit1" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn construct"><!--施工単価--><input type="text" name="SekouUPrice1" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(1,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro construct"><!--施工金額--><input type="text" name="SekouPrice1" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro cost"><!--経費数量--><input type="text" name="CostQuantity1" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center cost"><!--経費単位--><input type="text" name="CostUnit1" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn cost"><!--経費単価--><input type="text" name="CostUPrice1" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(1,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro cost"><!--経費金額--><input type="text" name="CostPrice1" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="center cost-only">                                <a class="cost hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center material-only">                                <a class="material hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center process-only">                                <a class="process hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center construct-only">                                <a class="construct hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                            </tr>
                            <tr>
                              <td class="check common">
                                <label>
                                  <input type="checkbox" name="chkrow_2" id="chkrow_2" class="chkrow" value="2">
                                </label>
                              </td>
                              <td class="mn-td common"><!--行番号-->
                                2
                                <input type="hidden" name="LargeCateID2" value="1">
                                <input type="hidden" name="TypeID2" value="39">
                                <input type="hidden" name="ZaiContract2" value="0">
                                <input type="hidden" name="KakouContract2" value="0">
                                <input type="hidden" name="SekouContract2" value="0">
                                <input type="hidden" name="CostContract2" value="0">
                              </td>
                              <td class="center common"><!--行明細ボタン--><input type="button" id="id_Row2" class="open-detail-dialog" value="行明細" data-target="modal-dialog-void"></td>
                              <td class="common"><!--見出-->
                                <input type="text" name="Heading2" class="input-form-100 gofwd" value="" list="cboHeadingList">
                              </td>
                              <td class="common"><!--名称--><input type="text" name="ZaiName2" class="input-form-100 gofwd" value="システムボイラー（コロナ）"></td>
                              <td class="common"><!--材質--><input type="text" name="Material2" class="input-form-100 gofwd" value="UHB-EG240(M)"></td>
                              <td class="common"><!--寸法--><input type="text" name="Size2" class="input-form-100 gofwd" value="---"></td>
                              <td class="mn default"><!--数量--><input type="text" name="Quantity2" class="input-form-50 gofwd" value="1.00" onchange="DoDetailRecalc(2,2)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center default"><!--単位--><input type="text" name="Unit2" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn default"><!--単価--><input type="text" name="UPrice2" class="input-form-70 gofwd" value="373,000" onchange="DoDetailRecalc(2,1)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro default"><!--金額--><input type="text" name="Price2" class="input-form-70 gofwd" value="373,000" readonly></td>
                              <td class="default"><!--備考--><input type="text" name="Remark2" class="input-form-100 gofwd" value=""></td>
                              <td class="mn ro material"><!--材料数量--><input type="text" name="ZaiQuantity2" class="input-form-50 gofwd" value="1.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center material"><!--材料単位--><input type="text" name="ZaiUnit2" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn material"><!--材料単価--><input type="text" name="ZaiUPrice2" class="input-form-50 gofwd" value="141,740" onchange="DoDetailRecalc(2,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="right ro material"><!--材料金額--><input type="text" name="ZaiPrice2" class="input-form-50 gofwd" value="141,740" readonly></td>
                              <td class="mn ro process"><!--加工数量--><input type="text" name="KakouQuantity2" class="input-form-50 gofwd" value="1.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center process"><!--加工単位--><input type="text" name="KakouUnit2" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn process"><!--加工単価--><input type="text" name="KakouUPrice2" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(2,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro process"><!--加工金額--><input type="text" name="KakouPrice2" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro construct"><!--施工数量--><input type="text" name="SekouQuantity2" class="input-form-50 gofwd" value="1.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center construct"><!--施工単位--><input type="text" name="SekouUnit2" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn construct"><!--施工単価--><input type="text" name="SekouUPrice2" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(2,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro construct"><!--施工金額--><input type="text" name="SekouPrice2" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro cost"><!--経費数量--><input type="text" name="CostQuantity2" class="input-form-50 gofwd" value="1.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center cost"><!--経費単位--><input type="text" name="CostUnit2" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn cost"><!--経費単価--><input type="text" name="CostUPrice2" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(2,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro cost"><!--経費金額--><input type="text" name="CostPrice2" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="center cost-only">                                <a class="cost hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center material-only">                                <a class="material " onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center process-only">                                <a class="process hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center construct-only">                                <a class="construct hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                            </tr>
                            <tr>
                              <td class="check common">
                                <label>
                                  <input type="checkbox" name="chkrow_3" id="chkrow_3" class="chkrow" value="3">
                                </label>
                              </td>
                              <td class="mn-td common"><!--行番号-->
                                3
                                <input type="hidden" name="LargeCateID3" value="1">
                                <input type="hidden" name="TypeID3" value="39">
                                <input type="hidden" name="ZaiContract3" value="0">
                                <input type="hidden" name="KakouContract3" value="0">
                                <input type="hidden" name="SekouContract3" value="0">
                                <input type="hidden" name="CostContract3" value="0">
                              </td>
                              <td class="center common"><!--行明細ボタン--><input type="button" id="id_Row3" class="open-detail-dialog" value="行明細" data-target="modal-dialog-void"></td>
                              <td class="common"><!--見出-->
                                <input type="text" name="Heading3" class="input-form-100 gofwd" value="" list="cboHeadingList">
                              </td>
                              <td class="common"><!--名称--><input type="text" name="ZaiName3" class="input-form-100 gofwd" value="システムボイラー（コロナ）"></td>
                              <td class="common"><!--材質--><input type="text" name="Material3" class="input-form-100 gofwd" value="UHB-EG170(M)"></td>
                              <td class="common"><!--寸法--><input type="text" name="Size3" class="input-form-100 gofwd" value="---"></td>
                              <td class="mn default"><!--数量--><input type="text" name="Quantity3" class="input-form-50 gofwd" value="1.00" onchange="DoDetailRecalc(3,2)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center default"><!--単位--><input type="text" name="Unit3" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn default"><!--単価--><input type="text" name="UPrice3" class="input-form-70 gofwd" value="343,000" onchange="DoDetailRecalc(3,1)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro default"><!--金額--><input type="text" name="Price3" class="input-form-70 gofwd" value="343,000" readonly></td>
                              <td class="default"><!--備考--><input type="text" name="Remark3" class="input-form-100 gofwd" value=""></td>
                              <td class="mn ro material"><!--材料数量--><input type="text" name="ZaiQuantity3" class="input-form-50 gofwd" value="1.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center material"><!--材料単位--><input type="text" name="ZaiUnit3" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn material"><!--材料単価--><input type="text" name="ZaiUPrice3" class="input-form-50 gofwd" value="120,050" onchange="DoDetailRecalc(3,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="right ro material"><!--材料金額--><input type="text" name="ZaiPrice3" class="input-form-50 gofwd" value="120,050" readonly></td>
                              <td class="mn ro process"><!--加工数量--><input type="text" name="KakouQuantity3" class="input-form-50 gofwd" value="1.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center process"><!--加工単位--><input type="text" name="KakouUnit3" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn process"><!--加工単価--><input type="text" name="KakouUPrice3" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(3,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro process"><!--加工金額--><input type="text" name="KakouPrice3" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro construct"><!--施工数量--><input type="text" name="SekouQuantity3" class="input-form-50 gofwd" value="1.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center construct"><!--施工単位--><input type="text" name="SekouUnit3" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn construct"><!--施工単価--><input type="text" name="SekouUPrice3" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(3,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro construct"><!--施工金額--><input type="text" name="SekouPrice3" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro cost"><!--経費数量--><input type="text" name="CostQuantity3" class="input-form-50 gofwd" value="1.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center cost"><!--経費単位--><input type="text" name="CostUnit3" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn cost"><!--経費単価--><input type="text" name="CostUPrice3" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(3,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro cost"><!--経費金額--><input type="text" name="CostPrice3" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="center cost-only">                                <a class="cost hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center material-only">                                <a class="material " onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center process-only">                                <a class="process hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center construct-only">                                <a class="construct hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                            </tr>
                            <tr>
                              <td class="check common">
                                <label>
                                  <input type="checkbox" name="chkrow_4" id="chkrow_4" class="chkrow" value="4">
                                </label>
                              </td>
                              <td class="mn-td common"><!--行番号-->
                                4
                                <input type="hidden" name="LargeCateID4" value="1">
                                <input type="hidden" name="TypeID4" value="39">
                                <input type="hidden" name="ZaiContract4" value="0">
                                <input type="hidden" name="KakouContract4" value="0">
                                <input type="hidden" name="SekouContract4" value="0">
                                <input type="hidden" name="CostContract4" value="0">
                              </td>
                              <td class="center common"><!--行明細ボタン--><input type="button" id="id_Row4" class="open-detail-dialog" value="行明細" data-target="modal-dialog-void"></td>
                              <td class="common"><!--見出-->
                                <input type="text" name="Heading4" class="input-form-100 gofwd" value="" list="cboHeadingList">
                              </td>
                              <td class="common"><!--名称--><input type="text" name="ZaiName4" class="input-form-100 gofwd" value="ボイラーリモコン（タイマー付）"></td>
                              <td class="common"><!--材質--><input type="text" name="Material4" class="input-form-100 gofwd" value="---"></td>
                              <td class="common"><!--寸法--><input type="text" name="Size4" class="input-form-100 gofwd" value="RHB-MD"></td>
                              <td class="mn default"><!--数量--><input type="text" name="Quantity4" class="input-form-50 gofwd" value="2.00" onchange="DoDetailRecalc(4,2)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center default"><!--単位--><input type="text" name="Unit4" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn default"><!--単価--><input type="text" name="UPrice4" class="input-form-70 gofwd" value="20,000" onchange="DoDetailRecalc(4,1)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro default"><!--金額--><input type="text" name="Price4" class="input-form-70 gofwd" value="40,000" readonly></td>
                              <td class="default"><!--備考--><input type="text" name="Remark4" class="input-form-100 gofwd" value=""></td>
                              <td class="mn ro material"><!--材料数量--><input type="text" name="ZaiQuantity4" class="input-form-50 gofwd" value="2.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center material"><!--材料単位--><input type="text" name="ZaiUnit4" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn material"><!--材料単価--><input type="text" name="ZaiUPrice4" class="input-form-50 gofwd" value="7,000" onchange="DoDetailRecalc(4,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="right ro material"><!--材料金額--><input type="text" name="ZaiPrice4" class="input-form-50 gofwd" value="14,000" readonly></td>
                              <td class="mn ro process"><!--加工数量--><input type="text" name="KakouQuantity4" class="input-form-50 gofwd" value="2.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center process"><!--加工単位--><input type="text" name="KakouUnit4" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn process"><!--加工単価--><input type="text" name="KakouUPrice4" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(4,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro process"><!--加工金額--><input type="text" name="KakouPrice4" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro construct"><!--施工数量--><input type="text" name="SekouQuantity4" class="input-form-50 gofwd" value="2.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center construct"><!--施工単位--><input type="text" name="SekouUnit4" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn construct"><!--施工単価--><input type="text" name="SekouUPrice4" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(4,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro construct"><!--施工金額--><input type="text" name="SekouPrice4" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro cost"><!--経費数量--><input type="text" name="CostQuantity4" class="input-form-50 gofwd" value="2.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center cost"><!--経費単位--><input type="text" name="CostUnit4" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn cost"><!--経費単価--><input type="text" name="CostUPrice4" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(4,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro cost"><!--経費金額--><input type="text" name="CostPrice4" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="center cost-only">                                <a class="cost hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center material-only">                                <a class="material " onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center process-only">                                <a class="process hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center construct-only">                                <a class="construct hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                            </tr>
                            <tr>
                              <td class="check common">
                                <label>
                                  <input type="checkbox" name="chkrow_5" id="chkrow_5" class="chkrow" value="5">
                                </label>
                              </td>
                              <td class="mn-td common"><!--行番号-->
                                5
                                <input type="hidden" name="LargeCateID5" value="32">
                                <input type="hidden" name="TypeID5" value="32">
                                <input type="hidden" name="ZaiContract5" value="0">
                                <input type="hidden" name="KakouContract5" value="0">
                                <input type="hidden" name="SekouContract5" value="0">
                                <input type="hidden" name="CostContract5" value="0">
                              </td>
                              <td class="center common"><!--行明細ボタン--><input type="button" id="id_Row5" class="open-detail-dialog" value="行明細" data-target="modal-dialog-void"></td>
                              <td class="common"><!--見出-->
                                <input type="text" name="Heading5" class="input-form-100 gofwd" value="" list="cboHeadingList">
                              </td>
                              <td class="common"><!--名称--><input type="text" name="ZaiName5" class="input-form-100 gofwd" value="ボイラー架台"></td>
                              <td class="common"><!--材質--><input type="text" name="Material5" class="input-form-100 gofwd" value="C-BZG"></td>
                              <td class="common"><!--寸法--><input type="text" name="Size5" class="input-form-100 gofwd" value="---"></td>
                              <td class="mn default"><!--数量--><input type="text" name="Quantity5" class="input-form-50 gofwd" value="2.00" onchange="DoDetailRecalc(5,2)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center default"><!--単位--><input type="text" name="Unit5" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn default"><!--単価--><input type="text" name="UPrice5" class="input-form-70 gofwd" value="12,000" onchange="DoDetailRecalc(5,1)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro default"><!--金額--><input type="text" name="Price5" class="input-form-70 gofwd" value="24,000" readonly></td>
                              <td class="default"><!--備考--><input type="text" name="Remark5" class="input-form-100 gofwd" value=""></td>
                              <td class="mn ro material"><!--材料数量--><input type="text" name="ZaiQuantity5" class="input-form-50 gofwd" value="2.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center material"><!--材料単位--><input type="text" name="ZaiUnit5" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn material"><!--材料単価--><input type="text" name="ZaiUPrice5" class="input-form-50 gofwd" value="3,300" onchange="DoDetailRecalc(5,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="right ro material"><!--材料金額--><input type="text" name="ZaiPrice5" class="input-form-50 gofwd" value="6,600" readonly></td>
                              <td class="mn ro process"><!--加工数量--><input type="text" name="KakouQuantity5" class="input-form-50 gofwd" value="2.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center process"><!--加工単位--><input type="text" name="KakouUnit5" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn process"><!--加工単価--><input type="text" name="KakouUPrice5" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(5,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro process"><!--加工金額--><input type="text" name="KakouPrice5" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro construct"><!--施工数量--><input type="text" name="SekouQuantity5" class="input-form-50 gofwd" value="2.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center construct"><!--施工単位--><input type="text" name="SekouUnit5" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn construct"><!--施工単価--><input type="text" name="SekouUPrice5" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(5,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro construct"><!--施工金額--><input type="text" name="SekouPrice5" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro cost"><!--経費数量--><input type="text" name="CostQuantity5" class="input-form-50 gofwd" value="2.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center cost"><!--経費単位--><input type="text" name="CostUnit5" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn cost"><!--経費単価--><input type="text" name="CostUPrice5" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(5,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro cost"><!--経費金額--><input type="text" name="CostPrice5" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="center cost-only">                                <a class="cost hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center material-only">                                <a class="material " onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center process-only">                                <a class="process hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center construct-only">                                <a class="construct hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                            </tr>
                            <tr>
                              <td class="check common">
                                <label>
                                  <input type="checkbox" name="chkrow_6" id="chkrow_6" class="chkrow" value="6">
                                </label>
                              </td>
                              <td class="mn-td common"><!--行番号-->
                                6
                                <input type="hidden" name="LargeCateID6" value="26">
                                <input type="hidden" name="TypeID6" value="59">
                                <input type="hidden" name="ZaiContract6" value="0">
                                <input type="hidden" name="KakouContract6" value="0">
                                <input type="hidden" name="SekouContract6" value="0">
                                <input type="hidden" name="CostContract6" value="0">
                              </td>
                              <td class="center common"><!--行明細ボタン--><input type="button" id="id_Row6" class="open-detail-dialog" value="行明細" data-target="modal-dialog-void"></td>
                              <td class="common"><!--見出-->
                                <input type="text" name="Heading6" class="input-form-100 gofwd" value="" list="cboHeadingList">
                              </td>
                              <td class="common"><!--名称--><input type="text" name="ZaiName6" class="input-form-100 gofwd" value="放熱器"></td>
                              <td class="common"><!--材質--><input type="text" name="Material6" class="input-form-100 gofwd" value="---"></td>
                              <td class="common"><!--寸法--><input type="text" name="Size6" class="input-form-100 gofwd" value="UP-Y1221"></td>
                              <td class="mn default"><!--数量--><input type="text" name="Quantity6" class="input-form-50 gofwd" value="17.00" onchange="DoDetailRecalc(6,2)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center default"><!--単位--><input type="text" name="Unit6" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn default"><!--単価--><input type="text" name="UPrice6" class="input-form-70 gofwd" value="39,500" onchange="DoDetailRecalc(6,1)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro default"><!--金額--><input type="text" name="Price6" class="input-form-70 gofwd" value="671,500" readonly></td>
                              <td class="default"><!--備考--><input type="text" name="Remark6" class="input-form-100 gofwd" value=""></td>
                              <td class="mn ro material"><!--材料数量--><input type="text" name="ZaiQuantity6" class="input-form-50 gofwd" value="17.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center material"><!--材料単位--><input type="text" name="ZaiUnit6" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn material"><!--材料単価--><input type="text" name="ZaiUPrice6" class="input-form-50 gofwd" value="16,990" onchange="DoDetailRecalc(6,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="right ro material"><!--材料金額--><input type="text" name="ZaiPrice6" class="input-form-50 gofwd" value="288,830" readonly></td>
                              <td class="mn ro process"><!--加工数量--><input type="text" name="KakouQuantity6" class="input-form-50 gofwd" value="17.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center process"><!--加工単位--><input type="text" name="KakouUnit6" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn process"><!--加工単価--><input type="text" name="KakouUPrice6" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(6,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro process"><!--加工金額--><input type="text" name="KakouPrice6" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro construct"><!--施工数量--><input type="text" name="SekouQuantity6" class="input-form-50 gofwd" value="17.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center construct"><!--施工単位--><input type="text" name="SekouUnit6" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn construct"><!--施工単価--><input type="text" name="SekouUPrice6" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(6,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro construct"><!--施工金額--><input type="text" name="SekouPrice6" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro cost"><!--経費数量--><input type="text" name="CostQuantity6" class="input-form-50 gofwd" value="17.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center cost"><!--経費単位--><input type="text" name="CostUnit6" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn cost"><!--経費単価--><input type="text" name="CostUPrice6" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(6,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro cost"><!--経費金額--><input type="text" name="CostPrice6" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="center cost-only">                                <a class="cost hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center material-only">                                <a class="material " onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center process-only">                                <a class="process hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center construct-only">                                <a class="construct hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                            </tr>
                            <tr>
                              <td class="check common">
                                <label>
                                  <input type="checkbox" name="chkrow_7" id="chkrow_7" class="chkrow" value="7">
                                </label>
                              </td>
                              <td class="mn-td common"><!--行番号-->
                                7
                                <input type="hidden" name="LargeCateID7" value="26">
                                <input type="hidden" name="TypeID7" value="59">
                                <input type="hidden" name="ZaiContract7" value="0">
                                <input type="hidden" name="KakouContract7" value="0">
                                <input type="hidden" name="SekouContract7" value="0">
                                <input type="hidden" name="CostContract7" value="0">
                              </td>
                              <td class="center common"><!--行明細ボタン--><input type="button" id="id_Row7" class="open-detail-dialog" value="行明細" data-target="modal-dialog-void"></td>
                              <td class="common"><!--見出-->
                                <input type="text" name="Heading7" class="input-form-100 gofwd" value="" list="cboHeadingList">
                              </td>
                              <td class="common"><!--名称--><input type="text" name="ZaiName7" class="input-form-100 gofwd" value="放熱器"></td>
                              <td class="common"><!--材質--><input type="text" name="Material7" class="input-form-100 gofwd" value="---"></td>
                              <td class="common"><!--寸法--><input type="text" name="Size7" class="input-form-100 gofwd" value="UP-0913"></td>
                              <td class="mn default"><!--数量--><input type="text" name="Quantity7" class="input-form-50 gofwd" value="1.00" onchange="DoDetailRecalc(7,2)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center default"><!--単位--><input type="text" name="Unit7" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn default"><!--単価--><input type="text" name="UPrice7" class="input-form-70 gofwd" value="30,000" onchange="DoDetailRecalc(7,1)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro default"><!--金額--><input type="text" name="Price7" class="input-form-70 gofwd" value="30,000" readonly></td>
                              <td class="default"><!--備考--><input type="text" name="Remark7" class="input-form-100 gofwd" value=""></td>
                              <td class="mn ro material"><!--材料数量--><input type="text" name="ZaiQuantity7" class="input-form-50 gofwd" value="1.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center material"><!--材料単位--><input type="text" name="ZaiUnit7" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn material"><!--材料単価--><input type="text" name="ZaiUPrice7" class="input-form-50 gofwd" value="15,000" onchange="DoDetailRecalc(7,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="right ro material"><!--材料金額--><input type="text" name="ZaiPrice7" class="input-form-50 gofwd" value="15,000" readonly></td>
                              <td class="mn ro process"><!--加工数量--><input type="text" name="KakouQuantity7" class="input-form-50 gofwd" value="1.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center process"><!--加工単位--><input type="text" name="KakouUnit7" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn process"><!--加工単価--><input type="text" name="KakouUPrice7" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(7,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro process"><!--加工金額--><input type="text" name="KakouPrice7" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro construct"><!--施工数量--><input type="text" name="SekouQuantity7" class="input-form-50 gofwd" value="1.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center construct"><!--施工単位--><input type="text" name="SekouUnit7" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn construct"><!--施工単価--><input type="text" name="SekouUPrice7" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(7,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro construct"><!--施工金額--><input type="text" name="SekouPrice7" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro cost"><!--経費数量--><input type="text" name="CostQuantity7" class="input-form-50 gofwd" value="1.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center cost"><!--経費単位--><input type="text" name="CostUnit7" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn cost"><!--経費単価--><input type="text" name="CostUPrice7" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(7,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro cost"><!--経費金額--><input type="text" name="CostPrice7" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="center cost-only">                                <a class="cost hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center material-only">                                <a class="material " onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center process-only">                                <a class="process hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center construct-only">                                <a class="construct hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                            </tr>
                            <tr>
                              <td class="check common">
                                <label>
                                  <input type="checkbox" name="chkrow_8" id="chkrow_8" class="chkrow" value="8">
                                </label>
                              </td>
                              <td class="mn-td common"><!--行番号-->
                                8
                                <input type="hidden" name="LargeCateID8" value="26">
                                <input type="hidden" name="TypeID8" value="59">
                                <input type="hidden" name="ZaiContract8" value="0">
                                <input type="hidden" name="KakouContract8" value="0">
                                <input type="hidden" name="SekouContract8" value="0">
                                <input type="hidden" name="CostContract8" value="0">
                              </td>
                              <td class="center common"><!--行明細ボタン--><input type="button" id="id_Row8" class="open-detail-dialog" value="行明細" data-target="modal-dialog-void"></td>
                              <td class="common"><!--見出-->
                                <input type="text" name="Heading8" class="input-form-100 gofwd" value="" list="cboHeadingList">
                              </td>
                              <td class="common"><!--名称--><input type="text" name="ZaiName8" class="input-form-100 gofwd" value="ガラリ（城東テクノ）"></td>
                              <td class="common"><!--材質--><input type="text" name="Material8" class="input-form-100 gofwd" value="YU-15079"></td>
                              <td class="common"><!--寸法--><input type="text" name="Size8" class="input-form-100 gofwd" value="---"></td>
                              <td class="mn default"><!--数量--><input type="text" name="Quantity8" class="input-form-50 gofwd" value="22.00" onchange="DoDetailRecalc(8,2)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center default"><!--単位--><input type="text" name="Unit8" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn default"><!--単価--><input type="text" name="UPrice8" class="input-form-70 gofwd" value="10,500" onchange="DoDetailRecalc(8,1)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro default"><!--金額--><input type="text" name="Price8" class="input-form-70 gofwd" value="231,000" readonly></td>
                              <td class="default"><!--備考--><input type="text" name="Remark8" class="input-form-100 gofwd" value=""></td>
                              <td class="mn ro material"><!--材料数量--><input type="text" name="ZaiQuantity8" class="input-form-50 gofwd" value="22.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center material"><!--材料単位--><input type="text" name="ZaiUnit8" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn material"><!--材料単価--><input type="text" name="ZaiUPrice8" class="input-form-50 gofwd" value="5,040" onchange="DoDetailRecalc(8,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="right ro material"><!--材料金額--><input type="text" name="ZaiPrice8" class="input-form-50 gofwd" value="110,880" readonly></td>
                              <td class="mn ro process"><!--加工数量--><input type="text" name="KakouQuantity8" class="input-form-50 gofwd" value="22.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center process"><!--加工単位--><input type="text" name="KakouUnit8" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn process"><!--加工単価--><input type="text" name="KakouUPrice8" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(8,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro process"><!--加工金額--><input type="text" name="KakouPrice8" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro construct"><!--施工数量--><input type="text" name="SekouQuantity8" class="input-form-50 gofwd" value="22.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center construct"><!--施工単位--><input type="text" name="SekouUnit8" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn construct"><!--施工単価--><input type="text" name="SekouUPrice8" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(8,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro construct"><!--施工金額--><input type="text" name="SekouPrice8" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro cost"><!--経費数量--><input type="text" name="CostQuantity8" class="input-form-50 gofwd" value="22.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center cost"><!--経費単位--><input type="text" name="CostUnit8" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn cost"><!--経費単価--><input type="text" name="CostUPrice8" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(8,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro cost"><!--経費金額--><input type="text" name="CostPrice8" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="center cost-only">                                <a class="cost hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center material-only">                                <a class="material " onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center process-only">                                <a class="process hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center construct-only">                                <a class="construct hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                            </tr>
                            <tr>
                              <td class="check common">
                                <label>
                                  <input type="checkbox" name="chkrow_9" id="chkrow_9" class="chkrow" value="9">
                                </label>
                              </td>
                              <td class="mn-td common"><!--行番号-->
                                9
                                <input type="hidden" name="LargeCateID9" value="9">
                                <input type="hidden" name="TypeID9" value="108">
                                <input type="hidden" name="ZaiContract9" value="0">
                                <input type="hidden" name="KakouContract9" value="0">
                                <input type="hidden" name="SekouContract9" value="0">
                                <input type="hidden" name="CostContract9" value="0">
                              </td>
                              <td class="center common"><!--行明細ボタン--><input type="button" id="id_Row9" class="open-detail-dialog" value="行明細" data-target="modal-dialog-void"></td>
                              <td class="common"><!--見出-->
                                <input type="text" name="Heading9" class="input-form-100 gofwd" value="" list="cboHeadingList">
                              </td>
                              <td class="common"><!--名称--><input type="text" name="ZaiName9" class="input-form-100 gofwd" value="室温コントローラ"></td>
                              <td class="common"><!--材質--><input type="text" name="Material9" class="input-form-100 gofwd" value="---"></td>
                              <td class="common"><!--寸法--><input type="text" name="Size9" class="input-form-100 gofwd" value="SYC-50B"></td>
                              <td class="mn default"><!--数量--><input type="text" name="Quantity9" class="input-form-50 gofwd" value="2.00" onchange="DoDetailRecalc(9,2)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center default"><!--単位--><input type="text" name="Unit9" class="input-form-20 gofwd" value="式" list="cboUnitList"></td>
                              <td class="mn default"><!--単価--><input type="text" name="UPrice9" class="input-form-70 gofwd" value="13,000" onchange="DoDetailRecalc(9,1)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro default"><!--金額--><input type="text" name="Price9" class="input-form-70 gofwd" value="26,000" readonly></td>
                              <td class="default"><!--備考--><input type="text" name="Remark9" class="input-form-100 gofwd" value=""></td>
                              <td class="mn ro material"><!--材料数量--><input type="text" name="ZaiQuantity9" class="input-form-50 gofwd" value="2.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center material"><!--材料単位--><input type="text" name="ZaiUnit9" class="input-form-20 gofwd" value="式" list="cboUnitList"></td>
                              <td class="mn material"><!--材料単価--><input type="text" name="ZaiUPrice9" class="input-form-50 gofwd" value="9,490" onchange="DoDetailRecalc(9,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="right ro material"><!--材料金額--><input type="text" name="ZaiPrice9" class="input-form-50 gofwd" value="18,980" readonly></td>
                              <td class="mn ro process"><!--加工数量--><input type="text" name="KakouQuantity9" class="input-form-50 gofwd" value="2.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center process"><!--加工単位--><input type="text" name="KakouUnit9" class="input-form-20 gofwd" value="式" list="cboUnitList"></td>
                              <td class="mn process"><!--加工単価--><input type="text" name="KakouUPrice9" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(9,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro process"><!--加工金額--><input type="text" name="KakouPrice9" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro construct"><!--施工数量--><input type="text" name="SekouQuantity9" class="input-form-50 gofwd" value="2.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center construct"><!--施工単位--><input type="text" name="SekouUnit9" class="input-form-20 gofwd" value="式" list="cboUnitList"></td>
                              <td class="mn construct"><!--施工単価--><input type="text" name="SekouUPrice9" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(9,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro construct"><!--施工金額--><input type="text" name="SekouPrice9" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro cost"><!--経費数量--><input type="text" name="CostQuantity9" class="input-form-50 gofwd" value="2.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center cost"><!--経費単位--><input type="text" name="CostUnit9" class="input-form-20 gofwd" value="式" list="cboUnitList"></td>
                              <td class="mn cost"><!--経費単価--><input type="text" name="CostUPrice9" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(9,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro cost"><!--経費金額--><input type="text" name="CostPrice9" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="center cost-only">                                <a class="cost hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center material-only">                                <a class="material " onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center process-only">                                <a class="process hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center construct-only">                                <a class="construct hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                            </tr>
                            <tr>
                              <td class="check common">
                                <label>
                                  <input type="checkbox" name="chkrow_10" id="chkrow_10" class="chkrow" value="10">
                                </label>
                              </td>
                              <td class="mn-td common"><!--行番号-->
                                10
                                <input type="hidden" name="LargeCateID10" value="9">
                                <input type="hidden" name="TypeID10" value="108">
                                <input type="hidden" name="ZaiContract10" value="0">
                                <input type="hidden" name="KakouContract10" value="0">
                                <input type="hidden" name="SekouContract10" value="0">
                                <input type="hidden" name="CostContract10" value="0">
                              </td>
                              <td class="center common"><!--行明細ボタン--><input type="button" id="id_Row10" class="open-detail-dialog" value="行明細" data-target="modal-dialog-void"></td>
                              <td class="common"><!--見出-->
                                <input type="text" name="Heading10" class="input-form-100 gofwd" value="" list="cboHeadingList">
                              </td>
                              <td class="common"><!--名称--><input type="text" name="ZaiName10" class="input-form-100 gofwd" value="熱動弁"></td>
                              <td class="common"><!--材質--><input type="text" name="Material10" class="input-form-100 gofwd" value="---"></td>
                              <td class="common"><!--寸法--><input type="text" name="Size10" class="input-form-100 gofwd" value="HP-401"></td>
                              <td class="mn default"><!--数量--><input type="text" name="Quantity10" class="input-form-50 gofwd" value="2.00" onchange="DoDetailRecalc(10,2)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center default"><!--単位--><input type="text" name="Unit10" class="input-form-20 gofwd" value="式" list="cboUnitList"></td>
                              <td class="mn default"><!--単価--><input type="text" name="UPrice10" class="input-form-70 gofwd" value="20,600" onchange="DoDetailRecalc(10,1)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro default"><!--金額--><input type="text" name="Price10" class="input-form-70 gofwd" value="41,200" readonly></td>
                              <td class="default"><!--備考--><input type="text" name="Remark10" class="input-form-100 gofwd" value=""></td>
                              <td class="mn ro material"><!--材料数量--><input type="text" name="ZaiQuantity10" class="input-form-50 gofwd" value="2.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center material"><!--材料単位--><input type="text" name="ZaiUnit10" class="input-form-20 gofwd" value="式" list="cboUnitList"></td>
                              <td class="mn material"><!--材料単価--><input type="text" name="ZaiUPrice10" class="input-form-50 gofwd" value="9,888" onchange="DoDetailRecalc(10,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="right ro material"><!--材料金額--><input type="text" name="ZaiPrice10" class="input-form-50 gofwd" value="19,776" readonly></td>
                              <td class="mn ro process"><!--加工数量--><input type="text" name="KakouQuantity10" class="input-form-50 gofwd" value="2.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center process"><!--加工単位--><input type="text" name="KakouUnit10" class="input-form-20 gofwd" value="式" list="cboUnitList"></td>
                              <td class="mn process"><!--加工単価--><input type="text" name="KakouUPrice10" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(10,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro process"><!--加工金額--><input type="text" name="KakouPrice10" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro construct"><!--施工数量--><input type="text" name="SekouQuantity10" class="input-form-50 gofwd" value="2.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center construct"><!--施工単位--><input type="text" name="SekouUnit10" class="input-form-20 gofwd" value="式" list="cboUnitList"></td>
                              <td class="mn construct"><!--施工単価--><input type="text" name="SekouUPrice10" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(10,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro construct"><!--施工金額--><input type="text" name="SekouPrice10" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro cost"><!--経費数量--><input type="text" name="CostQuantity10" class="input-form-50 gofwd" value="2.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center cost"><!--経費単位--><input type="text" name="CostUnit10" class="input-form-20 gofwd" value="式" list="cboUnitList"></td>
                              <td class="mn cost"><!--経費単価--><input type="text" name="CostUPrice10" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(10,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro cost"><!--経費金額--><input type="text" name="CostPrice10" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="center cost-only">                                <a class="cost hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center material-only">                                <a class="material " onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center process-only">                                <a class="process hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center construct-only">                                <a class="construct hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                            </tr>
                            <tr>
                              <td class="check common">
                                <label>
                                  <input type="checkbox" name="chkrow_11" id="chkrow_11" class="chkrow" value="11">
                                </label>
                              </td>
                              <td class="mn-td common"><!--行番号-->
                                11
                                <input type="hidden" name="LargeCateID11" value="10">
                                <input type="hidden" name="TypeID11" value="92">
                                <input type="hidden" name="ZaiContract11" value="0">
                                <input type="hidden" name="KakouContract11" value="0">
                                <input type="hidden" name="SekouContract11" value="0">
                                <input type="hidden" name="CostContract11" value="0">
                              </td>
                              <td class="center common"><!--行明細ボタン--><input type="button" id="id_Row11" class="open-detail-dialog" value="行明細" data-target="modal-dialog-void"></td>
                              <td class="common"><!--見出-->
                                <input type="text" name="Heading11" class="input-form-100 gofwd" value="" list="cboHeadingList">
                              </td>
                              <td class="common"><!--名称--><input type="text" name="ZaiName11" class="input-form-100 gofwd" value="オイルタンク"></td>
                              <td class="common"><!--材質--><input type="text" name="Material11" class="input-form-100 gofwd" value="KS2-200SC"></td>
                              <td class="common"><!--寸法--><input type="text" name="Size11" class="input-form-100 gofwd" value="---"></td>
                              <td class="mn default"><!--数量--><input type="text" name="Quantity11" class="input-form-50 gofwd" value="2.00" onchange="DoDetailRecalc(11,2)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center default"><!--単位--><input type="text" name="Unit11" class="input-form-20 gofwd" value="式" list="cboUnitList"></td>
                              <td class="mn default"><!--単価--><input type="text" name="UPrice11" class="input-form-70 gofwd" value="47,500" onchange="DoDetailRecalc(11,1)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro default"><!--金額--><input type="text" name="Price11" class="input-form-70 gofwd" value="95,000" readonly></td>
                              <td class="default"><!--備考--><input type="text" name="Remark11" class="input-form-100 gofwd" value=""></td>
                              <td class="mn ro material"><!--材料数量--><input type="text" name="ZaiQuantity11" class="input-form-50 gofwd" value="2.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center material"><!--材料単位--><input type="text" name="ZaiUnit11" class="input-form-20 gofwd" value="式" list="cboUnitList"></td>
                              <td class="mn material"><!--材料単価--><input type="text" name="ZaiUPrice11" class="input-form-50 gofwd" value="23,750" onchange="DoDetailRecalc(11,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="right ro material"><!--材料金額--><input type="text" name="ZaiPrice11" class="input-form-50 gofwd" value="47,500" readonly></td>
                              <td class="mn ro process"><!--加工数量--><input type="text" name="KakouQuantity11" class="input-form-50 gofwd" value="2.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center process"><!--加工単位--><input type="text" name="KakouUnit11" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn process"><!--加工単価--><input type="text" name="KakouUPrice11" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(11,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro process"><!--加工金額--><input type="text" name="KakouPrice11" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro construct"><!--施工数量--><input type="text" name="SekouQuantity11" class="input-form-50 gofwd" value="2.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center construct"><!--施工単位--><input type="text" name="SekouUnit11" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn construct"><!--施工単価--><input type="text" name="SekouUPrice11" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(11,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro construct"><!--施工金額--><input type="text" name="SekouPrice11" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro cost"><!--経費数量--><input type="text" name="CostQuantity11" class="input-form-50 gofwd" value="2.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center cost"><!--経費単位--><input type="text" name="CostUnit11" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn cost"><!--経費単価--><input type="text" name="CostUPrice11" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(11,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro cost"><!--経費金額--><input type="text" name="CostPrice11" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="center cost-only">                                <a class="cost hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center material-only">                                <a class="material " onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center process-only">                                <a class="process hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center construct-only">                                <a class="construct hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                            </tr>
                            <tr>
                              <td class="check common">
                                <label>
                                  <input type="checkbox" name="chkrow_12" id="chkrow_12" class="chkrow" value="12">
                                </label>
                              </td>
                              <td class="mn-td common"><!--行番号-->
                                12
                                <input type="hidden" name="LargeCateID12" value="11">
                                <input type="hidden" name="TypeID12" value="11">
                                <input type="hidden" name="ZaiContract12" value="0">
                                <input type="hidden" name="KakouContract12" value="0">
                                <input type="hidden" name="SekouContract12" value="0">
                                <input type="hidden" name="CostContract12" value="0">
                              </td>
                              <td class="center common"><!--行明細ボタン--><input type="button" id="id_Row12" class="open-detail-dialog" value="行明細" data-target="modal-dialog-void"></td>
                              <td class="common"><!--見出-->
                                <input type="text" name="Heading12" class="input-form-100 gofwd" value="" list="cboHeadingList">
                              </td>
                              <td class="common"><!--名称--><input type="text" name="ZaiName12" class="input-form-100 gofwd" value="ヘッダー"></td>
                              <td class="common"><!--材質--><input type="text" name="Material12" class="input-form-100 gofwd" value="---"></td>
                              <td class="common"><!--寸法--><input type="text" name="Size12" class="input-form-100 gofwd" value="7系統"></td>
                              <td class="mn default"><!--数量--><input type="text" name="Quantity12" class="input-form-50 gofwd" value="1.00" onchange="DoDetailRecalc(12,2)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center default"><!--単位--><input type="text" name="Unit12" class="input-form-20 gofwd" value="組" list="cboUnitList"></td>
                              <td class="mn default"><!--単価--><input type="text" name="UPrice12" class="input-form-70 gofwd" value="37,000" onchange="DoDetailRecalc(12,1)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro default"><!--金額--><input type="text" name="Price12" class="input-form-70 gofwd" value="37,000" readonly></td>
                              <td class="default"><!--備考--><input type="text" name="Remark12" class="input-form-100 gofwd" value=""></td>
                              <td class="mn ro material"><!--材料数量--><input type="text" name="ZaiQuantity12" class="input-form-50 gofwd" value="1.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center material"><!--材料単位--><input type="text" name="ZaiUnit12" class="input-form-20 gofwd" value="組" list="cboUnitList"></td>
                              <td class="mn material"><!--材料単価--><input type="text" name="ZaiUPrice12" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(12,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="right ro material"><!--材料金額--><input type="text" name="ZaiPrice12" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro process"><!--加工数量--><input type="text" name="KakouQuantity12" class="input-form-50 gofwd" value="1.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center process"><!--加工単位--><input type="text" name="KakouUnit12" class="input-form-20 gofwd" value="組" list="cboUnitList"></td>
                              <td class="mn process"><!--加工単価--><input type="text" name="KakouUPrice12" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(12,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro process"><!--加工金額--><input type="text" name="KakouPrice12" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro construct"><!--施工数量--><input type="text" name="SekouQuantity12" class="input-form-50 gofwd" value="1.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center construct"><!--施工単位--><input type="text" name="SekouUnit12" class="input-form-20 gofwd" value="組" list="cboUnitList"></td>
                              <td class="mn construct"><!--施工単価--><input type="text" name="SekouUPrice12" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(12,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro construct"><!--施工金額--><input type="text" name="SekouPrice12" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro cost"><!--経費数量--><input type="text" name="CostQuantity12" class="input-form-50 gofwd" value="1.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center cost"><!--経費単位--><input type="text" name="CostUnit12" class="input-form-20 gofwd" value="組" list="cboUnitList"></td>
                              <td class="mn cost"><!--経費単価--><input type="text" name="CostUPrice12" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(12,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro cost"><!--経費金額--><input type="text" name="CostPrice12" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="center cost-only">                                <a class="cost hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center material-only">                                <a class="material hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center process-only">                                <a class="process hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center construct-only">                                <a class="construct hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                            </tr>
                            <tr>
                              <td class="check common">
                                <label>
                                  <input type="checkbox" name="chkrow_13" id="chkrow_13" class="chkrow" value="13">
                                </label>
                              </td>
                              <td class="mn-td common"><!--行番号-->
                                13
                                <input type="hidden" name="LargeCateID13" value="11">
                                <input type="hidden" name="TypeID13" value="11">
                                <input type="hidden" name="ZaiContract13" value="0">
                                <input type="hidden" name="KakouContract13" value="0">
                                <input type="hidden" name="SekouContract13" value="0">
                                <input type="hidden" name="CostContract13" value="0">
                              </td>
                              <td class="center common"><!--行明細ボタン--><input type="button" id="id_Row13" class="open-detail-dialog" value="行明細" data-target="modal-dialog-void"></td>
                              <td class="common"><!--見出-->
                                <input type="text" name="Heading13" class="input-form-100 gofwd" value="" list="cboHeadingList">
                              </td>
                              <td class="common"><!--名称--><input type="text" name="ZaiName13" class="input-form-100 gofwd" value="ヘッダー"></td>
                              <td class="common"><!--材質--><input type="text" name="Material13" class="input-form-100 gofwd" value="---"></td>
                              <td class="common"><!--寸法--><input type="text" name="Size13" class="input-form-100 gofwd" value="10系統"></td>
                              <td class="mn default"><!--数量--><input type="text" name="Quantity13" class="input-form-50 gofwd" value="1.00" onchange="DoDetailRecalc(13,2)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center default"><!--単位--><input type="text" name="Unit13" class="input-form-20 gofwd" value="組" list="cboUnitList"></td>
                              <td class="mn default"><!--単価--><input type="text" name="UPrice13" class="input-form-70 gofwd" value="50,000" onchange="DoDetailRecalc(13,1)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro default"><!--金額--><input type="text" name="Price13" class="input-form-70 gofwd" value="50,000" readonly></td>
                              <td class="default"><!--備考--><input type="text" name="Remark13" class="input-form-100 gofwd" value=""></td>
                              <td class="mn ro material"><!--材料数量--><input type="text" name="ZaiQuantity13" class="input-form-50 gofwd" value="1.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center material"><!--材料単位--><input type="text" name="ZaiUnit13" class="input-form-20 gofwd" value="組" list="cboUnitList"></td>
                              <td class="mn material"><!--材料単価--><input type="text" name="ZaiUPrice13" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(13,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="right ro material"><!--材料金額--><input type="text" name="ZaiPrice13" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro process"><!--加工数量--><input type="text" name="KakouQuantity13" class="input-form-50 gofwd" value="1.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center process"><!--加工単位--><input type="text" name="KakouUnit13" class="input-form-20 gofwd" value="組" list="cboUnitList"></td>
                              <td class="mn process"><!--加工単価--><input type="text" name="KakouUPrice13" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(13,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro process"><!--加工金額--><input type="text" name="KakouPrice13" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro construct"><!--施工数量--><input type="text" name="SekouQuantity13" class="input-form-50 gofwd" value="1.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center construct"><!--施工単位--><input type="text" name="SekouUnit13" class="input-form-20 gofwd" value="組" list="cboUnitList"></td>
                              <td class="mn construct"><!--施工単価--><input type="text" name="SekouUPrice13" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(13,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro construct"><!--施工金額--><input type="text" name="SekouPrice13" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro cost"><!--経費数量--><input type="text" name="CostQuantity13" class="input-form-50 gofwd" value="1.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center cost"><!--経費単位--><input type="text" name="CostUnit13" class="input-form-20 gofwd" value="組" list="cboUnitList"></td>
                              <td class="mn cost"><!--経費単価--><input type="text" name="CostUPrice13" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(13,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro cost"><!--経費金額--><input type="text" name="CostPrice13" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="center cost-only">                                <a class="cost hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center material-only">                                <a class="material hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center process-only">                                <a class="process hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center construct-only">                                <a class="construct hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                            </tr>
                            <tr>
                              <td class="check common">
                                <label>
                                  <input type="checkbox" name="chkrow_14" id="chkrow_14" class="chkrow" value="14">
                                </label>
                              </td>
                              <td class="mn-td common"><!--行番号-->
                                14
                                <input type="hidden" name="LargeCateID14" value="11">
                                <input type="hidden" name="TypeID14" value="11">
                                <input type="hidden" name="ZaiContract14" value="0">
                                <input type="hidden" name="KakouContract14" value="0">
                                <input type="hidden" name="SekouContract14" value="0">
                                <input type="hidden" name="CostContract14" value="0">
                              </td>
                              <td class="center common"><!--行明細ボタン--><input type="button" id="id_Row14" class="open-detail-dialog" value="行明細" data-target="modal-dialog-void"></td>
                              <td class="common"><!--見出-->
                                <input type="text" name="Heading14" class="input-form-100 gofwd" value="" list="cboHeadingList">
                              </td>
                              <td class="common"><!--名称--><input type="text" name="ZaiName14" class="input-form-100 gofwd" value="配管資材"></td>
                              <td class="common"><!--材質--><input type="text" name="Material14" class="input-form-100 gofwd" value="---"></td>
                              <td class="common"><!--寸法--><input type="text" name="Size14" class="input-form-100 gofwd" value="銅管、バルブ、保温材"></td>
                              <td class="mn default"><!--数量--><input type="text" name="Quantity14" class="input-form-50 gofwd" value="1.00" onchange="DoDetailRecalc(14,2)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center default"><!--単位--><input type="text" name="Unit14" class="input-form-20 gofwd" value="式" list="cboUnitList"></td>
                              <td class="mn default"><!--単価--><input type="text" name="UPrice14" class="input-form-70 gofwd" value="450,000" onchange="DoDetailRecalc(14,1)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro default"><!--金額--><input type="text" name="Price14" class="input-form-70 gofwd" value="450,000" readonly></td>
                              <td class="default"><!--備考--><input type="text" name="Remark14" class="input-form-100 gofwd" value=""></td>
                              <td class="mn ro material"><!--材料数量--><input type="text" name="ZaiQuantity14" class="input-form-50 gofwd" value="1.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center material"><!--材料単位--><input type="text" name="ZaiUnit14" class="input-form-20 gofwd" value="式" list="cboUnitList"></td>
                              <td class="mn material"><!--材料単価--><input type="text" name="ZaiUPrice14" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(14,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="right ro material"><!--材料金額--><input type="text" name="ZaiPrice14" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro process"><!--加工数量--><input type="text" name="KakouQuantity14" class="input-form-50 gofwd" value="1.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center process"><!--加工単位--><input type="text" name="KakouUnit14" class="input-form-20 gofwd" value="式" list="cboUnitList"></td>
                              <td class="mn process"><!--加工単価--><input type="text" name="KakouUPrice14" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(14,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro process"><!--加工金額--><input type="text" name="KakouPrice14" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro construct"><!--施工数量--><input type="text" name="SekouQuantity14" class="input-form-50 gofwd" value="1.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center construct"><!--施工単位--><input type="text" name="SekouUnit14" class="input-form-20 gofwd" value="式" list="cboUnitList"></td>
                              <td class="mn construct"><!--施工単価--><input type="text" name="SekouUPrice14" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(14,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro construct"><!--施工金額--><input type="text" name="SekouPrice14" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro cost"><!--経費数量--><input type="text" name="CostQuantity14" class="input-form-50 gofwd" value="1.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center cost"><!--経費単位--><input type="text" name="CostUnit14" class="input-form-20 gofwd" value="式" list="cboUnitList"></td>
                              <td class="mn cost"><!--経費単価--><input type="text" name="CostUPrice14" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(14,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro cost"><!--経費金額--><input type="text" name="CostPrice14" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="center cost-only">                                <a class="cost hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center material-only">                                <a class="material hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center process-only">                                <a class="process hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center construct-only">                                <a class="construct hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                            </tr>
                            <tr>
                              <td class="check common">
                                <label>
                                  <input type="checkbox" name="chkrow_15" id="chkrow_15" class="chkrow" value="15">
                                </label>
                              </td>
                              <td class="mn-td common"><!--行番号-->
                                15
                                <input type="hidden" name="LargeCateID15" value="11">
                                <input type="hidden" name="TypeID15" value="11">
                                <input type="hidden" name="ZaiContract15" value="0">
                                <input type="hidden" name="KakouContract15" value="0">
                                <input type="hidden" name="SekouContract15" value="0">
                                <input type="hidden" name="CostContract15" value="0">
                              </td>
                              <td class="center common"><!--行明細ボタン--><input type="button" id="id_Row15" class="open-detail-dialog" value="行明細" data-target="modal-dialog-void"></td>
                              <td class="common"><!--見出-->
                                <input type="text" name="Heading15" class="input-form-100 gofwd" value="" list="cboHeadingList">
                              </td>
                              <td class="common"><!--名称--><input type="text" name="ZaiName15" class="input-form-100 gofwd" value="雑資材"></td>
                              <td class="common"><!--材質--><input type="text" name="Material15" class="input-form-100 gofwd" value="---"></td>
                              <td class="common"><!--寸法--><input type="text" name="Size15" class="input-form-100 gofwd" value="---"></td>
                              <td class="mn default"><!--数量--><input type="text" name="Quantity15" class="input-form-50 gofwd" value="1.00" onchange="DoDetailRecalc(15,2)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center default"><!--単位--><input type="text" name="Unit15" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn default"><!--単価--><input type="text" name="UPrice15" class="input-form-70 gofwd" value="10,000" onchange="DoDetailRecalc(15,1)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro default"><!--金額--><input type="text" name="Price15" class="input-form-70 gofwd" value="10,000" readonly></td>
                              <td class="default"><!--備考--><input type="text" name="Remark15" class="input-form-100 gofwd" value=""></td>
                              <td class="mn ro material"><!--材料数量--><input type="text" name="ZaiQuantity15" class="input-form-50 gofwd" value="1.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center material"><!--材料単位--><input type="text" name="ZaiUnit15" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn material"><!--材料単価--><input type="text" name="ZaiUPrice15" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(15,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="right ro material"><!--材料金額--><input type="text" name="ZaiPrice15" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro process"><!--加工数量--><input type="text" name="KakouQuantity15" class="input-form-50 gofwd" value="1.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center process"><!--加工単位--><input type="text" name="KakouUnit15" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn process"><!--加工単価--><input type="text" name="KakouUPrice15" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(15,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro process"><!--加工金額--><input type="text" name="KakouPrice15" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro construct"><!--施工数量--><input type="text" name="SekouQuantity15" class="input-form-50 gofwd" value="1.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center construct"><!--施工単位--><input type="text" name="SekouUnit15" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn construct"><!--施工単価--><input type="text" name="SekouUPrice15" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(15,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro construct"><!--施工金額--><input type="text" name="SekouPrice15" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro cost"><!--経費数量--><input type="text" name="CostQuantity15" class="input-form-50 gofwd" value="1.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center cost"><!--経費単位--><input type="text" name="CostUnit15" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn cost"><!--経費単価--><input type="text" name="CostUPrice15" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(15,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro cost"><!--経費金額--><input type="text" name="CostPrice15" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="center cost-only">                                <a class="cost hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center material-only">                                <a class="material hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center process-only">                                <a class="process hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center construct-only">                                <a class="construct hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                            </tr>
                            <tr>
                              <td class="check common">
                                <label>
                                  <input type="checkbox" name="chkrow_16" id="chkrow_16" class="chkrow" value="16">
                                </label>
                              </td>
                              <td class="mn-td common"><!--行番号-->
                                16
                                <input type="hidden" name="LargeCateID16" value="11">
                                <input type="hidden" name="TypeID16" value="11">
                                <input type="hidden" name="ZaiContract16" value="0">
                                <input type="hidden" name="KakouContract16" value="0">
                                <input type="hidden" name="SekouContract16" value="0">
                                <input type="hidden" name="CostContract16" value="0">
                              </td>
                              <td class="center common"><!--行明細ボタン--><input type="button" id="id_Row16" class="open-detail-dialog" value="行明細" data-target="modal-dialog-void"></td>
                              <td class="common"><!--見出-->
                                <input type="text" name="Heading16" class="input-form-100 gofwd" value="" list="cboHeadingList">
                              </td>
                              <td class="common"><!--名称--><input type="text" name="ZaiName16" class="input-form-100 gofwd" value="不凍液"></td>
                              <td class="common"><!--材質--><input type="text" name="Material16" class="input-form-100 gofwd" value="SKAF"></td>
                              <td class="common"><!--寸法--><input type="text" name="Size16" class="input-form-100 gofwd" value="---"></td>
                              <td class="mn default"><!--数量--><input type="text" name="Quantity16" class="input-form-50 gofwd" value="20.00" onchange="DoDetailRecalc(16,2)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center default"><!--単位--><input type="text" name="Unit16" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn default"><!--単価--><input type="text" name="UPrice16" class="input-form-70 gofwd" value="850" onchange="DoDetailRecalc(16,1)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro default"><!--金額--><input type="text" name="Price16" class="input-form-70 gofwd" value="17,000" readonly></td>
                              <td class="default"><!--備考--><input type="text" name="Remark16" class="input-form-100 gofwd" value=""></td>
                              <td class="mn ro material"><!--材料数量--><input type="text" name="ZaiQuantity16" class="input-form-50 gofwd" value="20.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center material"><!--材料単位--><input type="text" name="ZaiUnit16" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn material"><!--材料単価--><input type="text" name="ZaiUPrice16" class="input-form-50 gofwd" value="300" onchange="DoDetailRecalc(16,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="right ro material"><!--材料金額--><input type="text" name="ZaiPrice16" class="input-form-50 gofwd" value="6,000" readonly></td>
                              <td class="mn ro process"><!--加工数量--><input type="text" name="KakouQuantity16" class="input-form-50 gofwd" value="20.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center process"><!--加工単位--><input type="text" name="KakouUnit16" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn process"><!--加工単価--><input type="text" name="KakouUPrice16" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(16,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro process"><!--加工金額--><input type="text" name="KakouPrice16" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro construct"><!--施工数量--><input type="text" name="SekouQuantity16" class="input-form-50 gofwd" value="20.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center construct"><!--施工単位--><input type="text" name="SekouUnit16" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn construct"><!--施工単価--><input type="text" name="SekouUPrice16" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(16,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro construct"><!--施工金額--><input type="text" name="SekouPrice16" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro cost"><!--経費数量--><input type="text" name="CostQuantity16" class="input-form-50 gofwd" value="20.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center cost"><!--経費単位--><input type="text" name="CostUnit16" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn cost"><!--経費単価--><input type="text" name="CostUPrice16" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(16,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro cost"><!--経費金額--><input type="text" name="CostPrice16" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="center cost-only">                                <a class="cost hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center material-only">                                <a class="material " onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center process-only">                                <a class="process hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center construct-only">                                <a class="construct hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                            </tr>
                            <tr>
                              <td class="check common">
                                <label>
                                  <input type="checkbox" name="chkrow_17" id="chkrow_17" class="chkrow" value="17">
                                </label>
                              </td>
                              <td class="mn-td common"><!--行番号-->
                                17
                                <input type="hidden" name="LargeCateID17" value="12">
                                <input type="hidden" name="TypeID17" value="12">
                                <input type="hidden" name="ZaiContract17" value="0">
                                <input type="hidden" name="KakouContract17" value="0">
                                <input type="hidden" name="SekouContract17" value="0">
                                <input type="hidden" name="CostContract17" value="0">
                              </td>
                              <td class="center common"><!--行明細ボタン--><input type="button" id="id_Row17" class="open-detail-dialog" value="行明細" data-target="modal-dialog-void"></td>
                              <td class="common"><!--見出-->
                                <input type="text" name="Heading17" class="input-form-100 gofwd" value="" list="cboHeadingList">
                              </td>
                              <td class="common"><!--名称--><input type="text" name="ZaiName17" class="input-form-100 gofwd" value="ボイラー据付配管工事"></td>
                              <td class="common"><!--材質--><input type="text" name="Material17" class="input-form-100 gofwd" value="---"></td>
                              <td class="common"><!--寸法--><input type="text" name="Size17" class="input-form-100 gofwd" value="保温工事含む"></td>
                              <td class="mn default"><!--数量--><input type="text" name="Quantity17" class="input-form-50 gofwd" value="2.00" onchange="DoDetailRecalc(17,2)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center default"><!--単位--><input type="text" name="Unit17" class="input-form-20 gofwd" value="式" list="cboUnitList"></td>
                              <td class="mn default"><!--単価--><input type="text" name="UPrice17" class="input-form-70 gofwd" value="70,000" onchange="DoDetailRecalc(17,1)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro default"><!--金額--><input type="text" name="Price17" class="input-form-70 gofwd" value="140,000" readonly></td>
                              <td class="default"><!--備考--><input type="text" name="Remark17" class="input-form-100 gofwd" value=""></td>
                              <td class="mn ro material"><!--材料数量--><input type="text" name="ZaiQuantity17" class="input-form-50 gofwd" value="2.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center material"><!--材料単位--><input type="text" name="ZaiUnit17" class="input-form-20 gofwd" value="式" list="cboUnitList"></td>
                              <td class="mn material"><!--材料単価--><input type="text" name="ZaiUPrice17" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(17,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="right ro material"><!--材料金額--><input type="text" name="ZaiPrice17" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro process"><!--加工数量--><input type="text" name="KakouQuantity17" class="input-form-50 gofwd" value="2.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center process"><!--加工単位--><input type="text" name="KakouUnit17" class="input-form-20 gofwd" value="式" list="cboUnitList"></td>
                              <td class="mn process"><!--加工単価--><input type="text" name="KakouUPrice17" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(17,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro process"><!--加工金額--><input type="text" name="KakouPrice17" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro construct"><!--施工数量--><input type="text" name="SekouQuantity17" class="input-form-50 gofwd" value="2.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center construct"><!--施工単位--><input type="text" name="SekouUnit17" class="input-form-20 gofwd" value="式" list="cboUnitList"></td>
                              <td class="mn construct"><!--施工単価--><input type="text" name="SekouUPrice17" class="input-form-50 gofwd" value="38,000" onchange="DoDetailRecalc(17,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro construct"><!--施工金額--><input type="text" name="SekouPrice17" class="input-form-50 gofwd" value="76,000" readonly></td>
                              <td class="mn ro cost"><!--経費数量--><input type="text" name="CostQuantity17" class="input-form-50 gofwd" value="2.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center cost"><!--経費単位--><input type="text" name="CostUnit17" class="input-form-20 gofwd" value="式" list="cboUnitList"></td>
                              <td class="mn cost"><!--経費単価--><input type="text" name="CostUPrice17" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(17,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro cost"><!--経費金額--><input type="text" name="CostPrice17" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="center cost-only">                                <a class="cost hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center material-only">                                <a class="material hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center process-only">                                <a class="process hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center construct-only">                                <a class="construct " onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                            </tr>
                            <tr>
                              <td class="check common">
                                <label>
                                  <input type="checkbox" name="chkrow_18" id="chkrow_18" class="chkrow" value="18">
                                </label>
                              </td>
                              <td class="mn-td common"><!--行番号-->
                                18
                                <input type="hidden" name="LargeCateID18" value="12">
                                <input type="hidden" name="TypeID18" value="12">
                                <input type="hidden" name="ZaiContract18" value="0">
                                <input type="hidden" name="KakouContract18" value="0">
                                <input type="hidden" name="SekouContract18" value="0">
                                <input type="hidden" name="CostContract18" value="0">
                              </td>
                              <td class="center common"><!--行明細ボタン--><input type="button" id="id_Row18" class="open-detail-dialog" value="行明細" data-target="modal-dialog-void"></td>
                              <td class="common"><!--見出-->
                                <input type="text" name="Heading18" class="input-form-100 gofwd" value="" list="cboHeadingList">
                              </td>
                              <td class="common"><!--名称--><input type="text" name="ZaiName18" class="input-form-100 gofwd" value="床下放熱器取付配管工事"></td>
                              <td class="common"><!--材質--><input type="text" name="Material18" class="input-form-100 gofwd" value="---"></td>
                              <td class="common"><!--寸法--><input type="text" name="Size18" class="input-form-100 gofwd" value="---"></td>
                              <td class="mn default"><!--数量--><input type="text" name="Quantity18" class="input-form-50 gofwd" value="18.00" onchange="DoDetailRecalc(18,2)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center default"><!--単位--><input type="text" name="Unit18" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn default"><!--単価--><input type="text" name="UPrice18" class="input-form-70 gofwd" value="30,000" onchange="DoDetailRecalc(18,1)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro default"><!--金額--><input type="text" name="Price18" class="input-form-70 gofwd" value="540,000" readonly></td>
                              <td class="default"><!--備考--><input type="text" name="Remark18" class="input-form-100 gofwd" value=""></td>
                              <td class="mn ro material"><!--材料数量--><input type="text" name="ZaiQuantity18" class="input-form-50 gofwd" value="18.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center material"><!--材料単位--><input type="text" name="ZaiUnit18" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn material"><!--材料単価--><input type="text" name="ZaiUPrice18" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(18,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="right ro material"><!--材料金額--><input type="text" name="ZaiPrice18" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro process"><!--加工数量--><input type="text" name="KakouQuantity18" class="input-form-50 gofwd" value="18.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center process"><!--加工単位--><input type="text" name="KakouUnit18" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn process"><!--加工単価--><input type="text" name="KakouUPrice18" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(18,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro process"><!--加工金額--><input type="text" name="KakouPrice18" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro construct"><!--施工数量--><input type="text" name="SekouQuantity18" class="input-form-50 gofwd" value="18.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center construct"><!--施工単位--><input type="text" name="SekouUnit18" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn construct"><!--施工単価--><input type="text" name="SekouUPrice18" class="input-form-50 gofwd" value="10,500" onchange="DoDetailRecalc(18,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro construct"><!--施工金額--><input type="text" name="SekouPrice18" class="input-form-50 gofwd" value="189,000" readonly></td>
                              <td class="mn ro cost"><!--経費数量--><input type="text" name="CostQuantity18" class="input-form-50 gofwd" value="18.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center cost"><!--経費単位--><input type="text" name="CostUnit18" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn cost"><!--経費単価--><input type="text" name="CostUPrice18" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(18,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro cost"><!--経費金額--><input type="text" name="CostPrice18" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="center cost-only">                                <a class="cost hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center material-only">                                <a class="material hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center process-only">                                <a class="process hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center construct-only">                                <a class="construct " onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                            </tr>
                            <tr>
                              <td class="check common">
                                <label>
                                  <input type="checkbox" name="chkrow_19" id="chkrow_19" class="chkrow" value="19">
                                </label>
                              </td>
                              <td class="mn-td common"><!--行番号-->
                                19
                                <input type="hidden" name="LargeCateID19" value="12">
                                <input type="hidden" name="TypeID19" value="12">
                                <input type="hidden" name="ZaiContract19" value="0">
                                <input type="hidden" name="KakouContract19" value="0">
                                <input type="hidden" name="SekouContract19" value="0">
                                <input type="hidden" name="CostContract19" value="0">
                              </td>
                              <td class="center common"><!--行明細ボタン--><input type="button" id="id_Row19" class="open-detail-dialog" value="行明細" data-target="modal-dialog-void"></td>
                              <td class="common"><!--見出-->
                                <input type="text" name="Heading19" class="input-form-100 gofwd" value="" list="cboHeadingList">
                              </td>
                              <td class="common"><!--名称--><input type="text" name="ZaiName19" class="input-form-100 gofwd" value="コントローラ取付配線工事"></td>
                              <td class="common"><!--材質--><input type="text" name="Material19" class="input-form-100 gofwd" value="---"></td>
                              <td class="common"><!--寸法--><input type="text" name="Size19" class="input-form-100 gofwd" value="資材含む"></td>
                              <td class="mn default"><!--数量--><input type="text" name="Quantity19" class="input-form-50 gofwd" value="2.00" onchange="DoDetailRecalc(19,2)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center default"><!--単位--><input type="text" name="Unit19" class="input-form-20 gofwd" value="式" list="cboUnitList"></td>
                              <td class="mn default"><!--単価--><input type="text" name="UPrice19" class="input-form-70 gofwd" value="9,000" onchange="DoDetailRecalc(19,1)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro default"><!--金額--><input type="text" name="Price19" class="input-form-70 gofwd" value="18,000" readonly></td>
                              <td class="default"><!--備考--><input type="text" name="Remark19" class="input-form-100 gofwd" value=""></td>
                              <td class="mn ro material"><!--材料数量--><input type="text" name="ZaiQuantity19" class="input-form-50 gofwd" value="2.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center material"><!--材料単位--><input type="text" name="ZaiUnit19" class="input-form-20 gofwd" value="式" list="cboUnitList"></td>
                              <td class="mn material"><!--材料単価--><input type="text" name="ZaiUPrice19" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(19,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="right ro material"><!--材料金額--><input type="text" name="ZaiPrice19" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro process"><!--加工数量--><input type="text" name="KakouQuantity19" class="input-form-50 gofwd" value="2.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center process"><!--加工単位--><input type="text" name="KakouUnit19" class="input-form-20 gofwd" value="式" list="cboUnitList"></td>
                              <td class="mn process"><!--加工単価--><input type="text" name="KakouUPrice19" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(19,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro process"><!--加工金額--><input type="text" name="KakouPrice19" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro construct"><!--施工数量--><input type="text" name="SekouQuantity19" class="input-form-50 gofwd" value="2.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center construct"><!--施工単位--><input type="text" name="SekouUnit19" class="input-form-20 gofwd" value="式" list="cboUnitList"></td>
                              <td class="mn construct"><!--施工単価--><input type="text" name="SekouUPrice19" class="input-form-50 gofwd" value="2,500" onchange="DoDetailRecalc(19,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro construct"><!--施工金額--><input type="text" name="SekouPrice19" class="input-form-50 gofwd" value="5,000" readonly></td>
                              <td class="mn ro cost"><!--経費数量--><input type="text" name="CostQuantity19" class="input-form-50 gofwd" value="2.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center cost"><!--経費単位--><input type="text" name="CostUnit19" class="input-form-20 gofwd" value="式" list="cboUnitList"></td>
                              <td class="mn cost"><!--経費単価--><input type="text" name="CostUPrice19" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(19,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro cost"><!--経費金額--><input type="text" name="CostPrice19" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="center cost-only">                                <a class="cost hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center material-only">                                <a class="material hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center process-only">                                <a class="process hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center construct-only">                                <a class="construct " onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                            </tr>
                            <tr>
                              <td class="check common">
                                <label>
                                  <input type="checkbox" name="chkrow_20" id="chkrow_20" class="chkrow" value="20">
                                </label>
                              </td>
                              <td class="mn-td common"><!--行番号-->
                                20
                                <input type="hidden" name="LargeCateID20" value="12">
                                <input type="hidden" name="TypeID20" value="12">
                                <input type="hidden" name="ZaiContract20" value="0">
                                <input type="hidden" name="KakouContract20" value="0">
                                <input type="hidden" name="SekouContract20" value="0">
                                <input type="hidden" name="CostContract20" value="0">
                              </td>
                              <td class="center common"><!--行明細ボタン--><input type="button" id="id_Row20" class="open-detail-dialog" value="行明細" data-target="modal-dialog-void"></td>
                              <td class="common"><!--見出-->
                                <input type="text" name="Heading20" class="input-form-100 gofwd" value="" list="cboHeadingList">
                              </td>
                              <td class="common"><!--名称--><input type="text" name="ZaiName20" class="input-form-100 gofwd" value="床暖コントローラ取付工事"></td>
                              <td class="common"><!--材質--><input type="text" name="Material20" class="input-form-100 gofwd" value="---"></td>
                              <td class="common"><!--寸法--><input type="text" name="Size20" class="input-form-100 gofwd" value="---"></td>
                              <td class="mn default"><!--数量--><input type="text" name="Quantity20" class="input-form-50 gofwd" value="2.00" onchange="DoDetailRecalc(20,2)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center default"><!--単位--><input type="text" name="Unit20" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn default"><!--単価--><input type="text" name="UPrice20" class="input-form-70 gofwd" value="13,000" onchange="DoDetailRecalc(20,1)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro default"><!--金額--><input type="text" name="Price20" class="input-form-70 gofwd" value="26,000" readonly></td>
                              <td class="default"><!--備考--><input type="text" name="Remark20" class="input-form-100 gofwd" value=""></td>
                              <td class="mn ro material"><!--材料数量--><input type="text" name="ZaiQuantity20" class="input-form-50 gofwd" value="2.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center material"><!--材料単位--><input type="text" name="ZaiUnit20" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn material"><!--材料単価--><input type="text" name="ZaiUPrice20" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(20,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="right ro material"><!--材料金額--><input type="text" name="ZaiPrice20" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro process"><!--加工数量--><input type="text" name="KakouQuantity20" class="input-form-50 gofwd" value="2.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center process"><!--加工単位--><input type="text" name="KakouUnit20" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn process"><!--加工単価--><input type="text" name="KakouUPrice20" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(20,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro process"><!--加工金額--><input type="text" name="KakouPrice20" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro construct"><!--施工数量--><input type="text" name="SekouQuantity20" class="input-form-50 gofwd" value="2.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center construct"><!--施工単位--><input type="text" name="SekouUnit20" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn construct"><!--施工単価--><input type="text" name="SekouUPrice20" class="input-form-50 gofwd" value="2,500" onchange="DoDetailRecalc(20,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro construct"><!--施工金額--><input type="text" name="SekouPrice20" class="input-form-50 gofwd" value="5,000" readonly></td>
                              <td class="mn ro cost"><!--経費数量--><input type="text" name="CostQuantity20" class="input-form-50 gofwd" value="2.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center cost"><!--経費単位--><input type="text" name="CostUnit20" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn cost"><!--経費単価--><input type="text" name="CostUPrice20" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(20,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro cost"><!--経費金額--><input type="text" name="CostPrice20" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="center cost-only">                                <a class="cost hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center material-only">                                <a class="material hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center process-only">                                <a class="process hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center construct-only">                                <a class="construct " onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                            </tr>
                            <tr>
                              <td class="check common">
                                <label>
                                  <input type="checkbox" name="chkrow_21" id="chkrow_21" class="chkrow" value="21">
                                </label>
                              </td>
                              <td class="mn-td common"><!--行番号-->
                                21
                                <input type="hidden" name="LargeCateID21" value="12">
                                <input type="hidden" name="TypeID21" value="12">
                                <input type="hidden" name="ZaiContract21" value="0">
                                <input type="hidden" name="KakouContract21" value="0">
                                <input type="hidden" name="SekouContract21" value="0">
                                <input type="hidden" name="CostContract21" value="0">
                              </td>
                              <td class="center common"><!--行明細ボタン--><input type="button" id="id_Row21" class="open-detail-dialog" value="行明細" data-target="modal-dialog-void"></td>
                              <td class="common"><!--見出-->
                                <input type="text" name="Heading21" class="input-form-100 gofwd" value="" list="cboHeadingList">
                              </td>
                              <td class="common"><!--名称--><input type="text" name="ZaiName21" class="input-form-100 gofwd" value="灯油配管工事     10m"></td>
                              <td class="common"><!--材質--><input type="text" name="Material21" class="input-form-100 gofwd" value="---"></td>
                              <td class="common"><!--寸法--><input type="text" name="Size21" class="input-form-100 gofwd" value="資材含む"></td>
                              <td class="mn default"><!--数量--><input type="text" name="Quantity21" class="input-form-50 gofwd" value="1.00" onchange="DoDetailRecalc(21,2)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center default"><!--単位--><input type="text" name="Unit21" class="input-form-20 gofwd" value="式" list="cboUnitList"></td>
                              <td class="mn default"><!--単価--><input type="text" name="UPrice21" class="input-form-70 gofwd" value="18,000" onchange="DoDetailRecalc(21,1)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro default"><!--金額--><input type="text" name="Price21" class="input-form-70 gofwd" value="18,000" readonly></td>
                              <td class="default"><!--備考--><input type="text" name="Remark21" class="input-form-100 gofwd" value=""></td>
                              <td class="mn ro material"><!--材料数量--><input type="text" name="ZaiQuantity21" class="input-form-50 gofwd" value="1.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center material"><!--材料単位--><input type="text" name="ZaiUnit21" class="input-form-20 gofwd" value="式" list="cboUnitList"></td>
                              <td class="mn material"><!--材料単価--><input type="text" name="ZaiUPrice21" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(21,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="right ro material"><!--材料金額--><input type="text" name="ZaiPrice21" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro process"><!--加工数量--><input type="text" name="KakouQuantity21" class="input-form-50 gofwd" value="1.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center process"><!--加工単位--><input type="text" name="KakouUnit21" class="input-form-20 gofwd" value="式" list="cboUnitList"></td>
                              <td class="mn process"><!--加工単価--><input type="text" name="KakouUPrice21" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(21,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro process"><!--加工金額--><input type="text" name="KakouPrice21" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro construct"><!--施工数量--><input type="text" name="SekouQuantity21" class="input-form-50 gofwd" value="1.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center construct"><!--施工単位--><input type="text" name="SekouUnit21" class="input-form-20 gofwd" value="式" list="cboUnitList"></td>
                              <td class="mn construct"><!--施工単価--><input type="text" name="SekouUPrice21" class="input-form-50 gofwd" value="8,000" onchange="DoDetailRecalc(21,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro construct"><!--施工金額--><input type="text" name="SekouPrice21" class="input-form-50 gofwd" value="8,000" readonly></td>
                              <td class="mn ro cost"><!--経費数量--><input type="text" name="CostQuantity21" class="input-form-50 gofwd" value="1.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center cost"><!--経費単位--><input type="text" name="CostUnit21" class="input-form-20 gofwd" value="式" list="cboUnitList"></td>
                              <td class="mn cost"><!--経費単価--><input type="text" name="CostUPrice21" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(21,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro cost"><!--経費金額--><input type="text" name="CostPrice21" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="center cost-only">                                <a class="cost hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center material-only">                                <a class="material hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center process-only">                                <a class="process hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center construct-only">                                <a class="construct " onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                            </tr>
                            <tr>
                              <td class="check common">
                                <label>
                                  <input type="checkbox" name="chkrow_22" id="chkrow_22" class="chkrow" value="22">
                                </label>
                              </td>
                              <td class="mn-td common"><!--行番号-->
                                22
                                <input type="hidden" name="LargeCateID22" value="12">
                                <input type="hidden" name="TypeID22" value="12">
                                <input type="hidden" name="ZaiContract22" value="0">
                                <input type="hidden" name="KakouContract22" value="0">
                                <input type="hidden" name="SekouContract22" value="0">
                                <input type="hidden" name="CostContract22" value="0">
                              </td>
                              <td class="center common"><!--行明細ボタン--><input type="button" id="id_Row22" class="open-detail-dialog" value="行明細" data-target="modal-dialog-void"></td>
                              <td class="common"><!--見出-->
                                <input type="text" name="Heading22" class="input-form-100 gofwd" value="" list="cboHeadingList">
                              </td>
                              <td class="common"><!--名称--><input type="text" name="ZaiName22" class="input-form-100 gofwd" value="灯油タンク据付費"></td>
                              <td class="common"><!--材質--><input type="text" name="Material22" class="input-form-100 gofwd" value="---"></td>
                              <td class="common"><!--寸法--><input type="text" name="Size22" class="input-form-100 gofwd" value="２００Ｌ、２５０Ｌ"></td>
                              <td class="mn default"><!--数量--><input type="text" name="Quantity22" class="input-form-50 gofwd" value="2.00" onchange="DoDetailRecalc(22,2)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center default"><!--単位--><input type="text" name="Unit22" class="input-form-20 gofwd" value="式" list="cboUnitList"></td>
                              <td class="mn default"><!--単価--><input type="text" name="UPrice22" class="input-form-70 gofwd" value="10,000" onchange="DoDetailRecalc(22,1)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro default"><!--金額--><input type="text" name="Price22" class="input-form-70 gofwd" value="20,000" readonly></td>
                              <td class="default"><!--備考--><input type="text" name="Remark22" class="input-form-100 gofwd" value=""></td>
                              <td class="mn ro material"><!--材料数量--><input type="text" name="ZaiQuantity22" class="input-form-50 gofwd" value="2.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center material"><!--材料単位--><input type="text" name="ZaiUnit22" class="input-form-20 gofwd" value="式" list="cboUnitList"></td>
                              <td class="mn material"><!--材料単価--><input type="text" name="ZaiUPrice22" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(22,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="right ro material"><!--材料金額--><input type="text" name="ZaiPrice22" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro process"><!--加工数量--><input type="text" name="KakouQuantity22" class="input-form-50 gofwd" value="2.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center process"><!--加工単位--><input type="text" name="KakouUnit22" class="input-form-20 gofwd" value="式" list="cboUnitList"></td>
                              <td class="mn process"><!--加工単価--><input type="text" name="KakouUPrice22" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(22,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro process"><!--加工金額--><input type="text" name="KakouPrice22" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro construct"><!--施工数量--><input type="text" name="SekouQuantity22" class="input-form-50 gofwd" value="2.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center construct"><!--施工単位--><input type="text" name="SekouUnit22" class="input-form-20 gofwd" value="式" list="cboUnitList"></td>
                              <td class="mn construct"><!--施工単価--><input type="text" name="SekouUPrice22" class="input-form-50 gofwd" value="5,000" onchange="DoDetailRecalc(22,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro construct"><!--施工金額--><input type="text" name="SekouPrice22" class="input-form-50 gofwd" value="10,000" readonly></td>
                              <td class="mn ro cost"><!--経費数量--><input type="text" name="CostQuantity22" class="input-form-50 gofwd" value="2.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center cost"><!--経費単位--><input type="text" name="CostUnit22" class="input-form-20 gofwd" value="式" list="cboUnitList"></td>
                              <td class="mn cost"><!--経費単価--><input type="text" name="CostUPrice22" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(22,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro cost"><!--経費金額--><input type="text" name="CostPrice22" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="center cost-only">                                <a class="cost hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center material-only">                                <a class="material hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center process-only">                                <a class="process hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center construct-only">                                <a class="construct " onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                            </tr>
                            <tr>
                              <td class="check common">
                                <label>
                                  <input type="checkbox" name="chkrow_23" id="chkrow_23" class="chkrow" value="23">
                                </label>
                              </td>
                              <td class="mn-td common"><!--行番号-->
                                23
                                <input type="hidden" name="LargeCateID23" value="12">
                                <input type="hidden" name="TypeID23" value="12">
                                <input type="hidden" name="ZaiContract23" value="0">
                                <input type="hidden" name="KakouContract23" value="0">
                                <input type="hidden" name="SekouContract23" value="0">
                                <input type="hidden" name="CostContract23" value="0">
                              </td>
                              <td class="center common"><!--行明細ボタン--><input type="button" id="id_Row23" class="open-detail-dialog" value="行明細" data-target="modal-dialog-void"></td>
                              <td class="common"><!--見出-->
                                <input type="text" name="Heading23" class="input-form-100 gofwd" value="" list="cboHeadingList">
                              </td>
                              <td class="common"><!--名称--><input type="text" name="ZaiName23" class="input-form-100 gofwd" value="耐圧試験費"></td>
                              <td class="common"><!--材質--><input type="text" name="Material23" class="input-form-100 gofwd" value="---"></td>
                              <td class="common"><!--寸法--><input type="text" name="Size23" class="input-form-100 gofwd" value="4kg/ｃ㎡G"></td>
                              <td class="mn default"><!--数量--><input type="text" name="Quantity23" class="input-form-50 gofwd" value="2.00" onchange="DoDetailRecalc(23,2)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center default"><!--単位--><input type="text" name="Unit23" class="input-form-20 gofwd" value="式" list="cboUnitList"></td>
                              <td class="mn default"><!--単価--><input type="text" name="UPrice23" class="input-form-70 gofwd" value="20,000" onchange="DoDetailRecalc(23,1)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro default"><!--金額--><input type="text" name="Price23" class="input-form-70 gofwd" value="40,000" readonly></td>
                              <td class="default"><!--備考--><input type="text" name="Remark23" class="input-form-100 gofwd" value=""></td>
                              <td class="mn ro material"><!--材料数量--><input type="text" name="ZaiQuantity23" class="input-form-50 gofwd" value="2.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center material"><!--材料単位--><input type="text" name="ZaiUnit23" class="input-form-20 gofwd" value="式" list="cboUnitList"></td>
                              <td class="mn material"><!--材料単価--><input type="text" name="ZaiUPrice23" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(23,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="right ro material"><!--材料金額--><input type="text" name="ZaiPrice23" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro process"><!--加工数量--><input type="text" name="KakouQuantity23" class="input-form-50 gofwd" value="2.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center process"><!--加工単位--><input type="text" name="KakouUnit23" class="input-form-20 gofwd" value="式" list="cboUnitList"></td>
                              <td class="mn process"><!--加工単価--><input type="text" name="KakouUPrice23" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(23,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro process"><!--加工金額--><input type="text" name="KakouPrice23" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro construct"><!--施工数量--><input type="text" name="SekouQuantity23" class="input-form-50 gofwd" value="2.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center construct"><!--施工単位--><input type="text" name="SekouUnit23" class="input-form-20 gofwd" value="式" list="cboUnitList"></td>
                              <td class="mn construct"><!--施工単価--><input type="text" name="SekouUPrice23" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(23,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro construct"><!--施工金額--><input type="text" name="SekouPrice23" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro cost"><!--経費数量--><input type="text" name="CostQuantity23" class="input-form-50 gofwd" value="2.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center cost"><!--経費単位--><input type="text" name="CostUnit23" class="input-form-20 gofwd" value="式" list="cboUnitList"></td>
                              <td class="mn cost"><!--経費単価--><input type="text" name="CostUPrice23" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(23,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro cost"><!--経費金額--><input type="text" name="CostPrice23" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="center cost-only">                                <a class="cost hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center material-only">                                <a class="material hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center process-only">                                <a class="process hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center construct-only">                                <a class="construct hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                            </tr>
                            <tr>
                              <td class="check common">
                                <label>
                                  <input type="checkbox" name="chkrow_24" id="chkrow_24" class="chkrow" value="24">
                                </label>
                              </td>
                              <td class="mn-td common"><!--行番号-->
                                24
                                <input type="hidden" name="LargeCateID24" value="12">
                                <input type="hidden" name="TypeID24" value="12">
                                <input type="hidden" name="ZaiContract24" value="0">
                                <input type="hidden" name="KakouContract24" value="0">
                                <input type="hidden" name="SekouContract24" value="0">
                                <input type="hidden" name="CostContract24" value="0">
                              </td>
                              <td class="center common"><!--行明細ボタン--><input type="button" id="id_Row24" class="open-detail-dialog" value="行明細" data-target="modal-dialog-void"></td>
                              <td class="common"><!--見出-->
                                <input type="text" name="Heading24" class="input-form-100 gofwd" value="" list="cboHeadingList">
                              </td>
                              <td class="common"><!--名称--><input type="text" name="ZaiName24" class="input-form-100 gofwd" value="試運転調整費"></td>
                              <td class="common"><!--材質--><input type="text" name="Material24" class="input-form-100 gofwd" value="---"></td>
                              <td class="common"><!--寸法--><input type="text" name="Size24" class="input-form-100 gofwd" value="---"></td>
                              <td class="mn default"><!--数量--><input type="text" name="Quantity24" class="input-form-50 gofwd" value="2.00" onchange="DoDetailRecalc(24,2)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center default"><!--単位--><input type="text" name="Unit24" class="input-form-20 gofwd" value="式" list="cboUnitList"></td>
                              <td class="mn default"><!--単価--><input type="text" name="UPrice24" class="input-form-70 gofwd" value="10,000" onchange="DoDetailRecalc(24,1)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro default"><!--金額--><input type="text" name="Price24" class="input-form-70 gofwd" value="20,000" readonly></td>
                              <td class="default"><!--備考--><input type="text" name="Remark24" class="input-form-100 gofwd" value=""></td>
                              <td class="mn ro material"><!--材料数量--><input type="text" name="ZaiQuantity24" class="input-form-50 gofwd" value="2.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center material"><!--材料単位--><input type="text" name="ZaiUnit24" class="input-form-20 gofwd" value="式" list="cboUnitList"></td>
                              <td class="mn material"><!--材料単価--><input type="text" name="ZaiUPrice24" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(24,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="right ro material"><!--材料金額--><input type="text" name="ZaiPrice24" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro process"><!--加工数量--><input type="text" name="KakouQuantity24" class="input-form-50 gofwd" value="2.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center process"><!--加工単位--><input type="text" name="KakouUnit24" class="input-form-20 gofwd" value="式" list="cboUnitList"></td>
                              <td class="mn process"><!--加工単価--><input type="text" name="KakouUPrice24" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(24,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro process"><!--加工金額--><input type="text" name="KakouPrice24" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro construct"><!--施工数量--><input type="text" name="SekouQuantity24" class="input-form-50 gofwd" value="2.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center construct"><!--施工単位--><input type="text" name="SekouUnit24" class="input-form-20 gofwd" value="式" list="cboUnitList"></td>
                              <td class="mn construct"><!--施工単価--><input type="text" name="SekouUPrice24" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(24,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro construct"><!--施工金額--><input type="text" name="SekouPrice24" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro cost"><!--経費数量--><input type="text" name="CostQuantity24" class="input-form-50 gofwd" value="2.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center cost"><!--経費単位--><input type="text" name="CostUnit24" class="input-form-20 gofwd" value="式" list="cboUnitList"></td>
                              <td class="mn cost"><!--経費単価--><input type="text" name="CostUPrice24" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(24,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro cost"><!--経費金額--><input type="text" name="CostPrice24" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="center cost-only">                                <a class="cost hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center material-only">                                <a class="material hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center process-only">                                <a class="process hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center construct-only">                                <a class="construct hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                            </tr>
                            <tr>
                              <td class="check common">
                                <label>
                                  <input type="checkbox" name="chkrow_25" id="chkrow_25" class="chkrow" value="25">
                                </label>
                              </td>
                              <td class="mn-td common"><!--行番号-->
                                25
                                <input type="hidden" name="LargeCateID25" value="12">
                                <input type="hidden" name="TypeID25" value="12">
                                <input type="hidden" name="ZaiContract25" value="0">
                                <input type="hidden" name="KakouContract25" value="0">
                                <input type="hidden" name="SekouContract25" value="0">
                                <input type="hidden" name="CostContract25" value="0">
                              </td>
                              <td class="center common"><!--行明細ボタン--><input type="button" id="id_Row25" class="open-detail-dialog" value="行明細" data-target="modal-dialog-void"></td>
                              <td class="common"><!--見出-->
                                <input type="text" name="Heading25" class="input-form-100 gofwd" value="" list="cboHeadingList">
                              </td>
                              <td class="common"><!--名称--><input type="text" name="ZaiName25" class="input-form-100 gofwd" value="運搬交通費"></td>
                              <td class="common"><!--材質--><input type="text" name="Material25" class="input-form-100 gofwd" value="---"></td>
                              <td class="common"><!--寸法--><input type="text" name="Size25" class="input-form-100 gofwd" value="---"></td>
                              <td class="mn default"><!--数量--><input type="text" name="Quantity25" class="input-form-50 gofwd" value="2.00" onchange="DoDetailRecalc(25,2)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center default"><!--単位--><input type="text" name="Unit25" class="input-form-20 gofwd" value="式" list="cboUnitList"></td>
                              <td class="mn default"><!--単価--><input type="text" name="UPrice25" class="input-form-70 gofwd" value="10,000" onchange="DoDetailRecalc(25,1)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro default"><!--金額--><input type="text" name="Price25" class="input-form-70 gofwd" value="20,000" readonly></td>
                              <td class="default"><!--備考--><input type="text" name="Remark25" class="input-form-100 gofwd" value=""></td>
                              <td class="mn ro material"><!--材料数量--><input type="text" name="ZaiQuantity25" class="input-form-50 gofwd" value="2.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center material"><!--材料単位--><input type="text" name="ZaiUnit25" class="input-form-20 gofwd" value="式" list="cboUnitList"></td>
                              <td class="mn material"><!--材料単価--><input type="text" name="ZaiUPrice25" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(25,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="right ro material"><!--材料金額--><input type="text" name="ZaiPrice25" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro process"><!--加工数量--><input type="text" name="KakouQuantity25" class="input-form-50 gofwd" value="2.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center process"><!--加工単位--><input type="text" name="KakouUnit25" class="input-form-20 gofwd" value="式" list="cboUnitList"></td>
                              <td class="mn process"><!--加工単価--><input type="text" name="KakouUPrice25" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(25,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro process"><!--加工金額--><input type="text" name="KakouPrice25" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro construct"><!--施工数量--><input type="text" name="SekouQuantity25" class="input-form-50 gofwd" value="2.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center construct"><!--施工単位--><input type="text" name="SekouUnit25" class="input-form-20 gofwd" value="式" list="cboUnitList"></td>
                              <td class="mn construct"><!--施工単価--><input type="text" name="SekouUPrice25" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(25,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro construct"><!--施工金額--><input type="text" name="SekouPrice25" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro cost"><!--経費数量--><input type="text" name="CostQuantity25" class="input-form-50 gofwd" value="2.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center cost"><!--経費単位--><input type="text" name="CostUnit25" class="input-form-20 gofwd" value="式" list="cboUnitList"></td>
                              <td class="mn cost"><!--経費単価--><input type="text" name="CostUPrice25" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(25,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro cost"><!--経費金額--><input type="text" name="CostPrice25" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="center cost-only">                                <a class="cost hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center material-only">                                <a class="material hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center process-only">                                <a class="process hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center construct-only">                                <a class="construct hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                            </tr>
                            <tr>
                              <td class="check common">
                                <label>
                                  <input type="checkbox" name="chkrow_26" id="chkrow_26" class="chkrow" value="26">
                                </label>
                              </td>
                              <td class="mn-td common"><!--行番号-->
                                26
                                <input type="hidden" name="LargeCateID26" value="12">
                                <input type="hidden" name="TypeID26" value="12">
                                <input type="hidden" name="ZaiContract26" value="0">
                                <input type="hidden" name="KakouContract26" value="0">
                                <input type="hidden" name="SekouContract26" value="0">
                                <input type="hidden" name="CostContract26" value="0">
                              </td>
                              <td class="center common"><!--行明細ボタン--><input type="button" id="id_Row26" class="open-detail-dialog" value="行明細" data-target="modal-dialog-void"></td>
                              <td class="common"><!--見出-->
                                <input type="text" name="Heading26" class="input-form-100 gofwd" value="" list="cboHeadingList">
                              </td>
                              <td class="common"><!--名称--><input type="text" name="ZaiName26" class="input-form-100 gofwd" value="諸経費"></td>
                              <td class="common"><!--材質--><input type="text" name="Material26" class="input-form-100 gofwd" value="---"></td>
                              <td class="common"><!--寸法--><input type="text" name="Size26" class="input-form-100 gofwd" value="---"></td>
                              <td class="mn default"><!--数量--><input type="text" name="Quantity26" class="input-form-50 gofwd" value="1.00" onchange="DoDetailRecalc(26,2)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center default"><!--単位--><input type="text" name="Unit26" class="input-form-20 gofwd" value="式" list="cboUnitList"></td>
                              <td class="mn default"><!--単価--><input type="text" name="UPrice26" class="input-form-70 gofwd" value="196,000" onchange="DoDetailRecalc(26,1)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro default"><!--金額--><input type="text" name="Price26" class="input-form-70 gofwd" value="196,000" readonly></td>
                              <td class="default"><!--備考--><input type="text" name="Remark26" class="input-form-100 gofwd" value=""></td>
                              <td class="mn ro material"><!--材料数量--><input type="text" name="ZaiQuantity26" class="input-form-50 gofwd" value="1.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center material"><!--材料単位--><input type="text" name="ZaiUnit26" class="input-form-20 gofwd" value="式" list="cboUnitList"></td>
                              <td class="mn material"><!--材料単価--><input type="text" name="ZaiUPrice26" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(26,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="right ro material"><!--材料金額--><input type="text" name="ZaiPrice26" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro process"><!--加工数量--><input type="text" name="KakouQuantity26" class="input-form-50 gofwd" value="1.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center process"><!--加工単位--><input type="text" name="KakouUnit26" class="input-form-20 gofwd" value="式" list="cboUnitList"></td>
                              <td class="mn process"><!--加工単価--><input type="text" name="KakouUPrice26" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(26,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro process"><!--加工金額--><input type="text" name="KakouPrice26" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro construct"><!--施工数量--><input type="text" name="SekouQuantity26" class="input-form-50 gofwd" value="1.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center construct"><!--施工単位--><input type="text" name="SekouUnit26" class="input-form-20 gofwd" value="式" list="cboUnitList"></td>
                              <td class="mn construct"><!--施工単価--><input type="text" name="SekouUPrice26" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(26,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro construct"><!--施工金額--><input type="text" name="SekouPrice26" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro cost"><!--経費数量--><input type="text" name="CostQuantity26" class="input-form-50 gofwd" value="1.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center cost"><!--経費単位--><input type="text" name="CostUnit26" class="input-form-20 gofwd" value="式" list="cboUnitList"></td>
                              <td class="mn cost"><!--経費単価--><input type="text" name="CostUPrice26" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(26,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro cost"><!--経費金額--><input type="text" name="CostPrice26" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="center cost-only">                                <a class="cost hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center material-only">                                <a class="material hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center process-only">                                <a class="process hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center construct-only">                                <a class="construct hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                            </tr>
                            <tr>
                              <td class="check common">
                                <label>
                                  <input type="checkbox" name="chkrow_27" id="chkrow_27" class="chkrow" value="27">
                                </label>
                              </td>
                              <td class="mn-td common"><!--行番号-->
                                27
                                <input type="hidden" name="LargeCateID27" value="0">
                                <input type="hidden" name="TypeID27" value="0">
                                <input type="hidden" name="ZaiContract27" value="0">
                                <input type="hidden" name="KakouContract27" value="0">
                                <input type="hidden" name="SekouContract27" value="0">
                                <input type="hidden" name="CostContract27" value="0">
                              </td>
                              <td class="center common"><!--行明細ボタン--><input type="button" id="id_Row27" class="open-detail-dialog" value="行明細" data-target="modal-dialog-void"></td>
                              <td class="common"><!--見出-->
                                <input type="text" name="Heading27" class="input-form-100 gofwd" value="" list="cboHeadingList">
                              </td>
                              <td class="common"><!--名称--><input type="text" name="ZaiName27" class="input-form-100 gofwd" value=""></td>
                              <td class="common"><!--材質--><input type="text" name="Material27" class="input-form-100 gofwd" value=""></td>
                              <td class="common"><!--寸法--><input type="text" name="Size27" class="input-form-100 gofwd" value=""></td>
                              <td class="mn default"><!--数量--><input type="text" name="Quantity27" class="input-form-50 gofwd" value="1.00" onchange="DoDetailRecalc(27,2)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center default"><!--単位--><input type="text" name="Unit27" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn default"><!--単価--><input type="text" name="UPrice27" class="input-form-70 gofwd" value="-1,832,700" onchange="DoDetailRecalc(27,1)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro default"><!--金額--><input type="text" name="Price27" class="input-form-70 gofwd" value="-1,832,700" readonly></td>
                              <td class="default"><!--備考--><input type="text" name="Remark27" class="input-form-100 gofwd" value=""></td>
                              <td class="mn ro material"><!--材料数量--><input type="text" name="ZaiQuantity27" class="input-form-50 gofwd" value="0.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center material"><!--材料単位--><input type="text" name="ZaiUnit27" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn material"><!--材料単価--><input type="text" name="ZaiUPrice27" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(27,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="right ro material"><!--材料金額--><input type="text" name="ZaiPrice27" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro process"><!--加工数量--><input type="text" name="KakouQuantity27" class="input-form-50 gofwd" value="0.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center process"><!--加工単位--><input type="text" name="KakouUnit27" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn process"><!--加工単価--><input type="text" name="KakouUPrice27" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(27,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro process"><!--加工金額--><input type="text" name="KakouPrice27" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro construct"><!--施工数量--><input type="text" name="SekouQuantity27" class="input-form-50 gofwd" value="0.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center construct"><!--施工単位--><input type="text" name="SekouUnit27" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn construct"><!--施工単価--><input type="text" name="SekouUPrice27" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(27,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro construct"><!--施工金額--><input type="text" name="SekouPrice27" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro cost"><!--経費数量--><input type="text" name="CostQuantity27" class="input-form-50 gofwd" value="0.00" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center cost"><!--経費単位--><input type="text" name="CostUnit27" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn cost"><!--経費単価--><input type="text" name="CostUPrice27" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(27,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro cost"><!--経費金額--><input type="text" name="CostPrice27" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="center cost-only">                                <a class="cost hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center material-only">                                <a class="material hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center process-only">                                <a class="process hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center construct-only">                                <a class="construct hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                            </tr>
                            <tr>
                              <td class="check common">
                                <label>
                                  <input type="checkbox" name="chkrow_28" id="chkrow_28" class="chkrow" value="28">
                                </label>
                              </td>
                              <td class="mn-td common"><!--行番号-->
                                28
                                <input type="hidden" name="LargeCateID28" value="0">
                                <input type="hidden" name="TypeID28" value="0">
                                <input type="hidden" name="ZaiContract28" value="0">
                                <input type="hidden" name="KakouContract28" value="0">
                                <input type="hidden" name="SekouContract28" value="0">
                                <input type="hidden" name="CostContract28" value="0">
                              </td>
                              <td class="center common"><!--行明細ボタン--><input type="button" id="id_Row28" class="open-detail-dialog" value="行明細" data-target="modal-dialog-void"></td>
                              <td class="common"><!--見出-->
                                <input type="text" name="Heading28" class="input-form-100 gofwd" value="" list="cboHeadingList">
                              </td>
                              <td class="common"><!--名称--><input type="text" name="ZaiName28" class="input-form-100 gofwd" value=""></td>
                              <td class="common"><!--材質--><input type="text" name="Material28" class="input-form-100 gofwd" value=""></td>
                              <td class="common"><!--寸法--><input type="text" name="Size28" class="input-form-100 gofwd" value=""></td>
                              <td class="mn default"><!--数量--><input type="text" name="Quantity28" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(28,2)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center default"><!--単位--><input type="text" name="Unit28" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn default"><!--単価--><input type="text" name="UPrice28" class="input-form-70 gofwd" value="" onchange="DoDetailRecalc(28,1)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro default"><!--金額--><input type="text" name="Price28" class="input-form-70 gofwd" value="" readonly></td>
                              <td class="default"><!--備考--><input type="text" name="Remark28" class="input-form-100 gofwd" value=""></td>
                              <td class="mn ro material"><!--材料数量--><input type="text" name="ZaiQuantity28" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center material"><!--材料単位--><input type="text" name="ZaiUnit28" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn material"><!--材料単価--><input type="text" name="ZaiUPrice28" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(28,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="right ro material"><!--材料金額--><input type="text" name="ZaiPrice28" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro process"><!--加工数量--><input type="text" name="KakouQuantity28" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center process"><!--加工単位--><input type="text" name="KakouUnit28" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn process"><!--加工単価--><input type="text" name="KakouUPrice28" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(28,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro process"><!--加工金額--><input type="text" name="KakouPrice28" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro construct"><!--施工数量--><input type="text" name="SekouQuantity28" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center construct"><!--施工単位--><input type="text" name="SekouUnit28" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn construct"><!--施工単価--><input type="text" name="SekouUPrice28" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(28,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro construct"><!--施工金額--><input type="text" name="SekouPrice28" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro cost"><!--経費数量--><input type="text" name="CostQuantity28" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center cost"><!--経費単位--><input type="text" name="CostUnit28" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn cost"><!--経費単価--><input type="text" name="CostUPrice28" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(28,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro cost"><!--経費金額--><input type="text" name="CostPrice28" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="center cost-only">                                <a class="cost hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center material-only">                                <a class="material hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center process-only">                                <a class="process hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center construct-only">                                <a class="construct hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                            </tr>
                            <tr>
                              <td class="check common">
                                <label>
                                  <input type="checkbox" name="chkrow_29" id="chkrow_29" class="chkrow" value="29">
                                </label>
                              </td>
                              <td class="mn-td common"><!--行番号-->
                                29
                                <input type="hidden" name="LargeCateID29" value="0">
                                <input type="hidden" name="TypeID29" value="0">
                                <input type="hidden" name="ZaiContract29" value="0">
                                <input type="hidden" name="KakouContract29" value="0">
                                <input type="hidden" name="SekouContract29" value="0">
                                <input type="hidden" name="CostContract29" value="0">
                              </td>
                              <td class="center common"><!--行明細ボタン--><input type="button" id="id_Row29" class="open-detail-dialog" value="行明細" data-target="modal-dialog-void"></td>
                              <td class="common"><!--見出-->
                                <input type="text" name="Heading29" class="input-form-100 gofwd" value="" list="cboHeadingList">
                              </td>
                              <td class="common"><!--名称--><input type="text" name="ZaiName29" class="input-form-100 gofwd" value=""></td>
                              <td class="common"><!--材質--><input type="text" name="Material29" class="input-form-100 gofwd" value=""></td>
                              <td class="common"><!--寸法--><input type="text" name="Size29" class="input-form-100 gofwd" value=""></td>
                              <td class="mn default"><!--数量--><input type="text" name="Quantity29" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(29,2)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center default"><!--単位--><input type="text" name="Unit29" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn default"><!--単価--><input type="text" name="UPrice29" class="input-form-70 gofwd" value="" onchange="DoDetailRecalc(29,1)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro default"><!--金額--><input type="text" name="Price29" class="input-form-70 gofwd" value="" readonly></td>
                              <td class="default"><!--備考--><input type="text" name="Remark29" class="input-form-100 gofwd" value=""></td>
                              <td class="mn ro material"><!--材料数量--><input type="text" name="ZaiQuantity29" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center material"><!--材料単位--><input type="text" name="ZaiUnit29" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn material"><!--材料単価--><input type="text" name="ZaiUPrice29" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(29,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="right ro material"><!--材料金額--><input type="text" name="ZaiPrice29" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro process"><!--加工数量--><input type="text" name="KakouQuantity29" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center process"><!--加工単位--><input type="text" name="KakouUnit29" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn process"><!--加工単価--><input type="text" name="KakouUPrice29" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(29,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro process"><!--加工金額--><input type="text" name="KakouPrice29" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro construct"><!--施工数量--><input type="text" name="SekouQuantity29" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center construct"><!--施工単位--><input type="text" name="SekouUnit29" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn construct"><!--施工単価--><input type="text" name="SekouUPrice29" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(29,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro construct"><!--施工金額--><input type="text" name="SekouPrice29" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro cost"><!--経費数量--><input type="text" name="CostQuantity29" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center cost"><!--経費単位--><input type="text" name="CostUnit29" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn cost"><!--経費単価--><input type="text" name="CostUPrice29" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(29,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro cost"><!--経費金額--><input type="text" name="CostPrice29" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="center cost-only">                                <a class="cost hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center material-only">                                <a class="material hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center process-only">                                <a class="process hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center construct-only">                                <a class="construct hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                            </tr>
                            <tr>
                              <td class="check common">
                                <label>
                                  <input type="checkbox" name="chkrow_30" id="chkrow_30" class="chkrow" value="30">
                                </label>
                              </td>
                              <td class="mn-td common"><!--行番号-->
                                30
                                <input type="hidden" name="LargeCateID30" value="0">
                                <input type="hidden" name="TypeID30" value="0">
                                <input type="hidden" name="ZaiContract30" value="0">
                                <input type="hidden" name="KakouContract30" value="0">
                                <input type="hidden" name="SekouContract30" value="0">
                                <input type="hidden" name="CostContract30" value="0">
                              </td>
                              <td class="center common"><!--行明細ボタン--><input type="button" id="id_Row30" class="open-detail-dialog" value="行明細" data-target="modal-dialog-void"></td>
                              <td class="common"><!--見出-->
                                <input type="text" name="Heading30" class="input-form-100 gofwd" value="" list="cboHeadingList">
                              </td>
                              <td class="common"><!--名称--><input type="text" name="ZaiName30" class="input-form-100 gofwd" value=""></td>
                              <td class="common"><!--材質--><input type="text" name="Material30" class="input-form-100 gofwd" value=""></td>
                              <td class="common"><!--寸法--><input type="text" name="Size30" class="input-form-100 gofwd" value=""></td>
                              <td class="mn default"><!--数量--><input type="text" name="Quantity30" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(30,2)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center default"><!--単位--><input type="text" name="Unit30" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn default"><!--単価--><input type="text" name="UPrice30" class="input-form-70 gofwd" value="" onchange="DoDetailRecalc(30,1)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro default"><!--金額--><input type="text" name="Price30" class="input-form-70 gofwd" value="" readonly></td>
                              <td class="default"><!--備考--><input type="text" name="Remark30" class="input-form-100 gofwd" value=""></td>
                              <td class="mn ro material"><!--材料数量--><input type="text" name="ZaiQuantity30" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center material"><!--材料単位--><input type="text" name="ZaiUnit30" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn material"><!--材料単価--><input type="text" name="ZaiUPrice30" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(30,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="right ro material"><!--材料金額--><input type="text" name="ZaiPrice30" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro process"><!--加工数量--><input type="text" name="KakouQuantity30" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center process"><!--加工単位--><input type="text" name="KakouUnit30" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn process"><!--加工単価--><input type="text" name="KakouUPrice30" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(30,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro process"><!--加工金額--><input type="text" name="KakouPrice30" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro construct"><!--施工数量--><input type="text" name="SekouQuantity30" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center construct"><!--施工単位--><input type="text" name="SekouUnit30" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn construct"><!--施工単価--><input type="text" name="SekouUPrice30" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(30,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro construct"><!--施工金額--><input type="text" name="SekouPrice30" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro cost"><!--経費数量--><input type="text" name="CostQuantity30" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center cost"><!--経費単位--><input type="text" name="CostUnit30" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn cost"><!--経費単価--><input type="text" name="CostUPrice30" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(30,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro cost"><!--経費金額--><input type="text" name="CostPrice30" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="center cost-only">                                <a class="cost hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center material-only">                                <a class="material hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center process-only">                                <a class="process hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center construct-only">                                <a class="construct hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                            </tr>
                            <tr>
                              <td class="check common">
                                <label>
                                  <input type="checkbox" name="chkrow_31" id="chkrow_31" class="chkrow" value="31">
                                </label>
                              </td>
                              <td class="mn-td common"><!--行番号-->
                                31
                                <input type="hidden" name="LargeCateID31" value="0">
                                <input type="hidden" name="TypeID31" value="0">
                                <input type="hidden" name="ZaiContract31" value="0">
                                <input type="hidden" name="KakouContract31" value="0">
                                <input type="hidden" name="SekouContract31" value="0">
                                <input type="hidden" name="CostContract31" value="0">
                              </td>
                              <td class="center common"><!--行明細ボタン--><input type="button" id="id_Row31" class="open-detail-dialog" value="行明細" data-target="modal-dialog-void"></td>
                              <td class="common"><!--見出-->
                                <input type="text" name="Heading31" class="input-form-100 gofwd" value="" list="cboHeadingList">
                              </td>
                              <td class="common"><!--名称--><input type="text" name="ZaiName31" class="input-form-100 gofwd" value=""></td>
                              <td class="common"><!--材質--><input type="text" name="Material31" class="input-form-100 gofwd" value=""></td>
                              <td class="common"><!--寸法--><input type="text" name="Size31" class="input-form-100 gofwd" value=""></td>
                              <td class="mn default"><!--数量--><input type="text" name="Quantity31" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(31,2)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center default"><!--単位--><input type="text" name="Unit31" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn default"><!--単価--><input type="text" name="UPrice31" class="input-form-70 gofwd" value="" onchange="DoDetailRecalc(31,1)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro default"><!--金額--><input type="text" name="Price31" class="input-form-70 gofwd" value="" readonly></td>
                              <td class="default"><!--備考--><input type="text" name="Remark31" class="input-form-100 gofwd" value=""></td>
                              <td class="mn ro material"><!--材料数量--><input type="text" name="ZaiQuantity31" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center material"><!--材料単位--><input type="text" name="ZaiUnit31" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn material"><!--材料単価--><input type="text" name="ZaiUPrice31" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(31,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="right ro material"><!--材料金額--><input type="text" name="ZaiPrice31" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro process"><!--加工数量--><input type="text" name="KakouQuantity31" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center process"><!--加工単位--><input type="text" name="KakouUnit31" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn process"><!--加工単価--><input type="text" name="KakouUPrice31" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(31,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro process"><!--加工金額--><input type="text" name="KakouPrice31" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro construct"><!--施工数量--><input type="text" name="SekouQuantity31" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center construct"><!--施工単位--><input type="text" name="SekouUnit31" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn construct"><!--施工単価--><input type="text" name="SekouUPrice31" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(31,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro construct"><!--施工金額--><input type="text" name="SekouPrice31" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro cost"><!--経費数量--><input type="text" name="CostQuantity31" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center cost"><!--経費単位--><input type="text" name="CostUnit31" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn cost"><!--経費単価--><input type="text" name="CostUPrice31" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(31,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro cost"><!--経費金額--><input type="text" name="CostPrice31" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="center cost-only">                                <a class="cost hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center material-only">                                <a class="material hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center process-only">                                <a class="process hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center construct-only">                                <a class="construct hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                            </tr>
                            <tr>
                              <td class="check common">
                                <label>
                                  <input type="checkbox" name="chkrow_32" id="chkrow_32" class="chkrow" value="32">
                                </label>
                              </td>
                              <td class="mn-td common"><!--行番号-->
                                32
                                <input type="hidden" name="LargeCateID32" value="0">
                                <input type="hidden" name="TypeID32" value="0">
                                <input type="hidden" name="ZaiContract32" value="0">
                                <input type="hidden" name="KakouContract32" value="0">
                                <input type="hidden" name="SekouContract32" value="0">
                                <input type="hidden" name="CostContract32" value="0">
                              </td>
                              <td class="center common"><!--行明細ボタン--><input type="button" id="id_Row32" class="open-detail-dialog" value="行明細" data-target="modal-dialog-void"></td>
                              <td class="common"><!--見出-->
                                <input type="text" name="Heading32" class="input-form-100 gofwd" value="" list="cboHeadingList">
                              </td>
                              <td class="common"><!--名称--><input type="text" name="ZaiName32" class="input-form-100 gofwd" value=""></td>
                              <td class="common"><!--材質--><input type="text" name="Material32" class="input-form-100 gofwd" value=""></td>
                              <td class="common"><!--寸法--><input type="text" name="Size32" class="input-form-100 gofwd" value=""></td>
                              <td class="mn default"><!--数量--><input type="text" name="Quantity32" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(32,2)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center default"><!--単位--><input type="text" name="Unit32" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn default"><!--単価--><input type="text" name="UPrice32" class="input-form-70 gofwd" value="" onchange="DoDetailRecalc(32,1)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro default"><!--金額--><input type="text" name="Price32" class="input-form-70 gofwd" value="" readonly></td>
                              <td class="default"><!--備考--><input type="text" name="Remark32" class="input-form-100 gofwd" value=""></td>
                              <td class="mn ro material"><!--材料数量--><input type="text" name="ZaiQuantity32" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center material"><!--材料単位--><input type="text" name="ZaiUnit32" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn material"><!--材料単価--><input type="text" name="ZaiUPrice32" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(32,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="right ro material"><!--材料金額--><input type="text" name="ZaiPrice32" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro process"><!--加工数量--><input type="text" name="KakouQuantity32" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center process"><!--加工単位--><input type="text" name="KakouUnit32" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn process"><!--加工単価--><input type="text" name="KakouUPrice32" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(32,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro process"><!--加工金額--><input type="text" name="KakouPrice32" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro construct"><!--施工数量--><input type="text" name="SekouQuantity32" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center construct"><!--施工単位--><input type="text" name="SekouUnit32" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn construct"><!--施工単価--><input type="text" name="SekouUPrice32" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(32,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro construct"><!--施工金額--><input type="text" name="SekouPrice32" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro cost"><!--経費数量--><input type="text" name="CostQuantity32" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center cost"><!--経費単位--><input type="text" name="CostUnit32" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn cost"><!--経費単価--><input type="text" name="CostUPrice32" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(32,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro cost"><!--経費金額--><input type="text" name="CostPrice32" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="center cost-only">                                <a class="cost hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center material-only">                                <a class="material hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center process-only">                                <a class="process hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center construct-only">                                <a class="construct hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                            </tr>
                            <tr>
                              <td class="check common">
                                <label>
                                  <input type="checkbox" name="chkrow_33" id="chkrow_33" class="chkrow" value="33">
                                </label>
                              </td>
                              <td class="mn-td common"><!--行番号-->
                                33
                                <input type="hidden" name="LargeCateID33" value="0">
                                <input type="hidden" name="TypeID33" value="0">
                                <input type="hidden" name="ZaiContract33" value="0">
                                <input type="hidden" name="KakouContract33" value="0">
                                <input type="hidden" name="SekouContract33" value="0">
                                <input type="hidden" name="CostContract33" value="0">
                              </td>
                              <td class="center common"><!--行明細ボタン--><input type="button" id="id_Row33" class="open-detail-dialog" value="行明細" data-target="modal-dialog-void"></td>
                              <td class="common"><!--見出-->
                                <input type="text" name="Heading33" class="input-form-100 gofwd" value="" list="cboHeadingList">
                              </td>
                              <td class="common"><!--名称--><input type="text" name="ZaiName33" class="input-form-100 gofwd" value=""></td>
                              <td class="common"><!--材質--><input type="text" name="Material33" class="input-form-100 gofwd" value=""></td>
                              <td class="common"><!--寸法--><input type="text" name="Size33" class="input-form-100 gofwd" value=""></td>
                              <td class="mn default"><!--数量--><input type="text" name="Quantity33" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(33,2)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center default"><!--単位--><input type="text" name="Unit33" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn default"><!--単価--><input type="text" name="UPrice33" class="input-form-70 gofwd" value="" onchange="DoDetailRecalc(33,1)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro default"><!--金額--><input type="text" name="Price33" class="input-form-70 gofwd" value="" readonly></td>
                              <td class="default"><!--備考--><input type="text" name="Remark33" class="input-form-100 gofwd" value=""></td>
                              <td class="mn ro material"><!--材料数量--><input type="text" name="ZaiQuantity33" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center material"><!--材料単位--><input type="text" name="ZaiUnit33" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn material"><!--材料単価--><input type="text" name="ZaiUPrice33" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(33,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="right ro material"><!--材料金額--><input type="text" name="ZaiPrice33" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro process"><!--加工数量--><input type="text" name="KakouQuantity33" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center process"><!--加工単位--><input type="text" name="KakouUnit33" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn process"><!--加工単価--><input type="text" name="KakouUPrice33" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(33,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro process"><!--加工金額--><input type="text" name="KakouPrice33" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro construct"><!--施工数量--><input type="text" name="SekouQuantity33" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center construct"><!--施工単位--><input type="text" name="SekouUnit33" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn construct"><!--施工単価--><input type="text" name="SekouUPrice33" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(33,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro construct"><!--施工金額--><input type="text" name="SekouPrice33" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro cost"><!--経費数量--><input type="text" name="CostQuantity33" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center cost"><!--経費単位--><input type="text" name="CostUnit33" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn cost"><!--経費単価--><input type="text" name="CostUPrice33" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(33,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro cost"><!--経費金額--><input type="text" name="CostPrice33" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="center cost-only">                                <a class="cost hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center material-only">                                <a class="material hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center process-only">                                <a class="process hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center construct-only">                                <a class="construct hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                            </tr>
                            <tr>
                              <td class="check common">
                                <label>
                                  <input type="checkbox" name="chkrow_34" id="chkrow_34" class="chkrow" value="34">
                                </label>
                              </td>
                              <td class="mn-td common"><!--行番号-->
                                34
                                <input type="hidden" name="LargeCateID34" value="0">
                                <input type="hidden" name="TypeID34" value="0">
                                <input type="hidden" name="ZaiContract34" value="0">
                                <input type="hidden" name="KakouContract34" value="0">
                                <input type="hidden" name="SekouContract34" value="0">
                                <input type="hidden" name="CostContract34" value="0">
                              </td>
                              <td class="center common"><!--行明細ボタン--><input type="button" id="id_Row34" class="open-detail-dialog" value="行明細" data-target="modal-dialog-void"></td>
                              <td class="common"><!--見出-->
                                <input type="text" name="Heading34" class="input-form-100 gofwd" value="" list="cboHeadingList">
                              </td>
                              <td class="common"><!--名称--><input type="text" name="ZaiName34" class="input-form-100 gofwd" value=""></td>
                              <td class="common"><!--材質--><input type="text" name="Material34" class="input-form-100 gofwd" value=""></td>
                              <td class="common"><!--寸法--><input type="text" name="Size34" class="input-form-100 gofwd" value=""></td>
                              <td class="mn default"><!--数量--><input type="text" name="Quantity34" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(34,2)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center default"><!--単位--><input type="text" name="Unit34" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn default"><!--単価--><input type="text" name="UPrice34" class="input-form-70 gofwd" value="" onchange="DoDetailRecalc(34,1)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro default"><!--金額--><input type="text" name="Price34" class="input-form-70 gofwd" value="" readonly></td>
                              <td class="default"><!--備考--><input type="text" name="Remark34" class="input-form-100 gofwd" value=""></td>
                              <td class="mn ro material"><!--材料数量--><input type="text" name="ZaiQuantity34" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center material"><!--材料単位--><input type="text" name="ZaiUnit34" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn material"><!--材料単価--><input type="text" name="ZaiUPrice34" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(34,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="right ro material"><!--材料金額--><input type="text" name="ZaiPrice34" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro process"><!--加工数量--><input type="text" name="KakouQuantity34" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center process"><!--加工単位--><input type="text" name="KakouUnit34" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn process"><!--加工単価--><input type="text" name="KakouUPrice34" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(34,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro process"><!--加工金額--><input type="text" name="KakouPrice34" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro construct"><!--施工数量--><input type="text" name="SekouQuantity34" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center construct"><!--施工単位--><input type="text" name="SekouUnit34" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn construct"><!--施工単価--><input type="text" name="SekouUPrice34" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(34,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro construct"><!--施工金額--><input type="text" name="SekouPrice34" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro cost"><!--経費数量--><input type="text" name="CostQuantity34" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center cost"><!--経費単位--><input type="text" name="CostUnit34" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn cost"><!--経費単価--><input type="text" name="CostUPrice34" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(34,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro cost"><!--経費金額--><input type="text" name="CostPrice34" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="center cost-only">                                <a class="cost hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center material-only">                                <a class="material hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center process-only">                                <a class="process hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center construct-only">                                <a class="construct hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                            </tr>
                            <tr>
                              <td class="check common">
                                <label>
                                  <input type="checkbox" name="chkrow_35" id="chkrow_35" class="chkrow" value="35">
                                </label>
                              </td>
                              <td class="mn-td common"><!--行番号-->
                                35
                                <input type="hidden" name="LargeCateID35" value="0">
                                <input type="hidden" name="TypeID35" value="0">
                                <input type="hidden" name="ZaiContract35" value="0">
                                <input type="hidden" name="KakouContract35" value="0">
                                <input type="hidden" name="SekouContract35" value="0">
                                <input type="hidden" name="CostContract35" value="0">
                              </td>
                              <td class="center common"><!--行明細ボタン--><input type="button" id="id_Row35" class="open-detail-dialog" value="行明細" data-target="modal-dialog-void"></td>
                              <td class="common"><!--見出-->
                                <input type="text" name="Heading35" class="input-form-100 gofwd" value="" list="cboHeadingList">
                              </td>
                              <td class="common"><!--名称--><input type="text" name="ZaiName35" class="input-form-100 gofwd" value=""></td>
                              <td class="common"><!--材質--><input type="text" name="Material35" class="input-form-100 gofwd" value=""></td>
                              <td class="common"><!--寸法--><input type="text" name="Size35" class="input-form-100 gofwd" value=""></td>
                              <td class="mn default"><!--数量--><input type="text" name="Quantity35" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(35,2)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center default"><!--単位--><input type="text" name="Unit35" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn default"><!--単価--><input type="text" name="UPrice35" class="input-form-70 gofwd" value="" onchange="DoDetailRecalc(35,1)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro default"><!--金額--><input type="text" name="Price35" class="input-form-70 gofwd" value="" readonly></td>
                              <td class="default"><!--備考--><input type="text" name="Remark35" class="input-form-100 gofwd" value=""></td>
                              <td class="mn ro material"><!--材料数量--><input type="text" name="ZaiQuantity35" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center material"><!--材料単位--><input type="text" name="ZaiUnit35" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn material"><!--材料単価--><input type="text" name="ZaiUPrice35" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(35,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="right ro material"><!--材料金額--><input type="text" name="ZaiPrice35" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro process"><!--加工数量--><input type="text" name="KakouQuantity35" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center process"><!--加工単位--><input type="text" name="KakouUnit35" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn process"><!--加工単価--><input type="text" name="KakouUPrice35" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(35,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro process"><!--加工金額--><input type="text" name="KakouPrice35" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro construct"><!--施工数量--><input type="text" name="SekouQuantity35" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center construct"><!--施工単位--><input type="text" name="SekouUnit35" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn construct"><!--施工単価--><input type="text" name="SekouUPrice35" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(35,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro construct"><!--施工金額--><input type="text" name="SekouPrice35" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro cost"><!--経費数量--><input type="text" name="CostQuantity35" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center cost"><!--経費単位--><input type="text" name="CostUnit35" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn cost"><!--経費単価--><input type="text" name="CostUPrice35" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(35,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro cost"><!--経費金額--><input type="text" name="CostPrice35" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="center cost-only">                                <a class="cost hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center material-only">                                <a class="material hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center process-only">                                <a class="process hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center construct-only">                                <a class="construct hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                            </tr>
                            <tr>
                              <td class="check common">
                                <label>
                                  <input type="checkbox" name="chkrow_36" id="chkrow_36" class="chkrow" value="36">
                                </label>
                              </td>
                              <td class="mn-td common"><!--行番号-->
                                36
                                <input type="hidden" name="LargeCateID36" value="0">
                                <input type="hidden" name="TypeID36" value="0">
                                <input type="hidden" name="ZaiContract36" value="0">
                                <input type="hidden" name="KakouContract36" value="0">
                                <input type="hidden" name="SekouContract36" value="0">
                                <input type="hidden" name="CostContract36" value="0">
                              </td>
                              <td class="center common"><!--行明細ボタン--><input type="button" id="id_Row36" class="open-detail-dialog" value="行明細" data-target="modal-dialog-void"></td>
                              <td class="common"><!--見出-->
                                <input type="text" name="Heading36" class="input-form-100 gofwd" value="" list="cboHeadingList">
                              </td>
                              <td class="common"><!--名称--><input type="text" name="ZaiName36" class="input-form-100 gofwd" value=""></td>
                              <td class="common"><!--材質--><input type="text" name="Material36" class="input-form-100 gofwd" value=""></td>
                              <td class="common"><!--寸法--><input type="text" name="Size36" class="input-form-100 gofwd" value=""></td>
                              <td class="mn default"><!--数量--><input type="text" name="Quantity36" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(36,2)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center default"><!--単位--><input type="text" name="Unit36" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn default"><!--単価--><input type="text" name="UPrice36" class="input-form-70 gofwd" value="" onchange="DoDetailRecalc(36,1)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro default"><!--金額--><input type="text" name="Price36" class="input-form-70 gofwd" value="" readonly></td>
                              <td class="default"><!--備考--><input type="text" name="Remark36" class="input-form-100 gofwd" value=""></td>
                              <td class="mn ro material"><!--材料数量--><input type="text" name="ZaiQuantity36" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center material"><!--材料単位--><input type="text" name="ZaiUnit36" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn material"><!--材料単価--><input type="text" name="ZaiUPrice36" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(36,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="right ro material"><!--材料金額--><input type="text" name="ZaiPrice36" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro process"><!--加工数量--><input type="text" name="KakouQuantity36" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center process"><!--加工単位--><input type="text" name="KakouUnit36" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn process"><!--加工単価--><input type="text" name="KakouUPrice36" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(36,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro process"><!--加工金額--><input type="text" name="KakouPrice36" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro construct"><!--施工数量--><input type="text" name="SekouQuantity36" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center construct"><!--施工単位--><input type="text" name="SekouUnit36" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn construct"><!--施工単価--><input type="text" name="SekouUPrice36" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(36,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro construct"><!--施工金額--><input type="text" name="SekouPrice36" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro cost"><!--経費数量--><input type="text" name="CostQuantity36" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center cost"><!--経費単位--><input type="text" name="CostUnit36" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn cost"><!--経費単価--><input type="text" name="CostUPrice36" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(36,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro cost"><!--経費金額--><input type="text" name="CostPrice36" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="center cost-only">                                <a class="cost hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center material-only">                                <a class="material hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center process-only">                                <a class="process hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center construct-only">                                <a class="construct hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                            </tr>
                            <tr>
                              <td class="check common">
                                <label>
                                  <input type="checkbox" name="chkrow_37" id="chkrow_37" class="chkrow" value="37">
                                </label>
                              </td>
                              <td class="mn-td common"><!--行番号-->
                                37
                                <input type="hidden" name="LargeCateID37" value="0">
                                <input type="hidden" name="TypeID37" value="0">
                                <input type="hidden" name="ZaiContract37" value="0">
                                <input type="hidden" name="KakouContract37" value="0">
                                <input type="hidden" name="SekouContract37" value="0">
                                <input type="hidden" name="CostContract37" value="0">
                              </td>
                              <td class="center common"><!--行明細ボタン--><input type="button" id="id_Row37" class="open-detail-dialog" value="行明細" data-target="modal-dialog-void"></td>
                              <td class="common"><!--見出-->
                                <input type="text" name="Heading37" class="input-form-100 gofwd" value="" list="cboHeadingList">
                              </td>
                              <td class="common"><!--名称--><input type="text" name="ZaiName37" class="input-form-100 gofwd" value=""></td>
                              <td class="common"><!--材質--><input type="text" name="Material37" class="input-form-100 gofwd" value=""></td>
                              <td class="common"><!--寸法--><input type="text" name="Size37" class="input-form-100 gofwd" value=""></td>
                              <td class="mn default"><!--数量--><input type="text" name="Quantity37" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(37,2)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center default"><!--単位--><input type="text" name="Unit37" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn default"><!--単価--><input type="text" name="UPrice37" class="input-form-70 gofwd" value="" onchange="DoDetailRecalc(37,1)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro default"><!--金額--><input type="text" name="Price37" class="input-form-70 gofwd" value="" readonly></td>
                              <td class="default"><!--備考--><input type="text" name="Remark37" class="input-form-100 gofwd" value=""></td>
                              <td class="mn ro material"><!--材料数量--><input type="text" name="ZaiQuantity37" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center material"><!--材料単位--><input type="text" name="ZaiUnit37" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn material"><!--材料単価--><input type="text" name="ZaiUPrice37" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(37,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="right ro material"><!--材料金額--><input type="text" name="ZaiPrice37" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro process"><!--加工数量--><input type="text" name="KakouQuantity37" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center process"><!--加工単位--><input type="text" name="KakouUnit37" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn process"><!--加工単価--><input type="text" name="KakouUPrice37" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(37,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro process"><!--加工金額--><input type="text" name="KakouPrice37" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro construct"><!--施工数量--><input type="text" name="SekouQuantity37" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center construct"><!--施工単位--><input type="text" name="SekouUnit37" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn construct"><!--施工単価--><input type="text" name="SekouUPrice37" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(37,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro construct"><!--施工金額--><input type="text" name="SekouPrice37" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro cost"><!--経費数量--><input type="text" name="CostQuantity37" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center cost"><!--経費単位--><input type="text" name="CostUnit37" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn cost"><!--経費単価--><input type="text" name="CostUPrice37" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(37,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro cost"><!--経費金額--><input type="text" name="CostPrice37" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="center cost-only">                                <a class="cost hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center material-only">                                <a class="material hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center process-only">                                <a class="process hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center construct-only">                                <a class="construct hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                            </tr>
                            <tr>
                              <td class="check common">
                                <label>
                                  <input type="checkbox" name="chkrow_38" id="chkrow_38" class="chkrow" value="38">
                                </label>
                              </td>
                              <td class="mn-td common"><!--行番号-->
                                38
                                <input type="hidden" name="LargeCateID38" value="0">
                                <input type="hidden" name="TypeID38" value="0">
                                <input type="hidden" name="ZaiContract38" value="0">
                                <input type="hidden" name="KakouContract38" value="0">
                                <input type="hidden" name="SekouContract38" value="0">
                                <input type="hidden" name="CostContract38" value="0">
                              </td>
                              <td class="center common"><!--行明細ボタン--><input type="button" id="id_Row38" class="open-detail-dialog" value="行明細" data-target="modal-dialog-void"></td>
                              <td class="common"><!--見出-->
                                <input type="text" name="Heading38" class="input-form-100 gofwd" value="" list="cboHeadingList">
                              </td>
                              <td class="common"><!--名称--><input type="text" name="ZaiName38" class="input-form-100 gofwd" value=""></td>
                              <td class="common"><!--材質--><input type="text" name="Material38" class="input-form-100 gofwd" value=""></td>
                              <td class="common"><!--寸法--><input type="text" name="Size38" class="input-form-100 gofwd" value=""></td>
                              <td class="mn default"><!--数量--><input type="text" name="Quantity38" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(38,2)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center default"><!--単位--><input type="text" name="Unit38" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn default"><!--単価--><input type="text" name="UPrice38" class="input-form-70 gofwd" value="" onchange="DoDetailRecalc(38,1)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro default"><!--金額--><input type="text" name="Price38" class="input-form-70 gofwd" value="" readonly></td>
                              <td class="default"><!--備考--><input type="text" name="Remark38" class="input-form-100 gofwd" value=""></td>
                              <td class="mn ro material"><!--材料数量--><input type="text" name="ZaiQuantity38" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center material"><!--材料単位--><input type="text" name="ZaiUnit38" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn material"><!--材料単価--><input type="text" name="ZaiUPrice38" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(38,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="right ro material"><!--材料金額--><input type="text" name="ZaiPrice38" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro process"><!--加工数量--><input type="text" name="KakouQuantity38" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center process"><!--加工単位--><input type="text" name="KakouUnit38" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn process"><!--加工単価--><input type="text" name="KakouUPrice38" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(38,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro process"><!--加工金額--><input type="text" name="KakouPrice38" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro construct"><!--施工数量--><input type="text" name="SekouQuantity38" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center construct"><!--施工単位--><input type="text" name="SekouUnit38" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn construct"><!--施工単価--><input type="text" name="SekouUPrice38" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(38,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro construct"><!--施工金額--><input type="text" name="SekouPrice38" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro cost"><!--経費数量--><input type="text" name="CostQuantity38" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center cost"><!--経費単位--><input type="text" name="CostUnit38" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn cost"><!--経費単価--><input type="text" name="CostUPrice38" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(38,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro cost"><!--経費金額--><input type="text" name="CostPrice38" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="center cost-only">                                <a class="cost hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center material-only">                                <a class="material hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center process-only">                                <a class="process hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center construct-only">                                <a class="construct hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                            </tr>
                            <tr>
                              <td class="check common">
                                <label>
                                  <input type="checkbox" name="chkrow_39" id="chkrow_39" class="chkrow" value="39">
                                </label>
                              </td>
                              <td class="mn-td common"><!--行番号-->
                                39
                                <input type="hidden" name="LargeCateID39" value="0">
                                <input type="hidden" name="TypeID39" value="0">
                                <input type="hidden" name="ZaiContract39" value="0">
                                <input type="hidden" name="KakouContract39" value="0">
                                <input type="hidden" name="SekouContract39" value="0">
                                <input type="hidden" name="CostContract39" value="0">
                              </td>
                              <td class="center common"><!--行明細ボタン--><input type="button" id="id_Row39" class="open-detail-dialog" value="行明細" data-target="modal-dialog-void"></td>
                              <td class="common"><!--見出-->
                                <input type="text" name="Heading39" class="input-form-100 gofwd" value="" list="cboHeadingList">
                              </td>
                              <td class="common"><!--名称--><input type="text" name="ZaiName39" class="input-form-100 gofwd" value=""></td>
                              <td class="common"><!--材質--><input type="text" name="Material39" class="input-form-100 gofwd" value=""></td>
                              <td class="common"><!--寸法--><input type="text" name="Size39" class="input-form-100 gofwd" value=""></td>
                              <td class="mn default"><!--数量--><input type="text" name="Quantity39" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(39,2)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center default"><!--単位--><input type="text" name="Unit39" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn default"><!--単価--><input type="text" name="UPrice39" class="input-form-70 gofwd" value="" onchange="DoDetailRecalc(39,1)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro default"><!--金額--><input type="text" name="Price39" class="input-form-70 gofwd" value="" readonly></td>
                              <td class="default"><!--備考--><input type="text" name="Remark39" class="input-form-100 gofwd" value=""></td>
                              <td class="mn ro material"><!--材料数量--><input type="text" name="ZaiQuantity39" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center material"><!--材料単位--><input type="text" name="ZaiUnit39" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn material"><!--材料単価--><input type="text" name="ZaiUPrice39" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(39,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="right ro material"><!--材料金額--><input type="text" name="ZaiPrice39" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro process"><!--加工数量--><input type="text" name="KakouQuantity39" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center process"><!--加工単位--><input type="text" name="KakouUnit39" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn process"><!--加工単価--><input type="text" name="KakouUPrice39" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(39,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro process"><!--加工金額--><input type="text" name="KakouPrice39" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro construct"><!--施工数量--><input type="text" name="SekouQuantity39" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center construct"><!--施工単位--><input type="text" name="SekouUnit39" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn construct"><!--施工単価--><input type="text" name="SekouUPrice39" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(39,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro construct"><!--施工金額--><input type="text" name="SekouPrice39" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro cost"><!--経費数量--><input type="text" name="CostQuantity39" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center cost"><!--経費単位--><input type="text" name="CostUnit39" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn cost"><!--経費単価--><input type="text" name="CostUPrice39" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(39,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro cost"><!--経費金額--><input type="text" name="CostPrice39" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="center cost-only">                                <a class="cost hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center material-only">                                <a class="material hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center process-only">                                <a class="process hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center construct-only">                                <a class="construct hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                            </tr>
                            <tr>
                              <td class="check common">
                                <label>
                                  <input type="checkbox" name="chkrow_40" id="chkrow_40" class="chkrow" value="40">
                                </label>
                              </td>
                              <td class="mn-td common"><!--行番号-->
                                40
                                <input type="hidden" name="LargeCateID40" value="0">
                                <input type="hidden" name="TypeID40" value="0">
                                <input type="hidden" name="ZaiContract40" value="0">
                                <input type="hidden" name="KakouContract40" value="0">
                                <input type="hidden" name="SekouContract40" value="0">
                                <input type="hidden" name="CostContract40" value="0">
                              </td>
                              <td class="center common"><!--行明細ボタン--><input type="button" id="id_Row40" class="open-detail-dialog" value="行明細" data-target="modal-dialog-void"></td>
                              <td class="common"><!--見出-->
                                <input type="text" name="Heading40" class="input-form-100 gofwd" value="" list="cboHeadingList">
                              </td>
                              <td class="common"><!--名称--><input type="text" name="ZaiName40" class="input-form-100 gofwd" value=""></td>
                              <td class="common"><!--材質--><input type="text" name="Material40" class="input-form-100 gofwd" value=""></td>
                              <td class="common"><!--寸法--><input type="text" name="Size40" class="input-form-100 gofwd" value=""></td>
                              <td class="mn default"><!--数量--><input type="text" name="Quantity40" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(40,2)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center default"><!--単位--><input type="text" name="Unit40" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn default"><!--単価--><input type="text" name="UPrice40" class="input-form-70 gofwd" value="" onchange="DoDetailRecalc(40,1)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro default"><!--金額--><input type="text" name="Price40" class="input-form-70 gofwd" value="" readonly></td>
                              <td class="default"><!--備考--><input type="text" name="Remark40" class="input-form-100 gofwd" value=""></td>
                              <td class="mn ro material"><!--材料数量--><input type="text" name="ZaiQuantity40" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center material"><!--材料単位--><input type="text" name="ZaiUnit40" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn material"><!--材料単価--><input type="text" name="ZaiUPrice40" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(40,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="right ro material"><!--材料金額--><input type="text" name="ZaiPrice40" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro process"><!--加工数量--><input type="text" name="KakouQuantity40" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center process"><!--加工単位--><input type="text" name="KakouUnit40" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn process"><!--加工単価--><input type="text" name="KakouUPrice40" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(40,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro process"><!--加工金額--><input type="text" name="KakouPrice40" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro construct"><!--施工数量--><input type="text" name="SekouQuantity40" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center construct"><!--施工単位--><input type="text" name="SekouUnit40" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn construct"><!--施工単価--><input type="text" name="SekouUPrice40" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(40,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro construct"><!--施工金額--><input type="text" name="SekouPrice40" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro cost"><!--経費数量--><input type="text" name="CostQuantity40" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center cost"><!--経費単位--><input type="text" name="CostUnit40" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn cost"><!--経費単価--><input type="text" name="CostUPrice40" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(40,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro cost"><!--経費金額--><input type="text" name="CostPrice40" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="center cost-only">                                <a class="cost hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center material-only">                                <a class="material hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center process-only">                                <a class="process hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center construct-only">                                <a class="construct hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                            </tr>
                            <tr>
                              <td class="check common">
                                <label>
                                  <input type="checkbox" name="chkrow_41" id="chkrow_41" class="chkrow" value="41">
                                </label>
                              </td>
                              <td class="mn-td common"><!--行番号-->
                                41
                                <input type="hidden" name="LargeCateID41" value="0">
                                <input type="hidden" name="TypeID41" value="0">
                                <input type="hidden" name="ZaiContract41" value="0">
                                <input type="hidden" name="KakouContract41" value="0">
                                <input type="hidden" name="SekouContract41" value="0">
                                <input type="hidden" name="CostContract41" value="0">
                              </td>
                              <td class="center common"><!--行明細ボタン--><input type="button" id="id_Row41" class="open-detail-dialog" value="行明細" data-target="modal-dialog-void"></td>
                              <td class="common"><!--見出-->
                                <input type="text" name="Heading41" class="input-form-100 gofwd" value="" list="cboHeadingList">
                              </td>
                              <td class="common"><!--名称--><input type="text" name="ZaiName41" class="input-form-100 gofwd" value=""></td>
                              <td class="common"><!--材質--><input type="text" name="Material41" class="input-form-100 gofwd" value=""></td>
                              <td class="common"><!--寸法--><input type="text" name="Size41" class="input-form-100 gofwd" value=""></td>
                              <td class="mn default"><!--数量--><input type="text" name="Quantity41" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(41,2)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center default"><!--単位--><input type="text" name="Unit41" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn default"><!--単価--><input type="text" name="UPrice41" class="input-form-70 gofwd" value="" onchange="DoDetailRecalc(41,1)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro default"><!--金額--><input type="text" name="Price41" class="input-form-70 gofwd" value="" readonly></td>
                              <td class="default"><!--備考--><input type="text" name="Remark41" class="input-form-100 gofwd" value=""></td>
                              <td class="mn ro material"><!--材料数量--><input type="text" name="ZaiQuantity41" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center material"><!--材料単位--><input type="text" name="ZaiUnit41" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn material"><!--材料単価--><input type="text" name="ZaiUPrice41" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(41,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="right ro material"><!--材料金額--><input type="text" name="ZaiPrice41" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro process"><!--加工数量--><input type="text" name="KakouQuantity41" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center process"><!--加工単位--><input type="text" name="KakouUnit41" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn process"><!--加工単価--><input type="text" name="KakouUPrice41" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(41,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro process"><!--加工金額--><input type="text" name="KakouPrice41" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro construct"><!--施工数量--><input type="text" name="SekouQuantity41" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center construct"><!--施工単位--><input type="text" name="SekouUnit41" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn construct"><!--施工単価--><input type="text" name="SekouUPrice41" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(41,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro construct"><!--施工金額--><input type="text" name="SekouPrice41" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro cost"><!--経費数量--><input type="text" name="CostQuantity41" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center cost"><!--経費単位--><input type="text" name="CostUnit41" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn cost"><!--経費単価--><input type="text" name="CostUPrice41" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(41,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro cost"><!--経費金額--><input type="text" name="CostPrice41" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="center cost-only">                                <a class="cost hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center material-only">                                <a class="material hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center process-only">                                <a class="process hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center construct-only">                                <a class="construct hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                            </tr>
                            <tr>
                              <td class="check common">
                                <label>
                                  <input type="checkbox" name="chkrow_42" id="chkrow_42" class="chkrow" value="42">
                                </label>
                              </td>
                              <td class="mn-td common"><!--行番号-->
                                42
                                <input type="hidden" name="LargeCateID42" value="0">
                                <input type="hidden" name="TypeID42" value="0">
                                <input type="hidden" name="ZaiContract42" value="0">
                                <input type="hidden" name="KakouContract42" value="0">
                                <input type="hidden" name="SekouContract42" value="0">
                                <input type="hidden" name="CostContract42" value="0">
                              </td>
                              <td class="center common"><!--行明細ボタン--><input type="button" id="id_Row42" class="open-detail-dialog" value="行明細" data-target="modal-dialog-void"></td>
                              <td class="common"><!--見出-->
                                <input type="text" name="Heading42" class="input-form-100 gofwd" value="" list="cboHeadingList">
                              </td>
                              <td class="common"><!--名称--><input type="text" name="ZaiName42" class="input-form-100 gofwd" value=""></td>
                              <td class="common"><!--材質--><input type="text" name="Material42" class="input-form-100 gofwd" value=""></td>
                              <td class="common"><!--寸法--><input type="text" name="Size42" class="input-form-100 gofwd" value=""></td>
                              <td class="mn default"><!--数量--><input type="text" name="Quantity42" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(42,2)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center default"><!--単位--><input type="text" name="Unit42" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn default"><!--単価--><input type="text" name="UPrice42" class="input-form-70 gofwd" value="" onchange="DoDetailRecalc(42,1)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro default"><!--金額--><input type="text" name="Price42" class="input-form-70 gofwd" value="" readonly></td>
                              <td class="default"><!--備考--><input type="text" name="Remark42" class="input-form-100 gofwd" value=""></td>
                              <td class="mn ro material"><!--材料数量--><input type="text" name="ZaiQuantity42" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center material"><!--材料単位--><input type="text" name="ZaiUnit42" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn material"><!--材料単価--><input type="text" name="ZaiUPrice42" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(42,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="right ro material"><!--材料金額--><input type="text" name="ZaiPrice42" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro process"><!--加工数量--><input type="text" name="KakouQuantity42" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center process"><!--加工単位--><input type="text" name="KakouUnit42" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn process"><!--加工単価--><input type="text" name="KakouUPrice42" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(42,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro process"><!--加工金額--><input type="text" name="KakouPrice42" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro construct"><!--施工数量--><input type="text" name="SekouQuantity42" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center construct"><!--施工単位--><input type="text" name="SekouUnit42" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn construct"><!--施工単価--><input type="text" name="SekouUPrice42" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(42,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro construct"><!--施工金額--><input type="text" name="SekouPrice42" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro cost"><!--経費数量--><input type="text" name="CostQuantity42" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center cost"><!--経費単位--><input type="text" name="CostUnit42" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn cost"><!--経費単価--><input type="text" name="CostUPrice42" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(42,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro cost"><!--経費金額--><input type="text" name="CostPrice42" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="center cost-only">                                <a class="cost hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center material-only">                                <a class="material hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center process-only">                                <a class="process hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center construct-only">                                <a class="construct hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                            </tr>
                            <tr>
                              <td class="check common">
                                <label>
                                  <input type="checkbox" name="chkrow_43" id="chkrow_43" class="chkrow" value="43">
                                </label>
                              </td>
                              <td class="mn-td common"><!--行番号-->
                                43
                                <input type="hidden" name="LargeCateID43" value="0">
                                <input type="hidden" name="TypeID43" value="0">
                                <input type="hidden" name="ZaiContract43" value="0">
                                <input type="hidden" name="KakouContract43" value="0">
                                <input type="hidden" name="SekouContract43" value="0">
                                <input type="hidden" name="CostContract43" value="0">
                              </td>
                              <td class="center common"><!--行明細ボタン--><input type="button" id="id_Row43" class="open-detail-dialog" value="行明細" data-target="modal-dialog-void"></td>
                              <td class="common"><!--見出-->

                                <input type="text" name="Heading43" class="input-form-100 gofwd" value="" list="cboHeadingList">
                              </td>
                              <td class="common"><!--名称--><input type="text" name="ZaiName43" class="input-form-100 gofwd" value=""></td>
                              <td class="common"><!--材質--><input type="text" name="Material43" class="input-form-100 gofwd" value=""></td>
                              <td class="common"><!--寸法--><input type="text" name="Size43" class="input-form-100 gofwd" value=""></td>
                              <td class="mn default"><!--数量--><input type="text" name="Quantity43" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(43,2)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center default"><!--単位--><input type="text" name="Unit43" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn default"><!--単価--><input type="text" name="UPrice43" class="input-form-70 gofwd" value="" onchange="DoDetailRecalc(43,1)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro default"><!--金額--><input type="text" name="Price43" class="input-form-70 gofwd" value="" readonly></td>
                              <td class="default"><!--備考--><input type="text" name="Remark43" class="input-form-100 gofwd" value=""></td>
                              <td class="mn ro material"><!--材料数量--><input type="text" name="ZaiQuantity43" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center material"><!--材料単位--><input type="text" name="ZaiUnit43" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn material"><!--材料単価--><input type="text" name="ZaiUPrice43" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(43,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="right ro material"><!--材料金額--><input type="text" name="ZaiPrice43" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro process"><!--加工数量--><input type="text" name="KakouQuantity43" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center process"><!--加工単位--><input type="text" name="KakouUnit43" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn process"><!--加工単価--><input type="text" name="KakouUPrice43" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(43,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro process"><!--加工金額--><input type="text" name="KakouPrice43" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro construct"><!--施工数量--><input type="text" name="SekouQuantity43" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center construct"><!--施工単位--><input type="text" name="SekouUnit43" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn construct"><!--施工単価--><input type="text" name="SekouUPrice43" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(43,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro construct"><!--施工金額--><input type="text" name="SekouPrice43" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro cost"><!--経費数量--><input type="text" name="CostQuantity43" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center cost"><!--経費単位--><input type="text" name="CostUnit43" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn cost"><!--経費単価--><input type="text" name="CostUPrice43" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(43,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro cost"><!--経費金額--><input type="text" name="CostPrice43" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="center cost-only">                                <a class="cost hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center material-only">                                <a class="material hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center process-only">                                <a class="process hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center construct-only">                                <a class="construct hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                            </tr>
                            <tr>
                              <td class="check common">
                                <label>
                                  <input type="checkbox" name="chkrow_44" id="chkrow_44" class="chkrow" value="44">
                                </label>
                              </td>
                              <td class="mn-td common"><!--行番号-->
                                44
                                <input type="hidden" name="LargeCateID44" value="0">
                                <input type="hidden" name="TypeID44" value="0">
                                <input type="hidden" name="ZaiContract44" value="0">
                                <input type="hidden" name="KakouContract44" value="0">
                                <input type="hidden" name="SekouContract44" value="0">
                                <input type="hidden" name="CostContract44" value="0">
                              </td>
                              <td class="center common"><!--行明細ボタン--><input type="button" id="id_Row44" class="open-detail-dialog" value="行明細" data-target="modal-dialog-void"></td>
                              <td class="common"><!--見出-->
                                <input type="text" name="Heading44" class="input-form-100 gofwd" value="" list="cboHeadingList">
                              </td>
                              <td class="common"><!--名称--><input type="text" name="ZaiName44" class="input-form-100 gofwd" value=""></td>
                              <td class="common"><!--材質--><input type="text" name="Material44" class="input-form-100 gofwd" value=""></td>
                              <td class="common"><!--寸法--><input type="text" name="Size44" class="input-form-100 gofwd" value=""></td>
                              <td class="mn default"><!--数量--><input type="text" name="Quantity44" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(44,2)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center default"><!--単位--><input type="text" name="Unit44" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn default"><!--単価--><input type="text" name="UPrice44" class="input-form-70 gofwd" value="" onchange="DoDetailRecalc(44,1)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro default"><!--金額--><input type="text" name="Price44" class="input-form-70 gofwd" value="" readonly></td>
                              <td class="default"><!--備考--><input type="text" name="Remark44" class="input-form-100 gofwd" value=""></td>
                              <td class="mn ro material"><!--材料数量--><input type="text" name="ZaiQuantity44" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center material"><!--材料単位--><input type="text" name="ZaiUnit44" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn material"><!--材料単価--><input type="text" name="ZaiUPrice44" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(44,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="right ro material"><!--材料金額--><input type="text" name="ZaiPrice44" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro process"><!--加工数量--><input type="text" name="KakouQuantity44" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center process"><!--加工単位--><input type="text" name="KakouUnit44" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn process"><!--加工単価--><input type="text" name="KakouUPrice44" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(44,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro process"><!--加工金額--><input type="text" name="KakouPrice44" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro construct"><!--施工数量--><input type="text" name="SekouQuantity44" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center construct"><!--施工単位--><input type="text" name="SekouUnit44" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn construct"><!--施工単価--><input type="text" name="SekouUPrice44" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(44,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro construct"><!--施工金額--><input type="text" name="SekouPrice44" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro cost"><!--経費数量--><input type="text" name="CostQuantity44" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center cost"><!--経費単位--><input type="text" name="CostUnit44" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn cost"><!--経費単価--><input type="text" name="CostUPrice44" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(44,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro cost"><!--経費金額--><input type="text" name="CostPrice44" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="center cost-only">                                <a class="cost hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center material-only">                                <a class="material hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center process-only">                                <a class="process hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center construct-only">                                <a class="construct hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                            </tr>
                            <tr>
                              <td class="check common">
                                <label>
                                  <input type="checkbox" name="chkrow_45" id="chkrow_45" class="chkrow" value="45">
                                </label>
                              </td>
                              <td class="mn-td common"><!--行番号-->
                                45
                                <input type="hidden" name="LargeCateID45" value="0">
                                <input type="hidden" name="TypeID45" value="0">
                                <input type="hidden" name="ZaiContract45" value="0">
                                <input type="hidden" name="KakouContract45" value="0">
                                <input type="hidden" name="SekouContract45" value="0">
                                <input type="hidden" name="CostContract45" value="0">
                              </td>
                              <td class="center common"><!--行明細ボタン--><input type="button" id="id_Row45" class="open-detail-dialog" value="行明細" data-target="modal-dialog-void"></td>
                              <td class="common"><!--見出-->
                                <input type="text" name="Heading45" class="input-form-100 gofwd" value="" list="cboHeadingList">
                              </td>
                              <td class="common"><!--名称--><input type="text" name="ZaiName45" class="input-form-100 gofwd" value=""></td>
                              <td class="common"><!--材質--><input type="text" name="Material45" class="input-form-100 gofwd" value=""></td>
                              <td class="common"><!--寸法--><input type="text" name="Size45" class="input-form-100 gofwd" value=""></td>
                              <td class="mn default"><!--数量--><input type="text" name="Quantity45" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(45,2)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center default"><!--単位--><input type="text" name="Unit45" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn default"><!--単価--><input type="text" name="UPrice45" class="input-form-70 gofwd" value="" onchange="DoDetailRecalc(45,1)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro default"><!--金額--><input type="text" name="Price45" class="input-form-70 gofwd" value="" readonly></td>
                              <td class="default"><!--備考--><input type="text" name="Remark45" class="input-form-100 gofwd" value=""></td>
                              <td class="mn ro material"><!--材料数量--><input type="text" name="ZaiQuantity45" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center material"><!--材料単位--><input type="text" name="ZaiUnit45" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn material"><!--材料単価--><input type="text" name="ZaiUPrice45" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(45,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="right ro material"><!--材料金額--><input type="text" name="ZaiPrice45" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro process"><!--加工数量--><input type="text" name="KakouQuantity45" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center process"><!--加工単位--><input type="text" name="KakouUnit45" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn process"><!--加工単価--><input type="text" name="KakouUPrice45" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(45,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro process"><!--加工金額--><input type="text" name="KakouPrice45" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro construct"><!--施工数量--><input type="text" name="SekouQuantity45" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center construct"><!--施工単位--><input type="text" name="SekouUnit45" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn construct"><!--施工単価--><input type="text" name="SekouUPrice45" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(45,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro construct"><!--施工金額--><input type="text" name="SekouPrice45" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro cost"><!--経費数量--><input type="text" name="CostQuantity45" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center cost"><!--経費単位--><input type="text" name="CostUnit45" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn cost"><!--経費単価--><input type="text" name="CostUPrice45" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(45,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro cost"><!--経費金額--><input type="text" name="CostPrice45" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="center cost-only">                                <a class="cost hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center material-only">                                <a class="material hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center process-only">                                <a class="process hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center construct-only">                                <a class="construct hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                            </tr>
                            <tr>
                              <td class="check common">
                                <label>
                                  <input type="checkbox" name="chkrow_46" id="chkrow_46" class="chkrow" value="46">
                                </label>
                              </td>
                              <td class="mn-td common"><!--行番号-->
                                46
                                <input type="hidden" name="LargeCateID46" value="0">
                                <input type="hidden" name="TypeID46" value="0">
                                <input type="hidden" name="ZaiContract46" value="0">
                                <input type="hidden" name="KakouContract46" value="0">
                                <input type="hidden" name="SekouContract46" value="0">
                                <input type="hidden" name="CostContract46" value="0">
                              </td>
                              <td class="center common"><!--行明細ボタン--><input type="button" id="id_Row46" class="open-detail-dialog" value="行明細" data-target="modal-dialog-void"></td>
                              <td class="common"><!--見出-->
                                <input type="text" name="Heading46" class="input-form-100 gofwd" value="" list="cboHeadingList">
                              </td>
                              <td class="common"><!--名称--><input type="text" name="ZaiName46" class="input-form-100 gofwd" value=""></td>
                              <td class="common"><!--材質--><input type="text" name="Material46" class="input-form-100 gofwd" value=""></td>
                              <td class="common"><!--寸法--><input type="text" name="Size46" class="input-form-100 gofwd" value=""></td>
                              <td class="mn default"><!--数量--><input type="text" name="Quantity46" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(46,2)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center default"><!--単位--><input type="text" name="Unit46" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn default"><!--単価--><input type="text" name="UPrice46" class="input-form-70 gofwd" value="" onchange="DoDetailRecalc(46,1)" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro default"><!--金額--><input type="text" name="Price46" class="input-form-70 gofwd" value="" readonly></td>
                              <td class="default"><!--備考--><input type="text" name="Remark46" class="input-form-100 gofwd" value=""></td>
                              <td class="mn ro material"><!--材料数量--><input type="text" name="ZaiQuantity46" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center material"><!--材料単位--><input type="text" name="ZaiUnit46" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn material"><!--材料単価--><input type="text" name="ZaiUPrice46" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(46,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="right ro material"><!--材料金額--><input type="text" name="ZaiPrice46" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro process"><!--加工数量--><input type="text" name="KakouQuantity46" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center process"><!--加工単位--><input type="text" name="KakouUnit46" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn process"><!--加工単価--><input type="text" name="KakouUPrice46" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(46,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro process"><!--加工金額--><input type="text" name="KakouPrice46" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro construct"><!--施工数量--><input type="text" name="SekouQuantity46" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center construct"><!--施工単位--><input type="text" name="SekouUnit46" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn construct"><!--施工単価--><input type="text" name="SekouUPrice46" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(46,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro construct"><!--施工金額--><input type="text" name="SekouPrice46" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="mn ro cost"><!--経費数量--><input type="text" name="CostQuantity46" class="input-form-50 gofwd" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="center cost"><!--経費単位--><input type="text" name="CostUnit46" class="input-form-20 gofwd" value="" list="cboUnitList"></td>
                              <td class="mn cost"><!--経費単価--><input type="text" name="CostUPrice46" class="input-form-50 gofwd" value="" onchange="DoDetailRecalc(46,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
                              <td class="mn ro cost"><!--経費金額--><input type="text" name="CostPrice46" class="input-form-50 gofwd" value="" readonly></td>
                              <td class="center cost-only">                                <a class="cost hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center material-only">                                <a class="material hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center process-only">                                <a class="process hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                              <td class="center construct-only">                                <a class="construct hide" onclick="return DoContractorSelector(this);">業者選択</a>
                              </td>
                            </tr>
                          </tbody>
                        </table><!-- #tbl2 -->
                        <div id="cboListWrapper" class="hide">
                          <datalist id="cboHeadingList">
                            <datalist id="cboHeadingList">
                              <option value="暖房設備工事"></option>
                              <option value="換気設備工事"></option>
                              <option value="暖冷房換気工事"></option>
                              <option value="空調設備工事"></option>
                              <option value="床暖房設備工事"></option>
                              <option value="その他"></option>
                              <option value="冷房設備工事"></option>
                              <option value="商品"></option>
                          </datalist><!-- #cboHeadingList -->
                        </div><!-- #cboListWrapper -->
                      </div><!-- .dashuboard-m -->
                    </div><!-- .mitsumori-table -->
                  </div><!-- .mitsumori -->
                </div><!-- #tabs-0 -->
              </div><!-- #tabs -->
            </div><!-- .pseudo-tab-tables -->
          </div><!-- #detail-modal-dialog-inner -->
        </form><!-- #form_main -->
      </div><!-- #container-inner -->
    </div><!-- #container -->
    <form name="form_options" id="form_options">
      <input type="hidden" name="Op1" value="0">
      <input type="hidden" name="Op2" value="0">
      <input type="hidden" name="Op3" value="0">
      <input type="hidden" name="Op4" value="">
      <input type="hidden" name="Op5" value="0">
      <input type="hidden" name="Op6" value="0">
      <input type="hidden" name="Op7" value="0">
    </form><!-- #form_options -->

    <!-- ▼明細行テンプレート▼ -->
    <div id="template" class="hide">
      <table id="tbl-template">
        <tbody>
          <tr><!-- #NNNNN -->
            <td class="check common">
              <label>
                <input type="checkbox" name="chkrow_NNNNN" id="chkrow_NNNNN" class="chkrow-tmpl" value="NNNNN">
              </label>
            </td>
            <td class="mn-td common">              NNNNN
              <input type="hidden" name="LargeCateIDNNNNN" value="">
              <input type="hidden" name="TypeIDNNNNN" value="">
              <input type="hidden" name="ZaiContractNNNNN" value="">
              <input type="hidden" name="KakouContractNNNNN" value="">
              <input type="hidden" name="SekouContractNNNNN" value="">
              <input type="hidden" name="CostContractNNNNN" value="">
            </td>
            <td class="center common"><input type="button" id="id_RowNNNNN" class="open-detail-dialog-tmpl" value="行明細" data-target="modal-dialog-void"></td>
            <td class="common">              <input type="text" name="HeadingNNNNN" class="input-form-100 gofwdx" value="" list="cboHeadingList">
            </td>
            <td class="common"><input type="text" name="ZaiNameNNNNN" class="input-form-100 gofwdx" value=""></td>
            <td class="common"><input type="text" name="MaterialNNNNN" class="input-form-100 gofwdx" value=""></td>
            <td class="common"><input type="text" name="SizeNNNNN" class="input-form-100 gofwdx" value=""></td>
            <td class="mn default"><input type="text" name="QuantityNNNNN" class="input-form-50 gofwdx" value="" onchange="DoDetailRecalc(NNNNN,2);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
            <td class="center default"><input type="text" name="UnitNNNNN" class="input-form-20 gofwdx" value="" list="cboUnitList"></td>
            <td class="mn default"><input type="text" name="UPriceNNNNN" class="input-form-70 gofwdx" value="" onchange="DoDetailRecalc(NNNNN,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
            <td class="mn ro default"><input type="text" name="PriceNNNNN" class="input-form-70" value="" readonly></td>
            <td class="default"><input type="text" name="RemarkNNNNN" class="input-form-100 gofwdx" value=""></td>
            <td class="mn ro material"><input type="text" name="ZaiQuantityNNNNN" class="input-form-50 gofwdx" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
            <td class="center material"><input type="text" name="ZaiUnitNNNNN" class="input-form-20 gofwdx" value="" list="cboUnitList"></td>
            <td class="mn material"><input type="text" name="ZaiUPriceNNNNN" class="input-form-50 gofwdx" value="" onchange="DoDetailRecalc(NNNNN,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
            <td class="right ro material"><input type="text" name="ZaiPriceNNNNN" class="input-form-50" value="" readonly></td>
            <td class="mn ro process"><input type="text" name="KakouQuantityNNNNN" class="input-form-50 gofwdx" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
            <td class="center process"><input type="text" name="KakouUnitNNNNN" class="input-form-20 gofwdx" value="" list="cboUnitList"></td>
            <td class="mn process"><input type="text" name="KakouUPriceNNNNN" class="input-form-50 gofwdx" value="" onchange="DoDetailRecalc(NNNNN,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
            <td class="mn ro process"><input type="text" name="KakouPriceNNNNN" class="input-form-50" value="" readonly></td>
            <td class="mn ro construct"><input type="text" name="SekouQuantityNNNNN" class="input-form-50 gofwdx" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
            <td class="center construct"><input type="text" name="SekouUnitNNNNN" class="input-form-20 gofwdx" value="" list="cboUnitList"></td>
            <td class="mn construct"><input type="text" name="SekouUPriceNNNNN" class="input-form-50 gofwdx" value="" onchange="DoDetailRecalc(NNNNN,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
            <td class="mn ro construct"><input type="text" name="SekouPriceNNNNN" class="input-form-50" value="" readonly></td>
            <td class="mn ro cost"><input type="text" name="CostQuantityNNNNN" class="input-form-50 gofwdx" value="" onchange="DoRecalcByRowQuantity(this);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
            <td class="center cost"><input type="text" name="CostUnitNNNNN" class="input-form-20 gofwdx" value="" list="cboUnitList"></td>
            <td class="mn cost"><input type="text" name="CostUPriceNNNNN" class="input-form-50 gofwdx" value="" onchange="DoDetailRecalc(NNNNN,1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);"></td>
            <td class="mn ro cost"><input type="text" name="CostPriceNNNNN" class="input-form-50" value="" readonly></td>
            <td class="center cost-only">              <a class="cost hide" onclick="return DoContractorSelector(this);">業者選択</a>
            </td>
            <td class="center material-only">              <a class="material hide" onclick="return DoContractorSelector(this);">業者選択</a>
            </td>
            <td class="center process-only">              <a class="process hide" onclick="return DoContractorSelector(this);">業者選択</a>
            </td>
            <td class="center construct-only">              <a class="construct hide" onclick="return DoContractorSelector(this);">業者選択</a>
            </td>
          </tr><!-- #NNNNN -->
        </tbody>
      </table><!-- #tbl-template -->
    </div><!-- #template -->
    <!-- ▲明細行テンプレート▲ -->

  </div><!-- #wrapperInner -->
</div><!-- #wrapper -->

<!-- ▼行明細モーダルダイアログ▼ -->
<div id="detail-modal-dialog" class="modal-content" title="">
  <div id="detail-modal-dialog-inner">
    <form name="form_detail" id="form_detail" action="" method="post">
      <input type="hidden" name="CurRow" value="">

      <div class="input-cell2">
        <div class="head-menu">
          <span class="gyome-before"><input type="button" value="前へ" class="modal-backward"></span>
          <span class="gyome-after"><input type="button" value="次へ" class="modal-forward"></span>
          <span class="gyome-close"><input type="button" value="閉じる" class="modal-done"></span>
          <span class="how-to-cancel">※編集内容を破棄したい時は［ESC］キーを押してください。</span>
        </div><!-- .head-menu -->

        <div class="clear"><hr></div>

        <div id="tabs">
          <ul>
            <li><a href="#tabs-1">見出し入力</a></li>
            <li><a href="#tabs-2">行明細入力</a></li>
          </ul>

          <div id="tabs-1">
            <table id="table-tab1" border="0" cellspacing="0" cellpadding="0">
              <!-- tbody class="bk-green"></tbody -->
              <tbody class="bk-blue">
                <tr>
                  <th class="bk-green-th">見出</th>
                  <td colspan="3">
                    <input type="text" name="Heading" id="id_Heading" class="input-400" value="" list="cboHeadingList">
                  </td>
                </tr>
              </tbody><!-- .bk-blue -->
            </table><!-- #table-tab1 -->
          </div><!-- #tabs-1 -->

          <div id="tabs-2">
            <table id="table-tab2" border="0" cellspacing="0" cellpadding="0">
              <colgroup>
                <col width="80px">
                <col width="*">
                <col width="120px">
                <col width="250px">
              </colgroup>
              <tbody class="bk-blue">
                <tr>
                  <th class="bk-green-th">大分類</th>
                  <td colspan="3">
                    <select name="LargeCateID" id="detail_LargeCateID" class="gofwd" onchange="DoResetTypeOptions(this);">
                      <option value="0">未選択</option>
                      <option value="1">ボイラー</option>
                      <option value="4">ボイラー関連部材</option>
                      <option value="2">温水ルームヒーター</option>
                      <option value="3">FFストーブ</option>
                      <option value="5">森永パネル</option>
                      <option value="6">プルモパネル</option>
                      <option value="7">その他パネル</option>
                      <option value="8">ファンコンベクター</option>
                      <option value="9">床暖パネル</option>
                      <option value="10">オイルタンク</option>
                      <option value="11">関連資材</option>
                      <option value="12">工賃</option>
                      <option value="13">換気工賃</option>
                      <option value="14">浴室暖房換気乾燥機</option>
                      <option value="15">換気システム</option>
                      <option value="16">換気システム関連部材</option>
                      <option value="17">暖冷房換気工事</option>
                      <option value="18">工賃(石井）</option>
                      <option value="19">蓄熱電気暖房機</option>
                      <option value="20">エコキュート</option>
                      <option value="21">空気清浄機</option>
                      <option value="22">除湿機</option>
                      <option value="23">加湿器</option>
                      <option value="24">エコノクール・ウェルエコ</option>
                      <option value="25">エアリゾート</option>
                      <option value="26">床下放熱器</option>
                      <option value="27">ルームドライヤー</option>
                      <option value="28">ホッとエコフロア</option>
                      <option value="29">電気温水器</option>
                      <option value="30">ミラクルミスト</option>
                      <option value="31">エアコン</option>
                      <option value="32">架台</option>
                      <option value="33">融雪</option>
                      <option value="34">ヒートポンプ</option>
                      <option value="35">ＢＦＣ</option>
                      <option value="36">その他商品</option>
                      <option value="37">工事費</option>
                      <option value="38">売上げ関連</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <th class="bk-green-th">種類</th>
                  <td colspan="3">
                    <select name="TypeID" id="detail_TypeID" class="gofwd" onchange="DoMaterialGet();">
                      <option value="0">未選択</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <th>名称</th>
                  <td colspan="3">
                    <input type="text" name="ZaiName" id="detail_ZaiName" class="input-85p gofwd" value="" onchange="DoMaterialGet();">
                    <input type="button" id="detailZaiName" value="参照" onClick="DoOpenMaterialDialog(this);">
                  </td>
                  <td colspan="3"></td>
                </tr>
                <tr>
                  <th>材質</th>
                  <td colspan="3">
                    <input type="text" name="Material" id="detail_Material" class="input-85p gofwd" value="" onchange="DoMaterialGet();">
                    <input type="button" id="detailMaterial" value="参照" onClick="DoOpenMaterialDialog(this);">
                  </td>
                </tr>
                <tr>
                  <th>寸法</th>
                  <td colspan="3">
                    <input type="text" name="Size" id="detail_Size" class="input-85p gofwd" value="" onchange="DoMaterialGet();">
                    <input type="button" id="detailSize" value="参照" onClick="DoOpenMaterialDialog(this);">
                  </td>
                </tr>
                <tr>
                  <th>数量</th>
                  <td colspan="3">
                    <input type="text" name="Quantity" id="id_Quantity" class="input-100 gofwd" value="" onchange="DoSyncValue(this);DoDetailCalc(2);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);">
                    <input type="text" name="Unit" id="id_Unit" class="input-50 gofwd" value="" list="cboUnitList" onchange="DoSyncValue(this);DoDetailCalc(1);">
                  </td>
                  <th>単価</th>
                  <td class="mn">
                    <input type="text" name="UPrice" id="id_UPrice" class="input-100 gofwd" value="" onchange="DoSyncValue(this);DoDetailCalc(1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);">
                  </td>
                </tr>
                <tr>
                  <th>材料ID</th>
                  <td colspan="3">
                    <input type="text" name="ZaiID" id="id_ZaiID" class="input-100" value="" disabled>
                  </td>
                </tr>
                <tr>
                  <th>備考</th>
                  <td colspan="3">
                    <input type="text" name="Remark" id="id_Remark" class="input-100p gofwd" value="">
                  </td>
                </tr>
              </tbody><!-- .bk-blue -->
            </table><!-- #table-tab2 -->

            <div class="clear"><hr></div>

            <div class="dashuboard">
              <table class="form-input" border="0" cellspacing="0" cellpadding="0">
                <colgroup>
                  <col width="20%">                  <col width="20%">                  <col width="20%">                  <col width="20%">                  <col width="20%">                </colgroup>
                <tbody>
                  <tr class="header-row">
                    <th nowrap>&nbsp;</th>
                    <th nowrap>数量</th>
                    <th nowrap>単位</th>
                    <th nowrap>単価</th>
                    <th nowrap>金額</th>
                  </tr>
                  <tr>
                    <th nowrap>見積</th>
                    <td class="mn"><!--数量-->
                      <input type="text" name="MituQuantity" id="id_MituQuantity" class="input-100p gofwd" value="" onchange="DoSyncValue(this);DoDetailCalc(2);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);">
                    </td>
                    <td class="center"><!--単位-->
                      <input type="text" name="MituUnit" id="id_MituUnit" class="input-100p gofwd" value="" list="cboUnitList" onchange="DoSyncValue(this);DoDetailCalc(1);">
                    </td>
                    <td class="mn"><!--単価-->
                      <input type="text" name="MituUPrice" id="id_MituUPrice" class="input-100p gofwd" value="" onchange="DoSyncValue(this);DoDetailCalc(1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);">
                    </td>
                    <td class="mn ro"><!--金額--><input type="text" name="MituPrice" id="id_MituPrice"class="input-100p" value="" readonly></td>
                  </tr>
                  <tr>
                    <th nowrap>材料費</th>
                    <td class="mn"><!--数量-->
                      <input type="text" name="ZaiQuantity" id="id_ZaiQuantity" class="input-100p gofwd" value="" onchange="DoSyncValue(this);DoDetailCalc(2);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);">
                    </td>
                    <td class="center"><!--単位-->
                      <input type="text" name="ZaiUnit" id="id_ZaiUnit" class="input-100p gofwd" value="" list="cboUnitList">
                    </td>
                    <td class="mn"><!--単価-->
                      <input type="text" name="ZaiUPrice" id="id_ZaiUPrice" class="input-100p gofwd" value="" onchange="DoDetailCalc(1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);">
                    </td>
                    <td class="mn ro"><!--金額-->
                      <input type="text" name="ZaiPrice" id="id_ZaiPrice" class="input-100p" value="" readonly>
                    </td>
                  </tr>
                  <tr>
                    <th nowrap>加工費</th>
                    <td class="mn"><!--数量-->
                      <input type="text" name="KakouQuantity" id="id_KakouQuantity" class="input-100p gofwd" value="" onchange="DoSyncValue(this);DoDetailCalc(2);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);">
                    </td>
                    <td class="center"><!--単位-->
                      <input type="text" name="KakouUnit" id="id_KakouUnit" class="input-100p gofwd" value="" list="cboUnitList">
                    </td>
                    <td class="mn"><!--単価-->
                      <input type="text" name="KakouUPrice" id="id_KakouUPrice" class="input-100p gofwd" value="" onchange="DoDetailCalc(1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);">
                    </td>
                    <td class="mn ro"><!--金額-->
                      <input type="text" name="KakouPrice" id="id_KakouPrice" class="input-100p" value="" readonly>
                    </td>
                  </tr>
                  <tr>
                    <th nowrap>施工費</th>
                    <td class="mn"><!--数量-->
                      <input type="text" name="SekouQuantity" id="id_SekouQuantity" class="input-100p gofwd" value="" onchange="DoSyncValue(this);DoDetailCalc(2);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);">
                    </td>
                    <td class="center"><!--単位-->
                      <input type="text" name="SekouUnit" id="id_SekouUnit" class="input-100p gofwd" value="" list="cboUnitList">
                    </td>
                    <td class="mn"><!--単価-->
                      <input type="text" name="SekouUPrice" id="id_SekouUPrice" class="input-100p gofwd" value="" onchange="DoDetailCalc(1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);">
                    </td>
                    <td class="mn ro"><!--金額-->
                      <input type="text" name="SekouPrice" id="id_SekouPrice" class="input-100p" value="" readonly>
                    </td>
                  </tr>
                  <tr>
                    <th nowrap>経費</th>
                    <td class="mn"><!--数量-->
                      <input type="text" name="CostQuantity" id="id_CostQuantity" class="input-100p gofwd" value="" onchange="DoSyncValue(this);DoDetailCalc(2);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);">
                    </td>
                    <td class="center"><!--単位-->
                      <input type="text" name="CostUnit" id="id_CostUnit" class="input-100p gofwd" value="" list="cboUnitList">
                    </td>
                    <td class="mn"><!--単価-->
                      <input type="text" name="CostUPrice" id="id_CostUPrice" class="input-100p gofwd" value="" onchange="DoDetailCalc(1);" onFocus="DoRemoveComma(this);" onBlur="DoAppendComma(this);">
                    </td>
                    <td class="mn ro"><!--金額-->
                      <input type="text" name="CostPrice" id="id_CostPrice" class="input-100p" value="" readonly>
                    </td>
                  </tr>
                </tbody>
              </table><!-- .form-input -->

              <div class="clear"><hr></div>

            </div><!-- .dashuboard -->

            <div id="cboDetailListWrapper" class="hide">
              <datalist id="cboUnitList">
                <option value="0"></option>
                <option value="m"></option>
                <option value="㎡"></option>
                <option value="ヶ所"></option>
                <option value="㍑"></option>
                <option value="巻"></option>
                <option value="缶"></option>
                <option value="個"></option>
                <option value="式"></option>
                <option value="組"></option>
                <option value="袋"></option>
                <option value="台"></option>
                <option value="箱"></option>
                <option value="本"></option>
                <option value="枚"></option>
              </datalist><!-- #cboUnitList -->
            </div><!-- #cboDetailListWrapper -->
          </div><!-- #tabs-2 -->
        </div><!-- #tabs -->
      </div><!-- .input-cell2 -->
    </form><!-- #form_detail -->
  </div><!-- #detail-modal-dialog-inner -->
</div><!-- #detail-modal-dialog -->
<!-- ▲行明細モーダルダイアログ▲ -->

<!-- ▼材料選択モーダルダイアログ▼ -->
<div id="material-modal-dialog" class="modal-content" title="">
  <div id="material-modal-dialog-inner">
    <form name="form_material" id="form_material" action="" method="post">
      <input type="hidden" name="cur_prefix" value="">
      <input type="hidden" name="cur_target" value="">

      <div class="material-list input-cell2">
        <table id="TblResult" border="0" cellspacing="0" cellpadding="0">
          <tbody>
            <tr>
              <th nowrap>名称</th>
            </tr>
          </tbody>
        </table><!-- #TblResult -->
      </div><!-- .input-cell2 -->
    </form><!-- #form_material -->
  </div><!-- #material-modal-dialog-inner -->
</div><!-- #material-modal-dialog -->
<!-- ▲材料選択モーダルダイアログ▲ -->

<!-- ▼経費率計算中モーダルダイアログ▼ -->
<div id="computing-modal-dialog" class="modal-content" title="再計算中...">
  <div id="computing-modal-dialog-inner">
      <div class="loading-box">
        <img src="/images/loading-arrow-96x96.gif">
      </div><!-- .computing-box -->
  </div><!-- #computing-modal-dialog-inner -->
</div><!-- #computing-modal-dialog -->
<!-- ▲経費率計算中モーダルダイアログ▲ -->

<!-- ▼材料発注先業者選択用ポップアップ -->
<div id="material-contractor-menu" class="modal-content contractor-modal" title="材料発注先業者選択">
  <div class="">
    <table id="material-contractor-list">
      <thead class="hide">
        <tr>
          <th>業者名</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td id="material-contractor-0" class="contractor-select">選択解除</td>
        </tr>
      </tbody>
    </table>
  </div>
</div><!-- #material-contractor-menu -->
<!-- ▲材料発注先業者選択用ポップアップ -->

<!-- ▼加工発注先業者選択用ポップアップ -->
<div id="process-contractor-menu" class="modal-content contractor-modal" title="加工発注先業者選択">
  <div class="">
    <table id="process-contractor-list">
      <thead class="hide">
        <tr>
          <th>業者名</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td id="process-contractor-0" class="contractor-select">選択解除</td>
        </tr>
      </tbody>
    </table>
  </div>
</div><!-- #process-contractor-menu -->
<!-- ▲加工発注先業者選択用ポップアップ -->

<!-- ▼施工発注先業者選択用ポップアップ -->
<div id="construct-contractor-menu" class="modal-content contractor-modal" title="施工発注先業者選択">
  <div class="">
    <table id="construct-contractor-list">
      <thead class="hide">
        <tr>
          <th>業者名</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td id="construct-contractor-0" class="contractor-select">選択解除</td>
        </tr>
        <tr>
          <td id="construct-contractor-1" class="contractor-select">[0000] 工務課</td>
        </tr>
        <tr>
          <td id="construct-contractor-2" class="contractor-select">[0001] 外注</td>
        </tr>
        <tr>
          <td id="construct-contractor-3" class="contractor-select">[0002] ㈲互光</td>
        </tr>
        <tr>
          <td id="construct-contractor-4" class="contractor-select">[0003] 渡辺　雅</td>
        </tr>
        <tr>
          <td id="construct-contractor-5" class="contractor-select">[0004] 石井竜一</td>
        </tr>
        <tr>
          <td id="construct-contractor-6" class="contractor-select">[0005] 高橋　公平</td>
        </tr>
        <tr>
          <td id="construct-contractor-7" class="contractor-select">[0006] 東信機工㈲</td>
        </tr>
        <tr>
          <td id="construct-contractor-8" class="contractor-select">[0007] かねいしEG</td>
        </tr>
        <tr>
          <td id="construct-contractor-9" class="contractor-select">[0008] 北信営業所</td>
        </tr>
        <tr>
          <td id="construct-contractor-10" class="contractor-select">[0009] 三菱システムサービス</td>
        </tr>
        <tr>
          <td id="construct-contractor-11" class="contractor-select">[0010] 新明電材</td>
        </tr>
        <tr>
          <td id="construct-contractor-12" class="contractor-select">[0011] マナテック</td>
        </tr>
        <tr>
          <td id="construct-contractor-13" class="contractor-select">[0012] 山崎電工</td>
        </tr>
        <tr>
          <td id="construct-contractor-16" class="contractor-select">[0015] ソーワテクニカ㈱</td>
        </tr>
        <tr>
          <td id="construct-contractor-17" class="contractor-select">[0016] 高橋　俊次</td>
        </tr>
        <tr>
          <td id="construct-contractor-18" class="contractor-select">[0017] 橋詰　太典</td>
        </tr>

        <tr>
          <td id="construct-contractor-19" class="contractor-select">[0018] 三石工業㈱</td>
        </tr>
        <tr>
          <td id="construct-contractor-20" class="contractor-select">[0019] 寺尾電気</td>
        </tr>
        <tr>
          <td id="construct-contractor-21" class="contractor-select">[0020] 電気工事</td>
        </tr>
        <tr>
          <td id="construct-contractor-22" class="contractor-select">[0021] ダイキン工業㈱</td>
        </tr>
        <tr>
          <td id="construct-contractor-23" class="contractor-select">[0022] 阿原　史明</td>
        </tr>
        <tr>
          <td id="construct-contractor-24" class="contractor-select">[0023] サンポット</td>
        </tr>
        <tr>
          <td id="construct-contractor-25" class="contractor-select">[0024] 工藤敏彦</td>
        </tr>
        <tr>
          <td id="construct-contractor-26" class="contractor-select">[0025] 中島　寿郎</td>
        </tr>
        <tr>
          <td id="construct-contractor-27" class="contractor-select">[0026] カネト</td>
        </tr>
        <tr>
          <td id="construct-contractor-28" class="contractor-select">[0027] ＬＬＬＬ</td>
        </tr>
      </tbody>
    </table>
  </div>
</div><!-- #construct-contractor-menu -->
<!-- ▲施工発注先業者選択用ポップアップ -->

<!-- ▼経費発注先業者選択用ポップアップ -->
<div id="cost-contractor-menu" class="modal-content contractor-modal" title="経費発注先業者選択">
  <div class="">
    <table id="cost-contractor-list">
      <thead class="hide">
        <tr>
          <th>業者名</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td id="cost-contractor-0" class="contractor-select">選択解除</td>
        </tr>
      </tbody>
    </table>
  </div>
</div><!-- #cost-contractor-menu -->
<!-- ▲経費発注先業者選択用ポップアップ -->

 <!-- ▼売上確定ポップアップ -->
<div id="modal_sales_menu" class="modal-content" data-pre-open="DoPreFixOrder">
  <h2>売上確定日付選択</h2>
  <div class="option-flex input-size-50 center"><input type="text" name="SalesDate" id="frm-SalesDate" style="margin:0 auto;" value=""></div><br>
  <div class="regi-btn">
    <span class="sale-btn" style="margin:0 auto;"><input type="button" value="売上確定" onclick="return DoFixOrder();"></span>
  </div><!-- .regi-btn -->
</div><!-- #modal_sales_menu -->
<!-- ▲売上確定ポップアップ -->

<!-- ▼実行予算削除中ポップアップ -->
<div id="deleting-modal-dialog" class="modal-content" title="この実行予算を削除しています...">
  <div id="deleting-modal-dialog-inner">
      <div class="loading-box">
        <img src="/images/loading-arrow-96x96.gif">
      </div><!-- .loading-box -->
  </div><!-- #loading-modal-dialog-inner -->
</div><!-- #loading-modal-dialog -->
<!-- ▲実行予算削除中ポップアップ -->
 
<div id="foot"></div>
<script src="js/component.js?v=20210118"></script>
</body>
</html>
