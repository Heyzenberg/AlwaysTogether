import { Friend } from './Friend/Friend';
import './Friends.scss';

const Friends = () => {
    return(
        <div className="Friends">
            <div className="grid">
                <Friend />
            </div>
        </div>
    )
}

export { Friends };