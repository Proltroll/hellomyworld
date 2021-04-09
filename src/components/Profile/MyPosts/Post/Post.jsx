import cl from './Post.module.css'

const Post = (props) => {
  return (
    <div className={cl.item} >
      <img src={props.ava} alt="" />
      <div className={cl.postText} >
        {props.content}

          <div className={cl.likeCounter}>
            <div>{props.likeCount}</div>
            <img src="https://w7.pngwing.com/pngs/246/879/png-transparent-white-heart-illustration-facebook-like-button-facebook-like-button-emoticon-smiley-like-love-heart-logo-thumbnail.png" alt="" />

          </div>

      </div>
    </div>

  );
}

export default Post;