import React from 'react';
import PropTypes from 'prop-types';
Grid.propTypes = {
  col: PropTypes.number.isRequired,
  gapX: PropTypes.string,
  gapY: PropTypes.string,
  children: PropTypes.node.isRequired,
};
function Grid({ children, col, gapX, gapY }) {
  return (
    <div
      className="grid"
      style={{
        gridTemplateColumns: `repeat(${col}, minmax(0, 1fr))`,
        columnGap: gapX ? gapX : 'auto',
        rowGap: gapY ? gapY : 'auto',
      }}
    >
      {children}
    </div>
  );
}

export default Grid;
