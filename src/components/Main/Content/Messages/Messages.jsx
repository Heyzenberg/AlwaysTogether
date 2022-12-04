import './Messages.scss';
import { Routes, Route, NavLink } from 'react-router-dom';
import {BsThreeDotsVertical} from 'react-icons/bs';
import { ListMessages } from './ListMessages/ListMessages';

const Messages = () => {
    return(
        <div className="Messages">
            <div className="myDialogs">
                <NavLink to='1' className="dialog">
                    <div className="userPhoto">
                        <img src="assets/usersData/photos/scarlett-johansson.webp" alt="user_photo" />
                    </div>
                    <div className="userName">
                        <p>Scarlett Johansson</p>
                    </div>
                    <div className="btnBox">
                        <button><BsThreeDotsVertical/></button>
                    </div>
                </NavLink>

                <NavLink to='2' className="dialog">
                    <div className="userPhoto">
                        <img src="assets/usersData/photos/downey jr.jpg" alt="user_photo" />
                    </div>
                    <div className="userName">
                        <p>Downey Jr.</p>
                    </div>
                    <div className="btnBox">
                        <button><BsThreeDotsVertical/></button>
                    </div>
                </NavLink>
            </div>
            <Routes>
                <Route path='1' element={<ListMessages />} />
            </Routes>
        </div>
    )
}

export { Messages };