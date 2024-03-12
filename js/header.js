$(document).ready(function () {
  // ----------------------- 漢堡選單 -----------------------
  // 漢堡選單(打開/關閉)
  $("#hamburger").click(function () {
    $(this).toggleClass("is-active");

    if ($("#hamburger").hasClass("is-active")) {
      $(".hamburger-bg").css("display", "block");
      // $(".index").css("filter", "blur(5px)");
      disableScroll();

      $(".search-rwd").removeClass("active");
      $(".search-rwd-open").slideUp();

      $(".hamburger-open").fadeIn(100);
      $(".rwd-bg").fadeIn(10);
    } else {
      $(".hamburger-bg").css("display", "none");
      // $(".index").css("filter", "initial");
      enableScroll();

      $(".hamburger-open").fadeOut(100);
      $(".hamburger-open-course-details").fadeOut(100);
      $(".hamburger-open-member").fadeOut(100);
      $(".rwd-bg").fadeOut(10);
    }
  });

  // 會員專區(打開/關閉)
  $("#handleGoMember").click(function () {
    $(".hamburger-open-member").css("display", "inline-block");
  });
  $("#handleGoMainNav01").click(function () {
    $(".hamburger-open-member").css("display", "none");
  });

  // 課程類別(打開/關閉)
  $(".rwd-nav-category-ul > li")
    .not(":first-child")
    .click(function () {
      $(".hamburger-open-course-details").css("display", "inline-block");
    });
  $("#handleGoMainNav02").click(function () {
    $(".hamburger-open-course-details").css("display", "none");
  });

  // 搜尋(打開/關閉)
  $(".search-rwd").click(function () {
    if ($(".search-rwd").hasClass("active")) {
      $(".search-rwd").removeClass("active");
      $(".search-rwd-open").slideUp();
    } else {
      $(".search-rwd-open").slideDown();
      $(".search-rwd").addClass("active");
      $(this).addClass("active");

      $(".rwd-bg").fadeOut(100);
      $(".hamburger-open").fadeOut(100);
      $(".hamburger-open-course-details").fadeOut(100);
      $(".hamburger-open-member").fadeOut(100);
      $("#hamburger").removeClass("is-active");
    }
  });

  $("#search-close").click(function () {
    $(".search-rwd-open").slideUp();
    $(".search-rwd").removeClass("active");
  });

  // 登入(RWD)
  $("#login-rwd").click(function () {
    $(".hamburger-bg").css("display", "none");

    $(".popup-bg").fadeIn(200);
    $(".login-wrap").fadeIn(400);
    $(".hamburger-open").fadeOut(100);
    $(".rwd-bg").fadeOut(10);
    $("#hamburger").removeClass("is-active");
    disableScroll();
  });

  // 註冊(RWD)
  $("#signUp-rwd").click(function () {
    $(".hamburger-bg").css("display", "none");

    $(".register-radius-box").animate({ scrollTop: 0 });
    $(".register-popup-bg").fadeIn(200);
    $(".register-wrap").fadeIn(400);
    $(".hamburger-open").fadeOut(100);
    $(".rwd-bg").fadeOut(10);
    $("#hamburger").removeClass("is-active");
    disableScroll();
  });

  // 導覽列(RWD)
  // 依照主選單分類
  $(".rwd-nav-category-ul > li").on("click", function (e) {
    const categoryName = $(this).find("p").text();

    if (categoryName === "語言學習") {
      $("#rwd-language-learning").siblings().css("display", "none");
      $("#rwd-language-learning").css("display", "block");
    } else if (categoryName === "投資理財") {
      $("#rwd-investment-learning").siblings().css("display", "none");
      $("#rwd-investment-learning").css("display", "block");
    } else if (categoryName === "生活品味") {
      $("#rwd-life-learning").siblings().css("display", "none");
      $("#rwd-life-learning").css("display", "block");
    }
  });

  // -----------------------  更改顏色-導覽列選單(課程類別) -----------------------
  // 獲取當前的URL
  const currentURL = window.location.href;

  // 檢查URL是否包含 "course"
  if (currentURL.includes("course")) {
    $(".nav-arrow-icon > img").attr(
      "src",
      "./images/nav-arrow-down-active.svg"
    );
  }
});

// 禁用滾動
function disableScroll() {
  document.body.style.overflow = "hidden";
}

// 解除禁用滾動
function enableScroll() {
  document.body.style.overflow = "";
}
