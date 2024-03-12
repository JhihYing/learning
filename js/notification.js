$(document).ready(function () {
  // -----------------------  載入 header -----------------------
  $(".headerpage").load("header.html");

  // -----------------------  載入 footer -----------------------
  $(".footerpage").load("footer.html");

  // -----------------------  最新消息 & 通知 切換 -----------------------
  $(".notification-list > li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");

    if ($(".latestNews").hasClass("active")) {
      $(".notify-container").css("display", "none");
      $(".latestNews-container").css("display", "block");
    } else {
      $(".latestNews-container").css("display", "none");
      $(".notify-container").css("display", "block");
    }
  });
});
