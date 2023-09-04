import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../../themes/colors';
import {Label, LabelBold} from './Label';

export const CustomButton = (props: any) => {
  return (
    <TouchableOpacity {...props} style={[styles.submitButton, props.style]}>
      <Label style={[{color: colors.white}, props.textStyle]}>
        {props.children}
      </Label>
    </TouchableOpacity>
  );
};
export const CustomButtonBold = (props: any) => {
  return (
    <TouchableOpacity {...props} style={[styles.submitButton, props.style]}>
      <LabelBold style={[{color: colors.white}, props.textStyle]}>
        {props.children}
      </LabelBold>
    </TouchableOpacity>
  );
};

export const CustomButtonWithIcon = (props: any) => {
  return (
    <TouchableOpacity
      {...props}
      style={[styles.welcomeBtn, makerStyle.center, props.style]}>
      {props.children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  submitButton: {
    width: '100%',
    backgroundColor: colors.mainColor,
    height: hightRespone(6),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: borderRadius * 2,
  },
  welcomeBtn: {
    width: '100%',
    flexDirection: 'row',
    padding: paddingHorizontal / 2,
    // backgroundColor: colors.btnBg,
    height: hightRespone(6),
    alignItems: 'center',
    borderRadius: borderRadius / 2,
  },
});
