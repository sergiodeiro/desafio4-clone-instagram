import React from 'react';
import {Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import DirectMessageSearch from './CommentMessageSearch';
import Title from './Title';
import MessageListItem from './MessageListItem';

export default function MessagesList() {
  return (
    <FlatList
      data={Comment}
      renderItem={({item, index}) => <MessageListItem data={item} />}
    />
  );
}
