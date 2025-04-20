document.querySelectorAll(".lazy-image").forEach((img) => {
  img.addEventListener("load", () => {
    const loader = img.parentElement.querySelector(".loader");
    if (loader) {
      loader.style.opacity = "0";
      setTimeout(() => {
        loader.style.display = "none";
      }, 800);
    }
  });

  // If the image is already cached
  if (img.complete) {
    img.dispatchEvent(new Event("load"));
  }
});

$(document).ready(function () {
  function sizing() {
    var height = $("#example").height();
    var width = $("#example").width();
    var n;

    $(".stairs").each(function (i) {
      $(this).css({ top: (i + 1) * (height + 50) - height * 0.05 + "px" });
    });
    $(".awning").each(function (i) {
      $(this).css({ top: (i + 1) * (height + 50) - height * 0.35 + "px" });
      n = i;
    });

    $("#door").css({ top: (n + 1) * (height + 50) + "px", width: width });
    var doorH = $("#door").height();
    $(".windows").css({ "padding-bottom": doorH * 1.15 + 20 + "px" });
  }

  // staircase sizing
  $(window).on("load", sizing); // safer than $(document).ready

  // update sizing if the screen resizes
  $(window).resize(function () {
    sizing();
  });

  // disable dragging
  $("img").attr("draggable", false);

  // parallax
  const clouds_back = document.querySelector(".clouds_back");
  const clouds = document.querySelector(".clouds");
  const skyline = document.querySelector("#skyline");

  function handleScroll() {
    const yOffset = window.scrollY;
    clouds_back.style.transform = `translateY(${yOffset * 0.8}px)`;
    clouds.style.transform = `translateY(${yOffset * 0.6}px)`;
    skyline.style.transform = `translateY(${yOffset * -0.3}px)`;
    document.body;
  }

  window.addEventListener("scroll", handleScroll);

  $("#bird").click(function () {
    $(this).attr("src", "image/flyout.png");
    $(this).animate({ right: "-5%", bottom: "30vh" }, 800, function () {
      $(this).attr("src", "image/flyin.png");
      $(this).animate({ right: "10%", bottom: "20vh" }, 800, function () {
        $(this).attr("src", "image/bird.png");
      });
    });
  });
});
