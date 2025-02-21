import axios from "axios";

export const createBooking = async (token, data) => {
  return await axios.post("http://localhost:5000/api/booking", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};