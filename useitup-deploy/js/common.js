// USE IT UP - Shared UI Components, Header/Footer Injection, Modals & Helpers
(function () {
  const Store = window.USEITUP_STORE;

  // Initialize theme on page load
  const currentTheme = Store.getTheme();
  if (currentTheme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  function showToast(msg) {
    let container = document.getElementById("toast-container");
    if (!container) {
      container = document.createElement("div");
      container.id = "toast-container";
      container.className = "toast-container";
      document.body.appendChild(container);
    }
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = msg;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(10px)";
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  function renderNavbar() {
    const header = document.querySelector(".site-header");
    if (!header) return;

    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    const user = Store.getCurrentUser() ? Store.getUser(Store.getCurrentUser()) : null;

    const navItems = [
      { href: "index.html", key: "nav_home" },
      { href: "recipes.html", key: "nav_recipes" },
      { href: "scan.html", key: "nav_scan" },
      { href: "community.html", key: "nav_community" },
      { href: "add-recipe.html", key: "nav_cooks" }
    ];

    const isCurrent = (href) => {
      if (href === "index.html" && (currentPath === "" || currentPath === "index.html")) return true;
      return currentPath === href;
    };

    header.innerHTML = `
      <div class="container nav-container">
        <a href="index.html" class="brand-logo">USE IT UP</a>
        <nav>
          <ul class="nav-links">
            ${navItems
              .map(
                (item) => `
              <li>
                <a href="${item.href}" class="nav-link ${isCurrent(item.href) ? "active" : ""}">
                  ${Store.t(item.key)}
                </a>
              </li>`
              )
              .join("")}
          </ul>
        </nav>
        <div class="nav-actions">
          <button id="theme-toggle-btn" class="btn-icon" aria-label="Toggle Theme" title="Toggle Dark/Light Mode">
            <i data-lucide="${Store.getTheme() === "dark" ? "sun" : "moon"}"></i>
          </button>
          <a href="recipes.html" class="btn-icon" aria-label="Search" title="Search Recipes">
            <i data-lucide="search"></i>
          </a>
          ${
            user
              ? `
            <a href="profile.html" class="user-badge">
              <img src="${user.avatar}" alt="${user.username}">
              <span>${user.username}</span>
            </a>
            <button id="nav-logout-btn" class="btn btn-outline" style="padding: 0.4rem 0.85rem; font-size: 0.8125rem; display: inline-flex; align-items: center; gap: 0.35rem;" title="${Store.t("nav_logout")}">
              <i data-lucide="log-out" style="width: 0.875rem; height: 0.875rem;"></i>
              <span>${Store.t("nav_logout")}</span>
            </button>
          `
              : `
            <a href="login.html" class="btn btn-outline" style="padding: 0.5rem 1.25rem; font-size: 0.875rem;">
              ${Store.t("nav_login")}
            </a>
            <a href="signup.html" class="btn btn-primary" style="padding: 0.5rem 1.25rem; font-size: 0.875rem;">
              ${Store.t("nav_signup")}
            </a>
          `
          }
          <button id="mobile-toggle-btn" class="mobile-toggle" aria-label="Toggle Menu">
            <i data-lucide="menu"></i>
          </button>
        </div>
      </div>
      <div id="mobile-drawer" class="mobile-drawer">
        ${navItems
          .map(
            (item) => `
          <a href="${item.href}" class="nav-link ${isCurrent(item.href) ? "active" : ""}">
            ${Store.t(item.key)}
          </a>
        `
          )
          .join("")}
        <div style="margin-top: 1.5rem; display: flex; gap: 1rem;">
          ${
            user
              ? `
            <a href="profile.html" class="btn btn-primary" style="flex: 1;">${Store.t("footer_your_profile")}</a>
            <button id="mobile-logout-btn" class="btn btn-outline" style="flex: 1;">${Store.t("nav_logout")}</button>
          `
              : `
            <a href="login.html" class="btn btn-outline" style="flex: 1;">${Store.t("nav_login")}</a>
            <a href="signup.html" class="btn btn-primary" style="flex: 1;">${Store.t("nav_signup")}</a>
          `
          }
        </div>
      </div>
    `;

    // Event listeners
    const themeBtn = document.getElementById("theme-toggle-btn");
    if (themeBtn) {
      themeBtn.onclick = () => {
        Store.toggleTheme();
        renderNavbar();
      };
    }

    const navLogoutBtn = document.getElementById("nav-logout-btn");
    if (navLogoutBtn) {
      navLogoutBtn.onclick = () => {
        Store.logout();
        window.location.href = "index.html";
      };
    }

    const mobileLogoutBtn = document.getElementById("mobile-logout-btn");
    if (mobileLogoutBtn) {
      mobileLogoutBtn.onclick = () => {
        Store.logout();
        window.location.href = "index.html";
      };
    }

    const mobileBtn = document.getElementById("mobile-toggle-btn");
    const mobileDrawer = document.getElementById("mobile-drawer");
    if (mobileBtn && mobileDrawer) {
      mobileBtn.onclick = () => {
        const isOpen = mobileDrawer.classList.toggle("open");
        mobileBtn.innerHTML = `<i data-lucide="${isOpen ? "x" : "menu"}"></i>`;
        if (window.lucide) window.lucide.createIcons();
      };
    }

    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });

    if (window.lucide) window.lucide.createIcons();
  }

  function renderFooter() {
    const footer = document.querySelector(".site-footer");
    if (!footer) return;

    const currentLang = Store.getLanguage();

    footer.innerHTML = `
      <div class="container">
        <div class="footer-grid">
          <div>
            <a href="index.html" class="brand-logo" style="margin-bottom: 1rem; display: inline-block;">USE IT UP</a>
            <p style="color: var(--text-muted); font-size: 0.9375rem; max-width: 22rem;">
              ${Store.t("footer_tagline")}
            </p>
          </div>
          <div>
            <h4 class="footer-title">${Store.t("footer_explore")}</h4>
            <ul class="footer-links">
              <li><a href="recipes.html">${Store.t("nav_recipes")}</a></li>
              <li><a href="scan.html">${Store.t("nav_scan")}</a></li>
              <li><a href="community.html">${Store.t("nav_community")}</a></li>
            </ul>
          </div>
          <div>
            <h4 class="footer-title">${Store.t("footer_cooks")}</h4>
            <ul class="footer-links">
              <li><a href="add-recipe.html">${Store.t("footer_add_recipe")}</a></li>
              <li><a href="community.html">${Store.t("section5_title")}</a></li>
            </ul>
          </div>
          <div>
            <h4 class="footer-title">${Store.t("footer_account")}</h4>
            <ul class="footer-links">
              ${
                Store.getCurrentUser()
                  ? `
                <li><a href="profile.html">${Store.t("footer_your_profile")}</a></li>
                <li><a href="#" id="footer-logout-link">${Store.t("nav_logout")}</a></li>
              `
                  : `
                <li><a href="login.html">${Store.t("nav_login")}</a></li>
                <li><a href="signup.html">${Store.t("nav_signup")}</a></li>
              `
              }
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <div>&copy; ${new Date().getFullYear()} USE IT UP. All rights reserved.</div>
          <div class="language-selector">
            <label for="lang-select" style="font-size: 0.8125rem;">${Store.t("language_label")}:</label>
            <select id="lang-select">
              ${window.USEITUP_DATA.languages
                .map((l) => `<option value="${l.code}" ${l.code === currentLang ? "selected" : ""}>${l.name}</option>`)
                .join("")}
            </select>
          </div>
        </div>
      </div>
    `;

    const langSelect = document.getElementById("lang-select");
    if (langSelect) {
      langSelect.onchange = (e) => {
        Store.setLanguage(e.target.value);
        window.location.reload();
      };
    }

    const logoutLink = document.getElementById("footer-logout-link");
    if (logoutLink) {
      logoutLink.onclick = (e) => {
        e.preventDefault();
        Store.logout();
        window.location.href = "index.html";
      };
    }
  }

  function checkWelcomeModal() {
    if (Store.getCurrentUser() || Store.isWelcomeDismissed()) return;

    let overlay = document.getElementById("welcome-modal-overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.id = "welcome-modal-overlay";
      overlay.className = "modal-overlay open";
      overlay.innerHTML = `
        <div class="modal-card text-center" style="max-width: 32rem;">
          <button class="modal-close" id="close-welcome-btn"><i data-lucide="x"></i></button>
          <div class="brand-logo" style="margin-bottom: 0.5rem;">USE IT UP</div>
          <h2 style="font-size: 1.5rem; margin-bottom: 0.5rem;">${Store.t("welcome_title")}</h2>
          <p style="color: var(--text-muted); font-size: 0.9375rem; margin-bottom: 1.25rem;">
            ${Store.t("welcome_subtitle")}
          </p>

          <!-- Featured dish photos inside the welcome modal -->
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem; margin-bottom: 1.5rem;">
            <a href="recipe-detail.html?id=creamy-tomato-pasta" style="display: block; border-radius: var(--radius-md); overflow: hidden; position: relative; aspect-ratio: 1/1; box-shadow: var(--card-shadow);">
              <img src="https://images.unsplash.com/photo-1516100882582-96c3a05fe590?w=600&q=80&auto=format&fit=crop" alt="Creamy Tomato Pasta" style="width: 100%; height: 100%; object-fit: cover;">
              <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(0deg, rgba(0,0,0,0.75) 0%, transparent 100%); padding: 0.35rem 0.25rem; font-size: 0.7rem; font-weight: 600; color: #fff; text-align: center;">Tomato Pasta</div>
            </a>
            <a href="recipe-detail.html?id=roasted-vegetable-bowl" style="display: block; border-radius: var(--radius-md); overflow: hidden; position: relative; aspect-ratio: 1/1; box-shadow: var(--card-shadow);">
              <img src="https://images.unsplash.com/photo-1617474019977-0e105d1b430e?w=600&q=80&auto=format&fit=crop" alt="Roasted Veg Bowl" style="width: 100%; height: 100%; object-fit: cover;">
              <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(0deg, rgba(0,0,0,0.75) 0%, transparent 100%); padding: 0.35rem 0.25rem; font-size: 0.7rem; font-weight: 600; color: #fff; text-align: center;">Veg Bowl</div>
            </a>
            <a href="recipe-detail.html?id=garlic-butter-rice" style="display: block; border-radius: var(--radius-md); overflow: hidden; position: relative; aspect-ratio: 1/1; box-shadow: var(--card-shadow);">
              <img src="https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=600&q=80&auto=format&fit=crop" alt="Garlic Butter Rice" style="width: 100%; height: 100%; object-fit: cover;">
              <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(0deg, rgba(0,0,0,0.75) 0%, transparent 100%); padding: 0.35rem 0.25rem; font-size: 0.7rem; font-weight: 600; color: #fff; text-align: center;">Garlic Rice</div>
            </a>
          </div>

          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            <a href="signup.html" class="btn btn-primary" style="width: 100%;">${Store.t("nav_signup")}</a>
            <a href="login.html" class="btn btn-outline" style="width: 100%;">${Store.t("nav_login")}</a>
            <button id="guest-continue-btn" style="color: var(--text-muted); font-size: 0.875rem; padding: 0.5rem; cursor: pointer;">
              ${Store.t("continue_as_guest")}
            </button>
          </div>
        </div>
      `;
      document.body.appendChild(overlay);

      const dismiss = () => {
        Store.dismissWelcome();
        overlay.classList.remove("open");
        setTimeout(() => overlay.remove(), 300);
      };

      document.getElementById("close-welcome-btn").onclick = dismiss;
      document.getElementById("guest-continue-btn").onclick = dismiss;
      overlay.onclick = (e) => {
        if (e.target === overlay) dismiss();
      };
      if (window.lucide) window.lucide.createIcons();
    }
  }

  function renderFloatingIngredients(containerSelector) {
    const el = document.querySelector(containerSelector);
    if (!el) return;
    const items = [
      { emoji: "🍅", top: "12%", left: "8%", size: "2.75rem", anim: "anim-float-slow" },
      { emoji: "🌿", top: "20%", left: "88%", size: "2.25rem", anim: "anim-float-med" },
      { emoji: "🍝", top: "65%", left: "6%", size: "2.75rem", anim: "anim-float-med" },
      { emoji: "🧄", top: "78%", left: "90%", size: "1.75rem", anim: "anim-float-fast" },
      { emoji: "🥕", top: "40%", left: "93%", size: "2.25rem", anim: "anim-float-slow" },
      { emoji: "🫑", top: "85%", left: "18%", size: "2rem", anim: "anim-float-fast" },
      { emoji: "🧅", top: "8%", left: "60%", size: "2rem", anim: "anim-float-med" },
      { emoji: "🍋", top: "52%", left: "2%", size: "1.75rem", anim: "anim-float-fast" }
    ];

    el.innerHTML = items
      .map(
        (it) => `
      <span class="floating-item ${it.anim}" style="top: ${it.top}; left: ${it.left}; font-size: ${it.size};">
        ${it.emoji}
      </span>
    `
      )
      .join("");
  }

  function initApp() {
    renderNavbar();
    renderFooter();
    checkWelcomeModal();
    if (window.lucide) window.lucide.createIcons();
  }

  window.USEITUP_COMMON = {
    showToast,
    renderNavbar,
    renderFooter,
    renderFloatingIngredients,
    initApp
  };

  document.addEventListener("DOMContentLoaded", initApp);
})();
