import React from 'react';
import {Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import DirectMessageSearch from './CommentMessageSearch';
import Title from './Title';
import MessageListItem from './MessageListItem';

const [Comment, setComment] = useState([]);
  useEffect(() => {
    fetch('https://5fcf9db81f23740016630abb.mockapi.io/instagramclone/versio1/users/1/comments')
      .then((response) => response.json())
      .then((json) => setComment(json))
      .catch((error) => console.error(error))
  }, []);


export default function MessagesList() {
  return (
    <FlatList
      data={Comment}
      renderItem={({item, index}) => <MessageListItem data={item} />}
    />
  );
}
