'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
//old school way
const renderCountry = function (data, className = '') {
  const html = `
    <article draggable="true" class="country ${className}">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${data.population}</p>
            <p class="country__row"><span>🗣️</span> ${data.languages.hin}</p>
            <p class="country__row"><span>💰</span> ${data.currencies}</p>
          </div>
        </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const helper = function (url, errorMsg) {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`Country not found ${response.status}`);
    }
    return response.json();
  });
};

const renderError = function (e) {
  btn.insertAdjacentText(
    'beforebegin',
    `${e} there is a error occured from our side`
  );
  console.log(e);
};

const getCountries = function (name) {
  fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(response => {
      if (!response.ok) throw new Error(`Country not found ${response.status}`);

      return response.json();
    })
    .then(data => {
      const [nData] = data;
      renderCountry(nData);

      if (!nData.borders) throw new Error(`no neighbour exists`);

      const neighbour = nData.borders[0];
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => {
      if (!response.ok) throw new Error(`Country not found ${response.status}`);

      return response.json();
    })
    .then(data => {
      const [nData] = data;
      renderCountry(nData, 'neighbour');
    })
    .catch(e => console.log(e));
};
getCountries('pakistan');
