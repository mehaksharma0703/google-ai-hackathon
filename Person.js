import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Ensure you have this installed

const Person = ({ image, name, description }) => (
  <View style={styles.card}>
    <Image source={{ uri: image }} style={styles.image} />
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.description}>{description}</Text>
    <View style={styles.socialMediaContainer}>
      {/* Replace with actual onPress handlers to open social media links */}
      <TouchableOpacity>
        <Icon name="facebook" size={24} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="twitter" size={24} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="instagram" size={24} style={styles.icon} />
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    margin: 10,
    width: 200, // Adjust the width as needed
    alignItems: 'center',
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 10,
  },
  socialMediaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 10,
  },
  icon: {
    marginHorizontal: 5,
    color: '#333', // Change as per your color scheme
  },
});

export default Person;
