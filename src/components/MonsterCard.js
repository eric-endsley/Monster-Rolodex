import React from 'react'
import {View, StyleSheet, Text, Image} from 'react-native'

export default function MonsterCard(props) {
  return (
    <Text>{props.monster.name}</Text>  
  )
}

// const cardStyles = StyleSheet.create({
//   statBlock: {
//     textAlign: 'left',
//     margin: '20px',
//     width: '17%',
//     minWidth:'280px',
//     backgroundColor: '#FDF1DC',
//     padding: '5px 10px 20px',
//   },
//   orangeLine: {
//     height: '5px',
//     padding: '0 10px 0',
//     margin: '-10px -10px 0',
//     borderWidth: 0.5,
//     backgroundColor: '#E69A28',
//   },
//   name: {
//   }
// });