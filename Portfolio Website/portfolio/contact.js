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

        // set values for elements
        name.innerText = row.name;
        info.innerText = row.info;
        info.setAttribute("href", row.link);
        info.style.transition = "color .5s";
        cover.setAttribute("id", "cover");
        cover.style.transition = "height .5s";
        row.svg.split(" ").forEach((image) => {
          const svg = document.createElement("img");
          svg.setAttribute("src", "lib/"+image+".svg");
          cover.append(svg)
        });

        // set color
        let color = Math.floor(Math.random() * 3);
        container.style.backgroundColor = colors[color];
        container.style.transition = "color .5s";

        // add hover effect
        function reveal() {
          cover.getElementsByTagName("img").forEach(img){
            img.style.transition
          }
          cover.style.height = "10px";
          // cover.css({"transition": "height .25s", "height": "0px"})
          container.style.color = color > 1 ? "white" : "black";
          info.style.color = color > 1 ? "white" : "black";
        }
        function hide() {
          container.style.color = colors[color];
          info.style.color = colors[color];
          $("#cover img").css({"transition": "height .5s", "height": "70px"})
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
