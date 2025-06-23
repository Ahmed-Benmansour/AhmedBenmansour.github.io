
function loadLang(callback) {
  const lang = localStorage.getItem("lang") || "fr";
  fetch("lang/" + lang + ".json")
    .then(res => res.json())
    .then(data => {
      for (const key in data) {
        const el = document.getElementById(key);
        if (el) el.textContent = data[key];
      }
      document.documentElement.lang = lang;
      if (callback) callback();
    });
}

function setLang(lang) {
  localStorage.setItem("lang", lang);
  location.reload();
}

window.onload = () => loadLang();
