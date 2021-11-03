/*common*/
$(document).ready(function(){
	preventDefaultAnchor();
	showSlide();
})

function preventDefaultAnchor() {
  $(document).on('click', 'a[href="#"]', function(event) {
    event.preventDefault();
  });
}
/*image-slide*/

$('.playlist > li > a').on('click', function(){
	$('.playlist > li').removeClass('on');
	$(this).parent().addClass('on');
	showSlide();
});

function showSlide()
{
	var $bar = $('ul.playlist > li.on > ul');
	var $box = $('ul.playlist');
	var contentWidth = $bar.find('li:eq(1)').outerWidth(true);
	var timerId = "";
	
	/*bar: ul.playlist > li > ul, box: ul.playlist */
	var idx = 1;
	timerId = setInterval(function(){
		var currentOffsetX = $bar.position().left;
	
		$bar.css({'left': `${currentOffsetX - 0.3}px`});
		currentOffsetX -= 0.3;
		if (Math.abs(currentOffsetX) > contentWidth * idx)
		{
			var $first = $bar.find('li:eq(0)');
			$first.remove();
			$bar.css({'left': `${currentOffsetX + contentWidth}px`});
			$bar.append($first);
			$bar.css({'width': `${3000 + idx * 1000}px`});
			idx++;
		}
	}, 8);
}
