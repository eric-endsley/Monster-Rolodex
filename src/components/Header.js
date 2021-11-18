import React, {useState} from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';


export default function Header() {
  const backPress = () => console.log ('Back button pressed')
  const searchPress = () => {
    setPress(!press);
    console.log('Search button pressed');
    console.log(press);
  }
  const headerStyle = { backgroundColor: '#c73032' }

  return (
  <Appbar.Header style={headerStyle}>
    <Appbar.BackAction 
      color = '#353535'
      onPress = {backPress} />
    <Appbar.Content 
      title="Monster Rolodex"
      subtitle = "A lightweight 5e statblock manager" 
      color='#353535'/>
    <Appbar.Action 
      icon='magnify' 
      color='#353535'
      onPress = {searchPress} /> 
  </Appbar.Header>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#c73032',
    color: '#353535',
  },
});