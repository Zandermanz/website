// Select the recipe card template and container
const cardTemplate = document.querySelector('#card-template');
const cardContainer = document.querySelector('#card-container');

// Loop through the recipes array and populate the card template for each recipe
recipes.forEach(recipe => {
  // Clone the card template and remove the "hidden" class
  const card = cardTemplate.content.cloneNode(true);
  card.querySelector('.card').classList.remove('hidden');

  // Set the recipe data on the card elements
  card.querySelector('.card-img-top').src = recipe.image;
  card.querySelector('.card-title').textContent = recipe.name;
  card.querySelector('.card-text').textContent = recipe.description;
  //card.querySelector('.list-group-item').textContent = `${recipe.ingredients}`;
  card.querySelector('.stretched-link').href = recipe.source.url;

  // Append the card to the container
  cardContainer.appendChild(card);
});

  


  
  