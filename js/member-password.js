$(document).ready(function () {
  // -----------------------  載入 header -----------------------
  $(".headerpage").load("header.html", function () {
    // -----------------------  載入 footer -----------------------
    $(".footerpage").load("footer.html", function () {
      $("body").show(); // 顯示頁面內容
    });
  });

  // -----------------------  密碼顯示 / 隱藏 -----------------------
  $(".password-eye-image").click(function () {
    const passwordInput = $(this).siblings("input");
    let inputType = passwordInput.attr("type");

    if (inputType === "password") {
      $(this).find("img").attr("src", "./images/show-password.svg");
      passwordInput.attr("type", "text");
    } else {
      $(this).find("img").attr("src", "./images/hide-password.svg");
      passwordInput.attr("type", "password");
    }
  });

  // -----------------------  取消(內容清空) -----------------------
  $(".cancel-btn").click(function () {
    $("#old-password").val("");
    $("#new-password").val("");
    $("#member-check-password").val("");
  });
});
