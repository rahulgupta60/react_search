import fetchAll from '.';

describe('fetch api test using Promises', () => {
  it('should load api response ', () => {
    return fetchAll().then(data => {
      expect(data).toBeDefined();
      expect(data).toHaveProperty('genres');
      expect(data).toHaveProperty('movieList');
    });
  });
});
