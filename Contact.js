import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Contact = () => {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    // Handle form submission here
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />

      <Text style={styles.label}>Email:</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} />

      <Text style={styles.label}>Message:</Text>
      <TextInput style={styles.input} value={message} onChangeText={setMessage} multiline />

      <Button title="Submit" onPress={handleSubmit} />

      <View style={styles.linksContainer}>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com')}>
          <Icon name="facebook" size={30} color="#3b5998" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.github.com')}>
          <Icon name="github" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com')}>
          <Icon name="linkedin" size={30} color="#0077b5" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    marginBottom: 15,
  },
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  link: {
    color: 'blue',
    marginTop: 10,
  },
});

export default Contact;