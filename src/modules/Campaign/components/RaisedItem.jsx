import React from 'react';
import PropTypes from 'prop-types';
import { classNames } from '~/utils';

RaisedItem.propTypes = {
  value: PropTypes.any,
  description: PropTypes.string,
  large: PropTypes.bool,
};

function RaisedItem({ value, description, large }) {
  return (
    <div>
      <h3 className={classNames('font-semibold text-text2 dark:text-text4', large ? 'text-xl' : 'text-base')}>
        {value || 0}
      </h3>
      <span className={classNames('font-medium text-text4 dark:text-text3', large ? 'text-base' : 'text-sm')}>
        {description}
      </span>
    </div>
  );
}

export default RaisedItem;
