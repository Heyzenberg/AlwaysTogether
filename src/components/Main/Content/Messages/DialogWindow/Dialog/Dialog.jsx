import './Dialog.scss';
import { NavLink } from 'react-router-dom';
import {BsThreeDotsVertical} from 'react-icons/bs';


const Dialog = () => {
    return(
        <NavLink to="1" className="Dialog">
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
    )
}

export { Dialog }