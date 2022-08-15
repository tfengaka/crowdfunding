import React from 'react';
import { classNames } from '~/utils';

function Overlay({ isOpen }) {
  return (
    <div
      className={classNames(
        'fixed inset-0 z-40 overlay bg-text1 ',
        !isOpen ? 'opacity-0 invisible' : 'opacity-60 visible'
      )}
    ></div>
  );
}

export default Overlay;
