import './Content.scss';
import { LogIn } from './LogIn/LogIn';
import { Registration } from './Registration/Registration';
import { Profile } from './Profile/Profile';
import { Routes, Route } from 'react-router-dom';
import { Messages } from './Messages/Messages';
import { Friends } from './Friends/Friends';

const Content = ({myData}) => {
    return(
        <div className="Content">
            <Routes>
                <Route path='/' element={<LogIn />} />
                <Route path='/registration' element={<Registration />} />
                <Route path='/profile' element={<Profile photo={myData.photo} />} />
                <Route path='/messages' element={<Messages />} />
                <Route path='/friends' element={<Friends />} />
            </Routes>
        </div>
    )
}

export { Content };