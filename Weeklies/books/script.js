/*console.log('hi')
const data = fetch('https://jsonplaceholder.typicode.com/posts')
console.log(data)

fetch('https://jsonplaceholder.typicode.com/posts').then(
    (response)=>{
        const received_data = response.json()
        received_data.then((data) => {
            console.log(data)
        })
    }
)


*/

const books = document.querySelector("#books");

async function getData() {
  try {
    const response = await fetch(
      "https://opensheet.elk.sh/1OV_ErFOx8-10jqWy4b8HO-ZoOIMh3TcUNbmrcbQlb50/bookList"
    );
    const data = await response.json();

    data.forEach((row) => {
      const container = document.createElement("div");
      const title = document.createElement("h2");
      const author = document.createElement("h3");
      const rating = document.createElement("img");
      const cover = document.createElement("img");
      container.append(title);
      container.append(author);
      container.append(rating);
      container.append(cover);

      container.classList.add("container");
      container.classList.add(row.rating);

      books.append(container);

      title.innerText = row.book;
      author.innerText = row.author;
      rating.src = "img/star" + row.rating + ".png";
      rating.setAttribute("alt", row.rating + "/5 stars");
      rating.setAttribute("id", "rating");
      cover.src = row.cover;
      cover.setAttribute("alt", row.book + " book cover");
    });
  } catch (err) {
    console.log(err);
  }
}

const currentRead = document.querySelector("#currentRead");

async function getCurrent() {
  try {
    const response = await fetch(
      "https://opensheet.elk.sh/1OV_ErFOx8-10jqWy4b8HO-ZoOIMh3TcUNbmrcbQlb50/current"
    );
    const data = await response.json();

    data.forEach((row) => {
      const current = document.createElement("div");
      const cover = document.createElement('img');
      const title = document.createElement("h2");
      const author = document.createElement("h3");
      const total = document.createElement("p");
      const page = document.createElement("p");
      const progress = document.createElement("p");
      const thoughts = document.createElement("p");
      current.append(cover);
      current.append(title);
      current.append(author);
      current.append(total);
      current.append(page);
      current.append(progress);
      current.append(thoughts);

      current.classList.add("current");
      currentRead.append(current);

      title.innerText = row.book;
      author.innerText = row.author;
      cover.src = row.cover;
      cover.setAttribute('alt', row.book + ' book cover')
      total.innerText = "Total page count: " + row.pageCount;
      page.innerText = "Current page: " + row.lastPage;
      progress.innerText = "Progress: " + row.progress;
      thoughts.innerText = "Current thoughts: " + row.thoughts;
      cover.src = row.cover;
      cover.setAttribute('alt', row.book + ' book')
    });
  } catch (err) {
    console.log(err);
  }
}

getData();
getCurrent();
filterSelection("all");

// called via html
function filterSelection(n) {
  if (n == "all") n = "";
  var books = document.getElementsByClassName("container");
  for (var i = 0; i < books.length; i++) {
    hide(books[i]); // hide all
    if (books[i].className.search(n) > -1) {
      // show applicable
      show(books[i]);
    }
  }
}

// filterSelection() helper functs
function show(element) {
  element.id = "";
}

function hide(element) {
  element.id = "hide";
}

const btnContainer = document.querySelector("#btnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    // deactivate current
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    // activate new btn
    this.className += " active";
  });
}
