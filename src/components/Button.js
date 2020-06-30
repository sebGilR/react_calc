import React from 'react';
import propTypes from 'prop-types';

function Button(props) {
  const {
    name,
    wide = false,
    color = 'orange'
  } = props;

  return (
    <div
      className={`button ${wide && 'large'}`.trim()}
      style={{ backgroundColor: color }}
    >
      {name}
    </div>
  );
}

Button.propTypes = {
  name: propTypes.string.isRequired,
};

export default Button;
