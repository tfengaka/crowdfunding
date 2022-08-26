import React from 'react';
import CampaignInfo from './CampaignInfo';
import Category from './Category';
import RaisedItem from './RaisedItem';
import PropTypes from 'prop-types';
import ProcessBar from './ProcessBar';

HeaderCard.propTypes = {
  title: PropTypes.string,
  story: PropTypes.string,
  category: PropTypes.string,
  image: PropTypes.string,
  amount: PropTypes.object,
  bracket: PropTypes.number,
  daysLeft: PropTypes.number,
};

function HeaderCard(props) {
  return (
    <div className="flex w-full gap-x-10">
      <div className="flex-shrink-0 max-w-[583px]">
        <img src={props.image} alt="" className="object-cover w-full rounded-3xl" />
      </div>
      <div className="flex flex-col gap-y-[25px] max-w-[600px]">
        <Category name={props.category} link="#" large />
        <CampaignInfo
          title="Remake - We Make architecture exhibition"
          story={`An exciting and gripping story of money, power and family in
          the cut throat world of the real estate`}
          large
        />
        <ProcessBar percent={66.6666} />
        <div className="flex items-center justify-between gap-x-16">
          <RaisedItem
            value={`$${props.amount?.value || '0'}`}
            description="Raised of $2,500"
            large
          />
          <RaisedItem value={props.bracket || 0} description="Total backers" large />
          <RaisedItem value={props.daysLeft || 0} description="Days left" large />
        </div>
      </div>
    </div>
  );
}

export default HeaderCard;
