function setLang(lang) {
  fetch(`assets/lang/${lang}.json`)
    .then(res => res.json())
    .then(data => {
      document.documentElement.lang = lang;

      document.getElementById("cv_title").textContent = data.cv_title;
      document.getElementById("education_title").textContent = data.education_title;
      document.getElementById("experience_title").textContent = data.experience_title;
      document.getElementById("skills_title").textContent = data.skills_title;
      document.getElementById("languages_title").textContent = data.languages_title;

      setList("education_list", data.education_list, "dc:education");
      setList("experience_list", data.experience_list, "dc:description");
      setList("skills_list", data.skills_list, "dc:subject");
      setList("languages_list", data.languages_list, "dc:language");

      // RTL support for Arabic
      if (lang === "ar") {
        document.body.style.direction = "rtl";
      } else {
        document.body.style.direction = "ltr";
      }
    })
    .catch(err => {
      console.error("Erreur de chargement de langue :", err);
    });
}

function setList(id, items, property) {
  const ul = document.getElementById(id);
  ul.innerHTML = "";
  items.forEach(text => {
    const li = document.createElement("li");
    li.setAttribute("property", property);
    li.textContent = text;
    ul.appendChild(li);
  });
}

window.addEventListener("DOMContentLoaded", () => setLang("fr"));
