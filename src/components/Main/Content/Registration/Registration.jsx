import './Registration.scss';
import { Link } from 'react-router-dom';


const Registration = () => {
    return(
        <div className="Registration">
            <h1>Always<span>Together</span></h1>
            <form action="">
                <p>Registration</p>
                <div className='inputField'>
                    <label htmlFor="">Name: </label>
                    <input type="text" maxLength='16' />
                </div>
                <div className='inputField'>
                    <label htmlFor="">Surname: </label>
                    <input type="text" maxLength='16' />
                </div>
                <div className='inputField'>
                    <label htmlFor="">Nickname: </label>
                    <input type="text" maxLength='10' />
                </div>
                <div className='inputField'>
                    <label htmlFor="">E-mail: </label>
                    <input type="text" maxLength='35' />
                </div>
                <div className='inputField'>
                    <label htmlFor="">Phone number: </label>
                    <input type="text" maxLength='14' />
                </div>
                <div className='inputField'>
                    <label htmlFor="">Password: </label>
                    <input type="password" maxLength='16' />
                </div>
                <div className='inputField'>
                    <label htmlFor="">Repeat password: </label>
                    <input type="password" maxLength='16' />
                </div>
                <div className='inputField'>
                    <label htmlFor="">Country: </label>
                    <input type="text" maxLength='30' />
                </div>
                <div className="userAgree">
                    <input type="checkbox" />
                    <label htmlFor="">I have read and agree to the user agreement</label>
                </div>
                <div className='btnBox'>
                    <Link className='registration'>Registration</Link>
                    <Link to='/' className='cancel'>Cancel</Link>
                </div>
            </form>
        </div>
    )
}

export { Registration };