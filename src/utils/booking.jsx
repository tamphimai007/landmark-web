const calNights = (checkIn, checkOut) => {
  // code body
  const milliDay = checkOut.getTime() - checkIn.getTime();
  // milli  1000 = 1 วินาที  => นาที => ชั่วโมง => วัน
  const diffDay = milliDay / (1000 * 60 * 60 * 24);

  return diffDay;
};

export const calTotal = (checkIn, checkOut, price) => {
  // code body
  if (!checkIn || !checkOut) return;
  const totalNights = calNights(checkIn, checkOut);
  const total = totalNights * price;
  // console.log("*", totalNights, total);
  return { total, totalNights };
};
