// import React from "react";
// import { StyleSheet } from 'react-native';
// import { NativeBaseProvider,} from 'native-base';

// import { View, } from 'react-native';
// import { Text, Button, Card } from '@rneui/themed';

// export default function Home({ navigation }){
  
//   return (
//     <NativeBaseProvider>
//     <View style={styles.container}>
//       <Text h4 style={styles.introText}>find the best Infuencers for your brand today in just few clicks!</Text>
      
//       {/* <Card>
//         <Card.Title>Meet our team:</Card.Title>
//         <Card.Divider/>
//         <Text style={styles.teamText}>- Siddhartha Renikuntla: Developer</Text>
//         <Text style={styles.teamText}>- Mehak Sharma: Developer</Text>
//         <Text style={styles.teamText}>- Deepan Krishna Tripaty: Developer</Text>
//       </Card> */}
//       <Button 
//         title="Get Started" 
//         style={styles.font}
//         onPress={() => navigation.navigate('Main')} 
//         containerStyle={styles.buttonContainer}
//         buttonStyle={{
//           backgroundColor: '#8855DD',
//           borderRadius: 20,
//           width: 200,
//         }}
//         titleStyle={{color:'#F1F518'}}
//       />
//     </View> 
    
//     </NativeBaseProvider>
//   );
// };

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       padding: 20,
//     },
//     introText: {
//       textAlign: 'center',
//       marginBottom: 20,
//     },
//     font:{
//       fontFamily: 'montserrat Alternates',
//     },

//     teamText: {
//       marginBottom: 10,
//     },
//     buttonContainer: {
//       marginTop: 20,
//     },
//   });

import React from "react";
import { StyleSheet, ImageBackground } from 'react-native';
import { NativeBaseProvider, Box } from 'native-base';
import { View, Text } from 'react-native';
import { Button, Card } from '@rneui/themed';

export default function Home({ navigation }) {
  return (
    <NativeBaseProvider>
      <Box flex={1} alignItems="center" justifyContent="center">
        <ImageBackground source={{ uri: 'https://yourimageurl.com/background.jpg' }} resizeMode="cover" style={styles.backgroundImage}>
          <View style={styles.container}>
            <Text h4 style={styles.introText}>
              Connect with top influencers and propel your brand's presence in the digital world!
            </Text>

            <Card containerStyle={styles.card}>
              <Card.Title style={styles.cardTitle}>Why Choose Us?</Card.Title>
              <Card.Divider />
              <Text style={styles.featureText}>
                - Access a curated network of high-impact influencers.
              </Text>
              <Text style={styles.featureText}>
                - Streamlined campaign management and tracking tools.
              </Text>
              <Text style={styles.featureText}>
                - AI-powered matching tailored to your brand’s needs.
              </Text>
            </Card>

            <Button
              title="Get Started"
              onPress={() => navigation.navigate('Main')}
              containerStyle={styles.buttonContainer}
              buttonStyle={styles.buttonStyle}
              titleStyle={styles.buttonTitleStyle}
            />
          </View>
        </ImageBackground>
      </Box>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background for readability
  },
  introText: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  card: {
    borderRadius: 10,
    padding: 10,
    elevation: 4,
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: { width: 1, height: 1 },
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  featureText: {
    marginBottom: 8,
    fontSize: 16,
    color: '#555',
  },
  buttonContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center', // Centering the button
  },
  buttonStyle: {
    backgroundColor: '#4A90E2',
    borderRadius: 25,
    width: '70%',
    paddingVertical: 12, // Making the button taller
  },
  buttonTitleStyle: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});