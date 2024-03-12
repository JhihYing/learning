$(document).ready(function () {
  // -----------------------  載入 header -----------------------
  $(".headerpage").load("header.html", function () {
    // -----------------------  載入 footer -----------------------
    $(".footerpage").load("footer.html", function () {
      $("body").show(); // 顯示頁面內容
    });
  });
});
