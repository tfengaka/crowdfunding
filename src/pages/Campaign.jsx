import React from 'react';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';
import { Button, Section } from '~/components/common';
import { HeaderCard } from '~/modules/Campaign';
import { Grid } from '~/modules/Dashboard';

const exampleHeader = {
  title: 'Remake - We Make architecture exhibition',
  category: 'Architecture',
  story: `Remake - We Make: an exhibition about architecture's social
  agency in the face of urbanisation`,
  image: '/static/headerThumb.png',
  amount: {
    value: 2000,
    raised: 2500,
  },
  bracket: 173,
  daysLeft: 30,
};

function Campaign() {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between px-[31px] py-10 bg-white mb-10 rounded-[20px]">
        <div className="flex items-start gap-x-6">
          <div className="p-[15px] mx-auto text-white rounded-full bg-secondary40">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <div className="flex flex-col gap-y-2">
            <h3 className="text-2xl font-semibold text-text1">Create Your Campaign</h3>
            <span className="text-sm text-text3">
              Jump right into our editor and create your first Virtue campaign!
            </span>
            <Link to="#" className="text-sm text-primary">
              Need any help? Learn More...
            </Link>
          </div>
        </div>
        <Button type="button" className="bg-[#EEEAFD] text-secondary" onClick={() => console.log('Create Campaign')}>
          Create campaign
        </Button>
      </div>
      <Section title="Your Campaign" quantity={4}>
        <Grid col={1} gapY="40px">
          {Array(4)
            .fill(0)
            .map((item) => (
              <HeaderCard key={v4()} {...exampleHeader} />
            ))}
        </Grid>
        <Button
          type="button"
          className="bg-[#EEEAFD] text-secondary mt-10 mx-auto px-14 py-4"
          onClick={() => console.log('See More')}
        >
          See more+
        </Button>
      </Section>
      <Section title="Pending Campaign" quantity={5}>
        <Grid col={1} gapY="40px">
          {Array(5)
            .fill(0)
            .map((item) => (
              <HeaderCard key={v4()} {...exampleHeader} />
            ))}
        </Grid>
        <Button
          type="button"
          className="bg-[#EEEAFD] text-secondary mt-10 mx-auto px-14 py-4"
          onClick={() => console.log('See More')}
        >
          See more+
        </Button>
      </Section>
    </div>
  );
}

export default Campaign;
