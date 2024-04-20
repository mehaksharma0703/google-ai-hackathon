import React from "react";
import { StyleSheet } from 'react-native';
import { NativeBaseProvider, } from 'native-base';

import { View, } from 'react-native';
import { Text, Button, Card } from '@rneui/themed';

export default function Home({ navigation }) {

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Text h4 style={styles.introText}>find the best Infuencers for your brand today in just few clicks!</Text>

        {/* <Card>
        <Card.Title>Meet our team:</Card.Title>
        <Card.Divider/>
        <Text style={styles.teamText}>- Siddhartha Renikuntla: Developer</Text>
        <Text style={styles.teamText}>- Mehak Sharma: Developer</Text>
        <Text style={styles.teamText}>- Deepan Krishna Tripaty: Developer</Text>
      </Card> */}
        <Button
          title="Get Started"
          style={styles.font}
          onPress={() => navigation.navigate('Main')}
          containerStyle={styles.buttonContainer}
          buttonStyle={{
            backgroundColor: '#8855DD',
            borderRadius: 20,
            width: 200,
          }}
          titleStyle={{ color: '#F1F518' }}
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
  font: {
    fontFamily: 'montserrat Alternates',
  },

  teamText: {
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 20,
  },
});