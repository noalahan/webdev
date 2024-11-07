$(document).ready(function () {
  // hide all unnecessary pages
  $(".sunrise").hide();
  $(".food").hide();
  $(".fat").hide();
  // switch page
  $(".landing button").click(function () {
    $(".landing").hide();
    $(".sunrise").show();
    alert("Scroll slowly to read");
  });
  $(".food button").click(function () {
    $(".food").hide();
    $(".fat").show();
    $(document).scrollTop(0);
    $(".fat #caterpillar").animate({ left: "120vw", top: "120vh" }, 5000);
    $("#trail").animate({ left: "0" }, 6000, function () {
      $(".fat #caterpillar").hide();
      $(".fat #leaf").hide();
      $("#trail").hide();
    });
  });

  $(this).scroll(function () {
    // sunrise
    var yOffset = $(this).scrollTop();
    $("#moon").css({ top: yOffset * 0.6 + 30 + "px" });
    // move caterpillar
    if ($(".sunrise").height() / yOffset == 1.5) {
      $(".sunrise #caterpillar").animate(
        { left: $(".sunrise").width() },
        2000,
        function () {
          $(".sunrise").hide();
          $(".food").show();
          $(document).scrollTop(0);
          $("li").each(function (i) {
            $(this).css({ top: i * 9.5 + "vh", height: 100 - i * 9.5 + "vh" });
          });
        }
      );
      $(".sunrise p").text("He started to look for some food.");
    }
    // butterfly reveal
    if (
      $(".fat").css("display") != "none" &&
      $(".fat").height() / yOffset == 2
    ) {
      $("#bigfat").animate({ opacity: "0" }, 1500);
      $("#cacoon").animate({ opacity: "100%" }, 2000, function () {
        $("#cacoon").animate({ opacity: "0" }, 1500);
        $("#butterfly").animate({ opacity: "100%" }, 2000);
      });
    }
  });

  let observer = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting) {
      $("#egg").hide();
      $("#caterpillar").show();
      $(".sunrise p").text(
        "One Sunday morning the warm sun came up and - pop! - out of the egg came a tiny and very hungry caterpillar."
      );
      $(".sunrise p").css({
        color: "black",
        "background-color": "white",
      });
    }
  });
  observer.observe($("#sun")[0]);
});
