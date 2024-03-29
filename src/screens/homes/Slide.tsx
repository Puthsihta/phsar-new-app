import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import colors from '../../themes/colors';
import {
  borderRadius,
  hightRespone,
  paddingHorizontal,
  widthRespone,
} from '../../themes/layout';
interface slideProps {
  data: any;
  onPress: (value: any) => void;
}
const Slide: React.FC<slideProps> = ({data, onPress}) => {
  return (
    data && (
      <View style={styles.container}>
        <Swiper
          removeClippedSubviews={false}
          autoplay
          autoplayTimeout={2}
          activeDotColor={colors.whiteSmoke}>
          {data.map((item: any, index: any) => {
            return (
              <TouchableOpacity onPress={() => onPress(item)}>
                <Image
                  resizeMode="cover"
                  key={index}
                  style={styles.img}
                  source={{
                    uri: item.image_url,
                  }}
                />
              </TouchableOpacity>
            );
          })}
        </Swiper>
      </View>
    )
  );
};

export default React.memo(Slide);

const styles = StyleSheet.create({
  img: {
    height: hightRespone(20),
    width: widthRespone(95),
    borderRadius: borderRadius / 2,
    alignSelf: 'center',
    borderWidth: 0.5,
    borderColor: colors.borderColor,
  },
  container: {
    height: hightRespone(20),
    borderRadius: borderRadius,
    marginVertical: paddingHorizontal,
  },
});
