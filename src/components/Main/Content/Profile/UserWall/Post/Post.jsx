import './Post.scss';
import { Link } from 'react-router-dom';
import { BsHeartFill } from 'react-icons/bs';


const Post = ({photo}) => {
    return(
        <div className="Post">
            <div className="photoBlock">
                <div className="photo">
                    <img src={photo} alt="user_photo" />
                </div>
            </div>
            <div className="generalBlock">
                <div className="textBlock">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam modi hic facere vel, debitis cumque magni. Non, dolores hic incidunt ipsam quam voluptatibus excepturi perferendis nostrum, nulla cum impedit dolore?</p>
                </div>  
                <div className="btnBlock">
                    <Link className='like'>0 <BsHeartFill/></Link>
                    <div className='btns'>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                </div>              
            </div>
        </div>
    )
}

export { Post };