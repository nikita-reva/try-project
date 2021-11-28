import React from 'react';

function SimpleLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>Nav</h1>
      <div>{children}</div>
    </div>
  );
}

export default SimpleLayout;
