export const determineBlackOrWhite = (hexcolor: string) => {
  const r = parseInt(hexcolor.substr(1, 2), 16);
  const g = parseInt(hexcolor.substr(3, 2), 16);
  const b = parseInt(hexcolor.substr(5, 2), 16);

  const resultCalcR = r * 299;
  const resultCalcG = g * 587;
  const resultCalcB = b * 114;

  const resultCalc = (resultCalcR + resultCalcG + resultCalcB) / 1000;

  const adaptColor = resultCalc < 128 ? '#ffffff' : '#2C3333';
  return adaptColor;
};
