import React, { ReactElement, useEffect, useRef, useState } from 'react';

function TestComponent() {
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    console.log('Hello!');
  }, []);

  return (
    <div>
      <h1 ref={ref}>{open.toString()}</h1>
      <h1>{count.toString()}</h1>
      <button
        onClick={() => {
          setOpen(!open);
          setCount(count + 1);
          console.log(ref.current);
        }}
      >
        {open ? 'Close' : 'Open'}
      </button>
    </div>
  );
}

export default TestComponent;
