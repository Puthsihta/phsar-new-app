import {SafeAreaView, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../themes/colors';
import fonts, {size} from '../../themes/fonts';
import {goBack} from '../../services/navigate';
import {screenWidth} from '../../themes/layout';

const CustomHeader = ({
  title,
  rightIcon,
  is_back,
  is_home = false,
  onGoBack,
  is_background,
  is_title_center = true,
}: any) => {
  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor: is_background ? colors.baseColor : colors.whiteSmoke,
        }}
      />

      <View
        style={[
          styles.container,
          {
            backgroundColor: is_background
              ? colors.baseColor
              : colors.whiteSmoke,
          },
        ]}>
        {!is_back ? (
          <View style={styles.icon} />
        ) : (
          <TouchableOpacity
            onPress={() => {
              !is_back ? null : onGoBack ? onGoBack() : goBack();
            }}
            style={styles.icon}>
            {is_home ? (
              <Ionicons
                name={'home-outline'}
                size={screenWidth(30)}
                color={is_background ? colors.whiteColor : colors.blackColor}
              />
            ) : (
              <Ionicons
                name={'chevron-back'}
                size={screenWidth(30)}
                color={is_background ? colors.whiteColor : colors.blackColor}
              />
            )}
          </TouchableOpacity>
        )}
        <View
          style={[
            styles.title,
            {
              justifyContent: is_title_center ? 'center' : 'flex-start',
              alignItems: is_title_center ? 'center' : 'flex-start',
            },
          ]}>
          {/* <TextTranslateNormal numberOfLines={1} style={styles.titleText}>
            {title}
          </TextTranslateNormal> */}
        </View>
        <View style={styles.icon}>{rightIcon}</View>
      </View>
    </>
  );
};

export default React.memo(CustomHeader);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: screenWidth(60), // 55
  },
  icon: {
    width: screenWidth(60), // 60
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    flex: 1,
  },
  titleText: {
    color: colors.whiteColor,
    fontSize: size.font22, // 18
  },
});
