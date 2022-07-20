import React from 'react';
import PropTypes from 'prop-types';

Label.propTypes = {
  title: PropTypes.string,
  htmlFor: PropTypes.string,
  className: PropTypes.string,
};

function Label({ title, htmlFor, className }) {
  return (
    <label
      className={`inline-block text-sm mb-1 font-medium cursor-pointer text-text2 ${className} dark:text-text3`}
      htmlFor={htmlFor}
    >
      {title}
    </label>
  );
}

export default Label;
