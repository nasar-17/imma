// ===== DARK MODE TOGGLE =====
const toggle = document.getElementById('dark-mode-toggle');
toggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  toggle.innerHTML = newTheme === 'light' 
    ? '<i class="fas fa-moon"></i>' 
    : '<i class="fas fa-sun"></i>';
  
  localStorage.setItem('theme', newTheme);
});

// ===== LOAD SAVED THEME =====
if (localStorage.getItem('theme') === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark');
  toggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// ===== TYPED.JS INIT =====
document.addEventListener('DOMContentLoaded', () => {
  new Typed('#typed-text', {
    strings: ['Sayanggg...', 'Bububbb...', 'Cantiii....'],
    typeSpeed: 100,
    loop: true,
    backSpeed: 50,
    backDelay: 1500
  });
});

// ===== HAMBURGER MENU (MOBILE) =====
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});