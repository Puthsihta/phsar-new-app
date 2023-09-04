import {Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const widthRespone = wp;
export const hightRespone = hp;
export const {width, height} = Dimensions.get('window');
export const borderRadius = widthRespone(3);
export const paddingHorizontal = widthRespone(3);
export const borderWidth = 0.5;

export const screenHeight = (size: any) =>
  (metrics.screenHeight * size) / 981.33;
export const screenWidth = (size: any) => (metrics.screenWidth * size) / 480;

export const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
};
