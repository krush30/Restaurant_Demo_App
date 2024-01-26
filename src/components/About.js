import UserContext from "../utils/UserContext";
import User from "./User";
import USerClass from "./UserClass";
import React from "react";

class About extends React.Component {
    constructor(props) {
        super(props);
    }




    render() {
        return (
            <div>
                <USerClass name={"Krushna (class)"}></USerClass>
            </div>)
    }
}


export default About;