import { Button } from 'SoyaMilk-design';
import React, { useCallback, useState } from 'react';
import { ButtonSizeType } from '../types';
import './index.less';

export default () => {
  const [size, setSize] = useState<ButtonSizeType>('middle');
  const handleClick = useCallback((size: ButtonSizeType) => {
    setSize(size);
  }, []);
  return (
    <>
      {(['large', 'middle', 'small'] as ButtonSizeType[]).map((item) => {
        return (
          <Button key={item} onClick={() => handleClick(item)}>
            {item}
          </Button>
        );
      })}
      <hr></hr>
      <Button size={size}>Default</Button>
      <Button size={size} type="primary">
        Primary
      </Button>
      <Button size={size} type="dashed">
        Dashed
      </Button>
      <Button size={size} type="text">
        Text
      </Button>
      <Button size={size} type="link">
        Link
      </Button>
    </>
  );
};
