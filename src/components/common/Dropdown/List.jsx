import React from 'react';
import { classNames } from '~/utils';
import { useDropdown } from './DropdownContext';

const List = ({ children }) => {
  const { show } = useDropdown();
  return (
    <React.Fragment>
      {show && (
        <div
          className={classNames(
            'absolute left-0 w-full bg-white shadow-lite top-full rounded-lg animate-fadeIn dark:bg-darkSecondary dark:text-white dark:shadow-dark z-10'
          )}
        >
          {children}
        </div>
      )}
    </React.Fragment>
  );
};

export default List;
