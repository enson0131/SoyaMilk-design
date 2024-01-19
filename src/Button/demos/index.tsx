import { Button } from 'SoyaMilk-design';
import React from 'react';
import './index.less';

export default () => {
  return (
    <>
      <Button>Default</Button>
      <Button type="primary">Primary</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="text">Text</Button>
      <Button type="link">Link</Button>
    </>
  );
};
