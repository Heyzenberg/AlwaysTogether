import "./MessageContainer.scss";


const MessageContainer = () => {
    return(
        <div className="MessageContainer">
            {/* <div>
                <span className="userName">Evgeny Murenets</span> 
            </div> */}
            <div className="text">
               <span>Hi! I'd like to chat with you</span> 
            </div>
            <div className="time">
                <span>0:27</span>
                <span>13/12/22</span>
            </div>
        </div>
    )
}

export { MessageContainer };