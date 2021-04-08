import {
  NavLink
} from 'react-router-dom';
import cl from './Navbar.module.css'




const Navbar = () => {
   
    function press(e) {
        alert(e);
    };
  
  return (
    <nav className={cl.nav} onClick={press}>
      <div className={cl.empty}>
    </div>
      <div className={cl.itemList}>
      <div className={cl.item}>
        <NavLink to="/profile" activeClassName={cl.active}>
          Profile
          </NavLink>
      </div>
      <div className={cl.item}>
        <NavLink to="/dialogs" activeClassName={cl.active}>
          Dialogs
          </NavLink>
      </div>
      <div className={cl.item}>
        <NavLink to="/news" activeClassName={cl.active}>
          News
          </NavLink>
      </div>
      <div className={cl.item}>

        <NavLink to="/music" activeClassName={cl.active}>
          Music
        </NavLink>
      </div>
      <div className={cl.item}>

        <NavLink to="/settings" activeClassName={cl.active}>
          Settings
        </NavLink>
      </div>
    </div>
    </nav>
  );
}

export default Navbar;