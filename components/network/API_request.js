import React from "react";
import constants from "../../constants";

export const fetchPopularMovies = async () => {
  const url = `${constants.Base_URL}movie/popular?api_key=${constants.API_Key}&language=en-US&page=1`;
  const response = await fetch(url);
  return response.json();
  // Fetch API logic here
};

export const fetchSimiliarMovies = async (id) => {
  const url = `${constants.Base_URL}movie/${id}/similar?api_key=${constants.API_Key}&language=en-US&page=1`;
  const response = await fetch(url);
  return response.json();
  // Fetch API logic here
};
export const fetchTopRatedMovies = async () => {
  const url = `${constants.Base_URL}movie/top_rated?api_key=${constants.API_Key}&language=en-US&page=1`;
  const response = await fetch(url);
  return response.json();
  // Fetch API logic here
};
export const fetchLatestMovies = async () => {
  const url = `${constants.Base_URL}/movie/now_playing?api_key=${constants.API_Key}&language=en-US&page=1`;
  const response = await fetch(url);
  return response.json();
  // Fetch API logic here
};
export const fetchMovieVideos = async (id) => {
  const url = `${constants.Base_URL}/movie/${id}/videos?api_key=${constants.API_Key}&language=en-US`
  const response = await fetch(url);
  return response.json()
}