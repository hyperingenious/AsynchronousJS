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
/*
const getCountries = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    renderCountry(data);

    if (!data?.borders) return;
    const neighbour_code = data.borders[0];
    const request2 = new XMLHttpRequest();
    // prettier-ignore
    request2.open('GET',`https://restcountries.com/v3.1/alpha/${neighbour_code}`);
    request2.send();
    request2.addEventListener('load', function () {
      const [data] = JSON.parse(this.responseText);
      renderCountry(data, 'neighbour');

      if (!data?.borders) return;
      const neighbour_code = data.borders[0];
      const request3 = new XMLHttpRequest();
      // prettier-ignore
      request3.open('GET',`https://restcountries.com/v3.1/alpha/${neighbour_code}`);
      request3.send();
      request3.addEventListener('load', function () {
        const [data] = JSON.parse(this.responseText);
        renderCountry(data, 'neighbour');

        if (!data?.borders) return;
        const neighbour_code = data.borders[0];
        const request4 = new XMLHttpRequest();
        // prettier-ignore
        request4.open('GET',`https://restcountries.com/v3.1/alpha/${neighbour_code}`);
        request4.send();
        request4.addEventListener('load', function () {
          const [data] = JSON.parse(this.responseText);
          renderCountry(data, 'neighbour');

          if (!data?.borders) return;
          const neighbour_code = data.borders[0];
          const request5 = new XMLHttpRequest();
          // prettier-ignore
          request5.open('GET',`https://restcountries.com/v3.1/alpha/${neighbour_code}`);
          request5.send();
          request5.addEventListener('load', function () {
            const [data] = JSON.parse(this.responseText);
            renderCountry(data, 'neighbour');

            if (!data?.borders) return;
            const neighbour_code = data.borders[0];
            const request6 = new XMLHttpRequest();
            // prettier-ignore
            request6.open('GET',`https://restcountries.com/v3.1/alpha/${neighbour_code}`);
            request6.send();
            request6.addEventListener('load', function () {
              const [data] = JSON.parse(this.responseText);
              renderCountry(data, 'neighbour');
            });
          });
        });
      });
    });
  });
};

getCountries('PAKISTAN');
*/
