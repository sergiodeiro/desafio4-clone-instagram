import React, { useEffect, useState } from 'react';
import {FlatList, View} from 'react-native';
import Post from './post/Post';
import colors from '../../../res/colors';
import { URL_USERS } from '../../../config/api'
import { URL_STORYS } from '../../../config/api'
import StoryContainer from './story/StoryContainer';

export default function homeScreen({navigation}) {

  const storyOnPress = () => navigation.navigate('StoryScreen');
  const [users, setUsers] = useState([]);
  const [storys, setStorys] = useState([]);

  useEffect(() => {
    fetch(URL_USERS)
      .then((response) => response.json())
      .then((json) => setUsers(json))
      .catch((error) => console.error(error))
  }, []);

  useEffect(() => {
    fetch(URL_STORYS)
      .then((response) => response.json())
      .then((json) => setStorys(json))
      .catch((error) => console.error(error))
  }, []);
  
  return (
    <FlatList
      style={{backgroundColor: colors.background}}
      data={users}
      ListHeaderComponent={() => (
        <StoryContainer stories={storys} storyOnPress={storyOnPress} />
      )}
      renderItem={({index}) => (
        <Post post={users[index]} />
      )}
    />
  );
}
