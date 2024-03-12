$(document).ready(function () {
  // -----------------------  載入 header -----------------------
  $(".headerpage").load("header.html");

  // -----------------------  載入 footer -----------------------
  $(".footerpage").load("footer.html");

  // ----------------------- 切換分類 -----------------------
  $(".sidebar-category-ul > li").click(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    if ($(".all-category").hasClass("active")) {
      $(".sidebar-category-detail-ul").css("display", "none");
    } else {
      $(".sidebar-category-detail-ul").css("display", "flex");
    }

    // ----------------------- 切換子選單 -----------------------
    const categoryName = $(".sidebar-category-ul > li.active").text();
    const categoryDetails = $(".sidebar-category-detail-ul");

    // 清空資料
    categoryDetails.empty();
    if (categoryName == "語言學習") {
      categoryDetails.append(
        '<li class="active">所有 語言學習</li><li>中文</li><li>英文</li><li>日文</li><li>韓文</li><li>法文</li><li>其他</li>'
      );
    } else if (categoryName == "投資理財") {
      categoryDetails.append(
        '<li class="active">所有 投資理財</li><li>當沖</li><li>區塊鏈</li><li>美股投資</li><li>盤勢分析</li><li>技術分析</li><li>ETF</li><li>房地產</li><li>其他</li>'
      );
    } else if (categoryName == "生活品味") {
      categoryDetails.append(
        '<li class="active">所有 生活品味</li><li>健康</li><li>攝影</li><li>DIY手作</li><li>旅遊</li>'
      );
    }

    // 切換子選單狀態
    $(".sidebar-category-detail-ul > li").click(function () {
      $(this).addClass("active");
      $(this).siblings().removeClass("active");
    });
  });

  // ----------------------- 切換類型 -----------------------
  $(".sidebar-type-ul > li").click(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    // 判斷分類
    if ($(".online-li").hasClass("active")) {
      $(".online-course-card-box").css("display", "grid");
      $(".online-course-card-box").each(function () {
        $(this)
          .siblings("ul:not(.sidebar-category-detail-ul)")
          .css("display", "none");
      });
    } else if ($(".course-li").hasClass("active")) {
      $(".course-card-box").css("display", "grid");
      $(".course-card-box").each(function () {
        $(this)
          .siblings("ul:not(.sidebar-category-detail-ul)")
          .css("display", "none");
      });
    } else if ($(".book-course-li").hasClass("active")) {
      $(".book-card-box").css("display", "grid");
      $(".book-card-box").each(function () {
        $(this)
          .siblings("ul:not(.sidebar-category-detail-ul)")
          .css("display", "none");
      });
    } else if ($(".pre-order-course-li").hasClass("active")) {
      $(".hot-course-card-box").css("display", "grid");
      $(".hot-course-card-box").each(function () {
        $(this)
          .siblings("ul:not(.sidebar-category-detail-ul)")
          .css("display", "none");
      });
    }
  });

  // ----------------------- 切換排序 -----------------------
  $(".course-sort").click(function () {
    $(this).toggleClass("active");
    if ($(this).hasClass("active")) {
      $(this).text("依上架時間排序");
    } else {
      $(this).text("依熱門度排序");
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
