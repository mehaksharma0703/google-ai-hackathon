// import React from "react";
// import { NativeBaseProvider, Box, Select, CheckIcon } from 'native-base';
// import  Clothing  from './Clothing';
// import { useState } from 'react';
// import { Button, } from '@rneui/themed';
// import { View, Text, } from 'react-native';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Main from './Main';


const Tab = createBottomTabNavigator();

// export default function App({navigation}) {
//   const [selectedCategory, setSelectedCategory] = useState('');

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//   },
//   introText: {
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   teamText: {
//     marginBottom: 10,
//   },
//   buttonContainer: {
//     marginTop: 20,
//   },
// });

const Stack = createStackNavigator();
export default function App({ navigation }) {

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home"
        screenOptions={{
          headerTitle: 'Profluencers',
          headerStyle: {
            backgroundColor: '#8855DD',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#F1F518',
          },
        }}>
        <Tab.Screen name="About" component={Home} />
        <Tab.Screen name="Contact" component={Main} />
        <Tab.Screen name="Get Started" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}