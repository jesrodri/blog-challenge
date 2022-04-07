import { fetchPosts } from "../logic/fetchPosts";
import React, { useEffect, useState } from 'react';

const PostList = ({api}) => {

  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    fetchPosts(api).then((res) => {
      setPosts(res);
    });
  };

  useEffect(() => {
    getPosts();
  });

  return(
    <div className='post-list'>
      <h1>POST LIST</h1>
      {posts.map((postObj) => (
        <div className="post" key={postObj.id}>
          <h3 className="post-title">{postObj.title}</h3>
          <p className="post-body">{postObj.body}</p>
        </div>
      ))}
    </div>
  )
};

export default PostList;
