import { useRef, useState } from "react";

export default function EmailInput(props) {
    const inputElement = useRef(null);
    const [error, setError] = useState('');

    function inputHandler(event) {
        const value = inputElement.current.value;

        if (!value.includes('@')) {
            setError(' enter a valid email address');
        } else {
            setError('');
        }
    }

    return (
        <>
            <input placeholder="Email" ref={inputElement} onInput={inputHandler} type="email" {...props} />
            {error && <p className="errorText">{error}</p>}
        </>
    )
}