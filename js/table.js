
	$(function(){
	table();
});

function table(){
	$('tr', '.form-input')
	.hover(
		function(){
			$(this).addClass('tr-selected');
		},
		function(){
			if(!$('input[type="checkbox"]', this).attr('checked')){
				$(this).removeClass('tr-selected');
			}
		}
	);
	$('tr:odd', '.form-input')
	.addClass('tr-odd');
	$('#chkAll')
	.toggle(
		function(){
			$('input[type="checkbox"]', '.form-input')
			.attr('checked', true);
			$(this)
			.html('Uncheck All');
			$('tr', '.form-input')
			.addClass('tr-selected');				
		},
		function(){
			$('input[type="checkbox"]', '.form-input')
			.attr('checked', false);
			$(this)
			.html('Check All');
			$('tr', '.form-input')
			.removeClass('tr-selected');				
		}
	);
	$('tr', '.form-input')
	.children('td:nth-child(1)')
	.nextAll()
	.click(
		function(){
			var _e = $('input[type="checkbox"][name^="chk"]', $(this).parent().children('td:first'));
			if(_e.attr('checked')){
				_e.attr('checked', false);
				$(this).parent().removeClass('tr-selected');
			}else{
				_e.attr('checked', true);
				$(this).parent().addClass('tr-selected');
			}
		}
	);
}