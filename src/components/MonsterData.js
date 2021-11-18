import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
// import uuid from 'react-native-uuid';
import MonsterCard from './MonsterCard.js';
import * as MonsterManual from '../data/mm-bestiary.json'

export default function MonsterData() {
  const [monsterData, setMonsterData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const monstersObject = MonsterManual.monster.map((monster, index) => ({...monster, key: index}));
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
        {monsterData.map(monster => <MonsterCard key={monster.key} monster={monster} />)}
      </View>

    )
  }
}