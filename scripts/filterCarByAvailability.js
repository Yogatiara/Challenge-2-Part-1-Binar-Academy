// const dataMobil = require('../data/mobil') --testing

function filterCarByAvailability(cars) {

  // Tempat penampungan hasil
  const result = [];
  // console.log(cars[0].available) --> testing

  // Tulis code-mu disini
  for (let i = 0; i < cars.length; i++) {
    if (cars[i].available === true) {
      result.push(cars[i]);
    }
  }

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}

// console.log(filterCarByAvailability(dataMobil.dataMobil)) --> testing
