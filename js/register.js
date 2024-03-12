$(document).ready(function () {
  // ----------------------- 註冊 (彈跳視窗) -----------------------
  // 點擊註冊
  $("#signUp, #signUp-rwd").click(function () {
    // $(".index").css("filter", "blur(5px)");

    $(".register-radius-box").animate({ scrollTop: 0 });
    $(".register-popup-bg").fadeIn(200);
    $(".register-wrap").fadeIn(400);
    disableScroll();
  });

  // 關閉註冊 / 立即登入
  $("#register-close").click(function () {
    // $(".index").css("filter", "initial");
  });

  $("#register-close, .register-function-box > a").click(function () {
    $(".register-popup-bg").fadeOut(400);
    $(".register-wrap").fadeOut(200);
    enableScroll();

    // 初始化-密碼隱藏
    $("#register-password").attr("type", "password");
    $("#handleCheckRegisterPassword").attr("type", "password");
    $("#check-password > img").attr("src", "./images/hide-password.svg");
    $("#handleCheckRegisterPassword > img").attr(
      "src",
      "./images/hide-password.svg"
    );

    // 清空(註冊)填寫的資料
    $("#register-account").val("");
    $("#register-password").val("");
    $("#check-password").val("");
    $("#name").val("");
    $("#gender").val("");
    $("#phone").val("");
    $("#birthday").val("");
    $("#agree").prop("checked", false);
  });

  // 立即登入
  $(".register-function-box > a").click(function () {
    $(".popup-bg").fadeIn(200);
    $(".login-wrap").fadeIn(400);
  });

  // 切換密碼 & 確認密碼(顯示/隱藏)
  $("#handleRegisterPassword, #handleCheckRegisterPassword").click(function () {
    let passwordInput = $(this).siblings("input");
    let inputType = passwordInput.attr("type");

    if (inputType === "password") {
      $(this).find("img").attr("src", "./images/show-password.svg");
      passwordInput.attr("type", "text");
    } else {
      $(this).find("img").attr("src", "./images/hide-password.svg");
      passwordInput.attr("type", "password");
    }
  });

  // -------------------- 會員權利說明 --------------------
  $(".memberNotice").click(function () {
    $(".membership-wrap").fadeIn(200);
    $(".membership-wrap .container").animate({ scrollTop: 0 });
  });

  // 關閉畫面
  $(".member-close-btn").click(function () {
    $(".membership-wrap").fadeOut(200);
    $(".register-wrap .container").animate({ scrollTop: 0 });
  });

  // -------------------- 個資法及隱私權相關規範 --------------------
  $(".privacyNotice").click(function () {
    $(".privacy-wrap").fadeIn(200);
    $(".privacy-wrap .container").animate({ scrollTop: 0 });
  });

  // 關閉畫面
  $(".privacy-close-btn").click(function () {
    $(".privacy-wrap").fadeOut(200);
    $(".register-wrap .container").animate({ scrollTop: 0 });
  });

  // -------------------- 購物須知 --------------------
  $(".shopNotice").click(function () {
    $(".shop-wrap").fadeIn(200);
    $(".shop-wrap .container").animate({ scrollTop: 0 });
  });

  // 關閉畫面
  $(".shop-close-btn").click(function () {
    $(".shop-wrap").fadeOut(200);
    $(".register-wrap .container").animate({ scrollTop: 0 });
  });
});
