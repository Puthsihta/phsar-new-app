import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import style from '../../styles';
import {goBack, navigate} from '../../services/navigate';
import {screenWidth, widthRespone} from '../../themes/layout';
import colors from '../../themes/colors';
import {TextTranslateBold} from '../customs/TextTranslate';
import {LabelBold} from '../customs/Label';
import {size} from '../../themes/fonts';

const CustomHeader = ({
  title,
  rightIcon,
  is_translate,
  is_shadow = true,
  is_back,
  is_home = false,
  is_title_center = true,
  onGoBack,
}: any) => {
  return (
    <View style={[styles.container, is_shadow ? {...style.shadowHeader} : {}]}>
      {!is_back ? (
        <View style={styles.icon} />
      ) : (
        <TouchableOpacity
          onPress={() => {
            !is_back
              ? null
              : is_home
              ? navigate('MainHome')
              : onGoBack
              ? onGoBack()
              : goBack();
          }}
          style={styles.icon}>
          {is_home ? (
            <Ionicons
              name={'home-outline'}
              size={widthRespone(7)}
              color={colors.whiteColor}
            />
          ) : (
            <Ionicons
              name={'chevron-back'}
              size={widthRespone(7)}
              color={colors.whiteColor}
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
        {is_translate ? (
          <TextTranslateBold numberOfLines={1} style={styles.titleText}>
            {title}
          </TextTranslateBold>
        ) : (
          <LabelBold numberOfLines={1} style={styles.titleText}>
            {title}
          </LabelBold>
        )}
      </View>
      <View style={styles.icon}>{rightIcon}</View>
    </View>
  );
};

export default React.memo(CustomHeader);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: screenWidth(55), // 55
    backgroundColor: colors.baseColor,
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
    fontSize: size.font20, // 18
  },
});
