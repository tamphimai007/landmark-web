import moment from "moment/min/moment-with-locales";
import numeral from "numeral";

export const formatNumber = (number) => {
  return numeral(number).format("0,0");
};

export const formatDate = (date) => {
  return moment(date).locale("th").format("ll");
};
