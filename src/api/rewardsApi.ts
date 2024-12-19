import axios from "axios";

const BASE_URL = "https://staging.helloagain.at/api/v1/clients/5189/bounties";

export const fetchRewards = async (page: number = 1, limit: number = 10) => {
  console.log('`${BASE_URL}/?limit=${limit}&page=${page}`', `${BASE_URL}/?limit=${limit}&page=${page}`)
  const response = await axios.get(`${BASE_URL}/?limit=${limit}&page=${page}`);
  return response.data;
};
