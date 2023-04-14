import { useState } from 'react';
import {StyleSheet, Text, View } from 'react-native';
import Button from '../components/atoms/button/Button';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{flex: 4}}></View>
      <View style={{flex: 2}}>
        <Text style={styles.title}>Flexn Presents</Text>
        </View>
      <View style={{flex: 4, gap:20}}>
        <Button title="Browse" onPress={() => navigation.navigate("Browse")}></Button>
        <Button title="Login"></Button>
      </View>
      
      
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
