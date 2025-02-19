import axios from "axios";

export const createCamping = async (token, data) => {
  return await axios.post("http://localhost:5000/api/camping", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const listCamping = async () =>
  await axios.get("http://localhost:5000/api/camping");

export const readCamping = async (id) =>
  // await axios.get("http://localhost:5000/api/camping/"+id);
  await axios.get(`http://localhost:5000/api/camping/${id}`);
