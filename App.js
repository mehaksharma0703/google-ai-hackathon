// import React from "react";
// import { NativeBaseProvider, Box, Select, CheckIcon } from 'native-base';
// import  Clothing  from './Clothing';
// import { useState } from 'react';
// import { Button, } from '@rneui/themed';
// import { View, Text, } from 'react-native';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home'; // Import the Home screen
import Main from './Main'; // Import the Main screen

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
export default function App({navigation}){
  
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Main" component={Main} />
    </Stack.Navigator>
  </NavigationContainer>
  );
  }
  {/* <NativeBaseProvider>
    <Box width={200} alignItems="center" justifyContent="center" mx="auto" my={90}>
        
      <Clothing onCategorySelect={setSelectedCategory}/>
      <Button
              title="Analyze"
              loading={false}
              loadingProps={{ size: 'small', color: 'white' }}
              buttonStyle={{
                backgroundColor: 'rgba(111, 202, 186, 1)',
                borderRadius: 5,
              }}
              titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
              containerStyle={{
                height: 50,
                width: 200,
                marginVertical: 10,
              }}
              onPress={() => console.log('aye')}
            />
            </Box> */}
            {/* <View style={styles.container}>
      <Text h4 style={styles.introText}>Welcome to our application!</Text>
      <Text style={styles.introText}>This app is designed to help you find a celebrity to promote your business.</Text>
      <Card>
        <Card.Title>Meet our team:</Card.Title>
        <Card.Divider/>
        <Text style={styles.teamText}>- Siddhartha Renikuntla: Developer</Text>
        <Text style={styles.teamText}>- Mehak Sharma: Developer</Text>
        <Text style={styles.teamText}>- Deepan Krishna Tripaty: Developer</Text>
      </Card>
      <Button 
        title="Let's Go" 
        onPress={() => navigation.navigate('Home')} 
        containerStyle={styles.buttonContainer}
      />
    </View> 
</NativeBaseProvider>;*/}
