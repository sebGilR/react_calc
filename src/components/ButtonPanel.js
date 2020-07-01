import React from 'react';
import Button from './Button';

function ButtonPanel(props) {
  const handleClick = buttonName => props.clickHandler(buttonName);

  return (
    <div className="buttonPanel">
      <div className="button_group">
        <Button name="AC" color="lightgray" clickHandler={handleClick} />
        <Button name="+/-" color="lightgray" clickHandler={handleClick} />
        <Button name="%" color="lightgray" clickHandler={handleClick} />
        <Button name="÷" clickHandler={handleClick} />
      </div>
      <div className="button_group">
        <Button name="7" color="lightgray" clickHandler={handleClick} />
        <Button name="8" color="lightgray" clickHandler={handleClick} />
        <Button name="9" color="lightgray" clickHandler={handleClick} />
        <Button name="X" clickHandler={handleClick} />
      </div>
      <div className="button_group">
        <Button name="4" color="lightgray" clickHandler={handleClick} />
        <Button name="5" color="lightgray" clickHandler={handleClick} />
        <Button name="6" color="lightgray" clickHandler={handleClick} />
        <Button name="-" clickHandler={handleClick} />
      </div>
      <div className="button_group">
        <Button name="1" color="lightgray" clickHandler={handleClick} />
        <Button name="2" color="lightgray" clickHandler={handleClick} />
        <Button name="2" color="lightgray" clickHandler={handleClick} />
        <Button name="+" clickHandler={handleClick} />
      </div>
      <div className="button_group">
        <Button name="0" wide color="lightgray" clickHandler={handleClick} />
        <Button name="." color="lightgray" clickHandler={handleClick} />
        <Button name="=" clickHandler={handleClick} />
      </div>
    </div>
  );
}

export default ButtonPanel;
