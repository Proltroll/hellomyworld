import MyPosts from './MyPosts/MyPosts'
import cl from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div className={cl.profileLayer}>
      <ProfileInfo/>
      <MyPosts posts={props.state.posts}/>
    </div>
  );
}

export default Profile;