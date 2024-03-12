$(document).ready(function () {
  // ----------------------- 登入 (彈跳視窗) -----------------------
  // 點擊登入
  $("#login").click(function () {
    // $(".index").css("filter", "blur(5px)");
    $(".popup-bg").fadeIn(200);
    $(".login-wrap").fadeIn(400);
    disableScroll();
  });

  // 關閉登入
  $("#login-close-btn").click(function () {
    // $(".index").css("filter", "initial");

    $(".popup-bg").fadeOut(400);
    $(".login-wrap").fadeOut(200);
    enableScroll();

    // 初始化-密碼隱藏
    $("#password").attr("type", "password");
    $(".password-eye-icon > img").attr("src", "./images/hide-password.svg");

    // 清空填寫的資料
    $("#account").val("");
    $("#password").val("");
  });

  // 切換密碼(顯示/隱藏)
  $("#handlePassword").click(function () {
    let passwordInput = $("#password");
    let inputType = passwordInput.attr("type");

    if (inputType === "password") {
      $(".password-eye-icon > img").attr("src", "./images/show-password.svg");
      passwordInput.attr("type", "text");
    } else {
      $(".password-eye-icon > img").attr("src", "./images/hide-password.svg");
      passwordInput.attr("type", "password");
    }
  });

  // 立即註冊
  $(".register-now").click(function () {
    $(".register-radius-box").animate({ scrollTop: 0 });
    $(".register-popup-bg").fadeIn(200);
    $(".register-wrap").fadeIn(400);
    disableScroll();

    $(".popup-bg").fadeOut(400);
    $(".login-wrap").fadeOut(200);

    // 清空(登入)填寫的資料
    $("#account").val("");
    $("#password").val("");

    // 初始化-密碼隱藏
    $("#password").attr("type", "password");
    $(".password-eye-icon > img").attr("src", "./images/hide-password.svg");
  });
});

// 禁用滾動
function disableScroll() {
  document.body.style.overflow = "hidden";
}

// 解除禁用滾動
function enableScroll() {
  document.body.style.overflow = "";
}
