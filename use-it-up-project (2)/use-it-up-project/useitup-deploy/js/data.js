// USE IT UP - Initial Data, Mock Datasets, and Multilingual Dictionary
(function () {
  const recipes = [
    {
      id: "creamy-tomato-pasta",
      title: "Creamy Tomato Pasta",
      author: "Elena M.",
      authorUsername: "elena.cooks",
      image: "https://images.unsplash.com/photo-1516100882582-96c3a05fe590?w=1200&q=80&auto=format&fit=crop",
      time: "20 min",
      difficulty: "Easy",
      servings: 2,
      category: ["Pasta", "Quick", "Vegetarian", "Under 30 min"],
      likes: 482,
      ingredients: ["200g pasta", "2 tomatoes", "100g cheese", "1 onion", "handful basil", "2 tbsp olive oil"],
      steps: [
        "Bring a large pot of salted water to a boil (it should taste like the sea) and cook the pasta until al dente, about 9-11 minutes depending on the shape.",
        "While the pasta cooks, finely chop the onion. Heat the olive oil in a wide pan over medium heat and sauté the onion for 4-5 minutes until soft and translucent — don't let it brown, or it turns bitter.",
        "Dice the tomatoes and add them to the pan. Simmer for 8 minutes, stirring occasionally, until they break down into a chunky sauce. Season with a pinch of salt and pepper.",
        "Lower the heat and stir in the cheese a little at a time, letting it melt fully before adding more, so the sauce stays smooth instead of clumping.",
        "Drain the pasta, reserving a splash of the starchy cooking water. Toss the pasta into the sauce, adding a little pasta water if it looks too thick, until every piece is coated.",
        "Tear the basil over the top just before serving — adding it too early makes it wilt and lose flavor."
      ],
      tips: ["Save a splash of pasta water to loosen the sauce.", "A pinch of chili flakes adds a nice kick."]
    },
    {
      id: "roasted-vegetable-bowl",
      title: "Roasted Vegetable Bowl",
      author: "Marcus T.",
      authorUsername: "marcus.t",
      image: "https://images.unsplash.com/photo-1617474019977-0e105d1b430e?w=1200&q=80&auto=format&fit=crop",
      time: "35 min",
      difficulty: "Easy",
      servings: 2,
      category: ["Healthy", "Vegetarian", "Dinner"],
      likes: 316,
      ingredients: ["1 sweet potato", "1 bell pepper", "1 courgette", "1 can chickpeas", "2 tbsp tahini", "1 lemon"],
      steps: [
        "Preheat your oven to 200°C (400°F). Chop the sweet potato, bell pepper and courgette into roughly even 2cm pieces so they cook at the same rate.",
        "Toss the vegetables with olive oil, salt and pepper on a baking tray, spreading them out in a single layer so they roast instead of steam.",
        "Roast for 25 minutes, turning everything halfway through, until the edges are caramelized and the sweet potato is fork-tender.",
        "While the vegetables roast, drain and rinse the chickpeas. Warm them in a small pan with a little olive oil, cumin and paprika for 5 minutes until fragrant.",
        "Make the dressing: whisk the tahini with the juice of the lemon and a few tablespoons of water until smooth and pourable — add water slowly, it thickens before it thins.",
        "Assemble the bowl with the roasted vegetables and warm chickpeas, then drizzle generously with the tahini dressing."
      ],
      tips: ["Any leftover roast veg works here — this recipe is forgiving."]
    },
    {
      id: "garlic-butter-rice",
      title: "Garlic Butter Rice",
      author: "Priya S.",
      authorUsername: "priya.s",
      image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=1200&q=80&auto=format&fit=crop",
      time: "18 min",
      difficulty: "Easy",
      servings: 3,
      category: ["Quick", "Under 30 min", "Dinner"],
      likes: 258,
      ingredients: ["2 cups cooked rice", "3 cloves garlic", "2 tbsp butter", "2 spring onions", "1 tbsp soy sauce"],
      steps: [
        "If your rice is freshly cooked, spread it on a plate for a few minutes to cool slightly — day-old, fridge-cold rice actually fries best since it's drier.",
        "Melt the butter in a wide pan or wok over medium heat until it starts to foam slightly.",
        "Mince the garlic and add it to the butter, stirring constantly for about 1 minute until fragrant — watch closely, it burns fast and turns bitter.",
        "Add the rice, breaking up any clumps with the back of a spoon, and toss until every grain is coated in garlic butter.",
        "Stir-fry for 3-4 minutes over medium-high heat, then add the soy sauce and toss again to distribute the color and flavor evenly.",
        "Finish with sliced spring onions stirred through at the very end so they stay bright and slightly crisp."
      ],
      tips: ["Day-old rice fries up far better than fresh — perfect leftovers dish."]
    },
    {
      id: "leftover-vegetable-curry",
      title: "Leftover Vegetable Curry",
      author: "Diego R.",
      authorUsername: "diego.r",
      image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=1200&q=80&auto=format&fit=crop",
      time: "30 min",
      difficulty: "Medium",
      servings: 4,
      category: ["Leftovers", "Vegetarian", "Dinner"],
      likes: 401,
      ingredients: ["3 cups mixed leftover vegetables", "1 can coconut milk", "2 tbsp curry paste", "1 onion", "rice, to serve"],
      steps: [
        "Chop the onion and any leftover vegetables into bite-sized pieces — firmer vegetables like carrots should be cut smaller so they cook through in time.",
        "Heat a splash of oil in a large pan and sauté the onion for 4-5 minutes until soft.",
        "Add the curry paste and stir it into the onion for about 1 minute until fragrant — this 'blooms' the spices and makes the whole curry taste deeper.",
        "Add your chopped vegetables and stir to coat them in the paste, then pour in the coconut milk.",
        "Bring to a gentle simmer (not a hard boil, or the coconut milk can split) and cook for 15-20 minutes until the vegetables are tender.",
        "Taste and season with salt, then serve hot spooned over freshly cooked rice."
      ],
      tips: ["This is the ultimate fridge-clearing recipe — almost any vegetable works."]
    },
    {
      id: "one-pan-vegetable-pasta",
      title: "One-Pan Vegetable Pasta",
      author: "Sofia L.",
      authorUsername: "sofia.l",
      image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=1200&q=80&auto=format&fit=crop",
      time: "25 min",
      difficulty: "Easy",
      servings: 2,
      category: ["Pasta", "Quick", "Under 30 min"],
      likes: 227,
      ingredients: ["250g pasta", "2 cups cherry tomatoes", "2 cups spinach", "3 cloves garlic", "3 cups vegetable stock", "grated parmesan"],
      steps: [
        "Add the pasta, halved cherry tomatoes, sliced garlic and vegetable stock directly to one wide, deep pan — the pasta should be mostly submerged.",
        "Bring to a simmer over medium heat, stirring often so the pasta doesn't stick to the bottom of the pan.",
        "Keep simmering uncovered for 9-11 minutes, stirring every minute or so, until the pasta is cooked and the liquid has reduced into a light sauce.",
        "Turn off the heat and stir through the spinach — the residual heat is enough to wilt it in under a minute.",
        "Finish with a generous grating of parmesan and a crack of black pepper before serving."
      ],
      tips: ["One pan means one less thing to wash — great for weeknights."]
    },
    {
      id: "cheesy-tomato-bake",
      title: "Cheesy Tomato Bake",
      author: "Elena M.",
      authorUsername: "elena.cooks",
      image: "https://images.unsplash.com/photo-1769638913684-87c75872fda7?w=1200&q=80&auto=format&fit=crop",
      time: "40 min",
      difficulty: "Medium",
      servings: 4,
      category: ["Dinner", "Vegetarian"],
      likes: 189,
      ingredients: ["4 tomatoes", "4 slices stale bread", "125g mozzarella", "3 cloves garlic", "handful basil", "3 tbsp olive oil"],
      steps: [
        "Preheat the oven to 190°C (375°F). Slice the tomatoes and tear the stale bread into rough chunks.",
        "Layer the tomatoes and bread in a baking dish, tucking thin slices of garlic in between the layers.",
        "Drizzle everything generously with olive oil and season well with salt and pepper — the bread needs enough oil to crisp up rather than stay soggy.",
        "Bake for 25 minutes until the tomatoes are soft and the bread edges are starting to turn golden.",
        "Scatter the torn mozzarella over the top and bake for a further 10 minutes until melted and lightly browned.",
        "Rest for 5 minutes before serving, then finish with torn fresh basil."
      ],
      tips: ["Stale bread is ideal here — it soaks up all the tomato juices."]
    }
  ];

  const categories = ["Quick", "Vegetarian", "Leftovers", "Pasta", "Healthy", "Dinner", "Under 30 min"];

  const posts = [
    {
      id: "p1",
      user: "elena.cooks",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=elena.cooks",
      image: "https://images.unsplash.com/photo-1587040690786-b091531837a2?w=900&q=80&auto=format&fit=crop",
      caption: "Used up the last of my fridge veg on this — didn't expect it to look this good.",
      ingredients: ["Bell pepper", "Onion", "Mozzarella"],
      likes: 128
    },
    {
      id: "p2",
      user: "marcus.t",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=marcus.t",
      image: "https://images.unsplash.com/photo-1554054204-b2f70b09d031?w=900&q=80&auto=format&fit=crop",
      caption: "Sunday morning, zero food waste. Leftover roast veg + eggs.",
      ingredients: ["Egg", "Roast vegetables", "Sourdough"],
      likes: 94
    },
    {
      id: "p3",
      user: "priya.s",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=priya.s",
      image: "https://images.unsplash.com/photo-1582576163090-09d3b6f8a969?w=900&q=80&auto=format&fit=crop",
      caption: "Rice that was 3 days old, garlic, butter. That's it. That's the post.",
      ingredients: ["Rice", "Garlic", "Butter"],
      likes: 211
    },
    {
      id: "p4",
      user: "diego.r",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=diego.r",
      image: "https://images.unsplash.com/photo-1720949579179-b4d04403f548?w=900&q=80&auto=format&fit=crop",
      caption: "Curry night from whatever was wilting in the vegetable drawer.",
      ingredients: ["Coconut milk", "Mixed vegetables", "Curry paste"],
      likes: 156
    }
  ];

  const seedUsers = {
    "elena.cooks": {
      username: "elena.cooks",
      email: "elena@example.com",
      password: "password123",
      bio: "Turning leftovers into weeknight wins.",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=elena.cooks",
      followers: ["marcus.t", "priya.s"],
      following: ["diego.r"],
      language: "en"
    },
    "marcus.t": {
      username: "marcus.t",
      email: "marcus@example.com",
      password: "password123",
      bio: "Zero food waste, one plate at a time.",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=marcus.t",
      followers: ["priya.s"],
      following: ["elena.cooks", "diego.r"],
      language: "en"
    },
    "priya.s": {
      username: "priya.s",
      email: "priya@example.com",
      password: "password123",
      bio: "Rice is always the answer.",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=priya.s",
      followers: ["elena.cooks", "marcus.t", "diego.r"],
      following: [],
      language: "en"
    },
    "diego.r": {
      username: "diego.r",
      email: "diego@example.com",
      password: "password123",
      bio: "Curry night, every night.",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=diego.r",
      followers: ["elena.cooks"],
      following: ["marcus.t", "priya.s"],
      language: "en"
    }
  };

  const initialMealsSaved = {
    "elena.cooks": 18,
    "marcus.t": 9,
    "priya.s": 26,
    "diego.r": 12
  };

  const tiers = [
    { name: "Newcomer", min: 0, max: 5 },
    { name: "Home Cook", min: 5, max: 15 },
    { name: "Waste Warrior", min: 15, max: 30 },
    { name: "Kitchen Hero", min: 30, max: null }
  ];

  const ingredients = [
    { en: "Tomato", nl: "Tomaat", de: "Tomate", fr: "Tomate", es: "Tomate", it: "Pomodoro" },
    { en: "Cherry tomato", nl: "Cherrytomaat", de: "Kirschtomate", fr: "Tomate cerise", es: "Tomate cherry", it: "Pomodorino" },
    { en: "Pasta", nl: "Pasta", de: "Nudeln", fr: "Pâtes", es: "Pasta", it: "Pasta" },
    { en: "Rice", nl: "Rijst", de: "Reis", fr: "Riz", es: "Arroz", it: "Riso" },
    { en: "Bread", nl: "Brood", de: "Brot", fr: "Pain", es: "Pan", it: "Pane" },
    { en: "Cheese", nl: "Kaas", de: "Käse", fr: "Fromage", es: "Queso", it: "Formaggio" },
    { en: "Mozzarella", nl: "Mozzarella", de: "Mozzarella", fr: "Mozzarella", es: "Mozzarella", it: "Mozzarella" },
    { en: "Parmesan", nl: "Parmezaan", de: "Parmesan", fr: "Parmesan", es: "Parmesano", it: "Parmigiano" },
    { en: "Basil", nl: "Basilicum", de: "Basilikum", fr: "Basilic", es: "Albahaca", it: "Basilico" },
    { en: "Onion", nl: "Ui", de: "Zwiebel", fr: "Oignon", es: "Cebolla", it: "Cipolla" },
    { en: "Spring onion", nl: "Lente-ui", de: "Frühlingszwiebel", fr: "Oignon vert", es: "Cebolleta", it: "Cipollotto" },
    { en: "Garlic", nl: "Knoflook", de: "Knoblauch", fr: "Ail", es: "Ajo", it: "Aglio" },
    { en: "Bell pepper", nl: "Paprika", de: "Paprika", fr: "Poivron", es: "Pimiento", it: "Peperone" },
    { en: "Chili pepper", nl: "Chilipeper", de: "Chilischote", fr: "Piment", es: "Chile", it: "Peperoncino" },
    { en: "Courgette", nl: "Courgette", de: "Zucchini", fr: "Courgette", es: "Calabacín", it: "Zucchina" },
    { en: "Zucchini", nl: "Courgette", de: "Zucchini", fr: "Courgette", es: "Calabacín", it: "Zucchina" },
    { en: "Eggplant", nl: "Aubergine", de: "Aubergine", fr: "Aubergine", es: "Berenjena", it: "Melanzana" },
    { en: "Broccoli", nl: "Broccoli", de: "Brokkoli", fr: "Brocoli", es: "Brócoli", it: "Broccoli" },
    { en: "Cauliflower", nl: "Bloemkool", de: "Blumenkohl", fr: "Chou-fleur", es: "Coliflor", it: "Cavolfiore" },
    { en: "Carrot", nl: "Wortel", de: "Karotte", fr: "Carotte", es: "Zanahoria", it: "Carota" },
    { en: "Potato", nl: "Aardappel", de: "Kartoffel", fr: "Pomme de terre", es: "Patata", it: "Patata" },
    { en: "Sweet potato", nl: "Zoete aardappel", de: "Süßkartoffel", fr: "Patate douce", es: "Boniato", it: "Patata dolce" },
    { en: "Spinach", nl: "Spinazie", de: "Spinat", fr: "Épinard", es: "Espinaca", it: "Spinaci" },
    { en: "Kale", nl: "Boerenkool", de: "Grünkohl", fr: "Chou frisé", es: "Col rizada", it: "Cavolo riccio" },
    { en: "Lettuce", nl: "Sla", de: "Salat", fr: "Laitue", es: "Lechuga", it: "Lattuga" },
    { en: "Cucumber", nl: "Komkommer", de: "Gurke", fr: "Concombre", es: "Pepino", it: "Cetriolo" },
    { en: "Mushroom", nl: "Champignon", de: "Pilz", fr: "Champignon", es: "Champiñón", it: "Fungo" },
    { en: "Chickpeas", nl: "Kikkererwten", de: "Kichererbsen", fr: "Pois chiches", es: "Garbanzos", it: "Ceci" },
    { en: "Lentils", nl: "Linzen", de: "Linsen", fr: "Lentilles", es: "Lentejas", it: "Lenticchie" },
    { en: "Black beans", nl: "Zwarte bonen", de: "Schwarze Bohnen", fr: "Haricots noirs", es: "Frijoles negros", it: "Fagioli neri" },
    { en: "Kidney beans", nl: "Kidneybonen", de: "Kidneybohnen", fr: "Haricots rouges", es: "Alubias rojas", it: "Fagioli rossi" },
    { en: "Egg", nl: "Ei", de: "Ei", fr: "Œuf", es: "Huevo", it: "Uovo" },
    { en: "Chicken", nl: "Kip", de: "Hähnchen", fr: "Poulet", es: "Pollo", it: "Pollo" },
    { en: "Beef", nl: "Rundvlees", de: "Rindfleisch", fr: "Bœuf", es: "Ternera", it: "Manzo" },
    { en: "Pork", nl: "Varkensvlees", de: "Schweinefleisch", fr: "Porc", es: "Cerdo", it: "Maiale" },
    { en: "Bacon", nl: "Spek", de: "Speck", fr: "Lard", es: "Panceta", it: "Pancetta" },
    { en: "Sausage", nl: "Worst", de: "Wurst", fr: "Saucisse", es: "Salchicha", it: "Salsiccia" },
    { en: "Salmon", nl: "Zalm", de: "Lachs", fr: "Saumon", es: "Salmón", it: "Salmone" },
    { en: "Tuna", nl: "Tonijn", de: "Thunfisch", fr: "Thon", es: "Atún", it: "Tonno" },
    { en: "Shrimp", nl: "Garnaal", de: "Garnele", fr: "Crevette", es: "Gamba", it: "Gambero" },
    { en: "Tofu", nl: "Tofu", de: "Tofu", fr: "Tofu", es: "Tofu", it: "Tofu" },
    { en: "Butter", nl: "Boter", de: "Butter", fr: "Beurre", es: "Mantequilla", it: "Burro" },
    { en: "Olive oil", nl: "Olijfolie", de: "Olivenöl", fr: "Huile d'olive", es: "Aceite de oliva", it: "Olio d'oliva" },
    { en: "Milk", nl: "Melk", de: "Milch", fr: "Lait", es: "Leche", it: "Latte" },
    { en: "Cream", nl: "Room", de: "Sahne", fr: "Crème", es: "Nata", it: "Panna" },
    { en: "Yogurt", nl: "Yoghurt", de: "Joghurt", fr: "Yaourt", es: "Yogur", it: "Yogurt" },
    { en: "Lemon", nl: "Citroen", de: "Zitrone", fr: "Citron", es: "Limón", it: "Limone" },
    { en: "Lime", nl: "Limoen", de: "Limette", fr: "Citron vert", es: "Lima", it: "Lime" },
    { en: "Orange", nl: "Sinaasappel", de: "Orange", fr: "Orange", es: "Naranja", it: "Arancia" },
    { en: "Apple", nl: "Appel", de: "Apfel", fr: "Pomme", es: "Manzana", it: "Mela" },
    { en: "Banana", nl: "Banaan", de: "Banane", fr: "Banane", es: "Plátano", it: "Banana" },
    { en: "Ginger", nl: "Gember", de: "Ingwer", fr: "Gingembre", es: "Jengibre", it: "Zenzero" },
    { en: "Coconut milk", nl: "Kokosmelk", de: "Kokosmilch", fr: "Lait de coco", es: "Leche de coco", it: "Latte di cocco" },
    { en: "Soy sauce", nl: "Sojasaus", de: "Sojasoße", fr: "Sauce soja", es: "Salsa de soja", it: "Salsa di soia" },
    { en: "Vinegar", nl: "Azijn", de: "Essig", fr: "Vinaigre", es: "Vinagre", it: "Aceto" },
    { en: "Honey", nl: "Honing", de: "Honig", fr: "Miel", es: "Miel", it: "Miele" },
    { en: "Sugar", nl: "Suiker", de: "Zucker", fr: "Sucre", es: "Azúcar", it: "Zucchero" },
    { en: "Flour", nl: "Bloem", de: "Mehl", fr: "Farine", es: "Harina", it: "Farina" },
    { en: "Curry paste", nl: "Currypasta", de: "Currypaste", fr: "Pâte de curry", es: "Pasta de curry", it: "Pasta di curry" },
    { en: "Curry powder", nl: "Currypoeder", de: "Currypulver", fr: "Poudre de curry", es: "Curry en polvo", it: "Curry in polvere" },
    { en: "Cumin", nl: "Komijn", de: "Kreuzkümmel", fr: "Cumin", es: "Comino", it: "Cumino" },
    { en: "Paprika", nl: "Paprikapoeder", de: "Paprikapulver", fr: "Paprika", es: "Pimentón", it: "Paprica" },
    { en: "Chili flakes", nl: "Chilivlokken", de: "Chiliflocken", fr: "Flocons de piment", es: "Copos de chile", it: "Peperoncino in fiocchi" },
    { en: "Black pepper", nl: "Zwarte peper", de: "Schwarzer Pfeffer", fr: "Poivre noir", es: "Pimienta negra", it: "Pepe nero" },
    { en: "Salt", nl: "Zout", de: "Salz", fr: "Sel", es: "Sal", it: "Sale" },
    { en: "Parsley", nl: "Peterselie", de: "Petersilie", fr: "Persil", es: "Perejil", it: "Prezzemolo" },
    { en: "Coriander", nl: "Koriander", de: "Koriander", fr: "Coriandre", es: "Cilantro", it: "Coriandolo" },
    { en: "Mint", nl: "Munt", de: "Minze", fr: "Menthe", es: "Menta", it: "Menta" },
    { en: "Rosemary", nl: "Rozemarijn", de: "Rosmarin", fr: "Romarin", es: "Romero", it: "Rosmarino" },
    { en: "Thyme", nl: "Tijm", de: "Thymian", fr: "Thym", es: "Tomillo", it: "Timo" },
    { en: "Oregano", nl: "Oregano", de: "Oregano", fr: "Origan", es: "Orégano", it: "Origano" },
    { en: "Avocado", nl: "Avocado", de: "Avocado", fr: "Avocat", es: "Aguacate", it: "Avocado" },
    { en: "Corn", nl: "Maïs", de: "Mais", fr: "Maïs", es: "Maíz", it: "Mais" },
    { en: "Peas", nl: "Erwten", de: "Erbsen", fr: "Petits pois", es: "Guisantes", it: "Piselli" },
    { en: "Green beans", nl: "Sperziebonen", de: "Grüne Bohnen", fr: "Haricots verts", es: "Judías verdes", it: "Fagiolini" },
    { en: "Cabbage", nl: "Kool", de: "Kohl", fr: "Chou", es: "Repollo", it: "Cavolo" },
    { en: "Leek", nl: "Prei", de: "Lauch", fr: "Poireau", es: "Puerro", it: "Porro" },
    { en: "Beetroot", nl: "Bieten", de: "Rote Bete", fr: "Betterave", es: "Remolacha", it: "Barbabietola" },
    { en: "Pumpkin", nl: "Pompoen", de: "Kürbis", fr: "Citrouille", es: "Calabaza", it: "Zucca" }
  ];

  const languages = [
    { code: "en", name: "English" },
    { code: "nl", name: "Nederlands" },
    { code: "de", name: "Deutsch" },
    { code: "fr", name: "Français" },
    { code: "es", name: "Español" },
    { code: "it", name: "Italiano" }
  ];

  const translations = {
    // Navbar
    nav_home: { en: "Home", nl: "Home", de: "Startseite", fr: "Accueil", es: "Inicio", it: "Home" },
    nav_recipes: { en: "Recipes", nl: "Recepten", de: "Rezepte", fr: "Recettes", es: "Recetas", it: "Ricette" },
    nav_scan: { en: "Scan Ingredients", nl: "Ingrediënten scannen", de: "Zutaten scannen", fr: "Scanner les ingrédients", es: "Escanear ingredientes", it: "Scansiona ingredienti" },
    nav_community: { en: "Community", nl: "Community", de: "Community", fr: "Communauté", es: "Comunidad", it: "Community" },
    nav_cooks: { en: "Add Recipe", nl: "Recept toevoegen", de: "Rezept hinzufügen", fr: "Ajouter recette", es: "Añadir receta", it: "Aggiungi ricetta" },
    nav_login: { en: "Log in", nl: "Inloggen", de: "Anmelden", fr: "Connexion", es: "Iniciar sesión", it: "Accedi" },
    nav_signup: { en: "Sign up", nl: "Registreren", de: "Registrieren", fr: "S'inscrire", es: "Registrarse", it: "Registrati" },
    nav_logout: { en: "Log out", nl: "Uitloggen", de: "Abmelden", fr: "Déconnexion", es: "Cerrar sesión", it: "Esci" },

    // Home hero
    home_tagline: { en: "Stop wasting. Start cooking.", nl: "Stop met verspillen. Begin met koken.", de: "Hör auf zu verschwenden. Fang an zu kochen.", fr: "Arrêtez de gaspiller. Commencez à cuisiner.", es: "Deja de desperdiciar. Empieza a cocinar.", it: "Smetti di sprecare. Inizia a cucinare." },
    home_subtitle: { en: "Turn what you have into something worth making.", nl: "Maak van wat je hebt iets de moeite waard.", de: "Mach aus dem, was du hast, etwas Besonderes.", fr: "Transformez ce que vous avez en quelque chose qui vaut la peine.", es: "Convierte lo que tienes en algo que vale la pena.", it: "Trasforma quello che hai in qualcosa che vale la pena fare." },
    btn_start_cooking: { en: "START COOKING", nl: "BEGIN MET KOKEN", de: "JETZT KOCHEN", fr: "COMMENCER À CUISINER", es: "EMPEZAR A COCINAR", it: "INIZIA A CUCINARE" },
    btn_explore_recipes: { en: "EXPLORE RECIPES", nl: "ONTDEK RECEPTEN", de: "REZEPTE ENTDECKEN", fr: "EXPLORER LES RECETTES", es: "EXPLORAR RECETAS", it: "ESPLORA RICETTE" },
    home_scroll: { en: "Scroll", nl: "Scroll", de: "Scrollen", fr: "Défiler", es: "Desplázate", it: "Scorri" },

    // Section 2
    section2_title: { en: "What's left in your kitchen?", nl: "Wat heb je nog in je keuken?", de: "Was ist noch in deiner Küche?", fr: "Que reste-t-il dans votre cuisine ?", es: "¿Qué te queda en la cocina?", it: "Cosa avanza nella tua cucina?" },
    section2_subtitle: { en: "Snap a photo, upload one, or just type it in. USE IT UP turns whatever you've got into your next meal.", nl: "Maak een foto, upload er een, of typ het gewoon in. USE IT UP maakt van wat je hebt je volgende maaltijd.", de: "Mach ein Foto, lade eines hoch oder tippe es einfach ein. USE IT UP macht aus dem, was du hast, deine nächste Mahlzeit.", fr: "Prenez une photo, téléchargez-en une, ou saisissez-le simplement. USE IT UP transforme ce que vous avez en votre prochain repas.", es: "Haz una foto, sube una o simplemente escríbelo. USE IT UP convierte lo que tienes en tu próxima comida.", it: "Scatta una foto, caricane una o scrivilo semplicemente. USE IT UP trasforma quello che hai nel tuo prossimo pasto." },
    card_scan_title: { en: "SCAN", nl: "SCAN", de: "SCANNEN", fr: "SCANNER", es: "ESCANEAR", it: "SCANSIONA" },
    card_scan_desc: { en: "Take a photo of your ingredients.", nl: "Maak een foto van je ingrediënten.", de: "Mach ein Foto von deinen Zutaten.", fr: "Prenez une photo de vos ingrédients.", es: "Haz una foto de tus ingredientes.", it: "Scatta una foto dei tuoi ingredienti." },
    card_upload_title: { en: "UPLOAD", nl: "UPLOADEN", de: "HOCHLADEN", fr: "TÉLÉCHARGER", es: "SUBIR", it: "CARICA" },
    card_upload_desc: { en: "Upload an existing photo.", nl: "Upload een bestaande foto.", de: "Lade ein vorhandenes Foto hoch.", fr: "Téléchargez une photo existante.", es: "Sube una foto existente.", it: "Carica una foto esistente." },
    card_enter_title: { en: "ENTER", nl: "INVOEREN", de: "EINGEBEN", fr: "SAISIR", es: "INTRODUCIR", it: "INSERISCI" },
    card_enter_desc: { en: "Add your ingredients manually.", nl: "Voeg je ingrediënten handmatig toe.", de: "Füge deine Zutaten manuell hinzu.", fr: "Ajoutez vos ingrédients manuellement.", es: "Añade tus ingredientes manualmente.", it: "Aggiungi i tuoi ingredienti manualmente." },
    get_started: { en: "Get started", nl: "Aan de slag", de: "Loslegen", fr: "Commencer", es: "Empezar", it: "Inizia" },

    // Section 3 - AI
    section3_title: { en: "From ingredients to inspiration.", nl: "Van ingrediënten naar inspiratie.", de: "Von Zutaten zu Inspiration.", fr: "Des ingrédients à l'inspiration.", es: "De ingredientes a inspiración.", it: "Dagli ingredienti all'ispirazione." },
    try_with_ingredients: { en: "Try it with your ingredients", nl: "Probeer het met jouw ingrediënten", de: "Probiere es mit deinen Zutaten", fr: "Essayez avec vos ingrédients", es: "Pruébalo con tus ingredientes", it: "Provalo con i tuoi ingredienti" },

    // Section 4
    section4_title: { en: "Featured Recipes", nl: "Uitgelichte Recepten", de: "Ausgewählte Rezepte", fr: "Recettes en vedette", es: "Recetas destacadas", it: "Ricette in evidenza" },
    section4_subtitle: { en: "Loved by the USE IT UP community.", nl: "Geliefd bij de USE IT UP community.", de: "Beliebt in der USE IT UP Community.", fr: "Adorées par la communauté USE IT UP.", es: "Adoradas por la comunidad USE IT UP.", it: "Amate dalla community di USE IT UP." },
    view_all: { en: "View all", nl: "Bekijk alles", de: "Alle ansehen", fr: "Voir tout", es: "Ver todo", it: "Vedi tutto" },

    // Section 5
    section5_title: { en: "Made something good? Share it.", nl: "Iets lekkers gemaakt? Deel het.", de: "Etwas Gutes gekocht? Teile es.", fr: "Vous avez cuisiné quelque chose de bon ? Partagez-le.", es: "¿Cocinaste algo bueno? Compártelo.", it: "Hai preparato qualcosa di buono? Condividilo." },
    section5_subtitle: { en: "Post your meals, follow other cooks, and discover recipes made from real leftovers.", nl: "Deel je maaltijden, volg andere koks en ontdek recepten van echte restjes.", de: "Poste deine Mahlzeiten, folge anderen Köchen und entdecke Rezepte aus echten Resten.", fr: "Partagez vos repas, suivez d'autres cuisiniers et découvrez des recettes à base de vrais restes.", es: "Publica tus comidas, sigue a otros cocineros y descubre recetas hechas con sobras reales.", it: "Pubblica i tuoi pasti, segui altri cuochi e scopri ricette fatte con veri avanzi." },
    explore_community: { en: "Explore the community", nl: "Ontdek de community", de: "Community entdecken", fr: "Explorer la communauté", es: "Explorar la comunidad", it: "Esplora la community" },
    new_post: { en: "New post", nl: "Nieuwe post", de: "Neuer Beitrag", fr: "Nouvelle publication", es: "Nueva publication", it: "Nuovo post" },
    log_in_to_share: { en: "Log in to share your own meals.", nl: "Log in om je eigen maaltijden te delen.", de: "Melde dich an, um deine eigenen Mahlzeiten zu teilen.", fr: "Connectez-vous pour partager vos propres repas.", es: "Inicia sesión para compartir tus propias comidas.", it: "Accedi per condividere i tuoi pasti." },

    // Section 6
    section6_title: { en: "Got a recipe worth sharing?", nl: "Heb je een recept dat de moeite waard is?", de: "Hast du ein Rezept, das sich zu teilen lohnt?", fr: "Vous avez une recette qui vaut la peine d'être partagée ?", es: "¿Tienes una receta que vale la pena compartir?", it: "Hai una ricetta che vale la pena condividere?" },
    section6_subtitle: { en: "Upload your recipe photo, ingredients, and step-by-step method. Our AI helps structure it — you stay in control of every detail before it's published.", nl: "Upload je receptfoto, ingrediënten en stappenplan. Onze AI helpt het te structureren — jij houdt controle over elk detail voor publicatie.", de: "Lade dein Rezeptfoto, deine Zutaten und die Schritt-für-Schritt-Anleitung hoch. Unsere KI hilft beim Strukturieren — du behältst die Kontrolle über jedes Detail vor der Veröffentlichung.", fr: "Téléchargez la photo de votre recette, les ingrédients et la méthode étape par étape. Notre IA aide à la structurer — vous gardez le contrôle de chaque détail avant publication.", es: "Sube la foto de tu receta, ingredientes y método paso a paso. Nuestra IA ayuda a estructurarla — tú mantienes el control de cada detalle antes de publicar.", it: "Carica la foto della tua ricetta, gli ingredienti e il procedimento passo passo. La nostra IA aiuta a strutturarla — tu mantieni il controllo di ogni dettaglio prima della pubblicazione." },
    add_your_recipe: { en: "ADD YOUR RECIPE", nl: "VOEG JE RECEPT TOE", de: "REZEPT HINZUFÜGEN", fr: "AJOUTER VOTRE RECETTE", es: "AÑADE TU RECETA", it: "AGGIUNGI LA TUA RICETTA" },

    // Section 7
    section7_line1: { en: "Don't throw it away.", nl: "Gooi het niet weg.", de: "Wirf es nicht weg.", fr: "Ne le jetez pas.", es: "No lo tires.", it: "Non buttarlo via." },
    section7_line2: { en: "Use it up.", nl: "Maak het op.", de: "Verbrauch es.", fr: "Utilisez-le.", es: "Úsalo.", it: "Usalo tutto." },

    // Footer
    footer_tagline: { en: "Turn what you have into something worth making.", nl: "Maak van wat je hebt iets de moeite waard.", de: "Mach aus dem, was du hast, etwas Besonderes.", fr: "Transformez ce que vous avez en quelque chose qui vaut la peine.", es: "Convierte lo que tienes en algo que vale la pena.", it: "Trasforma quello che hai in qualcosa che vale la pena fare." },
    footer_explore: { en: "Explore", nl: "Ontdek", de: "Entdecken", fr: "Explorer", es: "Explorar", it: "Esplora" },
    footer_cooks: { en: "Cooks", nl: "Koks", de: "Köche", fr: "Cuisiniers", es: "Cocineros", it: "Cuochi" },
    footer_account: { en: "Account", nl: "Account", de: "Konto", fr: "Compte", es: "Cuenta", it: "Account" },
    footer_join: { en: "Join USE IT UP", nl: "Word lid van USE IT UP", de: "USE IT UP beitreten", fr: "Rejoindre USE IT UP", es: "Únete a USE IT UP", it: "Unisciti a USE IT UP" },
    footer_your_profile: { en: "Your profile", nl: "Jouw profiel", de: "Dein Profil", fr: "Votre profil", es: "Tu perfil", it: "Il tuo profilo" },
    footer_add_recipe: { en: "Add a Recipe", nl: "Recept toevoegen", de: "Rezept hinzufügen", fr: "Ajouter une recette", es: "Añadir receta", it: "Aggiungi ricetta" },

    // Scan
    scan_step: { en: "Step 1 of 2", nl: "Stap 1 van 2", de: "Schritt 1 von 2", fr: "Étape 1 sur 2", es: "Paso 1 de 2", it: "Passo 1 di 2" },
    scan_title: { en: "What's left in your kitchen?", nl: "Wat heb je nog in je keuken?", de: "Was ist noch in deiner Küche?", fr: "Que reste-t-il dans votre cuisine ?", es: "¿Qué te queda en la cocina?", it: "Cosa avanza nella tua cucina?" },
    scan_subtitle: { en: "Scan, upload, or type it in — however you like.", nl: "Scan, upload, of typ het in — zoals jij wilt.", de: "Scannen, hochladen oder eintippen — wie du möchtest.", fr: "Scannez, téléchargez ou saisissez — comme vous voulez.", es: "Escanea, sube o escríbelo — como prefieras.", it: "Scansiona, carica o digita — come preferisci." },
    scan_photo_btn: { en: "SCAN PHOTO", nl: "FOTO SCANNEN", de: "FOTO SCANNEN", fr: "SCANNER LA PHOTO", es: "ESCANEAR FOTO", it: "SCANSIONA FOTO" },
    scan_photo_desc: { en: "Take a photo of your ingredients.", nl: "Maak een foto van je ingrediënten.", de: "Mach ein Foto von deinen Zutaten.", fr: "Prenez une photo de vos ingrédients.", es: "Haz una foto de tus ingredientes.", it: "Scatta una foto dei tuoi ingredienti." },
    upload_photo_btn: { en: "UPLOAD PHOTO", nl: "FOTO UPLOADEN", de: "FOTO HOCHLADEN", fr: "TÉLÉCHARGER LA PHOTO", es: "SUBIR FOTO", it: "CARICA FOTO" },
    upload_photo_desc: { en: "Upload an existing photo.", nl: "Upload een bestaande foto.", de: "Lade ein vorhandenes Foto hoch.", fr: "Téléchargez une photo existante.", es: "Sube una foto existente.", it: "Carica una foto esistente." },
    enter_manually_btn: { en: "ENTER MANUALLY", nl: "HANDMATIG INVOEREN", de: "MANUELL EINGEBEN", fr: "SAISIE MANUELLE", es: "INTRODUCIR MANUALMENTE", it: "INSERISCI MANUALMENTE" },
    enter_manually_desc: { en: "Add your ingredients by hand.", nl: "Voeg je ingrediënten handmatig toe.", de: "Füge deine Zutaten manuell hinzu.", fr: "Ajoutez vos ingrédients à la main.", es: "Añade tus ingredientes a mano.", it: "Aggiungi i tuoi ingredienti a mano." },
    search_ingredient_placeholder: { en: "Search for an ingredient, e.g. Chicken...", nl: "Zoek een ingrediënt, bijv. Kip...", de: "Suche nach einer Zutat, z. B. Hähnchen...", fr: "Recherchez un ingrédient, ex. Poulet...", es: "Busca un ingrediente, ej. Pollo...", it: "Cerca un ingrediente, es. Pollo..." },
    add_btn: { en: "Add", nl: "Toevoegen", de: "Hinzufügen", fr: "Ajouter", es: "Añadir", it: "Aggiungi" },
    unknown_ingredient: { en: "We don't recognize this ingredient. Check the spelling or pick one from the suggestions.", nl: "We herkennen dit ingrediënt niet. Controleer de spelling of kies er een uit de suggesties.", de: "Wir kennen diese Zutat nicht. Überprüfe die Schreibweise oder wähle einen der Vorschläge.", fr: "Nous ne reconnaissons pas cet ingrédient. Vérifiez l'orthographe ou choisissez une suggestion.", es: "No reconocemos este ingrediente. Revisa la ortografía o elige una sugerencia.", it: "Non riconosciamo questo ingrediente. Controlla l'ortografia o scegli un suggerimento." },
    add_anyway: { en: "Add anyway", nl: "Toch toevoegen", de: "Trotzdem hinzufügen", fr: "Ajouter quand même", es: "Añadir de todos modos", it: "Aggiungi comunque" },
    your_ingredients: { en: "Your ingredients:", nl: "Jouw ingrediënten:", de: "Deine Zutaten:", fr: "Vos ingrédients :", es: "Tus ingredientes:", it: "I tuoi ingredienti:" },
    nothing_added: { en: "Nothing added yet.", nl: "Nog niets toegevoegd.", de: "Noch nichts hinzugefügt.", fr: "Rien n'a encore été ajouté.", es: "Aún no se ha añadido nada.", it: "Ancora nulla di aggiunto." },
    continue_btn: { en: "Continue", nl: "Doorgaan", de: "Weiter", fr: "Continuer", es: "Continuar", it: "Continua" },
    analyzing_title: { en: "Analyzing your ingredients...", nl: "Ingrediënten analyseren...", de: "Zutaten werden analysiert...", fr: "Analyse de vos ingrédients...", es: "Analizando tus ingredientes...", it: "Analisi degli ingredienti..." },
    ai_looking: { en: "USE IT UP AI is taking a look", nl: "USE IT UP AI kijkt ernaar", de: "USE IT UP AI schaut sich das an", fr: "USE IT UP AI y jette un œil", es: "USE IT UP AI le está echando un vistazo", it: "USE IT UP AI sta dando un'occhiata" },
    ai_found: { en: "AI found:", nl: "AI heeft gevonden:", de: "KI hat gefunden:", fr: "L'IA a trouvé :", es: "La IA encontró:", it: "L'IA ha trovato:" },
    add_missing_ingredient: { en: "Add a missing ingredient...", nl: "Voeg een ontbrekend ingrediënt toe...", de: "Füge eine fehlende Zutat hinzu...", fr: "Ajoutez un ingrédient manquant...", es: "Añade un ingrediente que falte...", it: "Aggiungi un ingrediente mancante..." },
    ingredients_ready: { en: "ingredients ready", nl: "ingrediënten klaar", de: "Zutaten bereit", fr: "ingrédients prêts", es: "ingredientes listos", it: "ingredienti pronti" },
    generate_recipes: { en: "GENERATE RECIPES", nl: "RECEPTEN GENEREREN", de: "REZEPTE GENERIEREN", fr: "GÉNÉRER DES RECETTES", es: "GENERAR RECETAS", it: "GENERA RICETTE" },

    // Recipes page
    recipes_title: { en: "Recipes", nl: "Recepten", de: "Rezepte", fr: "Recettes", es: "Recetas", it: "Ricette" },
    recipes_subtitle: { en: "Discover what to make next.", nl: "Ontdek wat je hierna kan maken.", de: "Entdecke, was du als Nächstes kochst.", fr: "Découvrez quoi cuisiner ensuite.", es: "Descubre qué cocinar a continuación.", it: "Scopri cosa cucinare dopo." },
    search_recipes_placeholder: { en: "Search recipes or ingredients...", nl: "Zoek recepten of ingrediënten...", de: "Rezepte oder Zutaten suchen...", fr: "Rechercher des recettes ou ingrédients...", es: "Buscar recetas o ingredientes...", it: "Cerca ricette o ingredienti..." },
    category_all: { en: "All", nl: "Alles", de: "Alle", fr: "Tous", es: "Todos", it: "Tutti" },
    no_recipes_found: { en: "No recipes match your search.", nl: "Geen recepten gevonden.", de: "Keine Rezepte gefunden.", fr: "Aucune recette trouvée.", es: "No se encontraron recetas.", it: "Nessuna ricetta trovata." },
    made_for_ingredients: { en: "Made for your ingredients", nl: "Gemaakt voor jouw ingrediënten", de: "Gemacht für deine Zutaten", fr: "Fait pour vos ingrédients", es: "Hecho para tus ingredientes", it: "Fatto per i tuoi ingredienti" },
    creating_recipes: { en: "Creating recipes from your ingredients...", nl: "Recepten maken van jouw ingrediënten...", de: "Rezepte aus deinen Zutaten erstellen...", fr: "Création de recettes à partir de vos ingrédients...", es: "Creando recetas con tus ingredientes...", it: "Creazione di ricette dai tuoi ingredienti..." },

    // Recipe detail
    back_to_recipes: { en: "Back to recipes", nl: "Terug naar recepten", de: "Zurück zu den Rezepten", fr: "Retour aux recettes", es: "Volver a las recetas", it: "Torna alle ricette" },
    recipe_ingredients: { en: "Ingredients", nl: "Ingrediënten", de: "Zutaten", fr: "Ingrédients", es: "Ingredientes", it: "Ingredienti" },
    recipe_preparation: { en: "Preparation", nl: "Bereiding", de: "Zubereitung", fr: "Préparation", es: "Preparación", it: "Preparazione" },
    recipe_cooking_tips: { en: "Cooking tips", nl: "Kooktips", de: "Kochtipps", fr: "Astuces de cuisine", es: "Consejos de cocina", it: "Consigli di cottura" },
    servings_label: { en: "servings", nl: "porties", de: "Portionen", fr: "portions", es: "porciones", it: "porzioni" },
    link_copied: { en: "Link copied!", nl: "Link gekopieerd!", de: "Link kopiert!", fr: "Lien copié !", es: "¡Enlace copiado!", it: "Link copiato!" },
    recipe_not_found: { en: "We couldn't find that recipe.", nl: "We konden dat recept niet vinden.", de: "Wir konnten dieses Rezept nicht finden.", fr: "Nous n'avons pas trouvé cette recette.", es: "No pudimos encontrar esa receta.", it: "Non siamo riusciti a trovare questa ricetta." },
    scan_new_ingredients: { en: "Scan new ingredients", nl: "Scan nieuwe ingrediënten", de: "Neue Zutaten scannen", fr: "Scanner de nouveaux ingrédients", es: "Escanear nuevos ingredientes", it: "Scansiona nuovi ingredienti" },
    i_made_this: { en: "I Made This!", nl: "Ik heb dit gemaakt!", de: "Ich habe das gekocht!", fr: "Je l'ai cuisiné !", es: "¡Yo hice esto!", it: "L'ho fatto io!" },
    meal_saved_toast: { en: "Awesome! You saved a meal from waste! 🌱", nl: "Super! Je hebt een maaltijd gered van verspilling! 🌱", de: "Super! Du hast eine Mahlzeit gerettet! 🌱", fr: "Bravo ! Vous avez évité le gaspillage d'un repas ! 🌱", es: "¡Genial! ¡Salvaste una comida del desperdicio! 🌱", it: "Fantastico! Hai salvato un pasto dallo spreco! 🌱" },

    // Community
    community_title: { en: "Made something good? Share it.", nl: "Iets lekkers gemaakt? Deel het.", de: "Etwas Gutes gekocht? Teile es.", fr: "Vous avez cuisiné quelque chose de bon ? Partagez-le.", es: "¿Cocinaste algo bueno? Compártelo.", it: "Hai preparato qualcosa di buono? Condividilo." },
    community_subtitle: { en: "Real meals, made from real leftovers, by real cooks.", nl: "Echte maaltijden, van echte restjes, door echte koks.", de: "Echte Mahlzeiten, aus echten Resten, von echten Köchen.", fr: "De vrais repas, à base de vrais restes, par de vrais cuisiniers.", es: "Comidas reales, hechas con sobras reales, por cocineros reales.", it: "Pasti veri, fatti con veri avanzi, da veri cuochi." },
    new_post_title: { en: "New post", nl: "Nieuwe post", de: "Neuer Beitrag", fr: "Nouvelle publication", es: "Nueva publicación", it: "Nuovo post" },
    caption_label: { en: "Caption", nl: "Bijschrift", de: "Beschreibung", fr: "Légende", es: "Descripción", it: "Didascalia" },
    caption_placeholder: { en: "What did you make?", nl: "Wat heb je gemaakt?", de: "Was hast du gekocht?", fr: "Qu'avez-vous préparé ?", es: "¿Qué hiciste?", it: "Cosa hai preparato?" },
    ingredients_used: { en: "Ingredients used", nl: "Gebruikte ingrediënten", de: "Verwendete Zutaten", fr: "Ingrédients utilisés", es: "Ingredientes usados", it: "Ingredienti usati" },
    share_post: { en: "Share post", nl: "Post delen", de: "Beitrag teilen", fr: "Partager la publication", es: "Compartir publicación", it: "Condividi post" },
    upload_photo_click: { en: "Click to upload a photo", nl: "Klik om een foto te uploaden", de: "Klicke, um ein Foto hochzuladen", fr: "Cliquez pour télécharger une photo", es: "Haz clic para subir una foto", it: "Clicca per caricare una foto" },
    no_comments: { en: "No comments yet.", nl: "Nog geen reacties.", de: "Noch keine Kommentare.", fr: "Aucun commentaire pour l'instant.", es: "Aún no hay comentarios.", it: "Ancora nessun commento." },
    add_comment_placeholder: { en: "Add a comment...", nl: "Voeg een reactie toe...", de: "Kommentar hinzufügen...", fr: "Ajouter un commentaire...", es: "Añade un comentario...", it: "Aggiungi un commento..." },
    login_to_comment: { en: "Log in to comment...", nl: "Log in om te reageren...", de: "Melde dich an, um zu kommentieren...", fr: "Connectez-vous pour commenter...", es: "Inicia sesión para comentar...", it: "Accedi per commentare..." },
    follow_btn: { en: "Follow", nl: "Volgen", de: "Folgen", fr: "Suivre", es: "Seguir", it: "Segui" },
    following_btn: { en: "Following", nl: "Volgend", de: "Gefolgt", fr: "Abonné", es: "Siguiendo", it: "Seguito" },

    // Profile
    edit_profile: { en: "Edit profile", nl: "Profiel bewerken", de: "Profil bearbeiten", fr: "Modifier le profil", es: "Editar perfil", it: "Modifica profilo" },
    followers_label: { en: "followers", nl: "volgers", de: "Follower", fr: "abonnés", es: "seguidores", it: "follower" },
    following_label: { en: "following", nl: "volgend", de: "folgt", fr: "abonnements", es: "siguiendo", it: "seguiti" },
    food_waste_saved: { en: "Food waste saved", nl: "Bespaarde voedselverspilling", de: "Vermiedene Lebensmittelverschwendung", fr: "Gaspillage alimentaire évité", es: "Desperdicio de alimentos evitado", it: "Spreco alimentare evitato" },
    meals_cooked_estimate: { en: "estimated, from", nl: "geschat, van", de: "geschätzt, aus", fr: "estimé, à partir de", es: "estimado, de", it: "stimato, da" },
    meals_cooked_suffix: { en: "meals cooked with USE IT UP", nl: "maaltijden gekookt met USE IT UP", de: "mit USE IT UP gekochten Mahlzeiten", fr: "repas cuisinés avec USE IT UP", es: "comidas cocinadas con USE IT UP", it: "pasti cucinati con USE IT UP" },
    more_to_next_tier: { en: "more to", nl: "meer tot", de: "mehr bis", fr: "de plus jusqu'à", es: "más para", it: "in più per" },
    saved_recipes_title: { en: "Saved recipes", nl: "Opgeslagen recepten", de: "Gespeicherte Rezepte", fr: "Recettes enregistrées", es: "Recetas guardadas", it: "Ricette salvate" },
    no_saved_recipes: { en: "No saved recipes yet — tap the bookmark icon on any recipe to save it here.", nl: "Nog geen opgeslagen recepten — tik op het bladwijzer-icoon bij een recept om het hier op te slaan.", de: "Noch keine gespeicherten Rezepte — tippe auf das Lesezeichen-Symbol bei einem Rezept, um es hier zu speichern.", fr: "Pas encore de recettes enregistrées — appuyez sur l'icône de signet d'une recette pour l'enregistrer ici.", es: "Aún no hay recetas guardadas — toca el icono de marcador en cualquier receta para guardarla aquí.", it: "Ancora nessuna ricetta salvata — tocca l'icona segnalibro su una ricetta per salvarla qui." },
    your_posts_title: { en: "Your posts", nl: "Jouw posts", de: "Deine Beiträge", fr: "Vos publications", es: "Tus publicaciones", it: "I tuoi post" },
    no_posts_yet: { en: "You haven't posted anything yet.", nl: "Je hebt nog niets geplaatst.", de: "Du hast noch nichts gepostet.", fr: "Vous n'avez encore rien publié.", es: "Aún no has publicado nada.", it: "Non hai ancora pubblicato nulla." },
    save_changes: { en: "Save changes", nl: "Wijzigingen opslaan", de: "Änderungen speichern", fr: "Enregistrer les modifications", es: "Guardar cambios", it: "Salva modifiche" },
    bio_label: { en: "Bio", nl: "Bio", de: "Bio", fr: "Bio", es: "Biografía", it: "Bio" },
    click_change_photo: { en: "Click to change photo", nl: "Klik om foto te wijzigen", de: "Klicke, um das Foto zu ändern", fr: "Cliquez pour changer la photo", es: "Haz clic para cambiar la foto", it: "Clicca per cambiare foto" },
    language_label: { en: "Language", nl: "Taal", de: "Sprache", fr: "Langue", es: "Idioma", it: "Lingua" },
    nobody_here: { en: "Nobody here yet.", nl: "Nog niemand hier.", de: "Noch niemand hier.", fr: "Personne ici pour l'instant.", es: "Aún no hay nadie aquí.", it: "Ancora nessuno qui." },
    no_posts: { en: "No posts yet.", nl: "Nog geen posts.", de: "Noch keine Beiträge.", fr: "Aucune publication pour l'instant.", es: "Aún no hay publicaciones.", it: "Ancora nessun post." },
    user_not_found: { en: "This user doesn't exist.", nl: "Deze gebruiker bestaat niet.", de: "Dieser Benutzer existiert nicht.", fr: "Cet utilisateur n'existe pas.", es: "Este usuario no existe.", it: "Questo utente non esiste." },
    posts_title: { en: "Posts", nl: "Posts", de: "Beiträge", fr: "Publications", es: "Publicaciones", it: "Post" },

    // Add recipe
    add_recipe_heading: { en: "Add your recipe", nl: "Voeg je recept toe", de: "Füge dein Rezept hinzu", fr: "Ajoutez votre recette", es: "Añade tu receta", it: "Aggiungi la tua ricetta" },
    add_recipe_subtitle: { en: "Upload a photo and let USE IT UP AI help structure it — you're always in control.", nl: "Upload een foto en laat USE IT UP AI helpen structureren — jij houdt altijd de controle.", de: "Lade ein Foto hoch und lass USE IT UP AI beim Strukturieren helfen — du behältst immer die Kontrolle.", fr: "Téléchargez une photo et laissez USE IT UP AI aider à la structurer — vous gardez toujours le contrôle.", es: "Sube una foto y deja que USE IT UP AI ayude a estructurarla — siempre tienes el control.", it: "Carica una foto e lascia che USE IT UP AI aiuti a strutturarla — hai sempre il controllo." },
    recipe_photo_label: { en: "Recipe photo", nl: "Receptfoto", de: "Rezeptfoto", fr: "Photo de la recette", es: "Foto de la receta", it: "Foto della ricetta" },
    click_upload_dish: { en: "Click to upload a dish photo", nl: "Klik om een foto van je gerecht te uploaden", de: "Klicke, um ein Foto des Gerichts hochzuladen", fr: "Cliquez pour télécharger une photo du plat", es: "Haz clic para subir una foto del plato", it: "Clicca per caricare una foto del piatto" },
    ai_analyzing_dish: { en: "AI analyzing your dish...", nl: "AI analyseert je gerecht...", de: "KI analysiert dein Gericht...", fr: "L'IA analyse votre plat...", es: "La IA está analizando tu plato...", it: "L'IA sta analizzando il tuo piatto..." },
    recipe_name_label: { en: "Recipe name", nl: "Receptnaam", de: "Rezeptname", fr: "Nom de la recette", es: "Nombre de la receta", it: "Nome della ricetta" },
    steps_label: { en: "Preparation steps", nl: "Bereidingsstappen", de: "Zubereitungsschritte", fr: "Étapes de préparation", es: "Pasos de preparación", it: "Passaggi di preparazione" },
    describe_step: { en: "Describe this step...", nl: "Beschrijf deze stap...", de: "Beschreibe diesen Schritt...", fr: "Décrivez cette étape...", es: "Describe este paso...", it: "Descrivi questo passaggio..." },
    add_step: { en: "+ Add step", nl: "+ Stap toevoegen", de: "+ Schritt hinzufügen", fr: "+ Ajouter une étape", es: "+ Añadir paso", it: "+ Aggiungi passaggio" },
    publish_recipe: { en: "Publish recipe", nl: "Recept publiceren", de: "Rezept veröffentlichen", fr: "Publier la recette", es: "Publicar receta", it: "Pubblica ricetta" },
    recipe_published_title: { en: "Recipe published!", nl: "Recept gepubliceerd!", de: "Rezept veröffentlicht!", fr: "Recette publiée !", es: "¡Receta publicada!", it: "Ricetta pubblicata!" },
    recipe_published_desc: { en: "Thanks for helping others use it up.", nl: "Bedankt dat je anderen helpt om het op te maken.", de: "Danke, dass du anderen hilfst, alles zu verbrauchen.", fr: "Merci d'aider les autres à tout utiliser.", es: "Gracias por ayudar a otros a aprovecharlo todo.", it: "Grazie per aiutare gli altri a usare tutto." },

    // Auth
    welcome_back: { en: "Welcome back", nl: "Welkom terug", de: "Willkommen zurück", fr: "Content de vous revoir", es: "Bienvenido de nuevo", it: "Bentornato" },
    email_label: { en: "Email", nl: "E-mail", de: "E-Mail", fr: "E-mail", es: "Correo electrónico", it: "Email" },
    password_label: { en: "Password", nl: "Wachtwoord", de: "Passwort", fr: "Mot de passe", es: "Contraseña", it: "Password" },
    log_in_btn: { en: "LOG IN", nl: "INLOGGEN", de: "ANMELDEN", fr: "CONNEXION", es: "INICIAR SESIÓN", it: "ACCEDI" },
    no_account_yet: { en: "Don't have an account?", nl: "Nog geen account?", de: "Noch kein Konto?", fr: "Vous n'avez pas de compte ?", es: "¿No tienes cuenta?", it: "Non hai un account?" },
    sign_up_link: { en: "Sign up", nl: "Registreren", de: "Registrieren", fr: "S'inscrire", es: "Regístrate", it: "Registrati" },
    new_here_create: { en: "New here? Create an account first via Sign up.", nl: "Nieuw hier? Maak eerst een account aan via Registreren.", de: "Neu hier? Erstelle zuerst ein Konto über Registrieren.", fr: "Nouveau ici ? Créez d'abord un compte via Inscription.", es: "¿Nuevo aquí? Crea primero una cuenta desde Registrarse.", it: "Nuovo qui? Crea prima un account tramite Registrati." },
    create_account_title: { en: "Create your account", nl: "Maak je account aan", de: "Erstelle dein Konto", fr: "Créez votre compte", es: "Crea tu cuenta", it: "Crea il tuo account" },
    username_label: { en: "Username", nl: "Gebruikersnaam", de: "Benutzername", fr: "Nom d'utilisateur", es: "Nombre de usuario", it: "Nome utente" },
    confirm_password_label: { en: "Confirm password", nl: "Bevestig wachtwoord", de: "Passwort bestätigen", fr: "Confirmer le mot de passe", es: "Confirmar contraseña", it: "Conferma password" },
    create_account_btn: { en: "CREATE ACCOUNT", nl: "ACCOUNT AANMAKEN", de: "KONTO ERSTELLEN", fr: "CRÉER UN COMPTE", es: "CREAR CUENTA", it: "CREA ACCOUNT" },
    already_have_account: { en: "Already have an account?", nl: "Heb je al een account?", de: "Hast du schon ein Konto?", fr: "Vous avez déjà un compte ?", es: "¿Ya tienes cuenta?", it: "Hai già un account?" },

    // Auth errors
    err_choose_username: { en: "Choose a username.", nl: "Kies een gebruikersnaam.", de: "Wähle einen Benutzernamen.", fr: "Choisissez un nom d'utilisateur.", es: "Elige un nombre de usuario.", it: "Scegli un nome utente." },
    err_username_taken: { en: "This username is already taken.", nl: "Deze gebruikersnaam is al in gebruik.", de: "Dieser Benutzername ist bereits vergeben.", fr: "Ce nom d'utilisateur est déjà pris.", es: "Este nombre de usuario ya está en uso.", it: "Questo nome utente è già in uso." },
    err_invalid_email: { en: "Enter a valid email address.", nl: "Vul een geldig e-mailadres in.", de: "Gib eine gültige E-Mail-Adresse ein.", fr: "Entrez une adresse e-mail valide.", es: "Introduce un correo electrónico válido.", it: "Inserisci un indirizzo email valido." },
    err_email_taken: { en: "An account with this email already exists.", nl: "Er bestaat al een account met dit e-mailadres.", de: "Es existiert bereits ein Konto mit dieser E-Mail.", fr: "Un compte avec cet e-mail existe déjà.", es: "Ya existe una cuenta con este correo.", it: "Esiste già un account con questa email." },
    err_password_short: { en: "Password must be at least 6 characters.", nl: "Wachtwoord moet minstens 6 tekens zijn.", de: "Das Passwort muss mindestens 6 Zeichen lang sein.", fr: "Le mot de passe doit comporter au moins 6 caractères.", es: "La contraseña debe tener al menos 6 caracteres.", it: "La password deve contenere almeno 6 caratteri." },
    err_password_mismatch: { en: "Passwords don't match.", nl: "Wachtwoorden komen niet overeen.", de: "Passwörter stimmen nicht überein.", fr: "Les mots de passe ne correspondent pas.", es: "Las contraseñas no coinciden.", it: "Le password non corrispondono." },
    err_login_invalid: { en: "Incorrect email or password.", nl: "Onjuist e-mailadres of wachtwoord.", de: "Falsche E-Mail-Adresse oder falsches Passwort.", fr: "E-mail ou mot de passe incorrect.", es: "Correo o contraseña incorrectos.", it: "Email o password errati." },

    welcome_title: { en: "Welcome to USE IT UP", nl: "Welkom bij USE IT UP", de: "Willkommen bei USE IT UP", fr: "Bienvenue sur USE IT UP", es: "Bienvenido a USE IT UP", it: "Benvenuto su USE IT UP" },
    welcome_subtitle: { en: "Log in or sign up to save recipes, follow cooks, and track your food waste saved — or just take a look around first.", nl: "Log in of registreer om recepten op te slaan, koks te volgen en je bespaarde voedselverspilling bij te houden — of kijk eerst gewoon rond.", de: "Melde dich an oder registriere dich, um Rezepte zu speichern, Köchen zu folgen und deine vermiedene Lebensmittelverschwendung zu verfolgen — oder schau dich erstmal um.", fr: "Connectez-vous ou inscrivez-vous pour enregistrer des recettes, suivre des cuisiniers et suivre votre gaspillage alimentaire évité — ou jetez d'abord un coup d'œil.", es: "Inicia sesión o regístrate para guardar recetas, seguir cocineros y hacer seguimiento de tu desperdicio de alimentos evitado — o simplemente echa un vistazo primero.", it: "Accedi o registrati per salvare ricette, seguire cuochi e monitorare il tuo spreco alimentare evitato — o dai prima un'occhiata in giro." },
    continue_as_guest: { en: "Continue as guest", nl: "Verdergaan als gast", de: "Als Gast fortfahren", fr: "Continuer en tant qu'invité", es: "Continuar como invitado", it: "Continua come ospite" },
    liked_recipes_title: { en: "Liked recipes", nl: "Geliket recepten", de: "Gelikte Rezepte", fr: "Recettes aimées", es: "Recetas que te gustan", it: "Ricette apprezzate" },
    no_liked_recipes: { en: "No liked recipes yet — tap the heart icon on any recipe.", nl: "Nog geen geliket recepten — tik op het hartje bij een recept.", de: "Noch keine gelikten Rezepte — tippe auf das Herz bei einem Rezept.", fr: "Pas encore de recettes aimées — appuyez sur le cœur d'une recette.", es: "Aún no hay recetas que te gusten — toca el corazón en cualquier receta.", it: "Ancora nessuna ricetta apprezzata — tocca il cuore su una ricetta." },
    liked_posts_title: { en: "Liked posts", nl: "Geliket posts", de: "Gelikte Beiträge", fr: "Publications aimées", es: "Publicaciones que te gustan", it: "Post apprezzati" },
    no_liked_posts: { en: "No liked posts yet — tap the heart icon on any post in the Community.", nl: "Nog geen geliket posts — tik op het hartje bij een post in de Community.", de: "Noch keine gelikten Beiträge — tippe auf das Herz bei einem Beitrag in der Community.", fr: "Pas encore de publications aimées — appuyez sur le cœur d'une publication dans la Communauté.", es: "Aún no hay publicaciones que te gusten — toca el corazón en cualquier publicación de la Comunidad.", it: "Ancora nessun post apprezzato — tocca il cuore su un post nella Community." }
  };

  window.USEITUP_DATA = {
    recipes,
    categories,
    posts,
    seedUsers,
    initialMealsSaved,
    tiers,
    ingredients,
    languages,
    translations
  };
})();
