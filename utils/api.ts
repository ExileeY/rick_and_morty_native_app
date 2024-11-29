import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api";

export const getAllCharacters = async () => {
  const { data } = await axios.get(`${BASE_URL}/character`);
  return data;
};
