import {Dimensions} from 'react-native';

export const {width, height} = Dimensions.get('window');
export const borderRadius = 15;
export const paddingHorizontal = 12;
export const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
};
