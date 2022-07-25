import React from 'react';
import PropTypes from 'prop-types';
import { Images } from '~/assets';
import { Link } from 'react-router-dom';

Card.propTypes = {
  title: PropTypes.string,
  category: PropTypes.string,
  desc: PropTypes.string,
  image: PropTypes.string,
  amount: PropTypes.object,
  bracket: PropTypes.number,
  author: PropTypes.object,
};
function Card(props) {
  return (
    <div className="bg-white rounded-[15px] shadow-card">
      <div className="h-[158px]">
        <img
          src={props.image || Images.test}
          alt="thumbnail"
          className="object-cover w-full h-full rounded-2xl"
        />
      </div>

      <div className="px-5 py-4">
        <Link to="" className="flex items-end gap-x-[10px] mb-4 text-text3 text-xs ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 font-semibold"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
            />
          </svg>
          <span className="font-medium">{props.category || 'Unknown'}</span>
        </Link>
        <div className="mb-4">
          <h3 className="mb-2 text-sm font-semibold text-text1">
            {props.title || 'Powered Kits Learning Boxes'}
          </h3>
          <p className="text-xs text-text3">
            {props.desc || 'Fun, durable and reusable boxes with eco-friendly options.'}
          </p>
        </div>
        <div className="flex items-center justify-between gap-x-5">
          <div>
            <h3 className="mb-1 text-sm font-semibold text-text2">{`$${
              props.amount?.raised || 0
            }`}</h3>
            <span className="text-xs font-medium text-text4">{`Raised of $${
              props.amount?.raised || 0
            }`}</span>
          </div>
          <div>
            <div>
              <h3 className="mb-1 text-sm font-semibold text-text2">{`$${props.bracket || 0}`}</h3>
              <span className="text-xs font-medium text-text4">Total backers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
