import {
  FETCH,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  FILTER_SUCCESS,
  FILTER_FAILURE,
  FILTER_UPDATE_RATING,
  FILTER_UPDATE_GENRE,
} from '../action/actions';

const initialState = () => {
  return {
    isLoading: true,
    genres: null,
    movieList: null,
    genresSelected: [],
    rating: null,
    originalCopy: null,
  };
};

export default function (state = initialState(), action) {
  switch (action.type) {
    case FETCH: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case FETCH_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        genres: action.value.genres,
        movies: action.value.movies,
        originalCopy: action.value.movies,
        rating: action.value.rating,
      };
    }

    case FETCH_FAILURE: {
      return {
        ...state,
        isLoading: false,
      };
    }

    case FILTER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        movies: action.value,
      };
    }

    case FILTER_FAILURE: {
      return {
        ...state,
        isLoading: false,
      };
    }

    case FILTER_UPDATE_RATING: {
      return {
        ...state,
        isLoading: false,
        rating: action.value.rating,
      };
    }

    case FILTER_UPDATE_GENRE: {
      return {
        ...state,
        isLoading: false,
        genresSelected: action.value.genresSelected,
      };
    }
    default:
      return state;
  }
}
