$(document).ready(function () {
  async function getData() {
    try {
      const response = await fetch(
        "https://opensheet.elk.sh/1rj9kKlpYkmQZ5jeg58eeEPZjbsyNO2G7xUROnc34PpY/about"
      );
      const data = await response.json();
      data.forEach((row) => {
        const container = document.createElement("div");
        const info = document.createElement("p");

        container.append(info);

        container.classList.add("container");

        $("#text").append(container);

        info.innerText = row.text;
      });
    } catch (err) {
      console.log(err);
    }
  }

  getData();

  // disable dragging
  $("img").attr("draggable", false);
});
