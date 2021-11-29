import React, { ReactElement, useEffect, useRef, useState } from 'react';
import SimpleLayout from '../components/Layouts/SimpleLayout';
import TestComponent from '../components/TestComponent';

interface Props {}

function Testpage({}: Props): ReactElement {
  return (
    <div>
      <TestComponent />
      <TestComponent />
      <TestComponent />
    </div>
  );
}

Testpage.getLayout = function getLayout(page: typeof Testpage) {
  return <SimpleLayout>{page}</SimpleLayout>;
};

export default Testpage;
