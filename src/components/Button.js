import React from 'react';
import propTypes from 'prop-types';

function Button(props) {
  const { name, wide, color } = props;
  const handleClick = e => props.clickHandler(e.target.innerText);

  return (
    <div
      className={`button ${wide && 'large'}`.trim()}
      style={{ backgroundColor: color }}
      onClick={handleClick}
    >
      {name}
    </div>
  );
}

Button.defaultProps = {
  wide: false,
  color: 'orange',
};

Button.propTypes = {
  name: propTypes.string.isRequired,
  wide: propTypes.bool,
  color: propTypes.string,
};

export default Button;
