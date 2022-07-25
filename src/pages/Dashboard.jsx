import { v4 } from 'uuid';
import { Section } from '~/components/common';
import { DashboardLayout } from '~/components/layout';
import { Card, Grid } from '~/modules/dashboard';

function Dashboard() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-y-[30px] w-full">
        <Section title="Your Campaign" quantity={4}></Section>
        <Section title="Popular Campaign">
          <Grid>
            {Array(4)
              .fill(0)
              .map((item) => (
                <Card key={v4()} />
              ))}
          </Grid>
        </Section>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
