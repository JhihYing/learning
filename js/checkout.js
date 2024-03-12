$(document).ready(function () {
  // -----------------------  載入 header -----------------------
  $(".headerpage").load("header.html");

  // -----------------------  載入 footer -----------------------
  $(".footerpage").load("footer.html");

  // ----------------------- 選擇發票類型 (捐贈 & 個人 & 公司) -----------------------
  $('input[name="invoice"]').change(function () {
    // 捐贈
    if ($("#donate").prop("checked")) {
      $(".member-barcode").addClass("active").siblings().removeClass("active");
      $(".mobile-barcode").hide();
      $(".mobile-barcode > input").prop("disabled", true);

      $(".donate-code").css("display", "flex");
      $(".donate-code > input").prop("disabled", false);
    } else {
      $(".donate-code").hide();
      $(".donate-code > input").prop("disabled", true);
    }

    // 個人
    if ($("#personal").prop("checked")) {
      $(".personal").show();
    } else {
      $(".personal").hide();
    }

    // 公司
    if ($("#company").prop("checked")) {
      $(".member-barcode").addClass("active").siblings().removeClass("active");
      $(".mobile-barcode").hide();
      $(".mobile-barcode > input").prop("disabled", true);

      $(".company").show();
    } else {
      $(".company").hide();
    }
  });

  // ----------------------- 個人發票( 會員 & 手機) -----------------------
  $(".personal-type > input").click(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    if ($(".phone-input-btn").hasClass("active")) {
      $(".mobile-barcode").css("display", "flex");
      $(".mobile-barcode > input").prop("disabled", false);
    } else {
      $(".mobile-barcode").hide();
      $(".mobile-barcode > input").prop("disabled", true);
    }
  });
});
