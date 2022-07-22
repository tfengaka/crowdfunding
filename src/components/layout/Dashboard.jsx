import React from 'react';
import { Sidebar, TopBar } from '../common';

function Dashboard({ children }) {
  return (
    <div className="px-6 py-4 lg:p-10 bg-liteBg dark:bg-darkBg">
      <TopBar />
      <div>
        <Sidebar />
      </div>
      <div>{children}</div>
    </div>
  );
}

export default Dashboard;
