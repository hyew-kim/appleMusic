/*common*/
if (navigator.userAgent.toLowerCase().indexOf("Trident") > -1)
{
  window.location = 'microsoft-edge:' + "https://www.apple.com/kr/airpods/";
}

$(document).ready(function(){
  preventDefaultAnchor();
  checkScroll();
});

$(window).on('resize', function(){
  showBanner(bannerNow);
  if ($(this).width() >= 640)
    $('#main-tab ul').css({'left':'50%'});
  else
    moveMainTab(0);
  if ($(this).width() >= 1024){
    $('div.site ul.site-wrapper > li > ul').removeAttr('style');
    //style속성으로 ul의 height: 0px 이렇게 하면 pc버전에서 문제생김!
  }
});

/*button on/off */
$('#connection ul.slide li a.control').on('click',function() {
  $(this).parent().toggleClass('on');
});
/*scroll 양에 따라 background 변경*/
$(window).on('scroll', ()=>{checkScroll()});
var isPlay = true;
$('#items div.video a.control').on('click', function(){
  $(this).toggleClass('on');
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
  $(this).next().toggleClass('open');
  $('body').toggleClass('no-scroll');
});

var toalBanner = $('#connection ul.slide li').length;
var bannerNow = 0;
var bannerPrev = 0;
var bannerNext = 0;
var firstBanner = 0;

showBanner(firstBanner);
$('#connection ul.control li .prev').on('click',function(){
  showBanner(bannerPrev);
});
$('#connection ul.control li .next').on('click',function(){
  showBanner(bannerNext);
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

function checkScroll(){
  var scrollAmt = $(document).scrollTop();
  if (scrollAmt < 1200)
     $('body').css({'background': '#fff'});
  else
    $('body').css({'background': '#F5F5F7'});
}

function showBanner(n) {
  var offsetX = -$(`#connection ul.slide li:eq(${n})`).position().left;
  if (n !== 0)
     offsetX -= 30;
  $('#connection ul.slide').css({'left': offsetX, 'transition':'left 1s'});
  bannerNow = n;
  bannerPrev = bannerNow === 0 ? 0 : n - 1;
  bannerNext = bannerNow === toalBanner - 1 ? toalBanner -1 : n+ 1;
  if (bannerNow === 0)
    {
      $("#connection ul.control li .prev").addClass('off');
    }
  else if (bannerNow === toalBanner - 1)
    $("#connection ul.control li .next").addClass('off');
  else
    $("#connection ul.control li a").removeClass('off');
}

function moveMainTab (delX){
  $('#main-tab ul').css({'left':`${delX}px`});
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