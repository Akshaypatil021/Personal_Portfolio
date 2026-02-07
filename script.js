const sideMenu = document.querySelector('#sideMenu');

function openMenu() {
  sideMenu.classList.remove('-right-64');
  sideMenu.classList.add('right-0');
}

function closeMenu() {
  sideMenu.classList.remove('right-0');
  sideMenu.classList.add('-right-64');
}
