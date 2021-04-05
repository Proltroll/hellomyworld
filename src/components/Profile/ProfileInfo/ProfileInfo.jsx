
import cl from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
      <div className={cl.profileDescribe}>
        <img src="https://pbs.twimg.com/profile_images/435523312404267008/OdfbG_oN_400x400.jpeg" alt="" />
        <div >Hello, my name is Happy Cat and I glad to see you in my profile!</div>
      </div>
  );
}

export default ProfileInfo;