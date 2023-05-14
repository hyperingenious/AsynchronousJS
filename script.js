'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
//old school way
const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/all');
request.send();

request.addEventListener('load', function () {
  const data = JSON.parse(this.responseText);
  console.log(data);

  //   document.body.innerHTML = data;
  data.forEach(e => console.log(e.name.common, e.currencies));
});
