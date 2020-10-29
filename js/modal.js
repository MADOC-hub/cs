$(function(){
    // 「.modal-open」をクリック
    $('.modal-open').click(function(){
        // モーダルコンテンツのIDを取得
        var $modal = $('#' + $(this).attr('data-target'));

        // 表示直前のコールバック
        if ($modal.data("pre-open")) {
            if (!eval($modal.data("pre-open") + "($modal)")) {
                return false;
            }
        }

        // オーバーレイ用の要素を追加
        $('body').append('<div class="modal-overlay"></div>');
        // オーバーレイをフェードイン
        $('.modal-overlay').fadeIn('slow');
        // モーダルコンテンツの表示位置を設定
        modalResize();

         // モーダルコンテンツフェードイン
        $modal.fadeIn('slow');

        // 「.modal-overlay」あるいは「.modal-close」をクリック
        $('.modal-overlay, .modal-close').off().click(function(){
            // モーダルコンテンツとオーバーレイをフェードアウト
            $modal.fadeOut('slow');
            $('.modal-overlay').fadeOut('slow',function(){
                // オーバーレイを削除
                $('.modal-overlay').remove();

                // クローズ後のコールバック
                if ($modal.data("post-close")) {
                    eval($modal.data("post-close") + "($modal)");
                }
            });
        });

        // リサイズしたら表示位置を再取得
        $(window).on('resize', function(){
            modalResize();
        });

        // モーダルコンテンツの表示位置を設定する関数
        function modalResize(){
            // ウィンドウの横幅、高さを取得
            var w = $(window).width();
            var h = $(window).height();

            // モーダルコンテンツの表示位置を取得
            var x = (w - $modal.outerWidth(true)) / 2;
            var y = (h - $modal.outerHeight(true)) / 2;

            // モーダルコンテンツの表示位置を設定
            $modal.css({'left': x + 'px','top': y + 'px'});
        }

    });
});
//このソースコードは「jQueryでモーダルウィンドウを作る方法 | jQuery.lab」のものです。
//http://coolwebwindow.com/jquery-lab/archives/304