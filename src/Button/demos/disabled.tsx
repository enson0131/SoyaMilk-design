import { Button } from 'SoyaMilk-design';
import React from 'react';
import './index.less';

export default () => {
  return (
    <>
      <Button disabled>Default</Button>
      <Button type="primary" disabled>
        Primary
      </Button>
      <Button type="dashed" disabled>
        Dashed
      </Button>
      <Button type="text" disabled>
        Text
      </Button>
      <Button type="link" disabled>
        Link
      </Button>
      <hr></hr>
      <br />
      <div>danger类型按钮的 disabled</div>
      <br />
      <Button disabled danger>
        Default
      </Button>
      <Button type="primary" disabled danger>
        Primary
      </Button>
      <Button type="dashed" disabled danger>
        Dashed
      </Button>
      <Button type="text" disabled danger>
        Text
      </Button>
      <Button type="link" disabled danger>
        Link
      </Button>
    </>
  );
};
