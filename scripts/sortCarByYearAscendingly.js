const dataMobil = require('../data/mobil')

function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  // console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];
  // Tulis code-mu disini

  for (let x = 0; x < result.length; x++) {
    for (let y = 0; y < result.length - 1; y++) {
      if (result[y + 1].year < result[y].year) {
        if (result[y + 1].year == result[y].year) {
          continue
        }
        [result[y], result[y + 1]] = [result[y + 1], result[y]];
      }
    }
  }
  // Rubah code ini dengan array hasil sorting secara ascending
  return result;
}

sortCarByYearAscendingly(dataMobil.dataMobil)

