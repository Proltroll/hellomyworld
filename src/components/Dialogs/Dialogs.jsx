import ChatItem from './ChatItem/ChatItem';
import cl from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {



    let chatElements = props.state.userData.map((user) => <ChatItem userID={user.id} userName={user.userName} />)
    let messageElements = props.state.messagesData.map((m) => <Message messageContent={m.message} />)

    return (
        <div className={cl.dialogs}>
            <div className={cl.messages}>
                {messageElements}
            </div>
            <div className={cl.chats}>
                {chatElements}
            </div>
        </div>
    );
}

export default Dialogs;