import ChatItem from './ChatItem/ChatItem';
import cl from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {
    return (
        <div className={cl.dialogs}>
            <div className={cl.messages}>
                <Message />
                <Message />
                <Message />
                <Message />
            </div>
            <div className={cl.chats}>
                <ChatItem chatName="Anastasia" />
                <ChatItem chatName="Maxim" />
                <ChatItem chatName="Danil" />
                <ChatItem chatName="Egor" />
            </div>
        </div>
    );
}

export default Dialogs;