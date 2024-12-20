import { FaRegTrashAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";

export default function Checkout() {
 
  const [participantDetails, setParticipantDetails] = useState({
    fullname: localStorage.getItem('fullname'),
    birth: localStorage.getItem('birth'),
    email: localStorage.getItem('email'),
    phone: localStorage.getItem('phone')
  });

 
  const clearParticipantDetails = () => {
    localStorage.removeItem('fullname');
    localStorage.removeItem('birth');
    localStorage.removeItem('email');
    localStorage.removeItem('phone');

    setParticipantDetails({
      fullname: '',
      birth: '',
      email: '',
      phone: ''
    });
  };

  return (
    <div className="checkout-container">
      <div className="participant-details">
        <p>YOUR PARTICIPANTS</p>
        <div className='dash-line'></div>
       
        <FaRegTrashAlt className="trash" onClick={clearParticipantDetails} />
        
        <p> {participantDetails.fullname}</p>


        <div></div>
        <p className="infoInCheckout"> Birthdate: {participantDetails.birth}</p>
        <p className="infoInCheckout"> Email: {participantDetails.email}</p>
        <p className="infoInCheckout"> Phone number: {participantDetails.phone }</p>
        
        <div className='dash-line'></div>
      </div>

      <button className="submit-button" onClick={() => window.location.href = '/signupcomplete'} type="date"> Submit  <FaArrowRight /> </button>
    </div>
  );
}
