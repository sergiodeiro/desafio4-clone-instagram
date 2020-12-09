import React from 'react';
import PostHeader from './PostHeader';
import PostImage from './PostImage';
import PostActions from './PostActions';
import PostLikes from './PostLikes';
import PostText from './PostText';
import PostComments from './PostComments';
import PostCommentsText from './PostCommentsText'
import PostPublishDate from './PostPublishDate';

export default function Post({post}) {
  return (
    <React.Fragment>
      <PostHeader post={post} />
      <PostImage post={post} />
      <PostActions/>
      <PostLikes post={post} />
      <PostText post={post} />
      <PostComments post={post} />
      <PostCommentsText post={post}/>
      <PostPublishDate post={post} />
    </React.Fragment>
  );
}
