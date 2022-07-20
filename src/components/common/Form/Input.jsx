import React from 'react';
import { useController } from 'react-hook-form';
import PropTypes from 'prop-types';

Input.propTypes = {
  id: PropTypes.string,
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.node,
};

function Input({ control, name, type = 'text', error, placeholder, children }) {
  const { field } = useController({
    control,
    name,
    defaultValue: '',
  });
  return (
    <div className="relative">
      <input
        id={name}
        type={type}
        className={`w-full px-6 py-4 text-sm font-medium transition-all border-2  rounded-xl text-text1 placeholder:dark:text-text2 placeholder:text-text4 pr-14  dark:bg-darkSecondary  dark:text-white ${
          error ? 'border-error' : 'border-strock dark:border-darkStroke'
        }`}
        placeholder={!error ? placeholder : ''}
        required={false}
        {...field}
      />
      {error && (
        <span className="absolute text-sm font-medium pointer-events-none text-error top-2/4 -translate-y-2/4 left-6 error-message">
          {error}
        </span>
      )}
      {children}
    </div>
  );
}

export default Input;
