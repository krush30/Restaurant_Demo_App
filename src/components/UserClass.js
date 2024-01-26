import React from "react";
class USerClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default"
            },
        };
    }
    async componentDidMount() {

        const data = await fetch(
            "https://api.github.com/users/krush30"
        );
        const json = await data.json();
        this.setState({
            userInfo: json,
        })
        console.log(json);

    }


    render() {
        const { name, id } = this.state.userInfo;

        return (

            <div>
                <h1>Name: {name}</h1>
                <h2>ID: {id}</h2>
                <h2>email: lalalalalal@gmail.com</h2>
            </div>
        )
    }
}

export default USerClass;