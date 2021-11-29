import React from 'react';

function OtherLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>Other Nav</h1>
      <div>{children}</div>
    </div>
  );
}

export default OtherLayout;
