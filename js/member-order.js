$(document).ready(function () {
  // -----------------------  載入 header -----------------------
  $(".headerpage").load("header.html");

  // -----------------------  載入 footer -----------------------
  $(".footerpage").load("footer.html");

  // -----------------------  訂單詳情收合 -----------------------
  $(".order-card .order-more > p").click(function () {
    const orderCard = $(this).closest(".order-card");
    const toggleBox = orderCard.find(".toggle-box");
    toggleBox.slideToggle();

    $(this).toggleClass("active");

    if ($(this).hasClass("active")) {
      $(this).text("收合內容");
      $(this).addClass("rotate");
    } else {
      $(this).text("訂單詳情");
      $(this).removeClass("rotate");
    }
  });

  // ----------------------- 線上課程 & 實體課程 切換 -----------------------
  $(".order-category-ul > li").click(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    if ($(".online").hasClass("active")) {
      $(".in-person-order-box").css("display", "none");
      $(".online-order-box").css("display", "block");
    } else {
      $(".online-order-box").css("display", "none");
      $(".in-person-order-box").css("display", "block");
    }
  });

  // ----------------------- 匯款資訊 -----------------------
  $(".pay-payment").click(function () {
    $(".remit").css("display", "flex");
    $(".order-title-box").css("display", "none");
    $(".online-order-box").css("display", "none");
    $(".in-person-order-box").css("display", "none");
  });

  // -----------------------  返回訂單查詢 -----------------------
  $(".remit-goback-btn > input").click(function () {
    window.location.href = "../member-order.html";
  });
});
