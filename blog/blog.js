

const articles = [
  {
    id: 1,
    title: "Septimus Heap Book One: Magyk",
    date: "July 5, 2022",
    description:
      "If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg",
    imgAlt: "Book cover for Septimus Heap 1",
    ages: "10-14",
    genre: "Fantasy",
    stars: "★★★★☆"
  },
  {
    id: 2,
    title: "Magnus Chase Book One: Sword of Summer",
    date: "December 12, 2021",
    description:
      "The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick tries Norse mythology and the result is great.",
    imgSrc:
      "https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300",
    imgAlt: "Book cover for Magnus Chase 1",
    ages: "12-16",
    genre: "Fantasy",
    stars: "⭐⭐⭐⭐"
  },
  {
    id: 3,
    title: "Belgariad Book One: Pawn of Prophecy",
    date: "Feb 12, 2022",
    description:
      "A dispute among the Gods and the theft of a powerful Orb divides the world. Young Garion journeys with his 'Aunt Pol' and an old man called Wolf on a complex mission.",
    imgSrc:
      "https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
    imgAlt: "Book cover for Pawn of Prophecy",
    ages: "12-16",
    genre: "Fantasy",
    stars: "⭐⭐⭐⭐⭐"
  }
];

function renderArticles(list) {
  const container = document.querySelector(".articles");
  if (!container) return; 

  container.innerHTML = ""; 

  list.forEach((item) => {
    const article = document.createElement("article");
    article.className = "post";

    article.innerHTML = `
      <div class="post-grid">
        <aside class="post-details">
          <time>${item.date}</time>
          <ul>
            <li>${item.ages}</li>
            <li>${item.genre}</li>
            <li>${item.stars}</li>
          </ul>
        </aside>

        <div class="post-content">
          <h2>${item.title}</h2>
          <figure>
            <img src="${item.imgSrc}" alt="${item.imgAlt}">
          </figure>
          <p>${item.description}</p>
        </div>
      </div>
    `;

    container.appendChild(article);
  });
}


renderArticles(articles);
