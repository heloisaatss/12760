import React, { Component } from "react";

class CreateProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            //id: this.props.match.parms.id,
            id: '',
            codigo: '',
            nome: '',
            descricao: ''
        }

        this.productList = this.productList.bind(this)
    }

    productList() {
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div>
                        <h2 className="text-center">Criar Produto</h2>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Código</label>
                                    <input placeholder="Código" name="codigo" className="form-control"></input>
                                </div>
                                <div className="form-group">
                                    <label>Nome</label>
                                    <input placeholder="Nome" name="nome" className="form-control"></input>
                                </div>
                                <div className="form-group">
                                    <label>Descrição</label>
                                    <input placeholder="Descrição" name="descricao" className="form-control"></input>
                                </div>
                                <button className="btn btn-primary">Salvar</button>
                                <button className="btn btn-secondary" onClick={this.productList}>Cancelar</button>
                            </form>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

export default CreateProductComponent;