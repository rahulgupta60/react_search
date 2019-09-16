import React from 'react';
import TestRenderer from 'react-test-renderer'; // ES6

import { GenreList, MovieList, RatingList } from '../index';

describe('Snapshot', () => {
  test('GenreList', () => {
    const component = TestRenderer.create(
      <GenreList genres={[]} genresSelected={[]} onClick={() => {}} />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('MovieList', () => {
    const component = TestRenderer.create(
      <MovieList genres={[]} movies={[]} />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('RatingList', () => {
    const component = TestRenderer.create(
      <RatingList ratingList={[]} value={1} onChange={() => {}} />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
