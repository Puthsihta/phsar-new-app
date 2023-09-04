import React from 'react';
import {KeyboardAvoidingView, Platform, SafeAreaView, View} from 'react-native';
import CustomHeader from '../header/CustomHeader';
import colors from '../../themes/colors';

const BaseComponent = ({
  children,
  title,
  is_translate = true,
  backgroundColor,
}: any) => {
  return (
    <>
      <SafeAreaView style={{backgroundColor: colors.whiteColor}} />
      <KeyboardAvoidingView
        enabled
        style={{flex: 1, zIndex: 9}}
        behavior={Platform.OS == 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS == 'ios' ? 0 : undefined}>
        <CustomHeader title={title} is_translate={is_translate} />
        <View
          style={{
            flex: 1,
            backgroundColor: backgroundColor ? backgroundColor : colors.bgColor,
          }}>
          {children}
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default React.memo(BaseComponent);
