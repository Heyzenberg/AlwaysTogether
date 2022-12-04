import './ListMessages.scss';


const ListMessages = () => {
    return(
        <div className="ListMessages">
            <div className="message">
                <p className="name">Scarlett Johansson</p>
                <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur expedita dolore, quidem aliquam dolorum aliquid! Consequuntur, cum necessitatibus voluptatibus facilis, placeat possimus alias laboriosam quo doloremque, nihil fugit sunt soluta?</div>
                <p className="date">14:25</p>
            </div>

            <div className="message">
                <p className="name">Downey Jr.</p>
                <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur expedita dolore, quidem aliquam dolorum aliquid!</div>
                <p className="date">14:29</p>
            </div>
        </div>
    )
}

export { ListMessages };