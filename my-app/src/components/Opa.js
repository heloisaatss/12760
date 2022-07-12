import React from "react";
import './Opa.css'

class Opa extends React.Component {

    constructor(props) {
        super(props)
        this.state = { ativo: true, nome: this.props.name }
    }

    componentDidMount() {

        console.log(this.state.ativo)
    }


    render() {

        let className = 'h1'

        if (this.state.ativo) {
            className = className + ' ativo'
        }
        else {
            className += ' inativo'
        }

        return (<div>
            <h1 className={className}>Opa, {this.state.nome}</h1>
            <button className="btn btn-primary">Opa!!!</button>
        </div>
        )
    }
}

export default Opa;