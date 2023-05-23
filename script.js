'use strict';

///////////////////////////////////////
//old school way

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
const countriesContainer = document.querySelector('.countries');
// // const load = document.querySelector('.load');
// // const span = document.querySelector('.spn');

const renderCountry = function (data, className = '') {
  const html = `
  <article draggable="true" class="country ${className}">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
          <h3 class="country__name">${data.name.common}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${data.population}</p>
          <p class="country__row"><span>🗣️</span> ${data.languages.hin}</p>
            <p class="country__row"><span>💰</span> ${data.currencies.INR.symbol}</p>
          </div>
        </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
// const coords = function (e) {
//   const { latitude, longitude } = e.coords;

// // reverse geocoding
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

// const whereAmI0 = function () {
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
Promisee.resolve('Resolved promisee 1').then(res => {
  console.log(res);
});
Promisee.resolve('Resolved promisee 2').then(res => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log(res);
});
console.log('Test end');
*/
/*
const promisee = new Promisee(function (resolve, reject) {
  function hello() {
    return `Hello well friends I'm the skeleton returning from the dead determined to be relevent again so I am following the trends from the nether to the end`;
  }

  if (Math.random() >= 0.5) resolve(hello());
  else reject('You Lost the lottery');
});

promisee.then(res => console.log(res)).catch(e => console.error(e));


wait(0)
.then(() => {
  console.log(`We waited for 1sec`);
  return wait(2);
  })
  .then(() => {
    console.log('we waited for 2 sec');
    return wait(3);
  })
  .then(() => {
    console.log('We waited for 3 sec');
    return wait(4);
  })
  .then(() => {
    console.log('We waited for 4 sec');
  });

Promisee.resolve(console.log('Hello I am resolve'));
Promisee.reject(console.log('Hello I am rejected'));
*/

/*
// Promisifying geolocation API
const showCountry = function () {
  return new Promisee((response, reject) => {
    navigator.geolocation.getCurrentPosition(response, reject);
  });
};

const whereAmI = function () {
  showCountry()
  .then(loc => {
    const { latitude, longitude } = loc.coords;
    return fetch(
      `https://geocode.xyz/${latitude},${longitude}?geoit=json&auth=831253157316286630930x110214 `
      );
    })
    .then(response => response.json())
    .then(jason => {
      const countryCode = jason.prov;
      return fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
    })
    .then(res => res.json())
    .then(jason => {
      const [data] = jason;
      renderCountry(data);
    });
  };
whereAmI();

const getLocation = function () {
  const coords = function (e) {
    const { latitude, longitude } = e.coords;

    fetch(
      `https://geocode.xyz/${latitude},${longitude}?geoit=json&auth=831253157316286630930x110214`
      )
      .then(res => res.json())
      .then(jason => {
        const countryCode = jason.prov;
        return fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
      })
      .then(res => res.json())
      .then(jason => {
        const [data] = jason;
        renderCountry(data);
      });
  };
  navigator.geolocation.getCurrentPosition(coords, e => console.error(e));
};
getLocation();
*/

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImg' which receives imgPath as an input. This function returns a promisee which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promisee. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promisee.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promisee using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImg promisee to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀

// Promisifying
const wait = function (seconds) {
  return new Promisee(function (resolve) {
    setTimeout(resolve, 1000 * seconds);
  });
};

const imgContainer = document.querySelector('.images');
let imgElem;
const createImg = function (img) {
  return new Promisee(function (resolve, reject) {
    imgElem = document.createElement('img');
    imgElem.src = img;
    imgContainer.textContent = 'Loading...';

    imgElem.addEventListener('load', function () {
      imgContainer.textContent = 'Loading Finished!';
      imgContainer.append(imgElem);
      resolve(imgElem);
    });

    imgElem.addEventListener('error', function () {
      imgContainer.textContent = 'Loading Failed!';
      reject(new Error('Provieded url is wrong'));
    });
  });
};
createImg('img\\img-1.jpg');
*/
// .then(e => wait(2))
// .then(() => {
//   imgElem.style.display = 'none';
//   imgElem.src = 'img\\img-2.jpg';

//   imgElem.addEventListener('load', () => (imgElem.style.display = 'block'));
// })
// .then(() => {
//   wait(2);
//   return (imgElem.style.display = 'none');
// })
// .catch(e => console.error(e));

// navigator.geolocation.getCurrentPosition(
//   function (e) {
//     console.log(e);
//   },
//   e => console.error(e)
// );
/*
const revGeo = async function () {
  try {
    const geolocation = await new Promisee(function (response, reject) {
      navigator.geolocation.getCurrentPosition(response, e =>
        reject(`${e.message} could not get your coordinates`)
      );
    });

    const { latitude, longitude } = geolocation.coords;
    const fetchingData = await fetch(
      `https://geocode.xyz/${latitude},${longitude}?geoit=json&auth=831253157316286630930x110214`
    );
    if (!fetchingData.ok) throw new Error(`couldn't fetch your coordinates`);

    const res = await fetchingData.json();
    const country = res.prov;
    const fetchCountry = await fetch(
      `https://restcountries.com/v3.1/alpha/${country}`
    );

    if (!fetchCountry.ok) throw new Error('Cannot find with the country name');

    const countryRes = await fetchCountry.json();
    const [data] = countryRes;
    renderCountry(data);
    console.log('Hello');
    throw new Error('Jai Mata ki');

    return `hello well friends I'm the skeleton returning from the dead`;
  } catch (error) {
    throw error;
  }
};
// Using an **IIFE**
(async function () {
  try {
    await revGeo();
  } catch (e) {
    console.error(e, 'bole toh line no 358');
  }
})();
*/

/*
const helper = function (url, errorMsg) {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`Country not found ${response.status}`);
    }
    return response.json();
  });
};

getCapital();
const getCapital = async function (c1, c2, c3) {
  try {
    const country1 = await helper(`https://geocode.xyz/42.0681852,90.529643?geoit=json&auth=831253157316286630930x110214`);
    const country2 = await helper(`https://geocode.xyz/42.0681852,90.529643?geoit=json&auth=831253157316286630930x110214`);
    const country3 = await helper(`https://geocode.xyz/42.0681852,90.529643?geoit=json&auth=831253157316286630930x110214`);

    console.log(country1.city, country2.city, country3.city);
    
    const geAll = await Promisee.all([
      helper(
        `https://geocode.xyz/42.0681852,90.529643?geoit=json&auth=831253157316286630930x110214`
      ),
      helper(
        `https://geocode.xyz/42.0681852,90.529643?geoit=json&auth=831253157316286630930x110214`
      ),
      helper(
        `https://geocode.xyz/42.0681852,90.529643?geoit=json&auth=831253157316286630930x110214`
      ),
    ]);
  } catch (er) {
    console.error(er);
  }
};
*/

const promisee1 = function () {
  return new Promise((res, rej) => {
    setTimeout(() => res('First one resolved'), 1000);
  });
};
const promisee2 = function () {
  return new Promise((res, rej) => {
    setTimeout(() => res('Second one resolved'), 2000);
  });
};
const promisee3 = function () {
  return new Promise((res, rej) => {
    setTimeout(() => rej('Third one resolved'), 3000);
  });
};

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 1 resolved');
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 2 resolved');
  }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Promise 3 resolved');
  }, 3000);
});

Promise.allSettled([
  promise1,
  promise2,
  promise3,
  promisee1,
  promisee2,
  promisee3,
]).then(e => console.log(e));
