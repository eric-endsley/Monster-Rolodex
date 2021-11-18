import React from 'react'
import {View, StyleSheet, Text, Image} from 'react-native'

export default function MonsterCard(props) {
  const {monster} = props;

  return (
    <View style={cardStyles.statBlock}>
      <View style={cardStyles.orangeLine}/> 
      <View style={cardStyles.innerStatblock}>
        <Text style={cardStyles.name}>{monster.name}</Text>
        <Text style={cardStyles.subtitle}>{monster.size} {monster.type}, {monster.alignment}</Text>
        <View style={cardStyles.redLine} />
        <View style={cardStyles.abilities}>
          <View style={cardStyles.abilityBlock}>
            <Text style={cardStyles.ability}>STR</Text>
            <Text style={cardStyles.abilityScore}>{monster.str}</Text>
          </View>
          <View style={cardStyles.abilityBlock}>
            <Text style={cardStyles.ability}>DEX</Text>
            <Text style={cardStyles.abilityScore}>{monster.dex}</Text>
          </View>
          <View style={cardStyles.abilityBlock}>
            <Text style={cardStyles.ability}>CON</Text>
            <Text style={cardStyles.abilityScore}>{monster.con}</Text>
          </View>
          <View style={cardStyles.abilityBlock}>
            <Text style={cardStyles.ability}>INT</Text>
            <Text style={cardStyles.abilityScore}>{monster.int}</Text>
          </View>
          <View style={cardStyles.abilityBlock}>
            <Text style={cardStyles.ability}>WIS</Text>
            <Text style={cardStyles.abilityScore}>{monster.wis}</Text>
          </View>
          <View style={cardStyles.abilityBlock}>
            <Text style={cardStyles.ability}>CHA</Text>
            <Text style={cardStyles.abilityScore}>{monster.cha}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const cardStyles = StyleSheet.create({
  statBlock: {
    flex: 1,
    textAlign: 'left',
    marginTop: 20,
    width: 250,
    backgroundColor: '#fdf1dc'
  },
  orangeLine: {
    height: 6,
    borderWidth: 1,
    backgroundColor: '#E69A28',
  },
  redLine: {
    height: 4,
    backgroundColor: '#922610',
    marginTop: 5,
    marginBottom: 5,
  },
  innerStatblock:{
    padding: 10,
  }, 
  name: {
    fontFamily: 'MrEavesSmallCaps',
    color: '#922610',
    fontSize: 28,
  },
  subtitle: {
    fontFamily: 'BookmaniaItalic'
  },
  abilities: {
    flex: 1,
    flexDirection: 'row'
  },
  abilityBlock: {
    flex: 1,
    flexDirection: 'column'
  },
  ability: {
    color: '#922610',
    fontFamily: 'BookmaniaBold',
    alignSelf: 'center'
  },
  abilityScore: {
    color: '#922610',
    fontFamily: 'Bookmania',
    alignSelf: 'center',
    marginTop: -5
  },
});