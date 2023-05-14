'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
//old school way
const request = new XMLHttpRequest();
request.open('GET');
