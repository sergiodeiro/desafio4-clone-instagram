import React from 'react';
import {Text, View} from 'react-native';
import colors from 'res/colors';

export default function PostCommentsText({post}) {
  return (
    <View
      style={{
        marginStart: 15,
        marginEnd: 15,
        flexDirection: 'column',
        marginTop: 10,
      }}>
      <Text style={{color: colors.text}}>{post.commentUserOne} - {post.commentOne}</Text>
      <Text style={{color: colors.text}}>{post.commentUserTwo} - {post.commentTwo}</Text>
    </View>
  );
}
