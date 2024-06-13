// screens/JobPostingScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function JobPostingScreen({ navigation }) {
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');

  const handlePostJob = () => {
    // Implement job posting logic here
  };

  return (
    <View style={styles.container}>
      <Text>Post a Job</Text>
      <TextInput
        style={styles.input}
        placeholder="Job Title"
        value={jobTitle}
        onChangeText={setJobTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Job Description"
        value={jobDescription}
        onChangeText={setJobDescription}
      />
      <Button title="Post Job" onPress={handlePostJob} />
      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});
