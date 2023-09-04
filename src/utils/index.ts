import {useFocusEffect} from '@react-navigation/native';
import {useCallback} from 'react';
import {Linking, Platform, StatusBar} from 'react-native';

export const makeid = () => {
  var text = '';
  var possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+<>?:|.,';
  for (var i = 0; i < 20; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
};
export var moment = require('moment/min/moment-with-locales');
export const makeCall = (number: any) => {
  let phoneNumber = '';
  if (Platform.OS === 'android') {
    phoneNumber = `tel:${number}`;
  } else {
    phoneNumber = `telprompt:${number}`;
  }
  Linking.openURL(phoneNumber);
};
export const validateEmail = (email: any) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
};
export function findValueInArray(arr: any[], value: any) {
  let result = arr.filter(r => r.value == value);
  return result;
}

export const useStatusBar = (style: any, color: string, animated = false) => {
  if (Platform.OS == 'ios') {
    useFocusEffect(
      useCallback(() => {
        StatusBar.setBarStyle(style, animated);
      }, []),
    );
    return;
  }
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBackgroundColor(color, animated);
      StatusBar.setBarStyle(style, animated);
    }, []),
  );
};
