import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  return (
    <div>{props.name}</div>
  );
};

Button.PropTypes = {
  name: PropTypes.string
};