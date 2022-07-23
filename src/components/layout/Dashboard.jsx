import React from 'react';
import { Sidebar, TopBar } from '../common';

function Dashboard({ children }) {
  return (
    <div className="h-full min-h-screen px-6 py-4 lg:p-10 bg-slate-100 dark:bg-darkBg">
      <TopBar />
      <div className="flex items-start gap-x-10">
        <Sidebar />
        {children}
      </div>
    </div>
  );
}

export default Dashboard;
