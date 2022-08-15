import PropTypes from 'prop-types';
import { Images } from '~/assets';
import { CampaignInfo, Category, RaisedItem } from '../Campaign';

Card.propTypes = {
  title: PropTypes.string,
  story: PropTypes.string,
  category: PropTypes.string,
  image: PropTypes.string,
  amount: PropTypes.object,
  bracket: PropTypes.number,
  author: PropTypes.object,
};

function Card(props) {
  return (
    <div className="bg-white rounded-[15px] shadow-card dark:bg-darkSecondary dark:shadow-none">
      <div className="h-[158px]">
        <img src={props.image || Images.test} alt="thumbnail" className="object-cover w-full h-full rounded-2xl" />
      </div>

      <div className="px-5 py-4">
        <Category name="Education" link="#" />
        <div className="mb-4">
          <CampaignInfo title={props.title} story={props.story} />
        </div>
        <div className="flex items-center justify-between mb-5 gap-x-5">
          <RaisedItem value={`$${props.amount?.value || 0}`} description={`Raised of $${props.amount?.raised || 0}`} />
          <RaisedItem value={`$${props.bracket || 0}`} description="Total backers" />
        </div>
        <div className="flex items-center gap-x-3">
          <img src={props.author?.avatar} alt="" className="object-cover w-[30px] h-[30px] rounded-full" />
          <span className="text-base text-text3">
            by <strong className="font-semibold text-text2">{props.author?.name || 'Mahfuzul Nabil'}</strong>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
