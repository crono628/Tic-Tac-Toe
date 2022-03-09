import React from 'react';

const Square = (props) => {
  return (
    <div onClick={props.onClick} className="square">
      {props.value}
    </div>
  );
};

export default Square;
