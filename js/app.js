const lightButton = document.querySelector("[data-id='light']");
const darkButton = document.querySelector("[data-id='dark']");
const solarButton = document.querySelector("[data-id='solar']");
const body = document.body;

const theme = localStorage.getItem('theme');
const isSolar = localStorage.getItem('isSolar');

if (theme) {
  body.classList.add(theme);
  isSolar && body.classList.add('solar');
}

darkButton.addEventListener('click', () => {
  body.classList.replace('light', 'dark');
  localStorage.setItem('theme', 'dark');
});

lightButton.addEventListener('click', () => {
  body.classList.replace('dark', 'light');
  localStorage.setItem('theme', 'light');
});

solarButton.addEventListener('click', e => {
  if (body.classList.contains('solar')) {
    body.classList.remove('solar');
    solarButton.getElementsByClassName.cssText = `
      --bg-solar: var(--yellow);
    `;

    solarButton.innerText = 'Solarize';
    localStorage.removeItem('isSolar');
  } else {
    solarButton.style.cssText = `
      --bg-solar: white;
    `;
  
    body.classList.add('solar');
  }
});
