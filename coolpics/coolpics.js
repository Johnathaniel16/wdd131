// Toggle mobile menu
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.menu-btn');
  const nav = document.querySelector('#site-nav');
  if (!btn || !nav) return;

  btn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('show');
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
});
