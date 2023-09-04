import {StyleSheet} from 'react-native';
import {moment} from '../../utils';
const NormalDate = (date: any) => {
  return moment(date)
    .locale('km')
    .format(`ថ្ងៃទីDD ខែMMMM ឆ្នាំYYYY ${`ម៉ោង`}HH:mm${`នាទី`}`);
};

export const NormalDateWithTime = (date: any) => {
  return moment(date).locale('km').format(`ថ្ងៃទីDD ខែMMMM ឆ្នាំYYYY`);
};

export const ShortNormalDate = (date: any) => {
  return moment(date).locale('km').format(`DD MMMM YYYY`);
};

export const DateWithTime = (date: any) => {
  return moment(date)
    .locale('km')
    .format(`DD MMMM YYYY ${`ម៉ោង`}HH:mm${`នាទី`}`);
};

export const DateFormat = (date: any) => {
  return moment(date).locale('km').format(`DD MMMM YYYY`);
};

export const SlahDate = (date: any) => {
  return moment(date).locale('km').format(`DD${`/`}MM${`/`}YYYY`);
};

export const FilterDates = (date: any, lang: any) => {
  return lang.lang == 'en'
    ? moment(date).locale('en').format('DD MMM YYYY')
    : lang.lang == 'km'
    ? moment(date).locale('km').format('DD MMM YYYY')
    : moment(date).locale('zh-cn').format('DD MMM YYYY');
};

export default NormalDate;

const styles = StyleSheet.create({});
