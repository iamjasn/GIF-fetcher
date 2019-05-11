import { REQUEST_GIF, RECEIVE_GIF, ADD_GIF, UNLIKE_GIF, SHOW_RESULTS, SHOW_ERROR } from '../actions/actions';

const initialState = {
  current: { url: null, title: null, id: null },
  isFetching: false,
  error: "",
  liked: [],
  score: null,
  searchTerm: "",
  weirdness: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_GIF:
      return {
        ...state,
        searchTerm: action.payload.searchTerm,
        weirdness: action.payload.weirdness,
        error: initialState.error,
        isFetching: true
      };

    case RECEIVE_GIF:
      return { ...state, current: action.payload, isFetching: false };

    case SHOW_RESULTS:
      return { ...state, score: action.payload };

    case ADD_GIF:
      return {
        ...state,
        liked: [...state.liked, action.payload],
        searchTerm: ""
      };

    case UNLIKE_GIF:
      return {
        ...state,
        liked: state.items.filter(item => item !== action.payload)
      };

    case SHOW_ERROR:
      return { ...state, error: action.payload, isFetching: false };

    default:
      return state;
  }
};
