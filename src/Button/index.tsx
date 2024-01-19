import { getWithPrefixCls } from 'SoyaMilk-design/constants';
import classNames from 'classnames';
import React, { ReactNode } from 'react';
import './index.less';
import {
  ButtonShapeMenu,
  ButtonShapeType,
  ButtonSizeMenu,
  ButtonSizeType,
  ButtonType,
  ButtonTypeMenu,
} from './types';

interface ButtonProps {
  children?: ReactNode;
  type?: ButtonType;
  size?: ButtonSizeType;
  shape?: ButtonShapeType;
  disabled?: boolean;
  danger?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
function Button(props: ButtonProps) {
  const {
    children,
    type = ButtonTypeMenu.Default,
    size = ButtonSizeMenu.Middle,
    shape = ButtonShapeMenu.Square,
    disabled,
    danger,
    onClick,
  } = props;

  const disabledClassName = (disabled && getWithPrefixCls('disabled')) || '';
  const dangerClassName = (danger && getWithPrefixCls('danger')) || '';

  const composeClassName = [type, size, shape]
    .map((item) => getWithPrefixCls(item))
    .join(' ');

  return (
    <button
      className={classNames(
        getWithPrefixCls('btn'),
        composeClassName,
        disabledClassName,
        dangerClassName,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
