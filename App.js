import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useFonts} from 'expo-font';
import MonsterData from './src/components/MonsterData.js'
import Header from './src/components/Header';
import { StyleSheet, ScrollView, View, Text } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts ({
    'Bookmania': require('./src/assets/fonts/Bookmania.otf'),
    'MrEavesSmallCaps': require('./src/assets/fonts/MrEavesSmallCaps.otf'),
    'ScalySans': require('./src/assets/fonts/ScalySans.otf')
  });

  if (!fontsLoaded) {
    return (
      <Text>Loading...</Text>
    )
  } else {
    return (
      <View style={{flex:1}} > 
        <Header />
        <ScrollView contentContainerStyle={styles.container} centerContent='true'>
          <MonsterData/>
          <StatusBar style="auto" />
        </ScrollView>
      </View>

    );
  } 
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
