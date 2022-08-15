import React from 'react';
import PropTypes from 'prop-types';
import { classNames } from '~/utils';

CampaignInfo.propTypes = {
  title: PropTypes.string,
  story: PropTypes.string,
  large: PropTypes.bool,
};

function CampaignInfo({ title, story, large }) {
  return (
    <div>
      <h3
        className={classNames(
          'text-text1 dark:text-white ',
          large ? 'text-xl font-bold mb-4' : 'text-base font-semibold mb-1'
        )}
      >
        {title}
      </h3>
      <p className={classNames('text-text3', large ? 'text-base' : 'text-sm')}>{story}</p>
    </div>
  );
}

export default CampaignInfo;
