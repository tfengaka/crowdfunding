import React from 'react';
import { useDropdown } from './DropdownContext';

const Option = (props) => {
  const { onClick } = props;
  const { setShow } = useDropdown();
  const handleClick = () => {
    onClick && onClick();
    setShow(false);
  };
  return (
    <div
      className="flex items-center justify-between px-5 py-4 font-medium transition-all rounded-lg cursor-pointer hover:text-primary20 hover:bg-primaryExtra dark:hover:bg-darkStroke"
      onClick={handleClick}
    >
      {props.children}
    </div>
  );
};

export default Option;
