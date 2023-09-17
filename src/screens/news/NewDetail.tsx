import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  borderRadius,
  metrics,
  paddingHorizontal,
  widthRespone,
} from '../../themes/layout';
import colors from '../../themes/colors';
import {size} from '../../themes/fonts';
import WebViewAutoHeight from '../../components/customs/WebViewAutoHeight';
import {Label, LabelBold} from '../../components/customs/Label';
import {HStack} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {DateWithTime} from '../../components/customs/NormalDate';
import style from '../../styles';
interface prop {
  fontSize: number;
  data: any;
}
const NewDetail: React.FC<prop> = ({fontSize, data}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Image
        source={{
          uri: data?.image_url,
        }}
        style={styles.img}
        resizeMode="contain"
      />
      <View style={{margin: paddingHorizontal / 1.5}}>
        <LabelBold style={styles.title}>{data?.title}</LabelBold>
        <HStack style={[styles.wrapDate]}>
          <AntDesign
            name="calendar"
            size={widthRespone(5)}
            color={colors.iconColor}
          />
          <Label style={styles.date}>{DateWithTime(data.post_date)}</Label>
        </HStack>
        <View style={style.btn} />
        <WebViewAutoHeight description={data?.des} fontSize={fontSize} />
      </View>
    </ScrollView>
  );
};

export default NewDetail;

const styles = StyleSheet.create({
  img: {
    overflow: 'hidden',
    width: '100%',
    height: (metrics.screenWidth * 630) / 1200,
    backgroundColor: colors.grayColor,
  },
  title: {
    fontSize: size.font20,
    color: colors.baseColor,
    marginBottom: paddingHorizontal / 2,
  },
  date: {
    color: colors.baseColor,
    fontSize: widthRespone(3.7),
    marginLeft: paddingHorizontal,
  },
  des: {
    marginTop: paddingHorizontal / 2,
    fontSize: widthRespone(3.9),
  },
  wrapDate: {
    backgroundColor: colors.settingBg,
    padding: paddingHorizontal / 2,
    alignItems: 'center',
    borderRadius: borderRadius / 3,
  },
});
