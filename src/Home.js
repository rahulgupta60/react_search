import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';

import { fetch, filterByRating, filterByGenre } from './action/actions';
import { RatingList, MovieList, GenreList } from './component';
import loadingIcon from './assets/image/logo.svg';

class Home extends React.Component {
  componentDidMount() {
    const { defaultRating } = this.props;
    this.props.fetch({ rating: defaultRating });
  }

  onChangeRating = event => this.props.filterByRating(event.target.value);

  genreChange = event => {
    const id = Math.trunc(event.target.defaultValue);
    const checked = event.target.checked;
    this.props.filterByGenre({ id, checked });
  };

  renderForm = () => {
    const { genres, movies, rating, genresSelected } = this.props;
    return (
      <div>
        <h1 className="text-center">Movie DB</h1>
        <Row>
          <Col md={12}>
            <RatingList onChange={this.onChangeRating} value={rating} />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <GenreList
              genres={genres}
              onClick={this.genreChange}
              genresSelected={genresSelected}
            />
          </Col>
        </Row>
        <MovieList movies={movies} genres={genres} />
      </div>
    );
  };
  render() {
    const { isLoading } = this.props;
    return <Grid>{isLoading ? <img src={loadingIcon} alt="Loading" /> : this.renderForm()}</Grid>;
  }
}

const mapStateToProps = ({ app }) => {
  return {
    isLoading: app.isLoading,
    genres: app.genres,
    movies: app.movies,
    rating: app.rating,
    genresSelected: [...app.genresSelected],
  };
};

const mapDispatchToProps = {
  fetch,
  filterByRating,
  filterByGenre,
};

Home.defaultProps = {
  defaultRating: 3,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
