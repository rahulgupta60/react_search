/* eslint-env node, jest */

import reducer from './reducers';

import { FETCH, FILTER_UPDATE_RATING } from '../action/actions';

const data = {
  foo: 'bar',
  rating: 3,
};

describe.skip('reducer test', () => {
  it('FETCH ', () => {
    const inputTest = reducer({}, { type: FETCH, value: data });
    const outputExpected = { foo: 'bar', isLoading: true };
    expect(inputTest).toEqual(outputExpected);
  });
  it('FILTER_RATING ', () => {
    const inputTest = reducer({}, { type: FILTER_UPDATE_RATING, value: data });
    const outputExpected = { rating: 3, isLoading: false };
    expect(inputTest).toEqual(outputExpected);
  });
});
