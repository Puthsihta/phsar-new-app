import AsyncStorage from '@react-native-async-storage/async-storage';
import style from '../styles';

export const Language = {
  KHMER: 'km',
  ENGLISH: 'en',
};

export const FormatLang: any = {
  km: style.p,
  en: style.pEnglish,
};

export const FormatLangBold: any = {
  km: style.pBold,
  en: style.pEnglishBold,
};

export const FormatLangMedium: any = {
  km: style.pMedium,
  en: style.pEnglish,
};
export const FormatLangSemiBold: any = {
  km: style.p,
  en: style.pEnglish,
};

export const en = require('../i18n/en.json');
export const km = require('../i18n/km.json');

export default async function lang(language = null) {
  const lang =
    language === null ? await AsyncStorage.getItem('@lang') : language;
  switch (lang) {
    case 'en':
      return en;
    case 'km':
      return km;
    default:
      return km;
  }
}
