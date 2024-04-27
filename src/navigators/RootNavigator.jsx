import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRoutes} from '../constants';
import {CreateTaskScreen, HomeScreen} from '../screens';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={navigationRoutes.HomeScreen}
          component={HomeScreen}
        />
        <Stack.Screen
          name={navigationRoutes.CreateTaskScreen}
          component={CreateTaskScreen}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default RootNavigator;
