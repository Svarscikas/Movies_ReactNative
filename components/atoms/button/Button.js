import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const button = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.transparentContainer} onPress={onPress}>
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
  },
  buttonText: {
    color: 'white', // Customize the button text color here
    fontSize: 16,
  },
  transparentContainer:{
    backgroundColor: 'rgba(0,0,0,0.45)',
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'darkgray',
    borderWidth: 1,
    borderRadius: 5,
    width: 200,
    marginVertical: 10
  }
});

export default button;