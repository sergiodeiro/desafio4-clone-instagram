import React, { useEffect, useState }  from 'react';
import {FlatList} from 'react-native-gesture-handler';
import LikeMessageSearch from './LikeMessageSearch';
import Title from './Title';
import LikeListItem from './LikeListItem';
import { URL_LIKES } from '../../../../config/api'  

export default function MessagesList() {
  const [likes, setLikes] = useState([]);
  useEffect(() => {
    fetch(URL_LIKES)
      .then((response) => response.json())
      .then((json) => setLikes(json))
      .catch((error) => console.error(error))
  }, []);

  return (
    <FlatList
      data={likes}
      renderItem={({item, index}) => <LikeListItem data={item} />}
    />
  );
}
