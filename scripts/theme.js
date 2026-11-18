(() => {
  "use strict";

  const key = "dan-kang-theme";
  const root = document.documentElement;
  const system = window.matchMedia("(prefers-color-scheme: dark)");
  let preference = readPreference();
  let button;
  let select;

  function readPreference() {
    try {
      const saved = localStorage.getItem(key);
      if (saved === "light" || saved === "dark") return saved;
    } catch {
      // Theme switching still works when browser storage is unavailable.
    }
    return null;
  }

  function isDark() {
    return preference ? preference === "dark" : system.matches;
  }

  function applyTheme() {
    root.dataset.theme = preference || "system";

    if (button) {
      const dark = isDark();
      button.setAttribute("aria-pressed", String(dark));
      button.dataset.mode = dark ? "dark" : "light";
      button.title = dark ? "Switch to light mode" : "Switch to dark mode";
    }

    if (select) select.value = preference || "system";
  }

  function setPreference(next) {
    preference = next;
    try {
      if (next) localStorage.setItem(key, next);
      else localStorage.removeItem(key);
    } catch {
      // Keep the user's choice for this page even without persistent storage.
    }
    applyTheme();
  }

  function initializeControls() {
    button = document.querySelector(".theme-toggle");
    select = document.getElementById("preview-theme");

    if (button) {
      button.addEventListener("click", () => {
        setPreference(isDark() ? "light" : "dark");
      });
    }

    if (select) {
      select.addEventListener("change", () => {
        setPreference(select.value === "system" ? null : select.value);
      });
    }

    applyTheme();
    if (button) button.hidden = false;
  }

  // Apply a saved choice in the head, before the first paint.
  applyTheme();

  if (system.addEventListener) system.addEventListener("change", applyTheme);
  else system.addListener(applyTheme);

  window.addEventListener("storage", (event) => {
    if (event.key === key || event.key === null) {
      preference = readPreference();
      applyTheme();
    }
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeControls, { once: true });
  } else {
    initializeControls();
  }
})();
