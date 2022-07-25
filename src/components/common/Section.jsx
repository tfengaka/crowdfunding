import PropTypes from 'prop-types';
import { withErrorBoundary } from 'react-error-boundary';
import { Error } from '../common';

Section.propTypes = {
  title: PropTypes.string,
  quantity: PropTypes.number,
  children: PropTypes.node,
};

function Section({ title, quantity, children }) {
  return (
    <div>
      <div className="flex items-center mb-5 gap-x-1">
        <h2 className="text-lg font-semibold text-text1">{title}</h2>
        {quantity && <h2 className="text-lg font-semibold text-secondary">({quantity})</h2>}
      </div>
      {children}
    </div>
  );
}

export default withErrorBoundary(Section, {
  FallbackComponent: Error,
});
