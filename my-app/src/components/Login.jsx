import React from "react";
import AuthServices from "../services/AuthServices";

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            usuario: '',
            senha: ''
        }
    }


    sendLogin = async (event) => {
        event.preventDefault();

        let credencias = {
            usuario: this.state.usuario,
            senha: this.state.senha
        }


        let res = await AuthServices.login(credencias)
        AuthServices.setLoggedUser(res.data)

        this.props.history.push('/products')

    }



    render() {
        return (<div className="container d-flex justify-content-center">
            <div className="card mt-5 w-50">
                <div className="card-body">

                    <form onSubmit={this.sendLogin}>
                        <div className="form-group">
                            <label htmlFor="txtUsuario">Usuário</label>
                            <input id="txtUsuario"
                                type="text"
                                className="form-control"
                                placeholder="Usuário"
                                value={this.state.usuario}
                                onChange={e => this.setState({ usuario: e.target.value })}
                            >
                            </input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="txtSenha">Senha</label>
                            <input id="txtSenha"
                                type="password"
                                className="form-control"
                                placeholder="Senha"
                                value={this.state.senha}
                                onChange={e => this.setState({ senha: e.target.value })}
                            >
                            </input>
                        </div>

                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        </div>)
    }
}

export default Login;