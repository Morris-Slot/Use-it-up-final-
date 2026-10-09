# USE IT UP

A multi-page web application to help reduce food waste by turning whatever ingredients you have left into delicious meals.

Built with **pure HTML, CSS, and Vanilla JavaScript** — zero build step, zero dependencies.

## Structure

```
├── index.html            # Home page (Hero, categories, featured dishes)
├── recipes.html          # Recipe catalog & search with AI suggestions
├── recipe-detail.html    # Recipe detail with checklists, timer, and waste tracking
├── scan.html             # Ingredient scanner & manual autocomplete input
├── community.html        # Community dish feed, comments, and post sharing
├── add-recipe.html       # Recipe creation form with AI dish analysis
├── profile.html          # User profile, badges, food waste statistics
├── user.html             # Public profile for other cooks
├── login.html            # Authentication (login & demo accounts)
├── signup.html           # Authentication (signup)
├── css/
│   └── style.css         # Complete styling & dark mode support
├── js/
│   ├── data.js           # Datasets, 70+ ingredients, 6-language translations
│   ├── store.js          # Persistent state (localStorage)
│   ├── ai.js             # AI service layer (API + local fallback)
│   └── common.js         # Shared navigation, footer, modals, and toasts
└── api/                  # Serverless AI endpoints (optional for Vercel)
```

## Running the project

Simply open `index.html` in any modern web browser or serve with any static web server.
