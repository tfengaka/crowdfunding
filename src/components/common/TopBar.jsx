import React from 'react';
import { Images } from '~/assets';
import Button from './DefaultButton';

function TopBar() {
  return (
    <div className="flex items-center justify-between mb-[30px] max-h-[52px]">
      {/* Left Group */}
      <div className="flex items-center flex-1 gap-x-10">
        <img srcSet={`${Images.logo} 2x`} alt="logo" />
        {/* Search */}
        <div className="bg-whiteSoft rounded-full shadow-lite p-[5px_7px_5px_15px] w-full md:flex items-center min-w-[250px] max-w-[460px] hidden">
          <div className="flex-1 p-[10px]">
            <input
              type="text"
              className="w-full text-sm font-medium bg-transparent placeholder:text-text4 text-text1"
              placeholder="Do fundrise now"
            />
          </div>
          <button className="flex-shrink-0 px-6 py-2 text-white bg-primary20 rounded-3xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
        {/* End Search */}
      </div>
      {/* End Left Group */}

      {/* Right Group */}
      <div className="flex items-center justify-end flex-auto gap-x-10">
        <div className="flex items-center justify-center gap-x-2 text-iconColor">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            />
          </svg>
          <label className="text-base font-semibold text-text2">Fundrising for</label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <Button type="button" className="bg-secondary20">
          Start a campaign
        </Button>
        <img
          src={Images.defaultAvatar}
          alt="avatar"
          className="hidden lg:block object-cover rounded-full h-[52px] w-[52px] "
        />
      </div>
    </div>
  );
}

export default TopBar;
