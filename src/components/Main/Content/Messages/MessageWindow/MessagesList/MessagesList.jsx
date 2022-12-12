import { MessageContainer } from './MessageContainer/MessageContainer';
import './MessagesList.scss';


const MessagesList = () => {
    return(
        <div className="MessagesList">
            <MessageContainer />
            <MessageContainer />
            <MessageContainer />
        </div>
    )
}

export { MessagesList };