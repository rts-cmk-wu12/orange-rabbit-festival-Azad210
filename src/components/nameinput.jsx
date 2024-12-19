import { useRef, useState } from "react";

export default function NameInput(props){
    const inputElement = useRef(null);
    const [error, setError] = useState('');

    function inputHandler(event) {
        const value = inputElement.current.value;

        if (value.length < 2) {
            setError('Name is too short');
        } else {
            setError('');
        }
    }
    
    return (
        <>
        <input placeholder="Full name" ref={inputElement} onInput={inputHandler} type="text" {...props} />
        {error && <p className="errorText">{error}</p>}
        </>
   )
}