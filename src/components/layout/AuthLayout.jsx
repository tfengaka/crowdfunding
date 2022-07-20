import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withErrorBoundary } from 'react-error-boundary';
import Error from '../common/Error';

AuthLayout.propTypes = {
  children: PropTypes.node,
  heading: PropTypes.string,
};

function AuthLayout({ children, heading = '' }) {
  return (
    <div className="relative w-full min-h-screen p-6 overflow-hidden bg-liteBg lg:p-10 isolate">
      <img
        src="/static/ellipse.png"
        alt=""
        className="absolute top-[400px] left-0 right-0 z-[-1] pointer-events-none w-full"
      />
      <Link to="/" className="inline-block w-10 h-10 mb-5 lg:w-[52px] lg:h-[52px] lg:mb-0">
        <img srcSet="/static/logo.png 2x" alt="appLogo" />
      </Link>
      <div className="w-full max-w-[560px] bg-white rounded-xl px-5 py-7 lg:px-16 lg:py-12 shadow-lg mx-auto">
        <h1 className="mb-1 text-lg font-bold text-center lg:text-xl lg:mb-3 text-text1">
          {heading}
        </h1>
        {children}
      </div>
    </div>
  );
}

export default withErrorBoundary(AuthLayout, {
  FallbackComponent: Error,
});
