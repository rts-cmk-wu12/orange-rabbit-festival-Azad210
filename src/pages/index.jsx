import './style/index.css'
import backgroundImage from '../img/overlay.png'
import image from '../img/container.png'
import { BsCalendar3 } from "react-icons/bs";
import { HiOutlineMap } from "react-icons/hi";
import { useRef } from 'react';
import NameInput from "../components/nameinput";
import EmailInput from "../components/emailinput";
import PhoneInput from "../components/phoneinput";
import BirthInput from "../components/birthdate";
import { FaPlus } from "react-icons/fa6";


export default function Index() {

  const formElement = useRef(null)

function submitHandler(event) {
  event.preventDefault()

  const data = new FormData(formElement.current)

  const dataObject = Object.fromEntries(data.entries())

  formElement.current.reset()

}


  return (
    <>
      <div className='backgroundimg' style={{ backgroundImage: `url(${backgroundImage})` }}>
      </div>

      <div className='container-withPic-and-withInput'>
        <div>
          <img src={image} alt="" />
        </div>

<div className='containerWithInput'>

  <div className='signup-form-text'>
  <p>SIGNUP FOR THE EVENT</p>
  <h1>Orange Rabbit Festival 2023</h1>
<p>
  <BsCalendar3 className='calendar-icon' />
   24 June 2025 - 1 July 2025
</p>

<p>
<HiOutlineMap className='map-icon' />
Bunny Avenue 22, 2300, Rabbitkilde
</p>

<div className='dash-line'></div>



</div>
        <form ref={formElement} onSubmit={submitHandler} className='signForm'>
<p>Your name</p>
<NameInput className='profileInfo'/>
<p>Email address</p>
<EmailInput className='profileInfo'/>
<p>Phone number</p>
<PhoneInput className='profileInfo'/>
<p>Your birthdate</p>
<BirthInput className='profileInfo'/>
<button className="signup-form-button" type="submit">Add participant <FaPlus /></button>     
</form>
        </div>
      </div>
    </>
  );
}