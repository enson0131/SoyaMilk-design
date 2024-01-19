import { getWithPrefixCls } from 'SoyaMilk-design/constants';
import React, { ReactNode } from 'react';
import { ButtonShape, ButtonSize, ButtonType } from './types';

interface ButtonProps {
  children?: ReactNode;
  type?: ButtonType;
  size?: ButtonSize;
  shape?: ButtonShape;
}
function Button(props: ButtonProps) {
  const {
    children,
    type = ButtonType.Default,
    size = ButtonSize.Middle,
    shape = ButtonShape.Square,
  } = props;

  const classNames = [type, size, shape]
    .map((item) => getWithPrefixCls(item))
    .join(' ');

  return <button className={classNames}>{children}</button>;
}

export default Button;
