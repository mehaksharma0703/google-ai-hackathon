import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Person from './Person'; // Ensure this path is correct

const About = () => (
  <ScrollView style={styles.container}>
    <Text style={styles.headerText}>Meet Our Team</Text>
    <View style={styles.teamContainer}>
      {/* Import Person components here and pass the required props 
      Example usage:  */}
      <Person
        image="https://via.placeholder.com/150"
        name="Name"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Person
        image="https://via.placeholder.com/150"
        name="Name"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Person
        image="https://via.placeholder.com/150"
        name="Name"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Person
        image="https://via.placeholder.com/150"
        name="Name"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      {/* Repeat for each team member */}
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#333',
    alignSelf: 'center',
    margin: 20,
  },
  teamContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    padding: 30,
  },
  // ... any additional styles you might need ...
});

export default About;
