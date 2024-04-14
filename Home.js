import React from "react";
import { StyleSheet } from 'react-native';
import { NativeBaseProvider, Box, Select, CheckIcon } from 'native-base';
import  Clothing  from './Clothing';
import { useState } from 'react';

import Main from './Main';
import { View, } from 'react-native';
import { Text, Button, Card } from '@rneui/themed';

export default function Home({ navigation }){
  
  return (
    <NativeBaseProvider>
    <View style={styles.container}>
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
        onPress={() => navigation.navigate('Main')} 
        containerStyle={styles.buttonContainer}
      />
    </View> 
    
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
    },
    introText: {
      textAlign: 'center',
      marginBottom: 20,
    },
    teamText: {
      marginBottom: 10,
    },
    buttonContainer: {
      marginTop: 20,
    },
  });