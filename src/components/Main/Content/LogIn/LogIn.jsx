import './LogIn.scss';
import { Link } from 'react-router-dom';

const LogIn = () => {
    return(
        <div className="LogIn">
            <div className="loginWindow">
                <h1>Always<span>Together</span></h1>
                <div className="mainBox">
                    <div className="innerBox">
                        <div className='firstBox'>
                            <p>E-Mail:</p>
                        </div>
                        <div className='secondBox'>
                            <input type="text" placeholder='Enter your e-mail' maxLength='35' />
                        </div>
                    </div>
                    <div className="innerBox">
                        <div className="firstBox">
                            <p>Password:</p>
                        </div>
                        <div className="secondBox">
                            <input type="text" placeholder='Enter your password' maxLength='16' />
                        </div>
                    </div>
                    <div className="btnBox">
                        <Link className='logIn'>Log In</Link>
                        <Link to='/registration' className='registration'>Registration</Link>                           
                    </div>
                </div>
            </div>
        </div>
    )
}

export { LogIn };