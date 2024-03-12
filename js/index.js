$(document).ready(function () {
  // -----------------------  載入 header -----------------------
  $(".headerpage").load("header.html", function () {
    // -----------------------  載入 footer -----------------------
    $(".footerpage").load("footer.html", function () {
      $("body").show(); // 顯示頁面內容
    });
  });

  // ----------------------- 輪播圖 -----------------------
  // banner
  var mySwiper = new Swiper(".swiper-container-banner", {
    loop: true,
    spaceBetween: 100,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: -80,
      depth: 200,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      disableOnInteraction: false,
      delay: 5000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // 響應式斷點設定
    breakpoints: {
      992: {
        spaceBetween: 30,
      },
      1280: {
        spaceBetween: 100,
      },
    },
  });

  // 課程嚴選(募資、線上)、最新課程(線上、實體)
  var mySwiper = new Swiper(
    ".swiper-container-hot-course,.swiper-container-hot-online-course, .swiper-container-online-course, .swiper-container-course",
    {
      spaceBetween: 30,
      slidesPerView: 4,
      slidesPerGroup: 4,
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // 響應式斷點設定
      breakpoints: {
        300: {
          slidesPerView: 1.2,
          slidesPerGroup: 1,
          slidesOffsetAfter: 0,
          slidesOffsetBefore: 0,
          touchRatio: 1,
          spaceBetween: 20,
        },
        576: {
          slidesPerView: 2.2,
          slidesPerGroup: 2,
          slidesOffsetAfter: 0,
          slidesOffsetBefore: 0,
          touchRatio: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
        1280: {
          slidesPerView: 4,
          slidesPerGroup: 4,
        },
      },
    }
  );

  // 專家嚴選
  var mySwiper = new Swiper(".swiper-container-expert", {
    spaceBetween: 30,
    slidesPerView: 5,
    slidesPerGroup: 5,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // 響應式斷點設定
    breakpoints: {
      300: {
        slidesPerView: 1.5,
        slidesPerGroup: 1,
        slidesOffsetAfter: 0,
        slidesOffsetBefore: 0,
        touchRatio: 1,
        spaceBetween: 0,
      },
      576: {
        slidesPerView: 2.2,
        slidesPerGroup: 2,
        slidesOffsetAfter: 0,
        slidesOffsetBefore: 0,
        touchRatio: 1,
      },
      768: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      992: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
      1280: {
        slidesPerView: 5,
        slidesPerGroup: 5,
      },
    },
  });

  // 新書聆聽
  var mySwiper = new Swiper(" .swiper-container-book", {
    spaceBetween: 30,
    slidesPerView: 5,
    slidesPerGroup: 5,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // 響應式斷點設定
    breakpoints: {
      300: {
        slidesPerView: 1.4,
        slidesPerGroup: 1,
        slidesOffsetAfter: 0,
        slidesOffsetBefore: 0,
        touchRatio: 1,
        spaceBetween: 20,
      },
      576: {
        slidesPerView: 2.5,
        slidesPerGroup: 2,
        slidesOffsetAfter: 0,
        slidesOffsetBefore: 0,
        touchRatio: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
      1280: {
        slidesPerView: 5,
        slidesPerGroup: 5,
      },
    },
  });

  // ----------------------- 切換分類 -----------------------
  // 課程嚴選
  $(".hot-course-type > li").click(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    // 判斷分類
    if ($(this).hasClass("active")) {
      if ($(this).text() === "募資課程") {
        $(".swiper-container-hot-course").css("display", "flex");
        $(".swiper-container-hot-online-course").css("display", "none");
      } else {
        $(".swiper-container-hot-course").css("display", "none");
        $(".swiper-container-hot-online-course").css("display", "flex");
      }
    }
  });

  // 最新課程
  $(".course-type > li").click(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    // 判斷分類
    if ($(this).hasClass("active")) {
      if ($(this).text() === "線上課程") {
        $(".swiper-container-online-course").css("display", "flex");
        $(".swiper-container-course").css("display", "none");
      } else {
        $(".swiper-container-online-course").css("display", "none");
        $(".swiper-container-course").css("display", "flex");
      }
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
