import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CardeRenderNews from '../../components/card/CardeRenderNews';
interface NewsProps {
  data: any;
  onDetail: (value: number) => void;
}
const ListNews: React.FC<NewsProps> = ({data, onDetail}) => {
  return data.map((item: any, index: number) => (
    <CardeRenderNews
      value={item}
      index={index}
      onPress={() => onDetail(item.id)}
    />
  ));
};

export default ListNews;

const styles = StyleSheet.create({});
