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

  $(function () {
    // ハンバーガーメニューボタンがクリックされたときのイベントハンドラを設定
    $(".js-hamburger").click(function () {
  
      // 現在のbodyタグのoverflowスタイルを確認
      if ($("body").css("overflow") === "hidden") {
  
        // もしoverflowがhiddenなら、bodyのスタイルを元に戻す
        $("body").css({ height: "", overflow: "" });
  
      } else {
  
        // そうでなければ、bodyにheight: 100%とoverflow: hiddenを設定し、スクロールを無効にする
        $("body").css({ height: "100%", overflow: "hidden" });
  
      }
    });
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

  const swiper1 = new Swiper(".js-mv-swiper",{
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
    slidesPerView: 1.213,
    spaceBetween: 24,
    speed: 2000,
    breakpoints: {
      425:{
        slidesPerView: 1.5,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2.8,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 2.8,
        spaceBetween: 41,
      },
      1440:{
        slidesPerView: 3,
        spaceBetween: 41,
      },
    },

    navigation: {
      nextEl: ".campaign__next",
      prevEl: ".campaign__prev"
    },
  });


// tab
// 上記の動きをページが読み込まれたらすぐに動かす
$(window).on('load', function () {
  $('.js-tab-item:first-of-type').addClass("active"); //最初のliにactiveクラスを追加
  $('.js-content-area:first-of-type').addClass("active"); //最初の.areaにis-activeクラスを追加
var hashName = location.hash; //リンク元の指定されたURLのハッシュタグを取得
GethashID (hashName);//設定したタブの読み込み
});

$(function () {
  const tabButton = $(".js-tab-item"),
    tabContent = $(".js-content-area");
  tabButton.on("click", function () {
    let index = tabButton.index(this);

    tabButton.removeClass("active");
    $(this).addClass("active");
    tabContent.removeClass("active");
    tabContent.eq(index).addClass("active");
  });
});

// モーダル
$(function () {
  const open = $(".js-modal-open"),
    close = $(".js-modal__close"),
    modal = $(".js-modal");

  //開くボタンをクリックしたら対応するモーダルを表示する
  open.on("click", function () {
    const targetModalId = $(this).data("target");
    $(`#${targetModalId}`).addClass("is-open");
    $('body').css('overflow-y', 'hidden');  // 本文の縦スクロールを無効
  });

  //閉じるボタンをクリックしたらモーダルを閉じる
  close.add(modal).on("click", function () {
    modal.removeClass("is-open");
    $('body').css('overflow-y','auto');     // 本文の縦スクロールを有効
  });
});

