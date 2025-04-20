$(document).ready(function () {
  const colors = ["#88ccfb", "#607744", "#ba2d0b"];

  async function getSkills() {
    try {
      const response = await fetch(
        "https://opensheet.elk.sh/1rj9kKlpYkmQZ5jeg58eeEPZjbsyNO2G7xUROnc34PpY/skills"
      );
      const data = await response.json();

      const colorA = Math.floor(Math.random() * 3);
      const colorB = Math.floor(Math.random() * 3);

      data.forEach((row) => {
        const containerA = document.createElement("div");
        const prog = document.createElement("p");
        containerA.append(prog);
        containerA.classList.add("container");
        $("#prog").append(containerA);
        prog.innerText = row.prog;
        containerA.style.backgroundColor = colors[colorA];
        if (colorA > 0) {
          containerA.style.color = "white";
        }

        if (row.lang != undefined) {
          const containerB = document.createElement("div");
          const lang = document.createElement("p");
          containerB.append(lang);
          containerB.classList.add("container");
          $("#lang").append(containerB);
          lang.innerText = row.lang;
          containerB.style.backgroundColor = colors[colorB];
          if (colorB > 0) {
            containerB.style.color = "white";
          }
        }
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function getEducation() {
    try {
      const response = await fetch(
        "https://opensheet.elk.sh/1rj9kKlpYkmQZ5jeg58eeEPZjbsyNO2G7xUROnc34PpY/education"
      );
      const data = await response.json();

      const color = Math.floor(Math.random() * 3);

      data.forEach((row) => {
        const container = document.createElement("div");
        const school = document.createElement("h3");
        const location = document.createElement("h4");
        const time = document.createElement("h4");
        const info = document.createElement("p");

        container.append(school);
        container.append(location);
        container.append(time);
        container.append(info);

        container.classList.add("container");

        $("#ed").append(container);

        school.innerText = row.school;
        location.innerText = row.location;
        time.innerText = row.time;
        info.innerText = row.additional;
        container.style.backgroundColor = colors[color];
        if (color > 0) {
          container.style.color = "white";
        }
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function getExperience() {
    try {
      const response = await fetch(
        "https://opensheet.elk.sh/1rj9kKlpYkmQZ5jeg58eeEPZjbsyNO2G7xUROnc34PpY/experience"
      );
      const data = await response.json();

      const color = Math.floor(Math.random() * 3);

      data.forEach((row) => {
        const container = document.createElement("div");
        const name = document.createElement("h3");
        const org = document.createElement("h4");
        const time = document.createElement("h4");
        const info = document.createElement("p");

        container.append(name);
        container.append(org);
        container.append(time);
        container.append(info);

        container.classList.add("container");

        $("#exp").append(container);

        name.innerText = row.title;
        org.innerText = row.organization;
        time.innerText = row.time;
        info.innerText = row.details;
        container.style.backgroundColor = colors[color];
        if (color > 0) {
          container.style.color = "white";
        }
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function getHonors() {
    try {
      const response = await fetch(
        "https://opensheet.elk.sh/1rj9kKlpYkmQZ5jeg58eeEPZjbsyNO2G7xUROnc34PpY/honors"
      );
      const data = await response.json();

      const color = Math.floor(Math.random() * 3);

      data.forEach((row) => {
        const container = document.createElement("div");
        const name = document.createElement("h3");
        const time = document.createElement("h4");
        const info = document.createElement("p");

        container.append(name);
        container.append(time);
        container.append(info);

        container.classList.add("container");

        $("#honor").append(container);

        name.innerText = row.name;
        time.innerText = row.time;
        info.innerText = row.info;
        container.style.backgroundColor = colors[color];
        if (color > 0) {
          container.style.color = "white";
        }
      });
    } catch (err) {
      console.log(err);
    }
  }

  getSkills();
  getEducation();
  getExperience();
  getHonors();

  // disable dragging
  $("img").attr("draggable", false);
});
