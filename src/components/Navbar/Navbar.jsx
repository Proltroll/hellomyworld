import {
  NavLink
} from 'react-router-dom';
import cl from './Navbar.module.css'




const Navbar = () => {

  function press() {
    let navBar = document.querySelector("#navBar");
    let itemList = document.querySelector(`#navItemList`);
    if (navBar.classList.contains(`${cl.nav}`)) {
      navBar.className = `${cl.navMobile}`;
      itemList.className = `${cl.itemList}`;
    }else if (navBar.classList.contains(`${cl.navMobile}`)){
      navBar.className = `${cl.nav}`;
      itemList.className = `${cl.itemListHidden}`;
    }
    
  };

  return (
    <nav id="navBar" onClick={press} className={cl.nav}>
      <div className={cl.empty}>
    </div>
      <div id="navItemList"className={cl.itemListHidden}>
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