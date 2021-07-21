'use strict';

/**
 * @type HTMLInputElement
 */
let inputGivenName = document.getElementById('input-given-name');

/**
 * @type HTMLInputElement
 */
let inputAdditionalName = document.getElementById('input-additional-name');

/**
 * @type HTMLInputElement
 */
let inputFamilyName = document.getElementById('input-family-name');

/**
 * @type HTMLSelectElement
 */
let inputCountry = document.getElementById('input-country');

/**
 * @type HTMLInputElement
 */
let inputStreetAddress = document.getElementById('input-street-address');

/**
 * @type HTMLSelectElement
 */
let inputMobileMobileAreaCode = document.getElementById('input-mobile-mobile-area-code');

/**
 * @type HTMLInputElement
 */
let inputMobile = document.getElementById('input-mobile');

/**
 * @type HTMLSelectElement
 */
let inputTelAreaCode = document.getElementById('input-tel-area-code');

/**
 * @type HTMLInputElement
 */
let inputTel = document.getElementById('input-tel');

/**
 * @type HTMLInputElement
 */
let inputEmail = document.getElementById('input-email');

function markAsSeen (e) {
  this.classList.add('seen');
}

inputGivenName.addEventListener('focus', markAsSeen);
inputAdditionalName.addEventListener('focus', markAsSeen);
inputFamilyName.addEventListener('focus', markAsSeen);
inputCountry.addEventListener('focus', markAsSeen);
inputStreetAddress.addEventListener('focus', markAsSeen);
inputMobileMobileAreaCode.addEventListener('focus', markAsSeen);
inputMobile.addEventListener('focus', markAsSeen);
inputTelAreaCode.addEventListener('focus', markAsSeen);
inputTel.addEventListener('focus', markAsSeen);
inputEmail.addEventListener('focus', markAsSeen);

function setCountryCode (code) {
  inputMobileMobileAreaCode.value = code;
  inputMobileMobileAreaCode.setAttribute('value', code);
  inputTelAreaCode.value = code;
  inputTelAreaCode.setAttribute('value', code);
}

inputCountry.addEventListener('change', (e) => {
  if (inputCountry.value === 'Israel') {
    setCountryCode('+972');
  } else if (inputCountry.value === 'China') {
    setCountryCode('+86');
  } else if (inputCountry.value === 'India') {
    setCountryCode('+91');
  } else if (inputCountry.value === 'United States') {
    setCountryCode('+1');
  } else if (inputCountry.value === 'Indonesia') {
    setCountryCode('+62');
  } else if (inputCountry.value === 'Pakistan') {
    setCountryCode('+92');
  } else if (inputCountry.value === 'Brazil') {
    setCountryCode('+55');
  } else if (inputCountry.value === 'Nigeria') {
    setCountryCode('+234');
  } else if (inputCountry.value === 'Bangladesh') {
    setCountryCode('+880');
  } else if (inputCountry.value === 'Russia') {
    setCountryCode('+7');
  } else if (inputCountry.value === 'Mexico') {
    setCountryCode('+52');
  }
});