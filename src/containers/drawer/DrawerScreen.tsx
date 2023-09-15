import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import style from '../../styles';
import FastImage from 'react-native-fast-image';
import AppImages from '../../themes/image';
import {paddingHorizontal, widthRespone} from '../../themes/layout';
import colors from '../../themes/colors';
import {HStack} from 'native-base';
import {LabelBold} from '../../components/customs/Label';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {closeDrawer} from '../../services/navigate/drawer';

const Data = [
  {
    id: 1,
    name: 'ពត័មានជាតិ',
    image_url: null,
  },
  {
    id: 1,
    name: 'ពត័មានអន្តរជាតិ',
    image_url: null,
  },
  {
    id: 1,
    name: 'ពត័មានសង្គម',
    image_url: null,
  },
  {
    id: 1,
    name: 'ពត័មានកីឡា',
    image_url: null,
  },
  {
    id: 1,
    name: 'ពត័មានសុខភាព',
    image_url: null,
  },
];

const DrawerScreen = () => {
  return (
    <View style={style.flexContainer}>
      <FastImage
        source={AppImages.logoApp}
        resizeMode="contain"
        style={styles.img_logo}
      />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {Data.map((item, index) => (
            <TouchableOpacity onPress={closeDrawer} style={styles.wrapItem}>
              <HStack alignItems={'center'} space={3}>
                {item.image_url && (
                  <FastImage
                    source={{uri: item.image_url}}
                    style={styles.img}
                  />
                )}
                <LabelBold>{item.name}</LabelBold>
              </HStack>
              <AntDesign
                name="right"
                size={widthRespone(7)}
                color={colors.placeHolderColor}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default DrawerScreen;

const styles = StyleSheet.create({
  img_logo: {
    width: widthRespone(20),
    height: widthRespone(20),
    alignSelf: 'center',
  },
  container: {
    borderTopWidth: 2,
    borderColor: colors.borderColor,
    // backgroundColor: 'red',
    padding: paddingHorizontal,
  },
  wrapItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: paddingHorizontal,
    borderBottomWidth: 1,
    borderColor: colors.borderColor,
  },
  img: {
    width: widthRespone(12),
    height: widthRespone(12),
    borderRadius: widthRespone(12 / 2),
    backgroundColor: colors.grayColor,
  },
});
