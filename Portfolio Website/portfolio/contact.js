$(document).ready(function () {
  const colors = ["#88ccfb", "#f2e2ba", "#607744"];

  async function getData() {
    try {
      const response = await fetch(
        "https://opensheet.elk.sh/1rj9kKlpYkmQZ5jeg58eeEPZjbsyNO2G7xUROnc34PpY/contact"
      );
      const data = await response.json();
      data.forEach((row) => {
        const container = document.createElement("div");
        const name = document.createElement("h2");
        var info = document.createElement("p");
        if (row.link) {
          info = document.createElement("a");
          info.setAttribute("target", "_blank");
          info.style.color = "black";
        }
        const img = document.createElement("img");

        container.append(name);
        container.append(info);
        container.append(img);

        container.classList.add("container");

        $("#contacts").append(container);

        name.innerText = row.name;
        info.innerText = row.info;
        info.setAttribute("href", row.link);
        info.style.transition = "color .5s";
        img.setAttribute("src", "image/logo.png");
        img.style.transition = "width .5s";

        let color = Math.floor(Math.random() * 3);
        container.style.backgroundColor = colors[color];
        container.style.transition = "color .5s";

        // add hover effect
        function reveal() {
          img.style.transition = "width .25s";
          img.style.width = "0px";
          container.style.color = color > 1 ? "white" : "black";
          info.style.color = color > 1 ? "white" : "black";
        }
        function hide() {
          container.style.color = colors[color];
          info.style.color = colors[color];
          img.style.transition = "width .5s";
          img.style.width = "70px";
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
