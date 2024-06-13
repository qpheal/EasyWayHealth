// screens/LandingScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function LandingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Welcome to MedicalApp</Text>
      <Button title="Request Ambulance" onPress={() => navigation.navigate('AmbulanceRequest')} />
      <Button title="Meet a Doctor" onPress={() => navigation.navigate('DoctorAppointment')} />
      <Button title="Job Postings" onPress={() => navigation.navigate('JobPosting')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
