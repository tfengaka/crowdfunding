import React from 'react';

function Error() {
  return (
    <div className="w-full p-4 rounded-lg bg-liteBg only:">
      <img src="/static/error.svg" alt="error" className="object-cover mb-5" />
      <h3 className="text-lg font-bold text-center text-error">Have Some Error!</h3>
    </div>
  );
}

export default Error;
