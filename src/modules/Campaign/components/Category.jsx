import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { classNames } from '~/utils';

Category.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string,
  large: PropTypes.bool,
};

function Category({ name, link, large }) {
  return (
    <Link
      to={link}
      className={classNames('flex items-baseline gap-x-[10px] text-text3', large ? 'text-lg' : 'text-sm')}
    >
      {large ? (
        <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.67 2L9.67 4H18.5V14H2.5V2H7.67ZM8.5 0H2.5C1.4 0 0.51 0.9 0.51 2L0.5 14C0.5 15.1 1.4 16 2.5 16H18.5C19.6 16 20.5 15.1 20.5 14V4C20.5 2.9 19.6 2 18.5 2H10.5L8.5 0Z"
            fill="#808191"
          />
        </svg>
      ) : (
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5.8775 1.5L7.3775 3H14V10.5H2V1.5H5.8775ZM6.5 0H2C1.175 0 0.5075 0.675 0.5075 1.5L0.5 10.5C0.5 11.325 1.175 12 2 12H14C14.825 12 15.5 11.325 15.5 10.5V3C15.5 2.175 14.825 1.5 14 1.5H8L6.5 0Z"
            fill="#808191"
          />
        </svg>
      )}

      <span className={'font-medium'}>{name}</span>
    </Link>
  );
}

export default Category;
