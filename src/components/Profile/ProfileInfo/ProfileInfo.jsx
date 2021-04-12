import cl from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div className={cl.profileDescribe}>
        <div className={cl.avaDiv}>
          <img src="https://pbs.twimg.com/profile_images/435523312404267008/OdfbG_oN_400x400.jpeg" alt="" />
          <div className={cl.profileLikes}>
          1000
          </div>
        </div>
    <div className={cl.aboutMySelf}>
Hello, my name is Happy Cat and I glad to see you in my profile!
    </div>
    </div>
  );
}

export default ProfileInfo;