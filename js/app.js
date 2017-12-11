window.addEventListener('load', function() {
  var menu = document.getElementById('btn-menu');
  menu.addEventListener('click', showMenu);
});

function showMenu() {
  var ulMenu = document.getElementById('ul-menu');
  ulMenu.classList.toggle('display');
}
