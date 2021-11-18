import React from 'react'
import {View, StyleSheet, Text, Image} from 'react-native'

export default function MonsterCard(props) {
  return (
    <View style={cardStyles.statBlock}>
      <View style={cardStyles.orangeLine}/> 
      <Text style={cardStyles.monsterName}>{props.monster.name}</Text>

    </View>
  )
}

const cardStyles = StyleSheet.create({
  statBlock: {
    flex: 1,
    textAlign: 'left',
    marginTop: 20,
    width: 250,
    backgroundColor: '#fdf1dc',
  },
  orangeLine: {
    height: 5,
    borderWidth: 0.5,
    backgroundColor: '#E69A28',
  },
  monsterName: {
    fontFamily: 'MrEavesSmallCaps',
    color: '#922610',
    fontSize: 20,
  }
});