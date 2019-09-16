import config from '../config';

const genreUrl = `${config.apiUrl}genre/movie/list?api_key=${
  config.api_key
}&language=${config.language}`;
const nowPlayingUrl = `${config.apiUrl}movie/now_playing?api_key=${
  config.api_key
}&language=${config.language}`;

const fetchData = url => {
  return fetch(url).then(response => response.json());
};

const fetchAll = listUrl =>
  Promise.all([fetchData(genreUrl), fetchData(nowPlayingUrl)]).then(
    ([genres, movieList]) => ({ ...genres, movieList }),
  );

export default fetchAll;
