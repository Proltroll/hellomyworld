import React from 'react'
import cl from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

  let postsElement = props.posts.map(p => <Post ava={p.ava} content={p.content} likeCount={p.likeCount} />)
  let newPostElement = React.createRef();
  
  let addPost = () =>
  {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = "";
  }
  return (
    <div>
      <div className={cl.newPostAria}>
        <textarea ref={newPostElement} cols="100" rows="4"></textarea>
        <button onClick={addPost}>
          New post!
          </button>
      </div>
      <div>
        {postsElement}
      </div>
    </div>
  );
}

export default MyPosts;