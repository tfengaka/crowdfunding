import React from 'react';
import PropTypes from 'prop-types';
import { classNames } from '~/utils';
ProcessBar.propTypes = {
  percent: PropTypes.number,
};

function ProcessBar({ percent }) {
  return (
    <div className="relative w-full h-1 rounded-md bg-text3 bg-opacity-30">
      <div
        className={classNames('absolute left-0 h-full rounded-md bg-primary20 ')}
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  );
}

export default ProcessBar;
