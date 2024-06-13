// screens/DoctorAppointmentScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function DoctorAppointmentScreen({ navigation }) {
  const handleAppointment = () => {
    // Implement doctor appointment logic here
  };

  return (
    <View style={styles.container}>
      <Text>Book a Doctor Appointment</Text>
      <Button title="Book" onPress={handleAppointment} />
      <Button title="Back" onPress={() => navigation.goBack()} />
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
