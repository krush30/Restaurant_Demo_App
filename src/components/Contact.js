import { useState } from "react";

const Contact = () => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");

    return (
        <div>
            <input className="contactName" type="text" placeholder="Enter your name"
                value={name} onChange={(e) => {
                    setName(e.target.value);
                }} />
            <input className="contactNum" type="text" placeholder="Enter your num"
                value={number} onChange={(e) => {
                    setNumber(e.target.value);
                }} />
            <button onClick={() => {
                console.log("Data Submited");
                console.log("Your name is ", name, "and");
                console.log("your number is ", number);
            }}>Submit</button>
        </div>
    )
}

export default Contact;