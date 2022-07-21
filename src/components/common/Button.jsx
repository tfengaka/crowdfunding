import React from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import { withErrorBoundary } from 'react-error-boundary';
import Error from './Error';
import { classNames } from '~/utils';

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node,
  size: PropTypes.string,
  color: PropTypes.string,
  isLoading: PropTypes.bool,
};

function Button({ type, children, size, color, isLoading = false, ...rest }) {
  const btnSize = size === 'full' ? 'w-full' : 'w-auto';
  const btnColor = color ? `bg-${color}` : '';
  return (
    <button
      className={classNames(
        'flex items-center gap-x-2 justify-center py-4 px-2 text-base font-semibold transition-all rounded-lg min-h-[50px] text-white hover:opacity-80 select-none',
        btnSize,
        btnColor,
        isLoading && 'opacity-50 pointer-events-none'
      )}
      {...rest}
    >
      {isLoading ? <Loading color="white" size="sm" /> : children}
    </button>
  );
}

export default withErrorBoundary(Button, {
  FallbackComponent: <Error />,
});
