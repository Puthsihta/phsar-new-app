import React from 'react';
import {Text} from 'react-native';
import {useAppSelector} from '../../hooks/dispatch';
import {FormatLang, FormatLangBold, FormatLangMedium} from '../../utils/lang';
import colors from '../../themes/colors';

export const TextTranslate = (props: any) => {
  const language = useAppSelector((state: any) => state.lang);
  return (
    <Text
      {...props}
      style={[
        {color: colors.baseColor},
        {
          ...FormatLang[language.lang],
          ...props.style,
          // fontSize: language.lang == 'en' ? size.font18 : size.font16
        },
      ]}>
      {language[props.children]}
    </Text>
  );
};

export const TextTranslateBold = (props: any) => {
  const language = useAppSelector((state: any) => state.lang);
  return (
    <Text
      {...props}
      style={[
        {color: colors.baseColor},
        {
          ...FormatLangBold[language.lang],
        },
        props.style,
      ]}>
      {language[props.children]}
    </Text>
  );
};

export const TextTranslateMedium = (props: any) => {
  const lang = useAppSelector((state: any) => state.lang);
  const styleText = {
    ...FormatLangMedium[lang.lang],
  };
  return (
    <Text {...props} style={[styleText, props.style]}>
      {props.value
        ? lang[props.children].format(
            props.is_translate ? lang[props.value] : props.value,
          )
        : lang[props.children]}
    </Text>
  );
};
