import './Profile.scss';
import {BsGlobe2, BsCalendar3, BsHeart, BsBuilding} from 'react-icons/bs';

const Profile = ({photo}) => {
    return(
        <div className="Profile">
            <div className="userInfo">
                <div className="generalInfo">
                    <div className="photoSpace">
                        <div className="photo">
                            <img src={photo} alt="photo" />
                        </div>                        
                    </div>
                    <div className="info">
                        <div className="nameBox">
                            <p className='userName'>Evgeny "Heyzenberg" Murenets</p>
                        </div>
                        <div className="other">
                            <p><BsGlobe2 /> Location: Finnland, Oulu</p>
                            <p><BsCalendar3 /> Birthday: 26 / 12 / 1989</p>
                            <p><BsHeart /> Family status: Single</p>
                            <p><BsBuilding /> Place of work: RedMoon project</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Profile };