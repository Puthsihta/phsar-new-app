import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {HStack} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import colors from '../../themes/colors';
import fonts, {size} from '../../themes/fonts';
import {goBack} from '../../services/navigate';
import {screenHeight, screenWidth} from '../../themes/layout';
import style from '../../styles';

const WhiteHeader = ({title, children, is_back = true}: any) => {
  const inset = useSafeAreaInsets();
  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor: colors.whiteColor,
        }}
      />
      <KeyboardAvoidingView
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 25}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={[styles.container]}>
        <View style={{flex: 1}}>
          <HStack
            style={{
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: colors.whiteColor,
            }}>
            {is_back ? (
              <TouchableOpacity onPress={() => goBack()} style={style.button}>
                <Ionicons
                  name={'chevron-back'}
                  size={screenWidth(30)}
                  color={colors.iconColor}
                />
              </TouchableOpacity>
            ) : (
              <View style={style.button} />
            )}
            {/* {title && <LabelBold style={styles.title}>{title}</LabelBold>}
            <View style={makerStyle.button} /> */}
          </HStack>
          {children}
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default WhiteHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    height: screenHeight(100),
    backgroundColor: colors.whiteColor,
    zIndex: 9,
  },
  title: {
    fontSize: size.font20,
  },
});
