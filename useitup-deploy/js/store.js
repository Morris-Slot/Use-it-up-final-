// USE IT UP - Central Storage & State Management
(function () {
  const STORAGE_KEY_PREFIX = "useitup_";

  function getStorage(key, fallback) {
    try {
      const item = localStorage.getItem(STORAGE_KEY_PREFIX + key);
      return item !== null ? JSON.parse(item) : fallback;
    } catch (e) {
      console.warn("Storage read error:", e);
      return fallback;
    }
  }

  function setStorage(key, val) {
    try {
      localStorage.setItem(STORAGE_KEY_PREFIX + key, JSON.stringify(val));
    } catch (e) {
      console.warn("Storage write error:", e);
    }
  }

  const data = window.USEITUP_DATA;

  // Initialize defaults if not present
  if (!getStorage("users", null)) {
    setStorage("users", data.seedUsers);
  }
  if (!getStorage("recipes", null)) {
    setStorage("recipes", data.recipes);
  }
  if (!getStorage("posts", null)) {
    setStorage("posts", data.posts);
  }
  if (!getStorage("mealsSaved", null)) {
    setStorage("mealsSaved", data.initialMealsSaved);
  }
  if (!getStorage("savedRecipeIds", null)) {
    setStorage("savedRecipeIds", []);
  }
  if (!getStorage("likedRecipeIds", null)) {
    setStorage("likedRecipeIds", []);
  }
  if (!getStorage("postLikedBy", null)) {
    setStorage("postLikedBy", {});
  }
  if (!getStorage("postComments", null)) {
    setStorage("postComments", {});
  }

  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function avatarFor(username) {
    return "https://api.dicebear.com/9.x/avataaars/svg?seed=" + encodeURIComponent(username);
  }

  const Store = {
    // Current user auth
    getCurrentUser() {
      return getStorage("currentUser", null);
    },

    getUser(username) {
      const users = getStorage("users", data.seedUsers);
      return users[username] || null;
    },

    login(email, password) {
      const users = getStorage("users", data.seedUsers);
      const user = Object.values(users).find(
        (u) => u.email.toLowerCase() === email.trim().toLowerCase()
      );
      if (!user) {
        return { ok: false, error: Store.t("err_login_invalid") };
      }
      if (user.password && user.password !== password) {
        return { ok: false, error: Store.t("err_login_invalid") };
      }
      setStorage("currentUser", user.username);
      return { ok: true, user };
    },

    signup(username, email, password, confirm) {
      username = username.trim();
      email = email.trim().toLowerCase();
      const users = getStorage("users", data.seedUsers);

      if (!username) return { ok: false, error: Store.t("err_choose_username") };
      if (users[username]) return { ok: false, error: Store.t("err_username_taken") };
      if (!EMAIL_RE.test(email)) return { ok: false, error: Store.t("err_invalid_email") };
      if (Object.values(users).some((u) => u.email.toLowerCase() === email)) {
        return { ok: false, error: Store.t("err_email_taken") };
      }
      if (password.length < 6) return { ok: false, error: Store.t("err_password_short") };
      if (password !== confirm) return { ok: false, error: Store.t("err_password_mismatch") };

      const newUser = {
        username,
        email,
        password,
        bio: "New here — figuring out what's in the fridge.",
        avatar: avatarFor(username),
        followers: [],
        following: [],
        language: Store.getLanguage()
      };

      users[username] = newUser;
      setStorage("users", users);
      setStorage("currentUser", username);
      return { ok: true, user: newUser };
    },

    logout() {
      setStorage("currentUser", null);
    },

    updateProfile(updates) {
      const current = Store.getCurrentUser();
      if (!current) return;
      const users = getStorage("users", data.seedUsers);
      if (!users[current]) return;
      users[current] = { ...users[current], ...updates };
      setStorage("users", users);
    },

    // Follows
    isFollowing(targetUsername) {
      const current = Store.getCurrentUser();
      if (!current) return false;
      const user = Store.getUser(current);
      return user?.following?.includes(targetUsername) || false;
    },

    toggleFollow(targetUsername) {
      const current = Store.getCurrentUser();
      if (!current || current === targetUsername) return;
      const users = getStorage("users", data.seedUsers);
      const me = users[current];
      const target = users[targetUsername];
      if (!me || !target) return;

      if (!me.following) me.following = [];
      if (!target.followers) target.followers = [];

      const idx = me.following.indexOf(targetUsername);
      if (idx >= 0) {
        me.following.splice(idx, 1);
        const fIdx = target.followers.indexOf(current);
        if (fIdx >= 0) target.followers.splice(fIdx, 1);
      } else {
        me.following.push(targetUsername);
        if (!target.followers.includes(current)) target.followers.push(current);
      }

      setStorage("users", users);
    },

    // Recipes
    getAllRecipes() {
      const stored = getStorage("recipes", null);
      if (Array.isArray(stored) && stored.length > 0) {
        return stored;
      }
      setStorage("recipes", data.recipes);
      return data.recipes;
    },


    getRecipeById(id) {
      const all = Store.getAllRecipes();
      return all.find((r) => r.id === id) || null;
    },

    addRecipe(recipe) {
      const all = Store.getAllRecipes();
      const newRecipe = {
        id: "user-recipe-" + Date.now(),
        author: Store.getCurrentUser() || "Guest Cook",
        authorUsername: Store.getCurrentUser() || undefined,
        likes: 0,
        category: recipe.category && recipe.category.length ? recipe.category : ["Community"],
        ...recipe
      };
      all.unshift(newRecipe);
      setStorage("recipes", all);
      Store.recordMealSaved();
      return newRecipe;
    },

    isRecipeSaved(id) {
      const saved = getStorage("savedRecipeIds", []);
      return saved.includes(id);
    },

    toggleSaveRecipe(id) {
      const saved = getStorage("savedRecipeIds", []);
      const idx = saved.indexOf(id);
      if (idx >= 0) {
        saved.splice(idx, 1);
      } else {
        saved.push(id);
      }
      setStorage("savedRecipeIds", saved);
      return !saved.includes(id);
    },

    isRecipeLiked(id) {
      const liked = getStorage("likedRecipeIds", []);
      return liked.includes(id);
    },

    toggleLikeRecipe(id) {
      const liked = getStorage("likedRecipeIds", []);
      const idx = liked.indexOf(id);
      let isNowLiked = false;
      if (idx >= 0) {
        liked.splice(idx, 1);
        isNowLiked = false;
      } else {
        liked.push(id);
        isNowLiked = true;
      }
      setStorage("likedRecipeIds", liked);

      // update like count in recipe
      const all = Store.getAllRecipes();
      const r = all.find((rec) => rec.id === id);
      if (r) {
        r.likes = Math.max(0, (r.likes || 0) + (isNowLiked ? 1 : -1));
        setStorage("recipes", all);
      }

      return isNowLiked;
    },

    // Posts & Feed
    getPosts() {
      const stored = getStorage("posts", null);
      if (Array.isArray(stored) && stored.length > 0) {
        return stored;
      }
      setStorage("posts", data.posts);
      return data.posts;
    },


    addPost(image, caption, ingredients) {
      const current = Store.getCurrentUser() || "guest.cook";
      const user = Store.getUser(current);
      const posts = Store.getPosts();
      const newPost = {
        id: "post-" + Date.now(),
        user: current,
        avatar: user?.avatar || avatarFor(current),
        image,
        caption,
        ingredients,
        likes: 0
      };
      posts.unshift(newPost);
      setStorage("posts", posts);
      Store.recordMealSaved();
      return newPost;
    },

    isPostLiked(postId) {
      const current = Store.getCurrentUser() || "guest";
      const likedBy = getStorage("postLikedBy", {});
      return (likedBy[postId] || []).includes(current);
    },

    getPostLikesCount(postId) {
      const post = Store.getPosts().find((p) => p.id === postId);
      const likedBy = getStorage("postLikedBy", {});
      const customLikes = (likedBy[postId] || []).length;
      return (post?.likes || 0) + customLikes;
    },

    toggleLikePost(postId) {
      const current = Store.getCurrentUser() || "guest";
      const likedBy = getStorage("postLikedBy", {});
      if (!likedBy[postId]) likedBy[postId] = [];

      const idx = likedBy[postId].indexOf(current);
      let liked = false;
      if (idx >= 0) {
        likedBy[postId].splice(idx, 1);
        liked = false;
      } else {
        likedBy[postId].push(current);
        liked = true;
      }
      setStorage("postLikedBy", likedBy);
      return liked;
    },

    getPostComments(postId) {
      const comments = getStorage("postComments", {});
      return comments[postId] || [];
    },

    addComment(postId, text) {
      const current = Store.getCurrentUser() || "guest";
      const comments = getStorage("postComments", {});
      if (!comments[postId]) comments[postId] = [];
      const newComment = {
        id: "c-" + Date.now(),
        username: current,
        text: text.trim()
      };
      comments[postId].push(newComment);
      setStorage("postComments", comments);
      return newComment;
    },

    // Food waste saved statistics & badges
    getMealsSaved(username) {
      const target = username || Store.getCurrentUser() || "elena.cooks";
      const meals = getStorage("mealsSaved", data.initialMealsSaved);
      return meals[target] || 0;
    },

    recordMealSaved() {
      const current = Store.getCurrentUser();
      const meals = getStorage("mealsSaved", data.initialMealsSaved);
      const target = current || "guest";
      meals[target] = (meals[target] || 0) + 1;
      setStorage("mealsSaved", meals);
      return meals[target];
    },

    getTierInfo(mealsCount) {
      const tierList = data.tiers;
      const tier = tierList.find((t) => t.max === null || mealsCount < t.max) || tierList[tierList.length - 1];
      const isMax = tier.max === null;
      const progress = isMax ? 1 : (mealsCount - tier.min) / (tier.max - tier.min);
      const tierIdx = tierList.indexOf(tier);
      const nextTier = tierList[tierIdx + 1];
      return {
        tierName: tier.name,
        isMax,
        progress: Math.max(0, Math.min(1, progress)),
        remaining: isMax ? 0 : tier.max - mealsCount,
        nextTierName: nextTier ? nextTier.name : ""
      };
    },

    estimateKgSaved(mealsCount) {
      return Math.round(mealsCount * 0.35 * 10) / 10;
    },

    // Language & Translations
    getLanguage() {
      return getStorage("language", "en");
    },

    setLanguage(lang) {
      setStorage("language", lang);
      document.dispatchEvent(new CustomEvent("useitup:langchange", { detail: lang }));
    },

    t(key) {
      const lang = Store.getLanguage();
      const dict = data.translations[key];
      if (!dict) return key;
      return dict[lang] || dict["en"] || key;
    },

    // Theme (Dark / Light)
    getTheme() {
      return getStorage("theme", "light");
    },

    setTheme(theme) {
      setStorage("theme", theme);
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      document.dispatchEvent(new CustomEvent("useitup:themechange", { detail: theme }));
    },

    toggleTheme() {
      const current = Store.getTheme();
      const next = current === "dark" ? "light" : "dark";
      Store.setTheme(next);
      return next;
    },

    // Welcome modal
    isWelcomeDismissed() {
      return getStorage("welcomeDismissed", false);
    },

    dismissWelcome() {
      setStorage("welcomeDismissed", true);
    }
  };

  window.USEITUP_STORE = Store;
})();
