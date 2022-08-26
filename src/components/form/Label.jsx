import React from 'react';
import PropTypes from 'prop-types';

Label.propTypes = {
  title: PropTypes.string,
  htmlFor: PropTypes.string,
  required: PropTypes.bool,
};

function Label({ title, htmlFor, required, className }) {
  return (
    <label
      className={`inline-block text-sm mb-1 font-medium cursor-pointer text-text2 dark:text-text3 select-none`}
      htmlFor={htmlFor}
    >
      {title}
      {required && <strong className="text-error"> *</strong>}
    </label>
  );
}

export default Label;
