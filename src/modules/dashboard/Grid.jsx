import React from 'react';

function Grid({ children }) {
  return <div className="grid grid-cols-4 gap-x-[30px]">{children}</div>;
}

export default Grid;
