import { Button } from 'SoyaMilk-design';
import React from 'react';
import './index.less';

export default () => {
  return (
    <>
      <Button danger>Default</Button>
      <Button type="primary" danger>
        Primary
      </Button>
      <Button type="dashed" danger>
        Dashed
      </Button>
      <Button type="text" danger>
        Text
      </Button>
      <Button type="link" danger>
        Link
      </Button>
    </>
  );
};
