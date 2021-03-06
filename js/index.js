/*common*/
if (navigator.userAgent.toLowerCase().indexOf("Trident") > -1)
{
  window.location = 'microsoft-edge:' + "https://www.apple.com/kr/airpods/";
}

$(document).ready(function(){
  preventDefaultAnchor();
});

$(window).on('resize', function(){
  if ($(this).width() >= 640)
    $('#main-tab ul').css({'left':'50%'});
  else
  {
    moveMainTab(0);
    $('#main-tab ul').css({'transition': 'none'});
  }
  if ($(this).width() >= 1024){
    $('div.site ul.site-wrapper > li > ul').removeAttr('style');
    //style속성으로 ul의 height: 0px 이렇게 하면 pc버전에서 문제생김!
  }
});

/*button on/off */
$('#connection ul.slide li a.control').on('click',function() {
  $(this).parent().toggleClass('on');
});

$('#header a.menu').on('click',function(){
  $(this).toggleClass('close');
  $(this).next().toggleClass('open');
  $('body').toggleClass('no-scroll');
});


$('#main-tab div.control a:eq(0)').on('click',function(){
  moveMainTab(0);
});

$('#main-tab div.control a:eq(1)').on('click',function(){
  var delX = $(this).parent().prev().outerWidth(true) - $(this).parent().outerWidth(true);
  moveMainTab(-delX);
});
var isNavOpen = false;
$('div.site ul.site-wrapper > li').on('click', function(){
  var n = $('div.site ul.site-wrapper > li').index($(this));

  if(isNavOpen === false)
  {
    $(this).addClass('open');
    showNav(n);
  }
  else
  {
    showNav(n);
    $(this).removeClass('open');
  }
});

/*function */
function preventDefaultAnchor() {
  $(document).on('click', 'a[href="#"]', function(event) {
    event.preventDefault();
  });
}

function moveMainTab (delX){
  $('#main-tab ul').css({'left':`${delX}px`, 'transition': 'left 1s'});
  if (delX === 0)
    $('#main-tab div.control').removeClass('on');
  else
    $('#main-tab div.control').addClass('on');
}

function showNav(n){
  var ulHeight = 0;
  
  if (isNavOpen === false)
  {
    $(`div.site ul.site-wrapper > li:eq(${n}) > ul > li`).each(function(){
          ulHeight += $(this).outerHeight(true);
    });
  }
  $(`div.site ul.site-wrapper > li:eq(${n}) > ul`).css({'height':`${ulHeight}px`});
  isNavOpen = isNavOpen ? false : true;
};