import React from 'react';
import { ScrollView } from 'react-native';
import Person from './Person';

const About = () => (
  <ScrollView>
    <Person
      image=""
      name="Siddhartha R"
      description="Developer"
    />
    <Person
      image=""
      name="Mehak Sharma"
      description="Developer"
    />
    <Person
      image=""
      name="Deepan"
      description="Developer"
    />
  </ScrollView>
);

export default About;