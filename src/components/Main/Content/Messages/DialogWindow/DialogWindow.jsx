import './DialogWindow.scss';
import { Dialog } from './Dialog/Dialog';


const DialogWindow = ({dialogState, showThisDialog}) => {
    return(
        <div className="DialogWindow">
            <Dialog dialogState={dialogState}
                    showThisDialog={showThisDialog} />
        </div>
    )
}

export { DialogWindow };