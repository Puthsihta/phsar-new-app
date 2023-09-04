import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import style from '../../styles';
import FastImage from 'react-native-fast-image';
import AppImages from '../../themes/image';
import {widthRespone} from '../../themes/layout';

const DrawerScreen = () => {
  return (
    <View style={style.flexContainer}>
      <FastImage
        source={AppImages.logoApp}
        resizeMode="contain"
        style={styles.img_logo}
      />
    </View>
  );
};

export default DrawerScreen;

const styles = StyleSheet.create({
  img_logo: {
    width: widthRespone(20),
    height: widthRespone(20),
    alignSelf: 'center',
  },
});
