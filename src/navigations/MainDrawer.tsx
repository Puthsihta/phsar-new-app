import {StyleSheet} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerScreen from '../containers/drawer/DrawerScreen';
import HomeScreen from '../containers/home/HomeScreen';

const Drawer = createDrawerNavigator();
const MainDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: 'slide',
        headerTransparent: false,
        headerShown: false,
        drawerStyle: {width: '80%'},
      }}
      drawerContent={() => <DrawerScreen />}>
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
    </Drawer.Navigator>
  );
};

export default MainDrawer;

const styles = StyleSheet.create({});
