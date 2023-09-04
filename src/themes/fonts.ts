import {metrics} from './layout';

export const size = {
  font6: metrics.screenWidth * (6 / 365),
  font8: metrics.screenWidth * (8 / 365),
  font10: metrics.screenWidth * (10 / 365),
  font12: metrics.screenWidth * (12 / 365),
  font14: metrics.screenWidth * (14 / 365),
  font16: metrics.screenWidth * (16 / 365),
  font18: metrics.screenWidth * (18 / 365),
  font20: metrics.screenWidth * (20 / 365),
  font22: metrics.screenWidth * (22 / 365),
  font24: metrics.screenWidth * (24 / 365),
  font26: metrics.screenWidth * (26 / 365),
  font28: metrics.screenWidth * (28 / 365),
  font30: metrics.screenWidth * (30 / 365),
  font32: metrics.screenWidth * (32 / 365),
  font35: metrics.screenWidth * (35 / 365),
};

const weight: any = {
  full: '900',
  semi: '600',
  low: '400',
  bold: 'bold',
  normal: 'normal',
};

export default {
  size,
  weight,
};
