import React from 'react';
import PropTypes from 'prop-types';

Error.propTypes = {
  icon: PropTypes.string,
  message: PropTypes.string,
};

function Error({ icon = '/static/error.svg', message = 'Have Some Error!' }) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full m-auto">
      <img src={icon} alt="error" className="object-cover mb-5 max-w-[500px]" />
      <h3 className="text-4xl font-bold text-center text-error">{message}</h3>
    </div>
  );
}

export default Error;
