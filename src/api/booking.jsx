import axios from "axios";


export const listBookings = async (token) => {
  return await axios.get("http://localhost:5000/api/bookings", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const createBooking = async (token, data) => {
  return await axios.post("http://localhost:5000/api/booking", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const checkOut = async (token, id) => {
  return await axios.post(
    "http://localhost:5000/api/checkout",
    { id },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const checkOutStatus = async (token, session) => {
  return await axios.get(
    `http://localhost:5000/api/checkout-status/${session}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
