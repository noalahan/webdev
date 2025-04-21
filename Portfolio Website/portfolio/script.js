document.querySelectorAll(".lazy-image").forEach((img) => {
  img.addEventListener("load", () => {
    const loader = img.parentElement.querySelector(".loader");
    if (loader) {
      setTimeout(() => {
        loader.style.opacity = "0";
        setTimeout(() => {
          loader.style.display = "none";
        }, 800);
      }, 500);
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
    const bird = $(this);
    let count = 0;
    const maxCount = 21; // Number of times to switch between poses

    function fidget() {
      if (count < maxCount) {
        // Switch between sitting and flying
        if (count % 2 === 0) {
          bird.attr("src", "image/bird_fly.png");
        } else {
          bird.attr("src", "image/bird_sit.png");
        }
        count++;
        // Wait 200ms before next switch
        setTimeout(fidget, 150 - (maxCount - count) * 10);
      } else {
        // Return to original state
        bird.attr("src", "image/bird.png");
      }
    }

    // Start the fidget animation
    fidget();
  });
});
