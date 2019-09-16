export const FETCH = 'movie/FETCH';
export const FETCH_SUCCESS = 'movie/FETCH_SUCCESS';
export const FETCH_FAILURE = 'movie/FETCH_FAILURE';
export const FILTER_RATING = 'rating/FILTER';
export const FILTER_GENRE = 'genre/FILTER';
export const FILTER_SUCCESS = 'FILTER_SUCCESS';
export const FILTER_FAILURE = 'FILTER_FAILURE';

export const FILTER_UPDATE_RATING = 'updateRating/FILTER';
export const FILTER_UPDATE_GENRE = 'updateGenre/FILTER';

export const fetch = data => {
  return {
    type: FETCH,
    value: data,
  };
};

export const fetchSuccess = data => {
  return {
    type: FETCH_SUCCESS,
    value: data,
  };
};

export const fetchFailure = error => {
  return {
    type: FETCH_FAILURE,
    value: error,
  };
};

export const filterSuccess = data => {
  return {
    type: FILTER_SUCCESS,
    value: data,
  };
};

export const filterFailure = error => {
  return {
    type: FILTER_FAILURE,
    value: error,
  };
};

export const filterByRating = rating => {
  return {
    type: FILTER_RATING,
    value: {
      rating,
    },
  };
};

export const filterByGenre = data => {
  return {
    type: FILTER_GENRE,
    value: data,
  };
};

export const updateRating = rating => {
  return {
    type: FILTER_UPDATE_RATING,
    value: {
      rating,
    },
  };
};

export const updateGenre = genresSelected => {
  return {
    type: FILTER_UPDATE_GENRE,
    value: {
      genresSelected,
    },
  };
};
