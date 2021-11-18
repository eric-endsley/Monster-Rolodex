import { StatusBar } from 'expo-status-bar';
import React from 'react';
import MonsterData from './src/components/MonsterData.js'
import Header from './src/components/Header';
import { StyleSheet, ScrollView, View } from 'react-native';

export default function App() {
  return (
    <View style={{flex:1}} > 
      <Header />
      <ScrollView style={styles.container}>
        <MonsterData/>
        <StatusBar style="auto" />
      </ScrollView>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
