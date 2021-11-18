import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
// import uuid from 'react-native-uuid';
import MonsterCard from './MonsterCard.js';
import * as MonsterManual from '../data/mm-bestiary.json'

export default function MonsterData() {
  const [monsterData, setMonsterData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // axios.get(monsterManual, {
    //   "Content-Type": "application/xml; charset=utf-8"
    // }).then((response) => {
      // var parseString = require('xml2js').parseString;
      // parseString(response.data, function(err, result) {
        // const jsonResult = JSON.stringify(result);
        // console.log(jsonResult);
        const monstersObject = MonsterManual.monster.map((monster, index) => ({...monster, key: index}));
        // console.log(monstersObject)
        setMonsterData(monstersObject);
        setIsLoading(false);
      
  }, []);

  if (isLoading)  {
    return(
      <Text>Loading...</Text>
    )
  } else {
    return(
      <View style={{flex: 1}}>
        {console.log(monsterData[0])}
        {monsterData.map(monster => <MonsterCard key={monster.key} monster={monster} />)}

      </View>

    )
  }
}