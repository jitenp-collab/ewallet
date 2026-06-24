import { StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../Screens/HomeScreen';
import GraphScreen from '../../Screens/GraphScreen';
import ProfileScreen from '../../Screens/ProfileScreen';
import Recipt from '../../Screens/Recipt';
import BottomTabComponent from '../../components/BottomTabComponent';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <BottomTabComponent {...props} />}
    >
      <Tab.Screen component={HomeScreen} name="Home" />
      <Tab.Screen component={GraphScreen} name="Graph" />
      {/* <Tab.Screen component={Recipt} name="Recipt" /> */}
      <Tab.Screen component={ProfileScreen} name="Profile" />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({});