import { v4 } from 'uuid';
import { Images } from '~/assets';
import { Section } from '~/components/common';
import { DashboardLayout } from '~/components/layout';
import { HeaderCard } from '~/modules/Campaign';
import { Card, Grid } from '~/modules/Dashboard';

const exampleCard = {
  title: 'Building Hope Village',
  category: 'Real Estate',
  story: `An exciting and gripping story of money, power and family in
  the cut throat world of the real estate`,
  image: Images.test,
  amount: {
    value: 2000,
    raised: 2500,
  },
  bracket: 200,
  author: {
    name: 'Mahfuzul Nabil',
    avatar: Images.defaultAvatar,
  },
};
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
function Dashboard() {
  return (
    <DashboardLayout>
      <div className="flex flex-col w-full gap-y-[30px]">
        <Section title="Your Campaign" quantity={4}>
          <HeaderCard {...exampleHeader} />
        </Section>
        <Section title="Popular Campaign">
          <Grid>
            {Array(4)
              .fill(0)
              .map((item) => (
                <Card key={v4()} {...exampleCard} />
              ))}
          </Grid>
        </Section>
        <Section title="Recent Campaign">
          <Grid>
            {Array(4)
              .fill(0)
              .map((item) => (
                <Card key={v4()} {...exampleCard} />
              ))}
          </Grid>
        </Section>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
