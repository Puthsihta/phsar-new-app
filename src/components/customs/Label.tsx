import React from 'react';
import {Text} from 'react-native';
import {useAppSelector} from '../../hooks/dispatch';
import {
  FormatLang,
  FormatLangBold,
  FormatLangMedium,
  FormatLangSemiBold,
} from '../../utils/lang';
import {size} from '../../themes/fonts';

export const Label = (props: any) => {
  const lang = useAppSelector((state: any) => state.lang);
  const styleText = {
    ...FormatLang[lang.lang],
  };
  return (
    <Text {...props} style={[styleText, props.style]}>
      {props.children}
    </Text>
  );
};

export const LabelLang = (props: any) => {
  const lang = useAppSelector((state: any) => state.lang);
  const styleText = {
    ...FormatLang[lang.lang],
  };
  return (
    <Text {...props} style={[styleText, props.style]}>
      {lang.lang == 'en'
        ? props.children?.en
        : lang.lang == 'km'
        ? props.children?.km
        : props.children?.zh}
    </Text>
  );
};
export const LabelMedium = (props: any) => {
  const lang = useAppSelector((state: any) => state.lang);
  const styleText = {
    ...FormatLangMedium[lang.lang],
  };
  return (
    <Text {...props} style={[styleText, props.style]}>
      {props.children}
    </Text>
  );
};

export const LabelMediumLang = (props: any) => {
  const lang = useAppSelector((state: any) => state.lang);
  const styleText = {
    ...FormatLangMedium[lang.lang],
  };
  return (
    <Text {...props} style={[styleText, props.style]}>
      {lang.lang == 'en'
        ? props.children?.en
        : lang.lang == 'km'
        ? props.children?.km
        : props.children?.zh}
    </Text>
  );
};
export const LabelSemiBold = (props: any) => {
  const lang = useAppSelector((state: any) => state.lang);
  const styleText = {
    ...FormatLangSemiBold[lang.lang],
  };
  return (
    <Text {...props} style={[styleText, props.style]}>
      {props.children}
    </Text>
  );
};

export const LabelSemiBoldLang = (props: any) => {
  const lang = useAppSelector((state: any) => state.lang);
  const styleText = {
    ...FormatLangSemiBold[lang.lang],
  };
  return (
    <Text {...props} style={[styleText, props.style]}>
      {lang.lang == 'en'
        ? props.children?.en
        : lang.lang == 'km'
        ? props.children?.km
        : props.children?.zh}
    </Text>
  );
};

export const LabelBold = (props: any) => {
  const lang = useAppSelector((state: any) => state.lang);
  const styleText = {
    ...FormatLangBold[lang.lang],
  };
  return (
    <Text {...props} style={[styleText, props.style]}>
      {props.children}
    </Text>
  );
};

export const LabelBoldLang = (props: any) => {
  const lang = useAppSelector((state: any) => state.lang);
  const styleText = {
    ...FormatLangBold[lang.lang],
  };
  return (
    <Text {...props} style={[styleText, props.style]}>
      {lang.lang == 'en'
        ? props.children?.en
        : lang.lang == 'km'
        ? props.children?.km
        : props.children?.zh}
    </Text>
  );
};

export const LabelButtonTab = (props: any) => {
  const language = useAppSelector((state: any) => state.lang);
  return (
    <Text
      {...props}
      style={{
        ...props.style,
        ...FormatLang[language.lang],
        fontSize: size.font14,
        color: props.color,
      }}>
      {language[props.children]}
    </Text>
  );
};
