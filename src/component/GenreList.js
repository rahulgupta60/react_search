import React from 'react';
import { ControlLabel, Well, FormGroup, Checkbox } from 'react-bootstrap';
import PropTypes from 'prop-types';

const GenreList = ({ genres, onClick, genresSelected }) => (
  <FormGroup>
    <ControlLabel>Filter by genre :</ControlLabel>
    {genres.map(({ name, id }, idx) => {
      return (
        <Checkbox
          inline
          key={`checkbox-group-input-${idx}`}
          value={id}
          onChange={onClick}
          checked={genresSelected.includes(id)}
        >
          {name}
        </Checkbox>
      );
    })}
    <Well bsSize="small" className="text-uppercase text-warning">
      by default <strong>no</strong> filter apply for the genres{' '}
    </Well>
  </FormGroup>
);

GenreList.propTypes = {
  genres: PropTypes.array.isRequired,
  genresSelected: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default GenreList;
