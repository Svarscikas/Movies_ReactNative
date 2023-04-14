import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function BrowseScreen() {
  return (
    <View style={styles.container}>
      <Text>Browse</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
  },
});