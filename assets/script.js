
function setLang(lang) {
  fetch(`assets/lang/${lang}.json`)
    .then(response => response.json())
    .then(data => {
      for (const [key, value] of Object.entries(data)) {
        const el = document.getElementById(key);
        if (el) {
          if (Array.isArray(value)) {
            el.innerHTML = value.map(item => `<li>${item}</li>`).join("");
          } else {
            el.textContent = value;
          }
        }
      }
      document.documentElement.lang = lang;
      if (lang === "ar") {
        document.body.style.direction = "rtl";
      } else {
        document.body.style.direction = "ltr";
      }
    });
}
window.addEventListener("DOMContentLoaded", () => setLang("fr"));
