import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainDrawer from './MainDrawer';
import HomeScreen from '../containers/home/HomeScreen';
import NewDetailScreen from '../containers/news/NewDetailScreen';
import SearchScreen from '../containers/home/SearchScreen';

const Stack = createNativeStackNavigator();
const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        presentation: 'card',
      }}>
      <Stack.Screen name="MainHome" component={MainDrawer} />
      <Stack.Screen name={'NewDetail'} component={NewDetailScreen} />
      <Stack.Screen name={'SearchScreen'} component={SearchScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;

const styles = StyleSheet.create({});
