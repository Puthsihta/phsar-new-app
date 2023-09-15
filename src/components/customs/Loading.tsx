import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextTranslate} from './TextTranslate';
import {ActivateIndicator} from './Flatlist';
import {paddingHorizontal} from '../../themes/layout';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivateIndicator />
      <TextTranslate style={{marginTop: paddingHorizontal}}>
        loading
      </TextTranslate>
    </View>
  );
};

export default React.memo(Loading);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loading: {
    height: 150,
    width: 150,
  },
});
