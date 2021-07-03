'use strict'

var themeButton;
var menuButton;
var searchButton;

/**
 * @type HTMLInputElement
 */
var searchBox;

/**
 * @type HTMLFormElement
 */
var searchForm;
// var menu;

function toggleTheme (e) {
  document.documentElement.classList.toggle('dark');
}

function toggleMenu (e) {
  document.documentElement.classList.toggle('open-menu');
}

function openSearch (e) {
  if (!document.documentElement.classList.contains('open-search')) {
    document.documentElement.classList.add('open-search');
    searchBox.focus();
  } else {
    searchForm.submit();
  }
}

function closeSearch (e) {
  setTimeout(() => {
    searchBox.value = '';
    document.documentElement.classList.remove('open-search');
  }, 200);
}

function load () {
  // menu = document.getElementById('menu');
  themeButton = document.getElementById('theme-button');
  menuButton = document.getElementById('menu-button');
  searchButton = document.getElementById('search-button');
  searchBox = document.getElementById('search-box');
  searchForm = document.getElementById('search');

  themeButton.onclick = toggleTheme;
  menuButton.onclick = toggleMenu;
  searchButton.onclick = openSearch;
  searchBox.onblur = closeSearch;
}

window.onload = load;
