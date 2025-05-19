const textES = `
$ whoami
<span class="glitch-text" data-text="Mayerson Jimenez">Mayerson Jimenez</span>

$ role
Senior Software Engineer at Mercado Libre

$ contact
Email: mayerson18@gmail.com
Tel: +57 350 620 8514

$ about
Desarrollador full stack con experiencia en web y móvil.
Stack: Node.js, React, Vue, AWS, Serverless, MongoDB, PostgreSQL, etc.

$ experience
[Mercado Libre]
  SR SOFTWARE ENGINEER (2021 - hoy)
  - Frontend con React, TypeScript
  - Backend con Node.js y Go
  - Trabajo multi-país, gran escala

[Linktic]
  FULL STACK ENGINEER (2019 - 2021)
  - JavaScript full stack
  - AWS, Serverless, React, Vue

[Vendty]
  MOBILE & FRONTEND DEV (2018 - 2019)
  - React Native, Vue.js

$ skills
- Clean Code
- TDD
- BEM
- Trabajo en equipo
- Aprendizaje continuo

$ languages
Español (Nativo/Bilingüe)
Inglés (A2/B1)

$ _
`;

const textEN = `
$ whoami
<span class="glitch-text" data-text="Mayerson Jimenez">Mayerson Jimenez</span>

$ role
Senior Software Engineer at Mercado Libre

$ contact
Email: mayerson18@gmail.com
Tel: +57 350 620 8514
GitHub: <a href="https://github.com/Mayerson18" target="_blank">github.com/Mayerson18</a>
LinkedIn: <a href="https://linkedin.com/in/mayerson-jimenez-b75894154" target="_blank">linkedin.com/in/mayerson-jimenez-b75894154</a>
Portfolio: <a href="https://mnf.red/mayerson" target="_blank">mnf.red/mayerson</a>

$ about
Full stack developer with experience in web and mobile.
Stack: Node.js, React, Vue, AWS, Serverless, MongoDB, PostgreSQL, etc.

$ experience
[Mercado Libre]
  SR SOFTWARE ENGINEER (2021 - present)
  - Frontend with React, TypeScript
  - Backend with Node.js and Go
  - Multi-country, large scale work

[Linktic]
  FULL STACK ENGINEER (2019 - 2021)
  - JavaScript full stack
  - AWS, Serverless, React, Vue

[Vendty]
  MOBILE & FRONTEND DEV (2018 - 2019)
  - React Native, Vue.js

$ skills
- Clean Code
- TDD
- BEM
- Teamwork
- Continuous learning

$ languages
Spanish (Native)
English (A2/B1)

$ _
`;

let currentLang = 'ES';
let i = 0;
let text = textES;

function typeEffect() {
  const el = document.getElementById("terminal-text");
  if (i < text.length) {
    if (text[i] === '<') {
      const closeIdx = text.indexOf('>', i);
      el.innerHTML += text.slice(i, closeIdx + 1);
      i = closeIdx + 1;
    } else {
      el.innerHTML += text[i] === '\n' ? "\n" : text[i];
      i++;
    }
    setTimeout(typeEffect, 20);
  }
}

function startTyping(newText) {
  const el = document.getElementById("terminal-text");
  el.innerHTML = '';
  text = newText;
  i = 0;
  typeEffect();
}

window.onload = () => {
  typeEffect();
  const langBtn = document.getElementById('lang-toggle');
  langBtn.onclick = () => {
    if (currentLang === 'ES') {
      langBtn.textContent = 'ES';
      currentLang = 'EN';
      startTyping(textEN);
    } else {
      langBtn.textContent = 'EN';
      currentLang = 'ES';
      startTyping(textES);
    }
  };
};
