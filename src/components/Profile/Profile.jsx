import MyPosts from './MyPosts/MyPosts'
import cl from './Profile.module.css'

const Profile = () => {
  return (
    <div>
      <div className={cl.profileHeaderImg}>
        <img src="https://wildo.ru/wp-content/uploads/2021/01/shapka-dlya-yutuba.jpg" alt="" />
      </div>
      <div className={cl.profileDescribe}>
        <img src="https://pbs.twimg.com/profile_images/435523312404267008/OdfbG_oN_400x400.jpeg" alt="" />
        <div >Hello, my name is Happy Cat and I glad to see you in my profile!</div>
      </div>
      <MyPosts />
    </div>
  );
}

export default Profile;