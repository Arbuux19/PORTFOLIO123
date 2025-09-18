// home.js
const menuToggle = document.getElementById('menuToggle');

menuToggle.addEventListener('click', () => {
  document.body.classList.toggle('active'); // adds or removes 'active' on <body>
});
