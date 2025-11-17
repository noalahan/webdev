function loaded() {
  setTimeout(() => {
    $("#loading").css({ animation: "none", opacity: "0" });
    $("#window").css("animation", "windowAnim 0.7s cubic-bezier(0.9, 0, 1, 0.5) forwards");
    $(".loader").css("animation", "hide 0.7s forwards");
  }, 100);
}

$(document).ready(function () {
  const colors = ["#88ccfb", "#f2e2ba", "#607744"];

  async function getData() {
    try {
      const response = await fetch(
        "https://opensheet.elk.sh/1rj9kKlpYkmQZ5jeg58eeEPZjbsyNO2G7xUROnc34PpY/contact"
      );
      const data = await response.json();
      data.forEach((row) => {
        // create elements
        const container = document.createElement("div");
        const name = document.createElement("h2");
        var info = document.createElement("p");
        if (row.link) {
          info = document.createElement("a");
          info.setAttribute("target", "_blank");
          info.style.color = "black";
        }
        const cover = document.createElement("div");

        // append elements to container
        container.append(name);
        container.append(info);
        container.append(cover);

        // add container to webpage
        container.classList.add("container");
        $("#contacts").append(container);

        // set color
        let color = Math.floor(Math.random() * 3);
        container.style.backgroundColor = colors[color];
        container.style.transition = "color .5s";

        // set values for elements
        name.innerText = row.name;
        info.innerText = row.info;
        info.setAttribute("href", row.link);
        info.style.transition = "color .5s";
        cover.setAttribute("id", "cover");
        cover.style.transition = "height .5s";
        row.svg.split(" ").forEach((image) => {
          const svg = document.createElement("img");
          svg.setAttribute("src", "lib/" + image + ".svg");
          if (color <= 1) {
            svg.style.filter = "brightness(0)";
          }
          cover.append(svg);
        });

        // add hover effect
        function reveal() {
          cover.querySelectorAll("img").forEach((img) => {
            img.style.transition = "height .25s";
            img.style.height = "0px";
          });
          container.style.color = color > 1 ? "white" : "black";
          info.style.color = color > 1 ? "white" : "black";
        }
        function hide() {
          container.style.color = colors[color];
          info.style.color = colors[color];
          cover.querySelectorAll("img").forEach((img) => {
            img.style.transition = "height .5s";
            img.style.height = "70px";
          });
        }
        hide();

        // using both click and hover for to be both phone and web friendly
        container.addEventListener("mouseover", reveal);
        container.addEventListener("click", reveal);
        container.addEventListener("mouseout", hide);
      });
    } catch (err) {
      console.log(err);
    }
  }

  getData();

  // disable dragging
  $("img").attr("draggable", false);
});
