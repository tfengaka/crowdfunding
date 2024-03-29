import React from 'react';

function Profile() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <circle
        cx="12"
        cy="9"
        r="3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
      ></circle>
      <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2"></circle>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
        d="M19 20c-.413-1.148-1.323-2.162-2.588-2.885C15.146 16.392 13.595 16 12 16c-1.595 0-3.146.392-4.412 1.115C6.323 17.838 5.413 18.853 5 20"
      ></path>
    </svg>
  );
}

export default Profile;
