/*common*/
$(document).ready(function(){
	preventDefaultAnchor();
  checkScroll();
});

/*button on/off */
$('#connection ul.slide li a.control').on('click',function() {
  $(this).parent().toggleClass('on');
});
/*scroll 양에 따라 background 변경*/
$(window).on('scroll', ()=>{checkScroll()});
var isPlay = true;
$('#items div.video a.control').on('click', ()=>{
  if (isPlay)
    {
      $('video').get(0).pause();
      isPlay = false;
    }
  else
  {
    $('video').get(0).play();
    isPlay = true;
  }
});
$('#header a.menu').on('click',function(){
  $(this).toggleClass('close');
});
function preventDefaultAnchor() {
  $(document).on('click', 'a[href="#"]', function(event) {
    event.preventDefault();
  });
}

function checkScroll(){
  var scrollAmt = $(document).scrollTop();
  if (scrollAmt < 1200)
     $('body').css({'background': '#fff'});
  else
    $('body').css({'background': '#F5F5F7'});
}