import {StyleSheet} from 'react-native';
import colors from '../themes/colors';
import {screenHeight, screenWidth, widthRespone} from '../themes/layout';
import {size} from '../themes/fonts';
import {
  Battambang,
  BattambangBold,
  PoppinBold,
  PoppinMedium,
  PoppinSemiBold,
} from '../services/configs/fonts';

const style = StyleSheet.create({
  flexContainer: {
    flex: 1,
    backgroundColor: colors.bgColor,
  },
  flexCenter: {
    flex: 1,
    backgroundColor: colors.bgColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: screenHeight(20),
    height: screenHeight(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  p: {
    color: colors.titleColor,
    fontSize: screenWidth(18),
    ...Battambang,
  },
  pBold: {
    color: colors.titleColor,
    fontSize: screenWidth(18),
    ...BattambangBold,
  },
  pMedium: {
    color: colors.titleColor,
    fontSize: screenWidth(18),
    ...BattambangBold,
  },
  pEnglish: {
    color: colors.titleColor,
    fontSize: screenWidth(18),
    ...PoppinMedium,
  },
  pEnglishBold: {
    color: colors.titleColor,
    fontSize: screenWidth(18),
    ...PoppinBold,
  },
  pEnglishMedium: {
    color: colors.titleColor,
    fontSize: screenWidth(18),
    ...PoppinMedium,
  },
  pEnglishSemiBold: {
    color: colors.titleColor,
    fontSize: screenWidth(18),
    ...PoppinSemiBold,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 0.3,
  },
  shadowCard: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  shadowHeader: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  buttonChoose: {
    flexDirection: 'row',
    width: widthRespone(100),
    height: 40,
    alignItems: 'center',
    paddingHorizontal: 15,
    marginTop: 10,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: size.font18,
    color: colors.blackColor,
  },
  labelTextInput: {
    fontSize: size.font16,
    marginLeft: screenWidth(3),
    color: colors.placeHolderColor,
  },
  textInput: {
    minWidth: screenWidth(120),
    fontSize: size.font16,
    color: colors.blackColor,
    paddingHorizontal: screenWidth(16),
    height: screenWidth(50),
    marginTop: screenWidth(5),
    borderRadius: screenWidth(6),
  },
  normalShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,

    elevation: 0.2,
  },
  boldShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  circle: {
    width: screenWidth(140),
    height: screenWidth(140),
    borderRadius: screenWidth(350) / 2,
    position: 'absolute',
    backgroundColor: 'rgba(53, 76, 163, 0.15)',
    top: screenWidth(80),
    right: -screenWidth(80),
  },
  bigCircle: {
    width: screenWidth(180),
    height: screenWidth(180),
    borderRadius: screenWidth(180) / 2,
    position: 'absolute',
    backgroundColor: 'rgba(53, 76, 163, 0.4)',
    top: -screenWidth(50),
    right: -screenWidth(50),
  },
});
export default style;
