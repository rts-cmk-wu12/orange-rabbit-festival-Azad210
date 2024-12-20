import  './style/signupComplete.css'
import backgroundImage from '../img/overlay.png'
import { IoIosCheckmarkCircle } from "react-icons/io";

function SignupComplete() {
    return (  
        <>
<div className='background' style={{ backgroundImage: `url(${backgroundImage})` }}>
</div>
        <div className='signup-container'>
<div className="signupComplete">
<IoIosCheckmarkCircle className='check'/>
            <p className='confirm'>CONFIRMATION</p>
            <h1>Signup Complete</h1>
            <p>We look forwand seeing you at the event</p>
            <a className="buttonInComplete" onClick={() => window.location.href = '/'}>Order more tickets</a>
        </div>
        </div>
        
</>

    );
}

export default SignupComplete;