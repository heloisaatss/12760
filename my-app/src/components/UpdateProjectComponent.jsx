import React, { Component } from "react";
import ProjectServices from "../services/ProjectServices";

class UpdateProjectComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            codigo: this.props.match.params.codigo,
            nome: '',
            descricao: ''
        }

        this.projectList = this.projectList.bind(this)
        this.updateProject = this.updateProject.bind(this)
    }

    async componentDidMount() {
        let project = await ProjectServices.getProjectByCodigo(this.state.codigo);
        this.setState({
            nome: project.nome,
            descricao: project.descricao
        })


    }

    projectList() { 
        this.props.history.push('/projects')
    }

    changeNome = (event) => {
        this.setState({ nome: event.target.value })
    }

    changeDescricao = (event) => {
        this.setState({ descricao: event.target.value })
    }

    updateProject = async (e) => {
        e.preventDefault();

        let project = {
            codigo: this.state.codigo,
            nome: this.state.nome,
            descricao: this.state.descricao
        }
        let res = await (await ProjectServices.updateProject(project)).data

        alert(res)
        this.projectList();
    }

    render() {
        return (<div>
            <div className="container" >
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h2 className="text-center">Alterar Projeto</h2>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label>Código</label>
                                <div>{this.state.codigo}</div>
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
                            <button className="btn btn-primary" onClick={this.updateProduct} >Alterar</button>
                            <button className="btn btn-secondary" onClick={this.productList}>Cancelar</button>
                        </form>
                    </div>
                </div>
            </div>




        </div>)
    }
}

export default UpdateProjectComponent;