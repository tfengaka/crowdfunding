import React from 'react';
import { classNames } from '~/utils';
import { useDropdown } from './DropdownContext';

const Select = ({ placeholder = '', className = '' }) => {
  const { toggle, show } = useDropdown();
  return (
    <div
      id="dropdownSelect"
      className={classNames(
        'relative py-4 px-6 bg-white border-2 border-strock dark:border-darkStroke rounded-lg cursor-pointer text-base font-medium text-text4 dark:bg-darkSecondary dark:text-text2',
        className
      )}
      onClick={toggle}
    >
      <span className="text-left select-none">{placeholder}</span>
      <span className={classNames(show ? 'rotate-180' : '', 'transition-all absolute right-4 ')}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </span>
    </div>
  );
};

export default Select;
