import * as React from 'react';
import { } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstScreen from '../screens/FirstScreen'
import SecondScreen from '../screens/SecondScreen';


const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="FirstScreen" 
        component={FirstScreen} />
        <Stack.Screen 
        name="SecondScreen" 
        component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;