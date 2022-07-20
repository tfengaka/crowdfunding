import React from 'react';
import { useController } from 'react-hook-form';
import PropTypes from 'prop-types';
Input.propTypes = {
  id: PropTypes.string,
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
};
function Input({ control, name, type = 'text', ...rest }) {
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
        className="w-full px-6 py-4 text-sm font-medium transition-all border-2 border-strock rounded-xl text-text1 placeholder:text-text4 hover:border-primary hover:border-opacity-50 focus:border-primary"
        {...field}
        {...rest}
      />
    </div>
  );
}

export default Input;
