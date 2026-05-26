document.addEventListener("DOMContentLoaded", () => {
  function showLang(lang) {
    document.querySelectorAll("[data-lang]").forEach((el) => {
      el.style.display = el.getAttribute("data-lang") === lang ? "" : "none";
    });
  }

  showLang(window.siteI18n.getPreferredLang());

  document.querySelectorAll("#langToggle, #langToggleMobile").forEach((btn) => {
    btn.addEventListener("click", () => {
      setTimeout(() => {
        showLang(localStorage.getItem("mealsmind_lang") || "en");
      }, 50);
    });
  });
});
