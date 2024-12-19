import { useRef, useState } from "react";

export default function PhoneInput(props) {
    const inputElement = useRef(null);
    const [error, setError] = useState('');

    function inputHandler(event) {
        const value = inputElement.current.value;

        if (value.length < 8) {
            setError('Phone number must be at least 8 digits');
        } else {
            setError('');
        }
    }

    return (
        <>
            <input placeholder="Phone" 
            ref={inputElement} 
            onInput={inputHandler} 
            type="phone" {...props} />
            {error && <p className="errorText">{error}</p>}
        </>
    )
}