import React from 'react';
import {View, Image, Text} from 'react-native';
import LikeMessageSearch from './LikeMessageSearch';
import Title from './Title';
import MessagesList from './LikeList';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import colors from 'res/colors';
import images from 'res/images';

const data = [{key: '1'}];

export default function LikeMessageScreen() {
  return (
    <>
      <FlatList
        style={{backgroundColor: '#000', flex: 1}}
        data={data}
        renderItem={() => (
          <>
            <Title />
            <MessagesList />
          </>
        )}
      />
    </>
  );
}
