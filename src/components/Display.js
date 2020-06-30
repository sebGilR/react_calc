import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
  return (
    <h2>{props.result || 0}</h2>
  );
};

Display.PropTypes = {
  result: PropTypes.string
}