export default function initNavigation() {
  const { body } = document;

  const menu = document.querySelector('.mobile-menu');
  const closeBtn = document.querySelector('.menu-close');
  const hamburger = document.querySelector('.hamburger-btn');

  if (!menu || !closeBtn || !hamburger) return;

  function showMenu() {
    menu.classList.add('active');
    body.classList.add('hidden');
  }

  function hideMenu() {
    menu.classList.remove('active');
    body.classList.remove('hidden');
  }

  closeBtn.addEventListener('click', hideMenu);
  hamburger.addEventListener('click', showMenu);
}
