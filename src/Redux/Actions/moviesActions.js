import {
  FETCH_TOP_FIVE,
  ACTION_SUCCESS,
  ACTION_FAILURE,
  ADD_MOVIE,
  SHOW_MOVIE,
  DELETE_MOVIE,
} from './types';

//import API from "../Api/index";

export const showMovie = payload => {
  return {
    type: SHOW_MOVIE,
    payload,
  };
};

export const deleteMovie = payload => {
  return {
    type: DELETE_MOVIE,
    payload,
  };
};

export const addMovie = payload => {
  return {
    type: ADD_MOVIE,
    payload,
  };
};

export const getTopFive = payload => {
  return {
    type: FETCH_TOP_FIVE,
    payload,
  };
};

export const actionSuccess = payload => {
  return {
    type: ACTION_SUCCESS,
    payload,
  };
};

export const actionFailure = payload => {
  return {
    type: ACTION_FAILURE,
    payload,
  };
};
