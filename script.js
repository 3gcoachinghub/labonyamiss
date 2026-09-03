document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = document.getElementById('themeToggle');
  const sunIcon = document.getElementById('sunIcon');
  const moonIcon = document.getElementById('moonIcon');
  const html = document.documentElement;

  // Default theme is light unless explicitly set to dark in localStorage
  const savedTheme = localStorage.getItem('theme');
  const isDark = savedTheme === 'dark';

  function updateTheme(dark) {
    if (dark) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      if (sunIcon && moonIcon) {
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
      }
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      if (sunIcon && moonIcon) {
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
      }
    }
  }

  // Initialize default theme (Light mode default)
  updateTheme(isDark);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentlyDark = html.classList.contains('dark');
      updateTheme(!currentlyDark);
    });
  }

  // Mobile navigation menu toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }
});

