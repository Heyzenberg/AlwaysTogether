import './UserInfo.scss';
import {BsGlobe2, BsCalendar3, BsHeart, BsBuilding} from 'react-icons/bs';
import { Link } from 'react-router-dom';

const UserInfo = ({photo}) => {
    return(
        <div className="UserInfo">
            <div className="userName">
                <p>Evgeny "Heyzenberg" Murenets</p>
            </div>
            <div className="generalBox">
                <div className="leftSection">
                    <div className="boxPhoto">
                        <img src={photo} alt="user_photo" />
                    </div>
                    <div className="boxLinks">
                        <Link href="">Photo</Link>
                        <Link href="">Music</Link>
                        <Link href="">My Photo</Link>
                        <Link href="">My Photo</Link>
                    </div>
                    
                </div>
                <div className="rightSection">
                    <div className="info">
                        <p><BsGlobe2 /> Location: Finnland, Oulu</p>
                        <p><BsCalendar3 /> Birthday: 26 / 12 / 1989</p>
                        <p><BsHeart /> Family status: Single</p>
                        <p><BsBuilding /> Place of work: RedMoon project</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export { UserInfo };