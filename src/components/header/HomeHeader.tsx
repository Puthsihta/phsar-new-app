import React from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import colors from '../../themes/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FastImage from 'react-native-fast-image';
import AppImages from '../../themes/image';
import {
  paddingHorizontal,
  screenWidth,
  widthRespone,
} from '../../themes/layout';
import {openDrawer} from '../../services/navigate/drawer';
interface props {
  onSearch: () => void;
}
const HomeHeader: React.FC<props> = ({onSearch}) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.whiteColor,
      }}>
      <View style={styles.container}>
        <AntDesign
          onPress={openDrawer}
          name="menufold"
          size={widthRespone(6)}
          color={colors.iconColor}
        />
        <FastImage
          source={AppImages.logoApp}
          style={[
            {
              width: widthRespone(11),
              height: widthRespone(11),
            },
          ]}
        />
        <AntDesign
          onPress={onSearch}
          name="search1"
          size={widthRespone(6)}
          color={colors.iconColor}
        />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(HomeHeader);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: screenWidth(65), // 55
    paddingHorizontal: paddingHorizontal,
    borderBottomWidth: 0.5,
    borderColor: colors.borderColor,
  },
});
