import { useRef, useState } from "react";

export default function BirthInput(props){
    const inputElement = useRef(null);
    const [error, setError] = useState('');

    function inputHandler(event) {
        let value = inputElement.current.value;
        
     
        value = value.replace(/\D/g, '');
        
     
        if (value.length > 8) {
            value = value.slice(0, 8);
        }
        
       
        if (value.length >= 2) {
            value = value.slice(0, 2) + '/' + value.slice(2);
        }
        if (value.length >= 5) {
            value = value.slice(0, 5) + '/' + value.slice(5);
        }
        
        inputElement.current.value = value;

        if (value.replace(/\//g, '').length < 8) {
            setError('Birthday is too short');
        } else {
            setError('');
        }
    }
    
    return (
        <>
        <input placeholder="DD/MM/YYYY" ref={inputElement} onInput={inputHandler} type="text" {...props} />
        {error && <p className="errorText">{error}</p>}
        </>
   )
}