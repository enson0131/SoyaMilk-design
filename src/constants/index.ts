export const PRE_ClASSNAME = 'soya-milk';

/** 获取前缀className */
export function getWithPrefixCls(className: any) {
  return `${PRE_ClASSNAME}-${className}`;
}
