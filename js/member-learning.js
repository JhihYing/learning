$(document).ready(function () {
  // -----------------------  載入 header -----------------------
  $(".headerpage").load("header.html", function () {
    // -----------------------  載入 footer -----------------------
    $(".footerpage").load("footer.html", function () {
      $("body").show(); // 顯示頁面內容
    });
  });

  // -----------------------  共用選單，變換顏色 -----------------------
  $(".member-ul > li").click(function () {
    $(this).toggleClass("active");
    $(this).siblings().removeClass("active");
  });

  // -----------------------  切換課程分類 -----------------------
  $(".course-type-ul > li").click(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    if ($(".online-li").hasClass("active")) {
      $(".online-course-card-box").css("display", "grid");
      $(".online-course-card-box").siblings("ul").css("display", "none");
    } else if ($(".pre-order-course-li").hasClass("active")) {
      $(".hot-course-card-box").css("display", "grid");
      $(".hot-course-card-box").siblings("ul").css("display", "none");
    } else if ($(".book-course-li").hasClass("active")) {
      $(".book-card-box").css("display", "grid");
      $(".book-card-box").siblings("ul").css("display", "none");
    } else if ($(".course-li").hasClass("active")) {
      $(".course-card-box").css("display", "grid");
      $(".course-card-box").siblings("ul").css("display", "none");
    }
  });

  // ----------------------- 控制進度條 -----------------------
  const selectors = [
    ".online-course-card-box > li",
    ".hot-course-card-box > li",
    ".book-card-box > li",
    ".course-card-box > li",
  ];

  selectors.forEach((selector) => {
    const courseCards = document.querySelectorAll(selector);

    courseCards.forEach((card) => {
      const percentageElement = card.querySelector(
        ".course-schedule p[data-percentage]"
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
});
