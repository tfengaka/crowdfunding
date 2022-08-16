import React from 'react';
import { Images } from '~/assets';
import Button from './DefaultButton';
import Searching from './Searching';

function TopBar() {
  return (
    <div className="flex items-center justify-between mb-[30px] max-h-[52px]">
      <div className="flex items-center flex-1 gap-x-[68px]">
        <img srcSet={`${Images.logo} 2x`} alt="logo" />
        <Searching />
      </div>
      <div className="flex items-center justify-end flex-auto gap-x-10">
        <div className="flex items-center justify-center gap-x-2 text-iconColor dark:text-text3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
          <label className="text-base font-semibold text-text2 dark:text-text3">Fundrising for</label>
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
        <Button type="button" className="text-white bg-secondary20">
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
