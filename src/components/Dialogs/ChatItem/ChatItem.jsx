import { NavLink } from 'react-router-dom';
import cl from './ChatItem.module.css';

const ChatItem = (props) => {
    return (
        <div>
            <NavLink to={`/Dialogs/${props.userID}`} className={cl.chatItem}>
                {props.userName}
            </NavLink> 
        </div>
    );
}

export default ChatItem;