$(document).ready(function () {
  const colors = ["#88ccfb", "#f2e2ba", "#f2e2ba", "#ba2d0b"];

  async function getData() {
    try {
      const response = await fetch(
        "https://opensheet.elk.sh/1rj9kKlpYkmQZ5jeg58eeEPZjbsyNO2G7xUROnc34PpY/projects"
      );
      const data = await response.json();
      data.forEach((row) => {
        const container = document.createElement("div");
        const name = document.createElement("a");
        const time = document.createElement("h4");
        const info = document.createElement("p");

        container.append(name);
        container.append(time);
        container.append(info);

        container.classList.add("container");

        $("#" + row.subject).append(container);

        name.innerText = row.name;
        name.setAttribute("href", row.link);
        name.setAttribute("target", "_blank");
        time.innerText = row.time;
        info.innerText = row.description;

        container.style.backgroundColor = colors[Math.floor(Math.random() * 4)];
      });
    } catch (err) {
      console.log(err);
    }
  }

  getData();
});
