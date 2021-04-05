import ChatItem from './ChatItem/ChatItem';
import cl from './Dialogs.module.css';
import Message from './Message/Message';

function User (id, userName) {
    this.id = id;
    this.userName = userName;
}

let userData = [
    new User (0, 'Anastasia'),
    new User (1, 'Maxim'),
    new User (2, 'Danil'),
    new User (3, 'Natasha'),
    new User (4, 'Egor'),
]

const Dialogs = (props) => {
    return (
        <div className={cl.dialogs}>
            <div className={cl.messages}>
                <Message messageContent="Hello world" />
                <Message messageContent="Im a new message" />
                <Message messageContent="Hi bro i wanna go home"/>
                <Message messageContent="What do you think about what"/>
            </div>
            <div className={cl.chats}>
                <ChatItem userID={userData[0].id} userName={userData[0].userName} />
                <ChatItem userID={userData[1].id} userName={userData[1].userName} />
                <ChatItem userID={userData[2].id} userName={userData[2].userName} />
                <ChatItem userID={userData[3].id} userName={userData[3].userName} />
                <ChatItem userID={userData[4].id} userName={userData[4].userName} />
            </div>
        </div>
    );
}

export default Dialogs;