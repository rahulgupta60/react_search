import * as actions from './actions';

describe('action test', () => {
  it('func. exists', () => {
    expect(typeof actions.fetch).toEqual('function');
    expect(typeof actions.fetchSuccess).toEqual('function');
    expect(typeof actions.filterByRating).toEqual('function');
    expect(typeof actions.filterFailure).toEqual('function');
    expect(typeof actions.updateRating).toEqual('function');
    expect(typeof actions.updateGenre).toEqual('function');
  });

  it('should create an action on filterByGenre', () => {
    const input = {
      data: [1, 2, 3],
    };
    const output = { type: actions.FILTER_GENRE, value: { data: [1, 2, 3] } };
    expect(actions.filterByGenre(input)).toEqual(output);
  });
});
