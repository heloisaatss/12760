import React from "react";
import './Opa.css'

class Opa extends React.Component {

    render() {

        return (<div>
            <h1>Opa, {this.props.name}</h1>
        </div>
        )
    }
}

export default Opa;