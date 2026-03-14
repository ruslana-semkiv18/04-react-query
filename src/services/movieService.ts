import axios from "axios";
import type { Movie } from "../types/movie";

interface TMDBResponse {
  results: Movie[];
  page: number;
  total_pages: number;
  total_results: number;
}

const API_KEY = import.meta.env.VITE_TMDB_TOKEN;
axios.defaults.baseURL = "https://api.themoviedb.org/3";

export const fetchMovies = async (
  query: string,
  page: number = 1,
): Promise<TMDBResponse> => {
  const response = await axios.get<TMDBResponse>("/search/movie", {
    params: { query, language: "en-US", page },
    headers: { Authorization: `Bearer ${API_KEY}` },
  });

  return response.data;
};
