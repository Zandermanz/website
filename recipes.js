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
        name: '',
        url: './pages/americanchopsuey.html'
      }
    },

    {   id: 1,
        name: "Baked Chicken",
        image: '../images/chicken.jpg',
        description: "Descriptive Text",
        recipeCategory: "Entree",
        vegetarian: false,
        ingredients:[
            "Whole chicken",
            "Kosher salt- ¼ cup",
            "Pepper",
            "Lemons- 2",
            "Garlic- 6-8 cloves peeled",
            "Rosemary- several sprigs or Thyme- one sprig",
            "Butter- 6 Tbsp."
        ],
        instructions:[
            "8 to 24 hours before baking dry brine by rubbing chicken with salt and pepper under the skin of the breast and let sit covered in the fridge.",
            "Quarter lemons, peel garlic, and stuff in cavity of chicken along with the herb you are using.",
            "Add seasoning under skin: Cut butter into cubes, smear some of the butter under the skin along with reserved herbs and slivered garlic cloves.",
            "Rub outside of the chicken with remaining butter and herbs.",
            "Roast at 350 with aluminum foil tent for the first 30 minutes. Remove tent and cook for another 30-60 minutes, checking temperature with a meat thermometer."
        ],
        source: {
          name: 'Site Name',
          url: '/pages/bakedchicken.html'
        }
    }, 
    {   id: 2,
        name: "Chocolate Bread Pudding",
        image: 'https://images-gmi-pmc.edge-generalmills.com/9e1a56ec-9fc9-43a0-a568-06d75834952e.jpg',
        description: "Descriptive Text",
        recipeCategory: "Dessert",
        vegetarian: true,
        ingredients: [ 
            "Bread- 4 Cups Day old Bread, cubed or torn",
            "Milk- 4 cups",
            "Eggs- 4",
            "Cocoa Powder- 3 Heaping tablespoons",
            "Sugar- 3/4 to 1 cup",
            "Vanilla- 1 - 2 teaspoons",
            "Cinnamon- pinch if desired- optional"
        ],
        instructions:[
            "Preheat oven to 350 degrees.",
            "Scald milk by heating it up until skin forms on top.",
            "Add sugar and bread to milk.",
            "Whisk cocoa into eggs in separate bowl.",
            "Temper the eggs by slowly adding about 1 cup of hot milk to eggs while whisking. This prevents you from making scrambled eggs.",
            "Stir the egg/milk mixture back into the scalded milk.",
            "Add vanilla and cinnamon if desired.",
            "Pour into buttered casserole.",
            "Bain Marie the casserole dish by placing it inside another larger casserole dish filed half-way with boiling or hot water.",
            "Bake at 350 Degrees until set, around 30-45 minutes. A knife inserted into the center should come out clean."
        ],
        source: {
          name: 'Site Name',
          url: './pages/chocolate_bread_pudding.html'
        }
    },

    {   id: 3,
        name: "Creamed Mushrooms",
        image: '../images/mushrooms.jpg',
        description: "Descriptive Text",
        recipeCategory: "Entree",
        vegetarian: true,
        ingredients: [
            "Minced Onion- 2 Tbsp.", 
            "Butter- 2 Tbsp.", 
            "Brandy- 1 Tbsp.", 
            "Sherry- 1 Tbsp.", 
            "Mushrooms- 1 to 2 pounds any fresh mushroom", 
            "Cream- 1 ???", 
            "Flour- 1 Tbsp." 
        ],
        instructions:[
            "Melt butter in skillet, add onion, saute until soft.",
            "Add quartered mushrooms to the pan and saute over high heat until moisture evaporates.",
            "Sprinkle top with 1 Tbsp. flour.",
            "Add salt, pepper, and cream.",
            "Simmer briefly and then add brandy and sherry.",
            "Correct seasoning as needed and serve."
        ],
        source: {
          name: 'Site Name',
          url: './index.html'
        }
    },

    {   id: 4,
        name: "General Tso's Chicken",
        image: '../images/trail.jpg',
        description: "Descriptive Text",
        recipeCategory: "Entree",
        vegetarian: false,
        ingredients: [
            "4 cups cooked white or brown rice",
            "Steamed broccoli",
            "Sauce",
            "2 tsp sesame oil",
            "2 tsp cornstarch",
            "2 large cloves garlic, minced",
            "1 Tbsp ginger, minced",
            "1 Tbsp rice vinegar",
            "1/4 cup maple syrup",
            "3 Tbsp tamari or soy sauce",
            "1 Tbsp water",
            "Tofu",
            "12 ounces extra-firm tofu",
            "3 Tbsp tamari or soy sauce",
            "1 tsp chili garlic sauce",
            "1 tsp toasted sesame oil",
            "1 Tbsp maple syrup",
            "4-5 Tbsp cornstarch",
            "2 Tbsp neutral oil (such as grape seed or avocado)",
            "Main",
            "1 Tbsp sesame oil",
            "1 bundle green onions",
            "4-7 dried Thai red chilies or substitute 1 Tbsp chili garlic sauce",
            "Assorted vegetables on hand, such as: carrots, cabbage, onions, etc.",
            "Sesame seeds, for garnish"
        ],
        instructions:[    
            "Drain tofu and place between towels or paper towels. Set something heavy on top to press out excess water for 10 minutes.",
            "Chop green onions, garlic, and ginger and set aside.",
            "While tofu is pressing, prepare sauce by combining sesame oil, cornstarch, minced garlic, minced ginger, rice vinegar, maple syrup, tamari or soy sauce, and water in a small bowl and stir. Taste and adjust seasonings as needed.",
            "Heat wok to high heat and cut tofu into cubes.",
            "Add tofu, 1 tsp soy sauce, 1 tsp sesame oil, and two tablespoon cornstarch to a plastic freezer bag and shake",
            "To the hot wok, add 2 Tbsp and add in tofu.",
            "Cook tofu until golden brown. Set aside.",
            "Return wok to stove. Add 1 Tbsp sesame oil, any veg you want, chopped green onions, and dried red chilies. Sauté for 1-2 minutes, stirring frequently.",
            "Add the sauce and tofu. Cook, stirring frequently, to coat the tofu and vegetables for 1-2 minutes.",
            "Serve with rice and steamed broccoli or other desired sides."
        ],
        source: {
          name: 'Site Name',
          url: './index.html'
        }
    },

    {   id: 5,
        name: "Shirley's Grape-nut Pudding",
        image: '../images/bridge.jpg',
        description: "Descriptive Text",
        recipeCategory: "Dessert",
        vegetarian: true,
        ingredients: [ 
            "Grape-nuts- 1 cup", 
            "Milk- 4 cups", 
            "Eggs- 4", 
            "Sugar- 1 cup", 
            "Vanilla- 2 teaspoons", 
            "Cinnamon- pinch if desired- optional"
        ],
        instructions:[ 
            "Preheat oven to 350 degrees.",
            "Scald milk by heating it up until skin forms on top.",
            "Add sugar and Grape-nuts to milk.",
            "Temper the eggs by slowly adding about 1 cup of hot milk to eggs while whisking. This prevents you from making scrambled eggs.",
            "Stir the egg/milk mixture back into the scalded milk.",
            "Add vanilla (and cinnamon if desired).",
            "Pour into buttered casserole.",
            "Bain Marie the casserole dish by placing it inside another larger casserole dish filed half-way with boiling or hot water.",
            "Bake at 350 Degrees until set, around 30-45 minutes.",
            "Stir pudding halfway through the bake to prevent separation of the Grape-nuts and custard in the final dish.",
            "A knife inserted into the center should come out clean when done."
        ],
        source: {
          name: 'Site Name',
          url: './index.html'
        }
    },

    {   id: 6,
        name: "Kombucha",
        image: 'https://images.everydayhealth.com/images/potential-benefits-of-kombucha-alt1-1440x810.jpg?w=1110',
        description: "Strange Brew",
        recipeCategory: "Beverage",
        vegetarian: true,
        ingredients: [
            "Water- 1 Gallon",
            "Black Tea- 4 Tablespoons or 12 teabags",
            "Sugar- 1 Cup",
            "Kombucha Starter- 2 Cups"
        ],
        instructions:[
            "Boil water.",
            "Steep tea.",
            "Add sugar and stir to dissolve.",
            "Wait until sweet tea cools to room temperature (below 90F). Alternatively, brew a smaller batch of hot sweet tea and add cold water to bring it closer to room temperature.",
            "Put in a loosely covered brewing vessel, with a cloth or coffee filter over the top and ferment for 2 weeks.",
            "To bottle, If adding fruit juice, fill 10-20% of the bottle with juice and cover with kombucha. If adding sugar, start out with 1 teaspoon/4 grams per bottle (450mL/16oz), and adjust based on experimentation.",
            "Let the bottles sit at room temperature for anywhere between 1 and 7 days.",
            "Refrigerate the finished bottles to stop the fermentation process and allow more CO2 to dissolve into the liquid.",
            "Many thanks to the Reddit Kombucha recipe from which this is derived."
        ],
        source: {
          name: 'Site Name',
          url: './index.html'
        }
    },
    
    {   id: 7,
        name: "Pad Thai",
        image: '../images/chicken.jpg',
        description: "Descriptive Text",
        recipeCategory: "Entree",
        vegetarian: true,
        ingredients: [
            "White Vinegar- 1 Cup",
            "White Sugar- 2/3 Cup",
            "Fish Sauce- 1 Cup (may use less)",
            "Ketchup or Paprika for color",
            "Pad Thai Noodles- One pack",
            "Peanut Oil",
            "Garlic- 5-6 cloves",
            "Green Onions- 1 bunch or half dozen green onions",
            "Ginger- Around 4 tablespoons or 4 inches of ginger root",
            "Raw Peanuts- 1/4 Cup",
            "Bean Sprouts- 1 Package or 2 cups",
            "Cilantro- Half a bunch",
            "Lime- Juice of 1 lime",
            "Red Hot Chili Peppers or Sambal Oelek"
        ],
        recipeInstructions:[
            "Soak noodles in warm water or precook for 3 Minutes. Sometimes helpful to put into boiling water to soften the noodles.",
            "Mix vinegar, sugar, fish sauce, and ketchup or paprika.",
            "Mince garlic, ginger, & green onions. Cook in hot wok until lightly browned and take and remove from pan.",
            "Roast peanuts quickly and remove from pan. These burn quickly so keep an eye on them.",
            "Cook dried peppers and remove from pan. If cooking for those that may not want the spice you can skip this step and add Sambal Oelek to each plate at serving.",
            "Cook protein- chicken chunked, or extra firm tofu egged and floured.",
            "Add noodles and liquid to hot wok. Once hot add bean sprouts.",
            "Finish with cilantro and lime to serve."
        ],
        source: {
          name: 'Site Name',
          url: './index.html'
        }
    } ,
  
    /* Template Recipe here 
    {
      id: 0,
      name: name,
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