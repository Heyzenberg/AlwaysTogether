import { DialogWindow } from './DialogWindow/DialogWindow';
import './Messages.scss';
import { MessageWindow } from './MessageWindow/MessageWindow';
import { useState } from 'react';

const Messages = () => {

    const [ dialogState, setDialogState ] = useState(false);

    const showThisDialog = (dialogState) => {
        setDialogState(!dialogState)
    }
    console.log(dialogState)

    return(
        <div className="Messages">
            <DialogWindow dialogState={dialogState}
                    showThisDialog={showThisDialog} />
            {dialogState ? <MessageWindow /> : ''}
        </div>
    )
}

export { Messages };