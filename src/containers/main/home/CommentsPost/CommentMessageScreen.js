import React from 'react';
import {View, Image, Text} from 'react-native';
import DirectMessageSearch from './CommentMessageSearch';
import Title from './Title';
import MessagesList from './MessagesList';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import colors from 'res/colors';
import images from 'res/images';
///oi
const data = [{key: '1'}];

export default function DirectMessageScreen() {
  return (
    <>
      <FlatList
        style={{backgroundColor: '#000', flex: 1}}
        data={data}
        renderItem={() => (
          <>
            <DirectMessageSearch />
            <Title />
            <MessagesList />
          </>
        )}
      />
    </>
  );
}
