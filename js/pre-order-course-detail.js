$(document).ready(function () {
  // -----------------------  載入 header -----------------------
  $(".headerpage").load("header.html");

  // -----------------------  載入 footer -----------------------
  $(".footerpage").load("footer.html");

  // 切換影片
  $(".course-video-img").click(function () {
    $(this).css("opacity", "0");
    $(".course-video").css("z-index", "1");

    // 點擊就自動播放影片
    const video = $(this).siblings(".course-video")[0];

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });

  // 切換分類(介紹、章節、公告)
  $(".info-nav-ul > li").click(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    if ($(".introduce-li").hasClass("active")) {
      $(".introduce-box").fadeIn(200);
      $(".introduce-box").siblings("div").fadeOut(200);
    } else if ($(".chapter-li").hasClass("active")) {
      $(".chapter-box").fadeIn(200);
      $(".chapter-box").siblings("div").fadeOut(200);
    } else if ($(".announcement-li").hasClass("active")) {
      $(".announcement-box").fadeIn(200);
      $(".announcement-box").siblings("div").fadeOut(200);
    }
  });

  // 單元一覽-收合功能
  $(".chapter-list-box").click(function () {
    $(this).toggleClass("active");

    if ($(this).hasClass("active")) {
      $(this).next(".chapter-ul").slideDown(300);
      $(this).find(".chapter-arrow-img").css("transform", "rotate(0deg)");
    } else {
      $(this).next(".chapter-ul").slideUp(300);
      $(this).find(".chapter-arrow-img").css("transform", "rotate(180deg)");
    }
  });

  // ----------------------- 公告-收合功能 -----------------------
  // 判斷初始狀態是否要顯示-瞭解更多
  if ($(".announcement-info").height() > 120) {
    $(".introduction-show-box").css("display", "none");
  }

  $(".introduction-show-btn").click(function () {
    const announcementInfoBox = $(this).closest(".announcement-info-box");
    const announcementInfo = announcementInfoBox.find(".announcement-info");
    const introductionShowBtn = $(this);

    announcementInfo.toggleClass("expanded");
    announcementInfo.css(
      "max-height",
      announcementInfo.hasClass("expanded") ? "100%" : "120px"
    );
    introductionShowBtn
      .find("p")
      .html(announcementInfo.hasClass("expanded") ? "收合內容" : "閱讀更多");
    introductionShowBtn
      .find(".arrow-top")
      .css(
        "transform",
        announcementInfo.hasClass("expanded")
          ? "rotate(360deg)"
          : "rotate(180deg)"
      );
    introductionShowBtn
      .parent()
      .css(
        "background",
        announcementInfo.hasClass("expanded")
          ? "initial"
          : "linear-gradient(180deg, rgba(244, 245, 246, 0), #f4f5f6 80%)"
      );
  });
});
