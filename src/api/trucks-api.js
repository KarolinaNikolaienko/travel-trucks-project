import axios from "axios";

const instance = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io",
});

export const getTrucksApi = async () => {
  const { data } = await instance.get("/campers");
  return data;
};

export const getTruckByIdApi = async (id) => {
  const { data } = await instance.get(`/campers/${id}`);
  return data;
};
