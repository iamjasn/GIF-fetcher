import axios from "axios";

import { getUrl } from "../constants";

export const REQUEST_GIF = "REQUEST_GIF";
export const RECEIVE_GIF = "RECEIVE_GIF";
export const LIKE_GIF = "LIKE_GIF";
export const UNLIKE_GIF = "UNLIKE_GIF";
export const ADD_GIF = "ADD_GIF";
export const SHOW_RESULTS = "SHOW_RESULTS";
export const SHOW_ERROR = "SHOW_ERROR";

export function fetchGif(searchTerm, weirdness) {
  return dispatch => {
    if (!searchTerm) {
      return dispatch(showError({ message: 'Please enter a search term' }));
    }

    dispatch(requestGif(searchTerm, weirdness));

    return axios
      .get(`${getUrl}&s=${searchTerm}&weirdness=${weirdness}`)
      .then(({ data: { data }}) => {
        const { images: { original: { url } }, id, title } = data;
        dispatch(receiveGif({ url, id, title }))
      })
      .catch(error => dispatch(showError(error)));
  };
}

export function requestGif(searchTerm, weirdness) {
  return {
    type: REQUEST_GIF,
    payload: { searchTerm, weirdness }
  };
}

export function receiveGif(data) {
  return {
    type: RECEIVE_GIF,
    payload: data
  };
}

export function likeGif() {
  return (dispatch, getState) => {
    const { current, searchTerm } = getState();
    if (current.filter(gif => gif.searchTerm === searchTerm
    ).length) {
      dispatch(showError({ message: 'You can only like one GIF per search term'}));
    } else {
      dispatch(addGif({ ...current, searchTerm }))
    }
  }
}

export function addGif(item) {
  return {
    type: ADD_GIF,
    payload: item
  };
}

export function unlikeGif(item) {
  return {
    type: UNLIKE_GIF,
    payload: item
  };
}

export function showScore() {
  return {
    type: SHOW_RESULTS
  };
}

export function showError(error) {
  return {
    type: SHOW_ERROR,
    payload: error.message || 'unknown error'
  };
}
