import React from 'react';
import {View, Text} from 'react-native';
import DirectMessageScreen from './CommentMessageScreen';

export default function Title() {
  return (
    <View style={{marginTop: 10, marginStart: 10}}>
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
        Comentários
      </Text>
    </View>
  );
}
