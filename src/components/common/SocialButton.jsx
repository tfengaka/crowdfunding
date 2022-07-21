import React from 'react';
import PropTypes from 'prop-types';

SocialButton.propTypes = {
  content: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

function SocialButton({ content, icon, onClick }) {
  return (
    <button
      className="flex items-center justify-center w-full py-3 mb-5 text-base font-semibold transition-all rounded-lg gap-x-2 dark:text-white text-text2 dark:bg-darkSoft hover:bg-primary dark:hover:bg-primary bg-strock hover:text-white"
      onClick={onClick}
    >
      <img srcSet={`${icon} 2x`} alt="google" />
      <span>{content}</span>
    </button>
  );
}

export default SocialButton;
