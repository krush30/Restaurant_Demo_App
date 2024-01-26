import { useState } from "react";

const User = () => {
    const [submit, setSubmit] = useState("Submit")
    return (
        <div className="user_card">
            <h1></h1>
            <button
                onClick={() => {
                    submit == "Submit" ? setSubmit("Done") :
                        setSubmit("Submit")
                }}
            >{submit}</button>
            <h1>Name: Krushna</h1>
            <h2>Location: Nanded</h2>
            <h2>email: lalalalalal@gmail.com</h2>
        </div>
    )
}

export default User;