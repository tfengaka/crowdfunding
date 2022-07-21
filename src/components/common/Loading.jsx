import React from 'react';
import PropTypes from 'prop-types';

Loading.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
};

function Loading(props) {
  const color = `border-${props.color || 'primary'}`;
  let size;
  switch (props.size) {
    case 'sm':
      size = 'w-5 h-5 border-2';
      break;
    case 'lg':
      size = 'w-10 h-10 border-4';
      break;
    default:
      break;
  }
  return <div className={`${size}  rounded-full ${color} border-t-transparent animate-spin`}></div>;
}

export default Loading;
