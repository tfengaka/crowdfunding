import React from 'react';
import { v4 } from 'uuid';
import { Images } from '~/assets';
import { CampaignInfo, Category, ProcessBar, RaisedItem } from '.';

function CampaignView() {
  return (
    <React.Fragment>
      <div
        className="h-[140px] w-full bg-cover bg-center bg-no-repeat rounded-xl flex items-center justify-center mb-10"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(32, 18, 63, 0) -5%, rgba(0, 0, 0, 0.4) 100%), url(${Images.banner})`,
        }}
      >
        <h1 className="text-[40px] font-bold text-white text-center my-auto">Education</h1>
      </div>
      {/* Header View */}
      <div className="flex w-full gap-x-10">
        <div className="flex-shrink-0 w-[600px] h-[300px]">
          <img src={Images.test} alt="" className="object-cover w-full h-full rounded-3xl" />
          <div className="flex items-center justify-center mt-[30px] gap-x-5">
            {Array(4)
              .fill(0)
              .map((item) => (
                <img
                  src={Images.test}
                  alt=""
                  className="object-cover w-[90px] h-[70px] rounded-md"
                  key={v4()}
                />
              ))}
          </div>
        </div>
        <div className="flex flex-col gap-y-[25px] max-w-[500px]">
          <Category name="Film" link="#" large />
          <CampaignInfo
            title="Remake - We Make architecture exhibition"
            story={`An exciting and gripping story of money, power and family in
          the cut throat world of the real estate`}
            large
          />
          {/* Author */}

          <ProcessBar percent={66.6666} />
          <div className="flex items-center justify-between gap-x-16">
            <RaisedItem value={`$2,000`} description="Raised of $2,500" large />
            <RaisedItem value={173} description="Total backers" large />
            <RaisedItem value={30} description="Days left" large />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CampaignView;
