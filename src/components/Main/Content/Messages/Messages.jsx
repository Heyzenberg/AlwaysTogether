import { DialogWindow } from './DialogWindow/DialogWindow';
import './Messages.scss';
import { MessageWindow } from './MessageWindow/MessageWindow';
// import { useState } from 'react';

const Messages = () => {

    // const [ dialogState, setDialogState ] = useState(false);

    // const showThisDialog = (dialogState) => {
    //     setDialogState(!dialogState)
    // }

    return(
        <div className="Messages">
            <DialogWindow />
            <MessageWindow />
        </div>
    )
}

export { Messages };