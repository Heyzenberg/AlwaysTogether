import './UserIcon.scss';
import { Link } from 'react-router-dom';


const UserIcon = ({photo}) => {
    return(
        <div className="UserIcon">
            <Link className="iconBox">
                <img src={photo} alt="user_icon" />
            </Link>
        </div>
    )
}

export { UserIcon };