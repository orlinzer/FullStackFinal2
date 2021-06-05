'use strict'

var themeButton;
var menuButton;
var searchButton;
// var menu;

function toggleTheme (e) {
  document.documentElement.classList.toggle('dark');
}

function toggleMenu (e) {
  document.documentElement.classList.toggle('open-menu');
}

function toggleSearch (e) {
  document.documentElement.classList.toggle('open-search');
}

function load () {
  // menu = document.getElementById('menu');
  themeButton = document.getElementById('theme-button');
  menuButton = document.getElementById('menu-button');
  searchButton = document.getElementById('search-button');

  themeButton.onclick = toggleTheme;
  menuButton.onclick = toggleMenu;
  searchButton.onclick = toggleSearch;
}

window.onload = load;
