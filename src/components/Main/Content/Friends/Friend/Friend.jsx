import './Friend.scss';


const Friend = () => {
    return(
        <div className="Friend">
            <div className="photo">
                <img src="assets/usersData/photos/scarlett-johansson.webp" alt="user_photo" />
            </div>
            <div className="rightField">
                <div className="name">
                    <p>Scarlett Johansson</p>
                </div>
                <div className="btnPanel">
                    <button>Wright message</button>
                    <button>Delete</button>
                </div>
            </div>
        </div>
    )
}

export { Friend };