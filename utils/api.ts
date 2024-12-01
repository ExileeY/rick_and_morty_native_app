import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api";

export const loadCharacters = async () => {
  const { data } = await axios.get(`${BASE_URL}/character`);
  return data;
};
