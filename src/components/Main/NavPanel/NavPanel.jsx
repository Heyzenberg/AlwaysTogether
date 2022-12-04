import './NavPanel.scss';
import { NavLink } from 'react-router-dom';

const NavPanel = () => {
    return(
        <div className="NavPanel">
            <div className='blockLinks'>
                <NavLink className='navLink' to='/profile'><i class="fa-solid fa-user"></i> Prifile</NavLink>
                <NavLink className='navLink' to='/messages'><i class="fa-solid fa-message"></i> Messages</NavLink>
                <NavLink className='navLink' to='/friends'><i class="fa-solid fa-users"></i> Friends</NavLink>
                <NavLink className='navLink' to='/music'><i class="fa-solid fa-music"></i> Music</NavLink>
                <NavLink className='navLink' to='/bookmarks'><i class="fa-solid fa-bookmark"></i> Bookmarks</NavLink>     
            </div>

            <div className="blockLinks">
                <a className='navLink' href="#s"><i class="fa-solid fa-gear"></i> Settings</a>
            </div>
        </div>
    )
}

export { NavPanel };