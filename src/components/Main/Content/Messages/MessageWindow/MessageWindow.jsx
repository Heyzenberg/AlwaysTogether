import './MessageWindow.scss';
import { Routes, Route } from 'react-router-dom';
import { MessagesList } from './MessagesList/MessagesList';

const MessageWindow = () => {
    return(
        <div className="MessageWindow">
            <Routes>
                <Route path="1" element={<MessagesList />} />
            </Routes>
        </div>
    )
}

export { MessageWindow };