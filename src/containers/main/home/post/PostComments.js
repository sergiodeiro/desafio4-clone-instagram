import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import colors from 'res/colors';

export default function PostComments({post}) {
  return (
    <TouchableOpacity
      style={{marginTop: 5, marginStart: 15}}
      onPress={() => console.log('Ao precionar para ver os comentários')}>
      <Text style={{color: colors.textFaded2}}>
        {post.commentCount} comentarios
      </Text>
    </TouchableOpacity>
  );
}
