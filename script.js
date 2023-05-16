'use strict';

///////////////////////////////////////
//old school way

// const helper = function (url, errorMsg) {
//   return fetch(url).then(response => {
//     if (!response.ok) {
//       throw new Error(`Country not found ${response.status}`);
//     }
//     return response.json();
//   });
// };

// const renderError = function (e) {
//   btn.insertAdjacentText(
//     'beforebegin',
//     `${e} there is a error occured from our side`
//   );
//   console.log(e);
// };

// const getCountries = function (name) {
//   fetch(`https://restcountries.com/v3.1/name/${name}`)
//     .then(response => {
//       if (!response.ok) throw new Error(`Country not found ${response.status}`);

//       return response.json();
//     })
//     .then(data => {
//       const [nData] = data;
//       renderCountry(nData);

//       if (!nData.borders) throw new Error(`no neighbour exists`);

//       const neighbour = nData.borders[0];
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => {
//       if (!response.ok) throw new Error(`Country not found ${response.status}`);

//       return response.json();
//     })
//     .then(data => {
//       const [nData] = data;
//       renderCountry(nData, 'neighbour');
//     })
//     .catch(e => console.log(e));
// };
// getCountries('pakistan');

// const whereBtn = document.querySelector('.where');
// const coordsBtn = document.querySelector('.coords');
// const countriesContainer = document.querySelector('.countries');
// const load = document.querySelector('.load');
// const span = document.querySelector('.spn');

// const renderCountry = function (data, className = '') {
//   const html = `
//   <article draggable="true" class="country ${className}">
//           <img class="country__img" src="${data.flags.svg}" />
//           <div class="country__data">
//           <h3 class="country__name">${data.name.common}</h3>
//           <h4 class="country__region">${data.region}</h4>
//           <p class="country__row"><span>👫</span>${data.population}</p>
//           <p class="country__row"><span>🗣️</span> ${data.languages.hin}</p>
//             <p class="country__row"><span>💰</span> ${data.currencies.INR.symbol}</p>
//           </div>
//         </article>
//   `;

//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };
// const coords = function (e) {
//   const { latitude, longitude } = e.coords;
//   fetch(
//     `https://geocode.xyz/${latitude},${longitude}?geoit=json&auth=831253157316286630930x110214 `
//   )
//     .then(response => response.json())
//     .then(data => {
//       const country = data.prov;
//       return fetch(`https://restcountries.com/v3.1/alpha/${country}`);
//     })
//     .then(response => response.json())
//     .then(data => {
//       const [nData] = data;
//       console.log(nData);
//       renderCountry(nData);
//     });
// };
// const removeButtons = function () {
//   whereBtn.remove();
//   coordsBtn.remove();
//   span.remove();
// };
// const removeForms = function () {
//   document.querySelector('.form').remove();
// };
// const searchWithCoords = function () {
//   const html = `
//   <form action="" class="form">
//   <input type="value" placeholder = "latitude" name="" required id="latitude" />
//   <input type="value" placeholder = "longitude" name="" required id="longitude" />
//   <button class="submit-button">Submit</button>
//   </form>
//   `;
//   coordsBtn.insertAdjacentHTML('afterend', html);
//   removeButtons();

//   document.querySelector('.form').addEventListener('submit', function (e) {
//     e.preventDefault();
//     load.textContent = 'Loading...';
//     const lat = document.querySelector('#latitude').value;
//     const lng = document.querySelector('#longitude').value;

//     fetch(
//       `https://geocode.xyz/${lat},${lng}?geoit=json&auth=831253157316286630930x110214`
//     )
//       .then(response => response.json())
//       .then(data => {
//         if (!data.prov) throw new Error('No Country Found');
//         const nData = data.prov;
//         return fetch(`https://restcountries.com/v3.1/alpha/${data.prov}`);
//       })
//       .then(response => response.json())
//       .then(data => {
//         const [nData] = data;
//         renderCountry(nData);
//         removeForms();
//       })
//       .catch(e => {
//         console.error(e);
//         alert(`${e}`);
//       })
//       .finally((load.textContent = ''));
//   });
// };

// const whereAmI = function () {
//   removeButtons();
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(coords, e => console.log(e));
//   }
// };

// whereBtn.addEventListener('click', whereAmI);
// coordsBtn.addEventListener('click', searchWithCoords);
/*
console.log('Test start');
document.addEventListener('keydown', () => document.write(`Hello`));
Promise.resolve('Resolved promise 1').then(res => {
  console.log(res);
});
Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log(res);
});
console.log('Test end');
*/

const promise = new Promise(function (resolve, reject) {
  if (Math.random() >= 0.5) {
    function hello() {
      return `Hello well friends I'm the skeleton returning from the dead determined to be relevent again so I am following the trends from the nether to the end`;
    }
    resolve(hello());
  } else reject('You Lost the lottery');
});
promise.then(res => console.log(res)).catch(e => console.error(e));

// Promisifying
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, 1000 * seconds);
  });
};

wait(1)
  .then(() => {
    console.log(`We waited for 1sec`);
    return wait(2);
  })
  .then(() => {
    console.log('we waited for 2 sec');
    return wait(3);
  });
