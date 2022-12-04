import './UserWall.scss';
import { Post } from './Post/Post';


const UserWall = ({photo}) => {
    return(
        <div className="UserWall">
            <div className="inputField">
                <input type="text" placeholder="What's new with you?" />
                <button>Add</button>
            </div>
            <div className="postField">
                <Post photo={photo} />
                <Post photo={photo} />
                <Post photo={photo} />
            </div>
        </div>
    )
}

export { UserWall };