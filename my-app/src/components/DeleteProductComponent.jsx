
import React from "react";
import ProductServices from "../services/ProductServices";

class DeleteProductComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            codigo: this.props.match.params.codigo,
            descricaoView: ''
        }

        this.deleteProduct = this.deleteProduct.bind(this)
        this.productList = this.productList.bind(this);
    }

    productList() {
        this.props.history.push('/products')
    }

    async componentDidMount() {
        let product = await ProductServices.getProdutByCodigo(this.state.codigo);
        this.setState({ descricaoView: product.codigo + ' - ' + product.nome + ' - ' + product.descricao })


    }

    deleteProduct = async (e) => {
        e.preventDefault();
        // ProductServices.deleteProduct(this.state.codigo).then(res => {
        //     alert(res.data)
        // })


        try {
            let res = await ProductServices.deleteProduct(this.state.codigo)
            alert(res.data);
            this.productList();

        } catch (error) {
            alert(error)
        }

    }

    render() {
        return (<div>
            <div className="container" >
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h2 className="text-center">Excluir Produto</h2>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label>Deseja excluir o produto?</label>
                                <div>{this.state.descricaoView}</div>
                            </div>

                            <button className="btn btn-danger" onClick={this.deleteProduct} >Excluir</button>
                            <button className="btn btn-secondary" onClick={this.productList}>Cancelar</button>
                        </form>
                    </div>
                </div>
            </div>




        </div>)
    }
}

export default DeleteProductComponent;