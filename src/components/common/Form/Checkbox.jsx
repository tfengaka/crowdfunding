import React from 'react';
import PropTypes from 'prop-types';

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  setSelected: PropTypes.func.isRequired,
  children: PropTypes.node,
};

function Checkbox({ name, isSelected, setSelected, children }) {
  return (
    <div className="flex items-start justify-center mb-5 gap-x-5">
      <div
        className={`inline-flex items-center justify-center w-5 h-5 border-2 rounded cursor-pointer text-white mt-[4px]  ${
          isSelected ? 'bg-primary border-primary' : 'border-text4 dark:border-darkStroke'
        }`}
        onClick={setSelected}
      >
        <input type="checkbox" className="hidden" name={name} />
        {isSelected && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 "
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
      {children && (
        <label
          className="flex-1 text-sm font-medium cursor-pointer text-text3"
          onClick={setSelected}
        >
          {children}
        </label>
      )}
    </div>
  );
}

export default Checkbox;
