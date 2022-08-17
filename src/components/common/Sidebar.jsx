import React from 'react';
import { NavLink } from 'react-router-dom';
import { CampaignIcon, DashboardIcon, LightIcon, LogoutIcon, PaymentIcon, ProfileIcon, WithdrawIcon } from '~/assets';
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
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const switchDarkMode = () => {
    const rootTag = document.querySelector('html');
    rootTag.classList.toggle('dark');
    setIsDarkMode(!isDarkMode);
  };

  const handleLogout = () => {
    window.location.href = '/signin';
  };

  return (
    <div className="w-full md:w-[80px] bg-white shadow-[10px_10px_20px_rgba(218,_213,_213,_0.15)] md:rounded-[20px] md:px-[14px] py-10 flex flex-col justify-between md:gap-y-28 flex-shrink-0 dark:bg-darkSecondary dark:shadow-dark sticky top-20 left-0">
      <div className="flex flex-col gap-y-5">
        {navLinks.map(({ display, icon, link }) => (
          <NavLink
            to={link}
            key={display}
            className={({ isActive }) =>
              classNames(
                isActive ? 'bg-primaryExtra text-primary dark:bg-darkStroke' : 'text-iconColor',
                'flex items-center md:justify-center gap-x-5 p-3 md:rounded-[10px] md:w-12 md:h-12 hover:text-primary20'
              )
            }
          >
            <span>{icon}</span>
            <span className="md:hidden">{display}</span>
          </NavLink>
        ))}
        <button
          className="flex items-center md:justify-center gap-x-5 p-3 md:rounded-[10px] md:w-12 md:h-12 text-iconColor hover:text-primary"
          onClick={() => handleLogout()}
        >
          <span>
            <LogoutIcon />
          </span>
          <span className="md:hidden">Logout</span>
        </button>
      </div>
      <button
        className={classNames(
          'flex items-center md:justify-center gap-x-5 p-3 md:rounded-[10px] md:w-12 md:h-12  hover:bg-primaryExtra hover:text-primary20 dark:hover:bg-darkSoft',
          isDarkMode ? 'text-primary20 md:dark:shadow-dark' : 'text-iconColor md:shadow-lite'
        )}
        onClick={() => switchDarkMode()}
      >
        <span>
          <LightIcon />
        </span>
        <span className="md:hidden">Light/Dark</span>
      </button>
    </div>
  );
}

export default Sidebar;
