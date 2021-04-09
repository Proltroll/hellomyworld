import cl from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

  let postsElement = props.posts.map(p => <Post ava={p.ava} content={p.content} likeCount={p.likeCount} />)

  return (
    <div>
      <div className={cl.newPostAria}>
        <textarea cols="50" rows="4"></textarea>
        <button>
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