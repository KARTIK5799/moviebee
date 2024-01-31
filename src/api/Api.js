import axios from "axios";

export const BACKEND_ENDPOINTS = "https://api.tvmaze.com/search/shows?q=all";
export const BACKEND_ENDPOINTS2 = "https://api.tvmaze.com/search/shows";

export const fetchmovies = async () => {
  try {
    const response = await axios.get(BACKEND_ENDPOINTS);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const fetchMovieById = async (id) => {
  try {
    const response = await axios.get(
      `https://api.tvmaze.com/search/shows/${id}`
    );
    return response.data;
  } catch (e) {
    console.error(e);
  }
};
