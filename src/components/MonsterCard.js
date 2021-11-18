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
        <Text style={cardStyles.redStats}>
          <Text><Text style={cardStyles.bold}>Armor Class</Text> <Text>{monster.ac}</Text></Text>
          <Text><Text style={cardStyles.bold}>Hit Points</Text> <Text>{monster.hp}</Text></Text>
          <Text><Text style={cardStyles.bold}>Speed</Text> <Text>{monster.speed}</Text></Text>
        </Text>
        <View style={cardStyles.redLine} />
        <View style={cardStyles.abilities}>
          <View style={cardStyles.abilityBlock}>
            <Text style={cardStyles.ability}>STR</Text>
            <Text style={cardStyles.abilityScore}>{monster.str} ({Math.floor(((monster.str - 10)/2))})</Text>
          </View>
          <View style={cardStyles.abilityBlock}>
            <Text style={cardStyles.ability}>DEX</Text>
            <Text style={cardStyles.abilityScore}>{monster.dex} ({Math.floor(((monster.dex - 10)/2))})</Text>
          </View>
          <View style={cardStyles.abilityBlock}>
            <Text style={cardStyles.ability}>CON</Text>
            <Text style={cardStyles.abilityScore}>{monster.con} ({Math.floor(((monster.con - 10)/2))})</Text>
          </View>
          <View style={cardStyles.abilityBlock}>
            <Text style={cardStyles.ability}>INT</Text>
            <Text style={cardStyles.abilityScore}>{monster.int} ({Math.floor(((monster.int - 10)/2))})</Text>
          </View>
          <View style={cardStyles.abilityBlock}>
            <Text style={cardStyles.ability}>WIS</Text>
            <Text style={cardStyles.abilityScore}>{monster.wis} ({Math.floor(((monster.wis - 10)/2))})</Text>
          </View>
          <View style={cardStyles.abilityBlock}>
            <Text style={cardStyles.ability}>CHA</Text>
            <Text style={cardStyles.abilityScore}>{monster.cha} ({Math.floor(((monster.cha - 10)/2))})</Text>
          </View>
          <View style={cardStyles.redLine} />
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
  redStats: {
    color: '#922610',
    fontFamily: 'Bookmania',
  },
  bold: {
    fontFamily: 'BookmaniaBold'
  },
  block: {
    flex: 1,
  },
  abilities: {
    flex: 1,
    flexDirection: 'row'
  },
  abilityBlock: {
    flex: 1,
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
    marginTop: -5,
    fontSize: 12,
  },
});