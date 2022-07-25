import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  CampaignIcon,
  DashboardIcon,
  LightIcon,
  LogoutIcon,
  PaymentIcon,
  ProfileIcon,
  WithdrawIcon,
} from '~/assets';
import { classNames } from '~/utils';

const navLinks = [
  {
    display: 'Dashboard',
    icon: <DashboardIcon />,
    link: '/',
  },
  {
    display: 'Campaign',
    icon: <CampaignIcon />,
    link: '/campaign',
  },
  {
    display: 'Payment',
    icon: <PaymentIcon />,
    link: '/payment',
  },
  {
    display: 'Withdraw',
    icon: <WithdrawIcon />,
    link: '/withdraw',
  },
  {
    display: 'Profile',
    icon: <ProfileIcon />,
    link: '/profile',
  },
];

function Sidebar() {
  return (
    <div className="w-full md:w-[80px] bg-white shadow-[10px_10px_20px_rgba(218,_213,_213,_0.15)] rounded-[20px] px-[14px] py-10 flex flex-col justify-between md:gap-y-40 flex-shrink-0">
      <div className="flex flex-col gap-y-[30px]">
        {navLinks.map(({ display, icon, link }) => (
          <NavLink
            to={link}
            key={display}
            className={({ isActive }) =>
              classNames(
                isActive ? 'bg-primaryExtra text-primary' : 'text-iconColor',
                'flex items-center md:justify-center gap-x-5 p-3 md:rounded-[10px] md:w-12 md:h-12 hover:text-primary'
              )
            }
          >
            <span>{icon}</span>
            <span className="md:hidden">{display}</span>
          </NavLink>
        ))}
        <button className="flex items-center md:justify-center gap-x-5 p-3 md:rounded-[10px] md:w-12 md:h-12 text-iconColor hover:text-primary">
          <span>
            <LogoutIcon />
          </span>
          <span className="md:hidden">Logout</span>
        </button>
      </div>
      <button className="flex items-center md:justify-center mt-[30px] gap-x-5 text-iconColor p-3 md:rounded-[10px] md:w-12 md:h-12 md:shadow-lite hover:text-primary hover:bg-primaryExtra">
        <span>
          <LightIcon />
        </span>
        <span className="md:hidden">Light/Dark</span>
      </button>
    </div>
  );
}

export default Sidebar;
