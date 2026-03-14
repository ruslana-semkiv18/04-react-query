import axios from "axios";
import type { Movie } from "../types/movie";

interface TMDBResponse {
  results: Movie[];
}

const API_KEY = import.meta.env.VITE_TMDB_TOKEN;
axios.defaults.baseURL = "https://api.themoviedb.org/3";

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const response = await axios.get<TMDBResponse>("/search/movie", {
    params: { query, language: "en-US" },
    headers: { Authorization: `Bearer ${API_KEY}` },
  });

  return response.data.results;
};
