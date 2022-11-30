import './NavPanel.scss';
import { Link } from 'react-router-dom';

const NavPanel = () => {
    return(
        <div className="NavPanel">
            <div className='blockLinks'>
                <Link className='navLink' to='/profile'><i class="fa-solid fa-user"></i> Prifile</Link>
                <Link className='navLink' to='/messages'><i class="fa-solid fa-message"></i> Messages</Link>
                <Link className='navLink' to='/friends'><i class="fa-solid fa-users"></i> Friends</Link>
                <Link className='navLink' to='/music'><i class="fa-solid fa-music"></i> Music</Link>
                <Link className='navLink' to='/bookmarks'><i class="fa-solid fa-bookmark"></i> Bookmarks</Link>     
            </div>

            <div className="blockLinks">
                <a className='navLink' href="#s"><i class="fa-solid fa-gear"></i> Settings</a>
            </div>
        </div>
    )
}

export { NavPanel };