// 按钮类型
export enum ButtonTypeMenu {
  Primary = 'primary', // 主按钮
  Default = 'default', // 默认按钮
  Dashed = 'dashed', // 虚线按钮
  Text = 'text', // 文本按钮
  Link = 'link', // 链接按钮
}
export type ButtonType = `${ButtonTypeMenu}`;

// 按钮大小
export enum ButtonSizeMenu {
  Large = 'large', // 大按钮
  Middle = 'middle', // 中按钮
  Small = 'small', // 小按钮
}
export type ButtonSizeType = `${ButtonSizeMenu}`;

// 按钮的形状
export enum ButtonShapeMenu {
  Circle = 'circle', // 圆形按钮
  Square = 'square', // 圆角按钮
}
export type ButtonShapeType = `${ButtonShapeMenu}`;
