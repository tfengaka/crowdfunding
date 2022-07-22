import React from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import { withErrorBoundary } from 'react-error-boundary';
import Error from './Error';
import { classNames } from '~/utils';

DefaultButton.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node,
  size: PropTypes.string,
  bgColor: PropTypes.string,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
};

function DefaultButton({ type, children, size, bgColor, isLoading, onClick, className = '' }) {
  return (
    <button
      type={type}
      className={classNames(
        `w-${size ? size : 'auto'}`,
        `bg-${bgColor ? bgColor : 'primary'}`,
        'flex items-center gap-x-2 justify-center py-4 px-6 text-base font-semibold transition-all rounded-lg min-h-[50px] text-white hover:opacity-80',
        isLoading ? 'opacity-50 pointer-events-none' : '',
        className
      )}
      onClick={onClick}
    >
      {isLoading ? <Loading color="white" size="sm" /> : children}
    </button>
  );
}

export default withErrorBoundary(DefaultButton, {
  FallbackComponent: <Error />,
});
