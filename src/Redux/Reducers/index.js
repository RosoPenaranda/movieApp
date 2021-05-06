import {
  FETCH_TOP_FIVE,
  ACTION_SUCCESS,
  ACTION_FAILURE,
  ADD_MOVIE,
  SHOW_MOVIE,
  DELETE_MOVIE,
} from '../Actions/types';

const reducer = (state, action) => {
  switch (action.type) {
    case SHOW_MOVIE:
      return {
        ...state,
        movieDetails: action.payload.movie,
        selected: action.payload.index,
        modalIsOpen: action.payload.modalIsOpen,
      };

    case ADD_MOVIE:
      return {
        ...state,
        movieDetails: action.payload,
        selected: state.moviesList.push(action.payload) - 1,
      };

    case DELETE_MOVIE:
      return {
        ...state,
        moviesList: state.moviesList.filter((_, index) => {
          return index !== action.payload;
        }),
        selected:
          action.payload === state.selected
            ? null
            : state.movieDetails != null
            ? state.moviesList
                .filter((_, index) => {
                  return index !== action.payload;
                })
                .findIndex(
                  movie =>
                    movie.title === state.movieDetails.title &&
                    movie.release === state.movieDetails.release &&
                    movie.description === state.movieDetails.description
                )
            : null,
        movieDetails:
          action.payload === state.selected ? null : state.movieDetails,
      };

    case FETCH_TOP_FIVE:
      return {
        ...state,
        loading: true,
      };

    case ACTION_SUCCESS:
      return {
        ...state,
        topFive: action.payload.movies,
        loading: false,
        error: false,
      };

    case ACTION_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
