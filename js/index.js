/*common*/
$(document).ready(function(){
	preventDefaultAnchor();
  checkScroll();
});

/*button on/off */
$('#connection ul.slide li a.control').on('click', function() {
  $(this).parent().toggleClass('on');
});
/*scroll 양에 따라 background 변경*/
window.on('scroll', ()=>{checkScroll});

function preventDefaultAnchor() {
  $(document).on('click', 'a[href="#"]', function(event) {
    event.preventDefault();
  });
}

function checkScroll(){
  var scrollAmt = $(document).scrollTop();
  if (scrollAmt < 1200)
     $('body').css({'background': '#FFF'});
  else
    $('body').css({'background': '#F5F5F7'});
}