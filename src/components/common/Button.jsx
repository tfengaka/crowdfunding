import React from 'react';
import PropTypes from 'prop-types';
Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
};
function Button({ type, children, className, isLoading = false, ...rest }) {
  return (
    <button
      className={`flex items-center justify-center py-4 px-2 text-base font-semibold  transition-all  rounded-xl hover:opacity-80 min-h-[56px] ${className} ${
        isLoading ? 'opacity-50 pointer-events-none' : ''
      }`}
      {...rest}
    >
      {isLoading ? (
        <div className="w-6 h-6 border-4 border-white rounded-full border-t-transparent animate-spin "></div>
      ) : (
        children
      )}
    </button>
  );
}

export default Button;
