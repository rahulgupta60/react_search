import { call, put, takeEvery, select } from 'redux-saga/effects';

import {
  FETCH,
  FILTER_RATING,
  FILTER_GENRE,
  fetchSuccess,
  filterSuccess,
  filterFailure,
  fetchFailure,
  updateRating,
  updateGenre,
} from './action/actions';
import fetchAll from './api/';

export const getOriginalCopy = ({ app }) => app.originalCopy;
export const getFilteredMovieData = ({ app }) => app.movies;
export const getSelectedRating = ({ app }) => app.rating;
export const getSelectedGenre = ({ app }) => app.genresSelected;

const filterRating = (rating, movies) => {
  return movies.filter(({ vote_average }) => {
    return vote_average > rating;
  });
};

const shortByPopularity = movies => {
  return movies.sort(function (a, b) {
    return b.popularity - a.popularity;
  });
};

const filterGenres = (selectedGenreList, movies) => {
  if (selectedGenreList.length) {
    return movies.filter(({ genre_ids }) => selectedGenreList.every(i => genre_ids.includes(i)));
  }
  return movies;
}

const filterSelectedGenre = (selectedGenre, id, checked) => {
  if (checked) {
    selectedGenre.push(id);
  } else {
    const index = selectedGenre.indexOf(id);
    if (index > -1) {
      selectedGenre.splice(index, 1);
    }
  }
  return selectedGenre;
};

function* init(action) {
  const {
    value: { rating },
  } = action;
  try {
    const { genres, movieList } = yield call(fetchAll);
    let movies = yield filterRating(rating, movieList.results);
    movies = yield shortByPopularity(movies);
    yield put(fetchSuccess({ genres, movies, rating }));
  } catch (e) {
    yield put(fetchFailure(e));
  }
}

export function* filterByRating(action) {
  const {
    value: { rating },
  } = action;
  try {
    let movies = yield select(getOriginalCopy);
    const filterSelectedGenreData = yield select(getSelectedGenre);
    movies = yield filterGenres(filterSelectedGenreData, movies);
    yield put(updateRating(rating));
    const response = yield filterRating(rating, movies);
    yield put(filterSuccess(response));
  } catch (e) {
    yield put(filterFailure(e));
  }
}

export function* filterByGenres(action) {
  const {
    value: { id, checked },
  } = action;

  try {
    const moviesList = yield select(getOriginalCopy);
    const rating = yield select(getSelectedRating);
    const selectedGenre = yield select(getSelectedGenre);

    const filterSelectedGenreData = yield filterSelectedGenre(
      selectedGenre,
      id,
      checked,
    );
    yield put(updateGenre(filterSelectedGenreData));
    let movies = yield filterGenres(filterSelectedGenreData, moviesList);
    movies = yield filterRating(rating, movies);
    yield put(filterSuccess(movies));
  } catch (e) {
    yield put(filterFailure(e));
  }
}

export default function* root() {
  yield takeEvery(FILTER_RATING, filterByRating);
  yield takeEvery(FILTER_GENRE, filterByGenres);
  yield takeEvery(FETCH, init);
}
