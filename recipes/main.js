// main.js

import recipes from "./recipes.mjs";


function random(num) {
  return Math.floor(Math.random() * num);
}


function getRandomListEntry(list) {
  const listLength = list.length;
  const randomNum = random(listLength);
  return list[randomNum];
}


function tagsTemplate(tags) {
  if (!tags || tags.length === 0) {
    return "";
  }

  const items = tags.map((tag) => `<li>${tag}</li>`).join("");

  return `<ul class="recipe__tags">
    ${items}
  </ul>`;
}


function ratingTemplate(rating) {
  let html = `<span
    class="rating"
    role="img"
    aria-label="Rating: ${rating} out of 5 stars"
  >`;

  const maxStars = 5;
  for (let i = 1; i <= maxStars; i++) {
    if (i <= rating) {
      html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
    } else {
      html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
    }
  }

  html += `</span>`;
  return html;
}


function recipeTemplate(recipe) {
  const ingredientsHtml = recipe.recipeIngredient
    .map((item) => `<li>${item}</li>`)
    .join("");

  const instructionsHtml = recipe.recipeInstructions
    .map((step) => `<li>${step}</li>`)
    .join("");

  return `
    <article class="recipe-card">
      <img
        src="${recipe.image}"
        alt="${recipe.name}"
      >

      <div class="recipe-content">
        ${tagsTemplate(recipe.tags)}

        <h2>${recipe.name}</h2>

        ${ratingTemplate(recipe.rating)}

        <p class="recipe-description">
          ${recipe.description}
        </p>

        <h3>Ingredients</h3>
        <ul>
          ${ingredientsHtml}
        </ul>

        <h3>Instructions</h3>
        <ol>
          ${instructionsHtml}
        </ol>
      </div>
    </article>
  `;
}


function renderRecipes(recipeList) {
  const recipeSection = document.querySelector(".recipe");
  const html = recipeList.map((recipe) => recipeTemplate(recipe)).join("");
  recipeSection.innerHTML = html || "<p>No recipes found.</p>";
}


function filterRecipes(query) {
  const q = query.toLowerCase().trim();

 
  if (!q) {
    return recipes
      .slice()
      .sort((a, b) => a.name.localeCompare(b.name));
  }

  const filtered = recipes.filter((recipe) => {
    const nameMatch = recipe.name.toLowerCase().includes(q);
    const descMatch = recipe.description.toLowerCase().includes(q);

    const ingredientMatch = recipe.recipeIngredient?.find((item) =>
      item.toLowerCase().includes(q)
    );

    const tagMatch = recipe.tags?.find((tag) =>
      tag.toLowerCase().includes(q)
    );

    return nameMatch || descMatch || ingredientMatch || tagMatch;
  });

  const sorted = filtered.sort((a, b) => a.name.localeCompare(b.name));
  return sorted;
}


function searchHandler(e) {
  e.preventDefault();

  const input = document.querySelector("#search");
  const query = input.value || "";

  const results = filterRecipes(query);
  renderRecipes(results);
}


function init() {
  const randomRecipe = getRandomListEntry(recipes);
  renderRecipes([randomRecipe]);

  
  const form = document.querySelector(".search form");
  form.addEventListener("submit", searchHandler);
}


init();
