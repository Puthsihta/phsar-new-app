import {StyleSheet, View} from 'react-native';
import React from 'react';
import AutoHeightImage from 'react-native-auto-height-image';
import {screenWidth} from '../../themes/layout';
import AppImages from '../../themes/image';
import {TextTranslate} from './TextTranslate';
import colors from '../../themes/colors';
import {size} from '../../themes/fonts';

const NoData = (props: any) => {
  return (
    <View style={styles.container}>
      <AutoHeightImage
        width={screenWidth(150)}
        source={AppImages.NoData}
        style={{marginTop: screenWidth(100)}}
      />
      <TextTranslate style={styles.text}>
        {props.title ? props.title : 'empty'}
      </TextTranslate>
    </View>
  );
};

export default React.memo(NoData);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.primaryColor,
    fontSize: size.font20,
    marginTop: screenWidth(15),
    textAlign: 'center',
  },
});
