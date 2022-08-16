import React from 'react';
import { Outlet } from 'react-router-dom';
import { Overlay, Sidebar, TopBar } from '../common';

function Dashboard({ children }) {
  return (
    <div className="h-full min-h-screen px-6 py-4 transition-all lg:p-10 bg-slate-100 dark:bg-darkBg">
      <Overlay isOpen={false} />
      <TopBar />
      <div className="flex items-start gap-x-10">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
