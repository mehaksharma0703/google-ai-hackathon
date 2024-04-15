import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';

import About from './About'; // Import the About component
import Contact from './Contact'; // Import the Contact component

const Tab = createMaterialTopTabNavigator();

export default function Nav() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="About" component={Home} />
        <Tab.Screen name="Contact" component={Home} />
        <Tab.Screen name="Get Started" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}