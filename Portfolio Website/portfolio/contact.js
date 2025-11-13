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
          info.setAttribute("href", row.link);
          info.setAttribute("target", "_blank");
          info.style.color = "black";
        }

        container.append(name);
        container.append(info);

        container.classList.add("container");

        $("#contacts").append(container);

        name.innerText = row.name;
        info.innerText = row.info;

        let color = Math.floor(Math.random() * 3);
        container.style.backgroundColor = colors[color];
        if (color > 1) {
          container.style.color = "white";
          info.style.color = "white";
        }

        // add hover effect
        function reveal(event) {
          // name.style.display = "none";
          // container.style.color = "red";
          container.style.color = color > 1 ? "white" : "black"
          info.style.color = color > 1 ? "white" : "black"
        }
        function hide(){
          container.style.color = colors[color];
          info.style.color = colors[color];
        }
        hide();

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
