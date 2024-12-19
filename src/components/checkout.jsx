import { FaRegTrashAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
export default function Checkout() {
    
  return (
    <div className="checkout-container">
      <div className="participant-details">
        <p>YOUR PARTICIPANTS</p>
       
        <div className='dash-line'></div>
        <FaRegTrashAlt className="trash"/>
        <p> {localStorage.getItem('fullname')}</p>
        <p> birthdate: {localStorage.getItem('birth')}</p>
        <p> Email: {localStorage.getItem('email')}</p>
        <p> Phone number: {localStorage.getItem('phone')}</p>
        <div className='dash-line'></div>

      </div>

      <button className="submit-button" type="date"> Submit  <FaArrowRight/> </button>     

    </div>
  )
}