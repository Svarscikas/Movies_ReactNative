import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const button = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'white', // Customize the button background color here
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    width: 200,
    margin: 10,
  },
  buttonText: {
    color: 'lightblue', // Customize the button text color here
    fontSize: 16,
  },
});

export default button;