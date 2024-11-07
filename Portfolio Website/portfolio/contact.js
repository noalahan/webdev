$(document).ready(function () {
  const colors = ["#88ccfb", "#607744", "#f2e2ba", "#f2e2ba"];

  async function getData() {
    try {
      const response = await fetch(
        "https://opensheet.elk.sh/1rj9kKlpYkmQZ5jeg58eeEPZjbsyNO2G7xUROnc34PpY/contact"
      );
      const data = await response.json();
      data.forEach((row) => {
        const container = document.createElement("div");
        const name = document.createElement("h2");
        var info;
        if (row.link == 1) {
          info = document.createElement("a");
          info.setAttribute("href", row.info);
          info.setAttribute("target", "_blank");
        } else {
          info = document.createElement("p");
        }
        container.append(name);
        container.append(info);

        container.classList.add("container");

        $("#contacts").append(container);

        name.innerText = row.name;
        info.innerText = row.info;

        container.style.backgroundColor = colors[Math.floor(Math.random() * 4)];
      });
    } catch (err) {
      console.log(err);
    }
  }

  getData();
});
