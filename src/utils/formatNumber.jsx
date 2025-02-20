import numeral from "numeral";

export const formatNumber = (number) => {
  return numeral(number).format("0,0");
};
