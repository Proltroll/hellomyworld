import cl from './Message.module.css';

const Message = (props) => {
    return (
        <div>
            <div className={cl.messageWindow}>
                {props.messageContent}
            </div>
        </div>
    );
}

export default Message;