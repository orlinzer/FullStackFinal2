/*
 * @authors Or Linzer and Hilal Sharkawi
 * @file catalog.js
 */

'use strict'

/**
 * @type HTMLCollectionOf<HTMLElement>
 */
let items;
let noOfItems = 0;

function loadCatalog () {

  items = document.getElementsByClassName('item');

  if (!items) { return; }

  noOfItems = items.length;
  for (let i = 0; i < noOfItems; i++) {
    items[i].addEventListener('click', (e) => {
      items[i].classList.toggle('selected');

      /* TO BE CONTINUED! */
      // TODO: add the selected items to the cart
      // // check if there is Web Storage API
      // if (typeof(Storage) !== "undefined") {
      //   let img = items[i].getElementsByTagName('img')[0].src;
      //   let figcaption = items[i].getElementsByTagName('figcaption')[0];
      //   let h1 = figcaption.getElementsByTagName('h1').innerText;
      //   let p = figcaption.getElementsByTagName('p')[0].innerText;

      //   if (items[i].classList.contains('selected')) {
      //     console.log(sessionStorage.cart);
      //     let tmpCart = JSON.parse(sessionStorage.cart);
      //     console.log(tmpCart);
      //     tmpCart.push({
      //       img: img,
      //       h1: h1,
      //       p: p
      //     });
      //   } else {
      //     sessionStorage.cart.filter((value) => {
      //       return value == {
      //         img: img,
      //         h1: h1,
      //         p: p
      //       };
      //     })
      //   }
      //   console.log(sessionStorage.cart);
      // }
    });
  }
}

loadCatalog();