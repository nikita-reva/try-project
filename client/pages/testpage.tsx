import React, { ReactElement } from 'react';
import SimpleLayout from '../components/Layouts/SimpleLayout';

interface Props {}

function Testpage({}: Props): ReactElement {
  return (
    <div>
      <h1>Test</h1>
    </div>
  );
}

Testpage.getLayout = function getLayout(page: typeof Testpage) {
  return <SimpleLayout>{page}</SimpleLayout>;
};

export default Testpage;
