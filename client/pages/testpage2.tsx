import React, { ReactElement } from 'react';
import OtherLayout from '../components/Layouts/OtherLayout';

interface Props {}

function Testpage2({}: Props): ReactElement {
  return (
    <div>
      <h1>Test</h1>
    </div>
  );
}

Testpage2.getLayout = function getLayout(page: typeof Testpage2) {
  return <OtherLayout>{page}</OtherLayout>;
};

export default Testpage2;
