import './Header.scss';
import { Link } from 'react-router-dom';
import { UserIcon } from './UserIcon/UserIcon';

const Header = ({myData}) => {
    return(
        <div className="Header">
            <div className='logo'>
                <img src="" alt="" />
                <h1>Always<span>Together</span></h1>
            </div>
            <div className="search">
                <input type="text" placeholder='Enter your text...' />
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="logIn">
                <Link to='/' className='link'>LogIn</Link>
                {/* <UserIcon photo={myData.photo} /> */}
            </div>
        </div>
    )
}

export { Header };