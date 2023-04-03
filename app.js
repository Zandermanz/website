//   The additional properties include:
  
//       servings: The number of servings the recipe makes.
//       prepTime: The amount of time it takes to prepare the ingredients.
//       cookTime: The amount of time it takes to cook the recipe.
//       totalTime: The total amount of time it takes to make the recipe.
//       cuisine: The type of cuisine the recipe is from.
//       difficulty: The level of difficulty of the recipe (e.g. Easy, Intermediate, Difficult).
//       rating: The average rating of the recipe.
//       reviews: The number of reviews the recipe has received.
//       source: An object containing the name and URL of the source where the recipe was obtained from.

const recipes = [
    {
      name: 'Spaghetti and Meatballs',
      image: 'https://www.simplyrecipes.com/thmb/AdhNwERGwUBq5ONIGRk40m9DCZw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Spaghetti-And-Meatballs-SEO-919eb9795fe64f0490415065d82309f1.jpg',
      description: 'A random recipe',
      recipeCategory: "Entree",
      vegetarian: false,
      ingredients: ['1 pound spaghetti', '1 pound ground beef', '1/2 cup breadcrumbs', '1 egg', '1/2 cup grated parmesan cheese', '1/4 cup chopped fresh parsley', '2 cloves garlic, minced', '1 teaspoon salt', '1/4 teaspoon black pepper', '2 tablespoons olive oil', '1 onion, chopped', '2 cloves garlic, minced', '1 (28-ounce) can crushed tomatoes', '1/2 teaspoon dried basil', '1/2 teaspoon dried oregano'],
      instructions: ['Cook spaghetti according to package directions.', 'In a large bowl, mix together ground beef, breadcrumbs, egg, parmesan cheese, parsley, garlic, salt, and pepper. Form into meatballs.', 'In a large skillet, heat olive oil over medium heat. Add meatballs and cook until browned on all sides, about 8 minutes.', 'Remove meatballs from skillet and set aside.', 'Add onion and garlic to skillet and cook until softened, about 5 minutes.', 'Add crushed tomatoes, basil, and oregano to skillet and bring to a simmer. Return meatballs to skillet and simmer until sauce has thickened, about 15 minutes.', 'Serve meatballs and sauce over spaghetti.'],
      servings: 6,
      prepTime: '20 minutes',
      cookTime: '30 minutes',
      totalTIme: '50 minutes',
      cuisine: 'Italian',
      source: {
        name: 'Simply Recipes',
        url: 'https://www.simplyrecipes.com/recipes/spaghetti_and_meatballs/'
      }
    
    },
    
    {   
      id: 0,
      name: "American Chop Suey",
      image: 'https://www.sugarandsoul.co/wp-content/uploads/2017/12/American-Chop-Suey-Recipe-3.jpg',
      description: "A family favorite",
      recipeCategory: "Entree",
      vegetarian: false,
      servings: 6,
      prepTime: '10 minutes',
      cookTime: '20 minutes',
      totalTIme: '30 minutes',
      cuisine: 'Italian',
      ingredients: [
          "1 lb. of pasta", 
          "1 lb. ground beef", 
          "2 cloves of garlic", 
          "2 cans of condensed tomato soup",
          "2 cans of stewed tomatoes", 
          "Salt to taste"
      ],
      instructions:[
          "Bring salted water to a boil and cook pasta until tender or according to package directions.", 
          "Brown ground beef over medium high heat.", 
          "As the beef is almost done, add garlic and cook for 1 minute.", 
          "Add condensed tomato soup and canned stewed tomatoes to beef and simmer. If unavailable, you may substitute regular tomato soup with added sugar for the condensed tomato soup.",
          "Add cooked pasta to sauce and stir."
      ],
      source: {
        name: 'Sugar and Soul',
        url: 'https://www.sugarandsoul.co/american-chop-suey/'
      }
    },

    {
    id: 0,
      name: "Name",
      image: '../images/chicken.jpg',
      description: "Descriptive Text",
      recipeCategory: "Entree",
      vegetarian: false,
      servings: 6,
      prepTime: '10 minutes',
      cookTime: '20 minutes',
      totalTIme: '30 minutes',
      cuisine: 'Cuisine',
      ingredients: [
          "Ingredient 1", 
          "Ingredient 2", 
      ],
      instructions:[
          "Instruction 1",
          "Instruction 2", 
      ],
      source: {
        name: 'Site Name',
        url: './index.html'
      }
    },
    
    /* Template Recipe here 
    {
      id: 0,
        name: "Name",
        image: '../images/chicken.jpg',
        description: "Descriptive Text",
        recipeCategory: "Entree",
        vegetarian: false,
        servings: 6,
        prepTime: '10 minutes',
        cookTime: '20 minutes',
        totalTIme: '30 minutes',
        cuisine: 'Cuisine',
        ingredients: [
            "Ingredient 1", 
            "Ingredient 2", 
        ],
        instructions:[
            "Instruction 1",
            "Instruction 2", 
        ],
        source: {
          name: 'Site Name',
          url: './index.html'
        }
      },
    
    End Template Recipe Here*/ 
    
      // Add additional recipes here
  ];

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

  


  
  