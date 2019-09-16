import React from 'react';
import PropTypes from 'prop-types';
import { Table, Image } from 'react-bootstrap';

import config from './../config';

const getGenreName = (ids, genres) =>
  genres.filter(({ id }) => ids.includes(id)).map(({ name }) => name);

const MovieList = ({ movies, genres }) => {
  return movies.length ? (
    <Table striped bordered condensed hover responsive>
      <thead>
        <tr>
          <th>Title</th>
          <th>Image</th>
          <th>Rating</th>
          <th>Genre</th>
        </tr>
      </thead>
      <tbody>
        {movies.map(
          ({ title, vote_average, genre_ids, poster_path }, index) => {
            const genreNames = getGenreName(genre_ids, genres);
            return (
              <tr key={index}>
                <td>{title}</td>
                <td>
                  <Image
                    src={`${config.imagePath}${poster_path}`}
                    alt={title}
                    rounded
                    className="img-responsive"
                  />
                </td>
                <td>{vote_average}</td>
                <td>{genreNames.join(',')}</td>
              </tr>
            );
          },
        )}
      </tbody>
    </Table>
  ) : (
      'No Record found'
    );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
  genres: PropTypes.array.isRequired,
};

export default MovieList;
