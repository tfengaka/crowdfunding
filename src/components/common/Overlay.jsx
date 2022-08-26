import React from 'react';
import { classNames } from '~/utils';

function Overlay({ isOpen = 'false' }) {
  return (
    <div
      className={classNames(
        'fixed inset-0 z-40 overlay bg-text1 dark:bg-darkBg',
        isOpen ? 'dark:opacity-80 opacity-50 visible' : 'opacity-0 invisible'
      )}
    ></div>
  );
}

export default Overlay;
