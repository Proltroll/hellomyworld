import { NavLink } from 'react-router-dom';
import cl from './ChatItem.module.css';

const ChatItem = (props) => {
    return (
        <div>
            <NavLink to="/Dialogs" className={cl.chatItem}>
                {props.chatName}
            </NavLink>
        </div>
    );
}

export default ChatItem;