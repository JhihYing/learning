$(document).ready(function () {
  // -----------------------  載入 header -----------------------
  $(".headerpage").load("header.html", function () {
    // -----------------------  載入 footer -----------------------
    $(".footerpage").load("footer.html", function () {
      $("body").show(); // 顯示頁面內容
    });
  });

  // ----------------------- 判斷分類第一個 -----------------------
  $(".course-type li:first-child").addClass("active");
  if ($(".online").hasClass("active")) {
    $(".course-card-box").css("display", "grid");
    $(".course-card-box").siblings("ul").css("display", "none");
  } else if ($(".course").hasClass("active")) {
    $(".online-course-card-box").css("display", "grid");
    $(".online-course-card-box").siblings("ul").css("display", "none");
  } else if ($(".book-course").hasClass("active")) {
    $(".book-card-box").css("display", "grid");
    $(".book-card-box").siblings("ul").css("display", "none");
  } else if ($(".pre-order-course").hasClass("active")) {
    $(".hot-course-card-box").css("display", "grid");
    $(".hot-course-card-box").siblings("ul").css("display", "none");
  }

  // ----------------------- 切換分類 -----------------------
  $(".course-type > li").click(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    // 判斷分類
    if ($(".online").hasClass("active")) {
      $(".course-card-box").css("display", "grid");
      $(".course-card-box").siblings("ul").css("display", "none");
    } else if ($(".course").hasClass("active")) {
      $(".online-course-card-box").css("display", "grid");
      $(".online-course-card-box").siblings("ul").css("display", "none");
    } else if ($(".book-course").hasClass("active")) {
      $(".book-card-box").css("display", "grid");
      $(".book-card-box").siblings("ul").css("display", "none");
    } else if ($(".pre-order-course").hasClass("active")) {
      $(".hot-course-card-box").css("display", "grid");
      $(".hot-course-card-box").siblings("ul").css("display", "none");
    }
  });

  // ----------------------- 收合功能 -----------------------
  // 判斷初始狀態是否要顯示-瞭解更多
  if ($(".introduction").height() < 500) {
    $(".introduction-show-box").css("display", "none");
  }

  $(".introduction-show-btn").click(function () {
    if ($(".introduction-show-btn > p").text() == "瞭解更多") {
      $(".introduction").css("max-height", "100%");
      $(".introduction-show-btn > p").html("收合內容");
      $(".arrow-top").css("transform", "rotate(360deg)");
      $(".introduction-show-btn > .arrow-top").css("margin-bottom", "0px");
      $(".introduction-show-box").css("background", "initial");
    } else {
      $(".introduction").css("max-height", "500px");
      $(".introduction").css("overflow", "hidden");
      $(".introduction-show-btn > p").html("瞭解更多");
      $(".arrow-top").css("transform", "rotate(180deg)");
      $(".introduction-show-box").css(
        "background",
        "linear-gradient(rgba(0, 0, 0, 0), #fff)"
      );
    }
  });

  // ----------------------- 控制進度條 -----------------------
  const courseCards = document.querySelectorAll(".hot-course-card-box > li");

  courseCards.forEach((card) => {
    const percentageElement = card.querySelector(
      ".course-num-progress-box p[data-percentage]"
    );
    if (percentageElement) {
      const percentage = parseInt(
        percentageElement.getAttribute("data-percentage"),
        10
      );
      const progressBar = card.querySelector(".course-bar-progress");

      if (progressBar) {
        progressBar.style.width = `${percentage}%`;
      }
    }
  });
});
