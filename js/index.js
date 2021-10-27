var $bar = $('ul.playlist > li > ul.on');
var $box = $('ul.playlist');
var total = $bar.length;
var beginIdx = 0;
var endIdx = total - 1;
var barWidth = 0;
var boxWidth = 0;
var minOffsetX = -200;
var contentWidth = $bar.find('li:eq(1)').outerWidth(true);
var timerId = "";
/*bar: ul.playlist > li > ul, box: ul.playlist */
var idx = 1;
timerId = setInterval(function(){
	var currentOffsetX = $bar.position().left;

	$bar.css({'left': `${currentOffsetX - 1}px`});
	if (Math.abs(currentOffsetX) > contentWidth * idx)
	{
		var $first = $bar.find('li:eq(0)');
		$first.remove();
		$bar.append($first);
		$bar.css({'width': `${3000 + idx * 500}px`});
		idx++;
	}
	
}, 30)
