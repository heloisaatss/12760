import React from "react";
import ProductServices from "../services/ProductServices";


class ListProductComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }

        this.addProduct = this.addProduct.bind(this);
    }

    componentDidMount() {
        ProductServices.getProduts().then(res => {
            this.setState({ products: res.data })
            console.log(res.data)
        })
    }

    addProduct() {
        this.props.history.push('/add-product')
    }

    deleteProduct(codigo) {
        this.props.history.push(`/delete-product/${codigo}`)
    }



    render() {
        return (
            <div>
                <h2 className="text-center">Lista de Produtos</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addProduct}>Novo Produto</button>
                </div>
                <hr />
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Código</th>
                                <th>Nome</th>
                                <th>Descrição</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.products.map((product, index) =>
                                    <tr key={index}>
                                        <td> {product.codigo} </td>
                                        <td> {product.nome}</td>
                                        <td> {product.descricao}</td>
                                        <td>
                                            <button className="btn btn-danger" onClick={() => this.deleteProduct(product.codigo)}>Excluir</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>
            </div>

        )
    }
}

export default ListProductComponent;