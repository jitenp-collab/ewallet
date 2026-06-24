import { StyleSheet } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigation from '../TabNavigations/BottomTabNavigation';
import { navigationref } from '../../util/GetRoutename';
import { useDispatch } from 'react-redux';
import { Appdispatch } from '../../redux/store/store';
import { getRoutename } from '../../redux/reducers/reducers';
import Recipt from '../../Screens/Recipt';

const Stack = createNativeStackNavigator();

const Navigation = ({ children }: any) => {
  const dispatch = useDispatch<Appdispatch>();

  return (
    <NavigationContainer
      ref={navigationref}
      onReady={() => {
        const name = navigationref.getCurrentRoute().name;
        dispatch(getRoutename(name));
      }}
      onStateChange={() => {
        const name = navigationref.getCurrentRoute().name;
        dispatch(getRoutename(name));
      }}
    >
      {children}
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen component={BottomTabNavigation} name="bottomTab" />
        <Stack.Screen component={Recipt} name='Recipt' />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
