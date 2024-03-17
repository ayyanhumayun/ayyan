const themeToggleBtn = document.getElementById('theme-toggle');
const bodyElement = document.body;

themeToggleBtn.addEventListener('click', function() {
  bodyElement.classList.toggle('dark-theme'); // Add a 'dark-theme' class to body for dark mode styles
});
