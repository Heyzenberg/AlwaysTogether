import './Profile.scss';
import { UserWall } from './UserWall/UserWall';
import { UserInfo } from './UserInfo/UserInfo';

const Profile = ({photo}) => {
    return(
        <div className="Profile">
            <UserInfo photo={photo} />
            <UserWall photo={photo} />
        </div>
    )
}

export { Profile };