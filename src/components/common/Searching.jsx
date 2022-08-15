import React, { useState } from 'react';
import { Images } from '~/assets';

function Searching() {
  const [isSearching, setIsSearching] = useState(false);

  return (
    <div className="relative z-50 w-full">
      <div className="bg-whiteSoft dark:bg-darkSecondary rounded-full shadow-lite dark:shadow-dark p-[5px_7px_5px_15px] w-full md:flex items-center min-w-[250px] max-w-[460px] hidden">
        <div className="flex-1 p-[10px]">
          <input
            type="text"
            className="w-full text-sm font-medium bg-transparent placeholder:text-text4 text-text1 dark:text-white dark:placeholder:text-text2"
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
      {/* Search Result */}
      {isSearching && (
        <div className="absolute w-full lg:w-[150%] bg-white shadow-lite top-full min-h-[500px] translate-y-5 z-50 rounded-3xl left-0 pb-[25px]">
          <div className="flex p-[10px] items-center justify-between bg-whiteSoft rounded-3xl mb-5">
            <div className="p-[10px]">
              <span className="pl-[5px] text-sm font-medium text-text1 underline">See all 10,124 fundraisier</span>
            </div>
            <button
              className="px-6 py-3 bg-error bg-opacity-10 text-error rounded-[10px] flex items-center justify-center"
              onClick={() => setIsSearching(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          {/* Fundraisiers */}
          <div className="px-6 flex flex-col gap-y-[15px] mb-5">
            <FundraiserItem />
            <FundraiserItem />
            <FundraiserItem />
            <FundraiserItem />
            <FundraiserItem />
          </div>
          {/* Releted searchs */}
          <div className="px-6">
            <h3 className="mb-4 text-sm font-semibold text-text1">Releted searchs</h3>
            <div className="text-sm text-text2 flex flex-col gap-y-[10px]">
              <span>
                <strong className="font-medium text-text1">education</strong> fund
              </span>
              <span>schoralship fund</span>
              <span>
                <strong className="font-medium text-text1">education</strong> and schools fund
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  function FundraiserItem() {
    return (
      <div className="flex items-center rounded-lg cursor-pointer gap-x-5">
        <img src={Images.defaultAvatar} alt="" className="object-cover rounded-lg w-[50px] h-[50px]" />
        <div className="flex-1 text-sm">
          <h3 className="text-text1 mb-[5px]">
            Rylee McCollum's Child <strong className="font-semibold">Education</strong> Fund
          </h3>
          <span className="text-text3">By Rakesh Mahmud</span>
        </div>
      </div>
    );
  }
}

export default Searching;
