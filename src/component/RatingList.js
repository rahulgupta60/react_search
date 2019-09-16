import React from 'react';
import PropTypes from 'prop-types';
import { ControlLabel, FormGroup, FormControl } from 'react-bootstrap';

const RatingList = ({ onChange, value, ratingList }) => (
  <FormGroup>
    <ControlLabel>Filter by rating:</ControlLabel>
    <FormControl
      componentClass="select"
      placeholder="select"
      onChange={onChange}
      value={value}
    >
      {ratingList.map((value, index) => (
        <option key={index} value={value}>
          {value}
        </option>
      ))}
      ;
    </FormControl>
  </FormGroup>
);

RatingList.defaultProps = {
  ratingList: Array.from({ length: 21 }, (v, k) => k / 2 + 0), // 0 to 10 rating
};

RatingList.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RatingList;
