import {StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import Routes from './src/navigations/Routes';
import {NativeBaseProvider} from 'native-base';
import {useAppDispatch} from './src/hooks/dispatch';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {changeLanguages} from './src/reduxs/actions';
import {en, km} from './src/utils/lang';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    checkLanguage();
  }, []);

  async function checkLanguage() {
    let lang = await AsyncStorage.getItem('@lang');
    if (lang === 'en') {
      dispatch(changeLanguages(en));
    } else {
      dispatch(changeLanguages(km));
    }
  }

  return (
    <NativeBaseProvider>
      <Routes />
    </NativeBaseProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
