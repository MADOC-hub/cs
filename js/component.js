// --------  Version 情報を含むJSON を読み込んで jQuery で描画する


var version_json_path = '/version.json';
var message_json_path = '/assets/json/message.json';
var commonMessage_path = '/assets/message.json';

var date = new Date();
var timestamp = date.getTime();
var timestam_parmas = '?' + timestamp;
var clientid = location.host;

var version_json_url = '//' + clientid + version_json_path;
var message_json_url = '//' + clientid + message_json_path;
var commonMessage_json_url = '//docs.reform-club.jp' + commonMessage_path;

function getMessage($jsonurl) {
  $.getJSON($jsonurl + timestam_parmas, function(data){
    
    var mVnumber = data['version'];
    var mDate = data['date'];
    var mMessage = data['message'];

    var message_list = '';

    for (var index = 0; index < mMessage.length; index++) {
      var message_item = mMessage[index];
      message_list += '<li class="list-item">' + message_item + '</li>';
    }

    var insertHtml = '<link rel="stylesheet" type="text/css" href="/assets/css/release-note.css" media="screen" /><div id="release--sections"><div class="release--section"><div class="release--date"><p>' + mDate + '</p></div><div class="release--version"><p>' + mVnumber + '</p></div><div class="release--messages"><ul class="list">' + message_list + '</ul></div></div></div>'

    $('#foot').prepend( insertHtml);

  });
};

function insertCommonMessage(jsonData){

  var targetSelector = '#foot';
  var insertHTML = "";
  var innerMes = "";
  var notHasMessageClass = "";

  for (var index = 0; index < jsonData.length; index++) {
    var mes = jsonData[index];


    if (mes.enable) {
      var meslines = "";
      for (var index = 0; index < mes.messages.length; index++) {
        meslines += '<p class="message-' + index +'">' + mes.messages[index] +'</p>';
      }

      innerMes += '<div class="message level-info"><div class="message--date">'+ mes.date +'</div><div class="message--content">' + meslines + '</div></div>';
    } else {
      notHasMessageClass = ' notHasMessage';
    }
    
  }

  insertHTML += '<div class="commonMessages'+notHasMessageClass+'">'+innerMes+'</div>';

$(targetSelector).prepend(insertHTML);



}

function getCommonMessage($jsonurl){
  $.getJSON($jsonurl, function(){
    console.log('run');
  })
  .success(function(json){
    insertCommonMessage(json);

  })
  .error(function(jqXHR,textStatus,errorThrown){
    // console.log('Error : ' + textStatus);
    // console.log('Text : ' + jqXHR.responseText);
  })
  .complete(function(){
    // console.log('complate')
  });
};


( function( $ ) {
  $(document).ready(function () {
      $.getJSON(version_json_url + timestam_parmas, function(data){

          var versionumber = data['version']['number'];
          var docurl = data['resorces']['docurl'];
          var releasedate = data['release']['date'];
          var doclinkurl = docurl + '?' + 'id=' + clientid + '&' + 'version=' + versionumber;


          var cssIdFoot = {
            'color': '#666',
            'text-align':'center',
            'padding':'20px'
          };
          var cssClassFooterReleasedate = {
            'font-size': '80%',
            'display': 'block',
            'color': '#E8E8E8'
          };
          var cssClassFooterSitename= {
            'margin':'10px'
          };
          var cssClassFooterVersion = {
            'margin':'10px'
          };
          var cssClassHeaderDocurl = {
            'position':'absolute',
            'right':'0'
          };

          var insertHtml = '<span class="footer--sitename">リフォーム倶楽部</span>';
          insertHtml += '<span class="footer--version">'+versionumber+'</span>';
          insertHtml += '<span class="footer--releasedate" style="">'+releasedate+'</span>';
          var insertDochtml = '<span class="header--docurl"><a href="' + doclinkurl + '" target="_blank">リフォーム倶楽部の使い方</a></span>';


          $('#wrapperInner header').prepend( insertDochtml);
          $('.header--docurl').css(cssClassHeaderDocurl);

          $('#foot').css(cssIdFoot);
          $('#foot').append('<p class="footer--content" style="padding: 20px ;">' + insertHtml + '</p>');
          $('.footer--sitename').css(cssClassFooterSitename);
          $('.footer--version').css(cssClassFooterVersion);
          $('.footer--releasedate').css(cssClassFooterReleasedate);

      });


      getMessage(message_json_url);
      getCommonMessage(commonMessage_json_url);
  });
} )( jQuery );
