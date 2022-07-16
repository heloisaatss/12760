import React, { Component } from "react";
import ProductServices from "../services/ProductServices";

class CreateProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // id: this.props.match.parms.id,
            id: '',
            codigoView: '',
            nome: '',
            descricao: ''

        }

        this.productList = this.productList.bind(this)
        this.saveProduct = this.saveProduct.bind(this)
    }

    productList() {
        this.props.history.push('/')
    }

    changeCodigo = (event) => {
        this.setState({ codigoView: event.target.value })
    }

    changeNome = (event) => {
        this.setState({ nome: event.target.value })
    }

    changeDescricao = (event) => {
        this.setState({ descricao: event.target.value })
    }

    saveProduct = async (e) => {
        e.preventDefault();

        let product = {
            codigo: this.state.codigoView,
            nome: this.state.nome,
            descricao: this.state.descricao
        }
        let res = await (await ProductServices.createProduct(product)).data

        alert(res)
        this.productList();
    }

    render() {
        return (<div>
            <div className="container" >
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h2 className="text-center">Criar Produto</h2>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label>Código</label>
                                <input placeholder="Código" name="codigo" className="form-control"
                                    value={this.state.codigoView} onChange={this.changeCodigo}
                                />
                            </div>
                            <div className="form-group">
                                <label>Nome</label>
                                <input placeholder="Nome" name="nome" className="form-control"
                                    value={this.state.nome} onChange={this.changeNome} />
                            </div>
                            <div className="form-group">
                                <label>Descrição</label>
                                <input placeholder="Descrição" name="descricao" className="form-control"
                                    value={this.state.descricao} onChange={this.changeDescricao} />
                            </div>
                            <button className="btn btn-primary" onClick={this.saveProduct} >Salvar</button>
                            <button className="btn btn-secondary" onClick={this.productList}>Cancelar</button>
                        </form>
                    </div>
                </div>
            </div>




        </div>)
    }
}

export default CreateProductComponent;