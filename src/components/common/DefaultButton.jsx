import React from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import { withErrorBoundary } from 'react-error-boundary';
import Error from './Error';
import { classNames } from '~/utils';
import { Link } from 'react-router-dom';

DefaultButton.propTypes = {
  buttonType: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  color: PropTypes.string,
  to: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

function DefaultButton({ buttonType, color, isLoading, to, className, onClick, children, ...rest }) {
  let classes =
    'flex items-center gap-x-2 justify-center py-4 px-6 text-base font-semibold transition-all rounded-lg min-h-[50px] hover:opacity-80';
  const childrenElement = !!isLoading ? <Loading color="white" size="sm" /> : children;

  switch (color) {
    case 'primary':
      classes = classes + ' bg-primary text-white';
      break;
    case 'secondary':
      classes = classes + ' bg-secondary text-white';
      break;
    case 'tertiary':
      classes = classes + ' bg-secondary bg-opacity-10 text-secondary';
      break;
    default:
      break;
  }

  if (to)
    return (
      <Link
        to={to}
        className={classNames(classes, className, !!isLoading ? 'opacity-50 pointer-events-none' : '')}
        {...rest}
      >
        {childrenElement}
      </Link>
    );

  return (
    <button
      type={buttonType}
      className={classNames(classes, className, !!isLoading ? 'opacity-50 pointer-events-none' : '')}
      onClick={onClick}
    >
      {childrenElement}
    </button>
  );
}

export default withErrorBoundary(DefaultButton, {
  FallbackComponent: Error,
});
