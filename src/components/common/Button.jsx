import React from 'react';
import PropTypes from 'prop-types';
Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};
function Button({ type, children, className, ...rest }) {
  return (
    <button
      className={`flex items-center justify-center py-4 px-2 text-base font-semibold  transition-all  rounded-xl hover:opacity-80 ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
