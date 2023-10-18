const matrix1 = [
  [1, 2, 3, 4, 5],
  [1, 20, 3, 4, 5],
  [1, 20, 3, 4, 5],
  [1, 20, 3, 4, 5],
  [1, 4, 3, 4, 5],
];

const matrix2 = [
  [2, 2, 2, 20, 2, 2],
  [2, 2, 2, 1, 1, 2],
  [2, 2, 100, 2, 1, 2],
  [2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2],
];
const greatestProduct = matrix => {
  if (matrix.length === 0) return null;

  const axisYLength = matrix.length;
  let axisXLength = 0;
  let greatestProduct = 0;

  console.log('axisYLength -> ', axisYLength);
  console.log('--------------');

  matrix.forEach((arrLevel1, i) => {
    let arrLevelYIndex = i;
    axisXLength = arrLevel1.length;

    console.log('¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨');
    console.log(i, axisXLength, arrLevel1);
    console.log('_______---_______');

    arrLevel1.forEach((num, i) => {
      if (i + 3 < axisXLength) {
        console.log('->PRODUCTS OF ROW<-');
        let localeXProduct =
          arrLevel1[i] * arrLevel1[i + 1] * arrLevel1[i + 2] * arrLevel1[i + 3];

        localeXProduct > greatestProduct
          ? (greatestProduct = localeXProduct)
          : (greatestProduct = greatestProduct);

        console.log(
          `Product of row index #${arrLevelYIndex} between index [${i}] and [${
            i + 3
          }]: ${arrLevel1[i]} * ${arrLevel1[i + 1]} * ${arrLevel1[i + 2]} * ${
            arrLevel1[i + 3]
          }`
        );

        console.log('localeProduct: -> ', localeXProduct);
        // console.log('Init index: ', i, num);
        // console.log('End index index: ', i + 3, num);
      }

      if (arrLevelYIndex + 3 < axisYLength) {
        console.log('->PRODUCTS OF COLUMN<-');
        // console.log('Init index arr level1 = ', arrLevelYIndex);
        // console.log('Limit index arr level1 = ', arrLevelYIndex + 3);

        let localeYProduct =
          matrix[arrLevelYIndex][i] *
          matrix[arrLevelYIndex + 1][i] *
          matrix[arrLevelYIndex + 2][i] *
          matrix[arrLevelYIndex + 3][i];
        console.log(
          `Product of column #${i}: ${matrix[arrLevelYIndex][i]} * ${
            matrix[arrLevelYIndex + 1][i]
          } * ${matrix[arrLevelYIndex + 2][i]} * ${
            matrix[arrLevelYIndex + 3][i]
          }`
        );
        console.log('localeYProduct:', localeYProduct);
        // console.log(matrix[arrLevelYIndex][i]);
        // console.log(matrix[arrLevelYIndex + 1][i]);

        localeYProduct > greatestProduct
          ? (greatestProduct = localeYProduct)
          : (greatestProduct = greatestProduct);
      }
    });
  });
  return greatestProduct;
};

console.log(greatestProduct(matrix2));
