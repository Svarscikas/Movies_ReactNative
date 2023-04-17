import React from "react";
import constants from "../constants";

export const getPopularMovies = async () => {
    try {
      const response = await fetch( constants.Base_URL + '3/movie/popular?api_key=' + constants.API_Key + '&language=en-US&page=1');
      var json = await response.json();
    } catch (error) {
      console.error(error);
    }finally{
        return json.results;
    }
};