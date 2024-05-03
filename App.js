// import React from "react";
// import { NativeBaseProvider, Box, Select, CheckIcon } from 'native-base';
// import  Clothing  from './Clothing';
// import { useState } from 'react';
// import { Button, } from '@rneui/themed';
// import { View, Text, } from 'react-native';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Main from './Main';
import Icon from 'react-native-vector-icons/Ionicons';
import { enableScreens } from 'react-native-screens';


const Tab = createBottomTabNavigator();
enableScreens();
export default function App({navigation}){
  
  return (
    <NavigationContainer>
     <Tab.Navigator initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            
    if (route.name === 'Home') {
      iconName = focused ? 'home' : 'home-outline';
    } else if (route.name === 'Contact') {
      iconName = focused ? 'call' : 'call-outline';
    } else if (route.name === 'About') {
      iconName = focused ? 'information-circle' : 'information-circle-outline';
    } else if (route.name === 'Get Started') {
      iconName = focused ? 'rocket' : 'rocket-outline';
    } else if (route.name === 'Main') {
  iconName = focused ? 'list' : 'list-outline'; // changed icon for Menu
}

            return <Icon name={iconName} size={size} color={color} />;
          },
          headerTitle: 'Profluencers',
          headerStyle: {
            backgroundColor: '#8855DD',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#F1F518',
          },
        })}
        tabBarOptions={{
          activeTintColor: '#8855DD',
          inactiveTintColor: 'gray',
        }}
        
        >
       
        <Tab.Screen name="Get Started" component={Home} />
        <Tab.Screen name="Main" component={Main} options={{ tabBarVisible: false }} />
        <Tab.Screen name="About" component={About}/>
        <Tab.Screen name="Contact" component={Contact} />
      </Tab.Navigator>
  </NavigationContainer>
  );
  }