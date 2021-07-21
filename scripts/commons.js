'use strict'

var themeButton;
var menuButton;
var searchButton;

function loadWebStorage () {
  // Web Storage API
  if (typeof(Storage) !== "undefined") {
    //
    if (!localStorage.theme) {
      localStorage.theme = 'light';
    } else if (localStorage.theme == 'dark') {
      document.documentElement.classList.add('dark');
    }

    if (!sessionStorage.cart) {
      sessionStorage.cart = {};
    }
  } else {
    console.error("Can't use Web Storage API!");
  }
}

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

  // save theme preferences in Web Storage API
  if (typeof(Storage) !== "undefined") {
    if (document.documentElement.classList.contains('dark')) {
      localStorage.theme = 'dark';
    } else {
      localStorage.theme = 'light';
    }
    // console.log(localStorage.theme);
  }
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

function preload () {
  loadWebStorage();
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

  // loadWebStorage();
}

preload();
window.onload = load;
