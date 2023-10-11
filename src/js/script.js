jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
  
  var topBtn = $('.page-top');
  $(".page-top").hide();
  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });

// // フッター手前でストップ
$(document).ready(function() {
  // 変数の宣言と初期化
  var scrollHeight = $(document).height();
  var scrollPosition = $(window).height() + $(window).scrollTop();
  var footHeight = $(".footer").innerHeight();

  // スクロールイベントの処理
  $(window).on("scroll", function () {
    scrollPosition = $(window).height() + $(window).scrollTop();
    footHeight = $(".footer").innerHeight();

    if (scrollHeight - scrollPosition <= footHeight) {
      $(".page-top").css({
        position: "absolute",
        bottom: footHeight
      });
    } else {
      $(".page-top").css({
        position: "fixed",
        bottom: "0"
      });
    }
  });
 });
});






  $(function () {
    // ハンバーガーメニュー
    $(" .js-hamburger, .js-drawer, .js-drawer a").click(function () {
      $("header").toggleClass("is-active");
      $(".js-hamburger").toggleClass("is-active");
      $(".js-drawer").fadeToggle();
    });
  });

  //ドロワーメニュー
  $("#MenuButton").click(function () {
    // $(".l-drawer-menu").toggleClass("is-show");
    // $(".p-drawer-menu").toggleClass("is-show");
    $(".js-drawer-open").toggleClass("open");
    $(".drawer-menu").toggleClass("open");
    $("html").toggleClass("is-fixed");

  });




  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)

  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });

  const swiper1 = new Swiper(".swiper1",{
    loop: true,
    effect: "fade",
    speed: 3000,
    allowTouchMove: false,
    autoplay: {
      delay: 2000,
    },
  });


  var swiper = new Swiper(".swiper2", {
    loop: true,
    slidesPerView: 1.26,
    breakpoints: {
      768: {
        slidesPerView: 3.29,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3.49,
        spaceBetween: 41,
      },
    },
    spaceBetween: 24,
    speed: 2000,
    // autoplay: {
    //   delay: 1000,
    //   disableOnInteraction: false,
    // },

    navigation: {
      nextEl: ".campaign__next",
      prevEl: ".campaign__prev",
    },
  });




  //要素の取得とスピードの設定
var box = $('.js-colorbox'),
speed = 700;

//.colorboxの付いた全ての要素に対して下記の処理を行う
box.each(function(){
$(this).append('<div class="color"></div>')
var color = $(this).find($('.color')),
image = $(this).find('img');
var counter = 0;

image.css('opacity','0');
color.css('width','0%');
//inviewを使って背景色が画面に現れたら処理をする
color.on('inview', function(){
    if(counter == 0){
     $(this).delay(200).animate({'width':'100%'},speed,function(){
               image.css('opacity','1');
               $(this).css({'left':'0' , 'right':'auto'});
               $(this).animate({'width':'0%'},speed);
            })
        counter = 1;
      }
 });
});