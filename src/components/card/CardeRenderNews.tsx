import {
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Label, LabelBold} from '../customs/Label';
import {DateWithTime} from '../customs/NormalDate';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FastImage from 'react-native-fast-image';
import {
  borderRadius,
  metrics,
  paddingHorizontal,
  widthRespone,
} from '../../themes/layout';
import style from '../../styles';
import colors from '../../themes/colors';

interface newsData {
  value: any;
  index: number;
  onPress: () => void;
}

const CardeRenderNews: React.FC<newsData> = ({value, index, onPress}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {marginTop: index == 0 ? paddingHorizontal : 0},
      ]}
      onPress={onPress}>
      <View style={[styles.wrapImage, style.center]}>
        {value.image_url ? (
          Platform.OS == 'ios' ? (
            <FastImage
              source={{
                uri: value.image_url,
                priority: FastImage.priority.normal,
                cache: FastImage.cacheControl.immutable,
              }}
              style={styles.img}
              // resizeMode="contain"
            />
          ) : (
            <Image
              source={{uri: value.image_url}}
              style={styles.img}
              // resizeMode="contain"
            />
          )
        ) : (
          <View style={[styles.no_image, style.center]}>
            <Ionicons
              name="image-outline"
              size={widthRespone(10)}
              color={colors.baseColor}
            />
          </View>
        )}
        {value.video && (
          <View style={[styles.playContainer, style.center]}>
            <Ionicons
              name="play-outline"
              size={widthRespone(6)}
              color={colors.whiteColor}
            />
          </View>
        )}
      </View>
      <View style={styles.wrapText}>
        <LabelBold style={styles.title} numberOfLines={2}>
          {value.title}
        </LabelBold>
        <Label style={styles.date} numberOfLines={1}>
          {DateWithTime(value.post_date)}
        </Label>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(CardeRenderNews);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: paddingHorizontal,
    marginHorizontal: paddingHorizontal,
    width: '100%',
  },
  wrapImage: {
    width: metrics.screenWidth / 2.5,
    height: ((metrics.screenWidth / 2.5) * 630) / 1200,
  },
  img: {
    width: metrics.screenWidth / 2.5,
    height: ((metrics.screenWidth / 2.5) * 630) / 1200,
    backgroundColor: colors.grayColor,
    borderRadius: borderRadius / 2,
  },
  no_image: {
    width: metrics.screenWidth / 2.5,
    height: ((metrics.screenWidth / 2.5) * 630) / 1200,
    backgroundColor: colors.grayColor,
    borderRadius: borderRadius / 2,
  },
  wrapText: {
    marginLeft: paddingHorizontal,
    width: '50%',
    // backgroundColor: 'red',
  },
  title: {
    fontSize: widthRespone(3.6),
    textAlign: 'left',
  },
  date: {
    color: colors.baseColor,
    fontSize: widthRespone(3),
  },
  playContainer: {
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: colors.backAbsolute,
    width: widthRespone(10),
    height: widthRespone(10),
    borderRadius: widthRespone(10 / 2),
  },
});
