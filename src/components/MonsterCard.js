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
        <View><Text style={cardStyles.redStats}><Text style={cardStyles.bold}>Armor Class</Text> <Text>{monster.ac}</Text></Text></View>
        <View><Text style={cardStyles.redStats}><Text style={cardStyles.bold}>Hit Points</Text> <Text>{monster.hp}</Text></Text></View>
        <View><Text style={cardStyles.redStats}><Text style={cardStyles.bold}>Speed</Text> <Text>{monster.speed}</Text></Text></View>
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
        </View>
        <View style={cardStyles.redLine} />
        {(monster.save[0] !== "") && <View><Text style={cardStyles.redStats}><Text style={cardStyles.bold}>Saving Throws</Text> <Text>{monster.save}</Text></Text></View>}
        {(monster.skill[0] !== "") && <View><Text style={cardStyles.redStats}><Text style={cardStyles.bold}>Skills</Text> <Text>{monster.skill}</Text></Text></View>}
        {(monster.vulnerable[0] !== "") && <View><Text style={cardStyles.redStats}><Text style={cardStyles.bold}>Damage Vulnerabilities</Text> <Text>{monster.vulnerable}</Text></Text></View>}
        {(monster.resist[0] !== "") && <View><Text style={cardStyles.redStats}><Text style={cardStyles.bold}>Damage Resistances</Text> <Text>{monster.resist}</Text></Text></View>}
        {(monster.immune[0] !== "") && <View><Text style={cardStyles.redStats}><Text style={cardStyles.bold}>Damage Immunities</Text> <Text>{monster.immune}</Text></Text></View>}
        {(monster.conditionImmune[0] !== "") && <View><Text style={cardStyles.redStats}><Text style={cardStyles.bold}>Condition Immunities</Text> <Text>{monster.conditionImmune}</Text></Text></View>}
        <View><Text style={cardStyles.redStats}><Text style={cardStyles.bold}>Senses</Text> <Text>{monster.senses[0] !== "" && monster.senses} Passive Perception {monster.passive}</Text></Text></View>
        {(monster.languages[0] !== "") && <View><Text style={cardStyles.redStats}><Text style={cardStyles.bold}>Languages</Text> <Text>{monster.languages}</Text></Text></View>}
        {(monster.cr[0] !== "") && <View><Text style={cardStyles.redStats}><Text style={cardStyles.bold}>Challenge</Text> <Text>{monster.cr}</Text></Text></View>}
        <View style={cardStyles.redLine} />
        {/* {monster.trait != null && monster.trait.map(trait => <View style={{flex:1}}><Text style={cardStyles.boldItalic}>{trait.name}</Text> <Text style={cardStyles.blackStats}>{trait.text}</Text></View>)} */}
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
    marginTop: -5,
    marginBottom: -5,
  },
  blackStats: {
    color: 'black',
    fontFamily: 'Bookmania',
  },
  boldItalic: {
    fontFamily: 'BookmaniaBoldItalic'
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