$(document).ready(function () {
  // -----------------------  載入 header -----------------------
  $(".headerpage").load("header.html");

  // -----------------------  載入 footer -----------------------
  $(".footerpage").load("footer.html");

  // 切換分類(章節、公告)
  $(".info-nav-ul > li").click(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    if ($(".chapter-li").hasClass("active")) {
      $(".play-video-list").addClass("show");
      $(".chapter-box-rwd").siblings("div").fadeOut(200);
    } else if ($(".announcement-li").hasClass("active")) {
      $(".announcement-box").fadeIn(200);
      $(".announcement-box").siblings("div").fadeOut(200);
      $(".play-video-list").removeClass("show");
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

  // ----------------------- 點擊顯示目前播放位置 -----------------------
  $(".chapter-ul li").click(function () {
    $(".chapter-ul li").removeClass("active");
    $(this).addClass("active");
  });
});
