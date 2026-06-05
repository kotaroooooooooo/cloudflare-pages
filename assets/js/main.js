// ── Scroll fade
const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('on'); obs.unobserve(e.target); } });
  }, { threshold: 0.07 });
  document.querySelectorAll('.fade').forEach(el => obs.observe(el));

// ── Language switcher





  // ── Hamburger
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  hamburger.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', open);
  });

  function closeMobile() {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
  }

  // close mobile menu on outside tap
  document.addEventListener('click', e => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) closeMobile();
  });

// Language //

const langBtn = document.getElementById('langBtn');
const langMenu = document.getElementById('langMenu');

langBtn.addEventListener('click', () => {
    langMenu.classList.toggle('show');
});

document.querySelectorAll('.lang-menu li').forEach(item => {
    item.addEventListener('click', () => {
        const selectedLang = item.dataset.lang;

        // Button aktualisieren
        langBtn.innerHTML = selectedLang.toUpperCase() + ' ▼';

        // Dropdown schließen
        langMenu.classList.remove('show');

        // Hier Sprache wechseln
        console.log('Sprache gewählt:', selectedLang);

        // Beispiel:
        // window.location.href = '/' + selectedLang;
    });
});

// Klick außerhalb schließt Dropdown
document.addEventListener('click', (e) => {
    if (!e.target.closest('.language-switcher')) {
        langMenu.classList.remove('show');
    }
});

const mobileLangBtn = document.getElementById('mobileLangBtn');
const mobileLangMenu = document.getElementById('mobileLangMenu');

mobileLangBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  mobileLangMenu.classList.toggle('show');
});




const translations = {
  de: {
    about: "Über mich",
    skills: "Fähigkeiten",
    experience: "Erfahrung",
    projects: "Projekte",
    contact: "Kontakt"
  },

    en: {
        about: "About",
        skills: "Skills",
        experience: "Experience",
        projects: "Projects",
        contact: "Contact"
    },

    jp: {
        about: "私について",
        skills: "スキル",
        experience: "経歴",
        projects: "プロジェクト",
        contact: "連絡先"
    }
};


// Sprache wechseln
function setLanguage(lang) {

    document.querySelectorAll('[data-i18n]').forEach(element => {

        const key = element.dataset.i18n;

        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    localStorage.setItem('language', lang);

    document.getElementById('langBtn').textContent = labels[lang];
}


// Sprache aus localStorage laden
document.addEventListener('DOMContentLoaded', () => {

    const savedLanguage =
        localStorage.getItem('language') || 'de';

    setLanguage(savedLanguage);
});


// Dropdown-Klicks
document.querySelectorAll('[data-lang]').forEach(item => {

    item.addEventListener('click', () => {

        const lang = item.dataset.lang;
        setLanguage(lang);

        document
            .getElementById('langMenu')
            .classList.remove('show');
    });

});