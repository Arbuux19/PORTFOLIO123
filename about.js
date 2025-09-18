// Get the button and navbar
const menuToggle = document.getElementById('menuToggle');
const nav = document.querySelector('.nav1');

// Add click event
menuToggle.addEventListener('click', () => {
  // Toggle only the nav visibility
  nav.classList.toggle('active');

  // Switch between menu and close icons
  menuToggle.classList.toggle('open');
});
