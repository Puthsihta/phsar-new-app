import React from 'react';
import {KeyboardAvoidingView, Platform, SafeAreaView, View} from 'react-native';
import CustomHeader from '../header/CustomHeader';
import colors from '../../themes/colors';

const BaseComponent = ({
  children,
  title,
  is_main,
  rightIcon,
  is_back = true,
  is_translate = true,
  is_home,
  is_title_center = true,
  onGoBack,
}: any) => {
  return (
    <>
      <SafeAreaView style={{backgroundColor: colors.baseColor}} />
      <KeyboardAvoidingView
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 25}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{
          flex: 1,
          zIndex: 9,
        }}>
        <View
          style={{
            flex: 1,
          }}>
          <>
            <CustomHeader
              title={title}
              is_translate={is_translate}
              rightIcon={rightIcon}
              is_back={is_back}
              is_home={is_home}
              is_title_center={is_title_center}
              onGoBack={onGoBack}
            />
          </>
          {children}
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default React.memo(BaseComponent);
