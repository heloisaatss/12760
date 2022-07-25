import React, { Component } from "react";
import ProjectServices from "../services/ProjectServices";

class CreateProjectComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // id: this.props.match.parms.id,
            id: '',
            codigoView: '',
            nome: '',
            descricao: ''

        }

      //  this.projectList = this.projectList.bind(this)
       // this.saveProject = this.saveProject.bind(this)
    }

    projectList() {
        this.props.history.push('/projects')
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

    saveProject = async (e) => {
        e.preventDefault();

        let project = {
            codigo: this.state.codigoView,
            nome: this.state.nome,
            descricao: this.state.descricao
        }
        let res = await (await ProjectServices.createProject(project)).data

        alert(res)
        this.projectList();
    }

    render() {
        return (<div>
            <div className="container" >
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h2 className="text-center">Criar Projeto</h2>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label>Código</label>
                                <input placeholder="Código" name="codigo" className="form-control"
                                   // value={this.state.codigoView} //onChange={this.changeCodigo}
                                />
                            </div>
                            <div className="form-group">
                                <label>Nome</label>
                                <input placeholder="Nome" name="nome" className="form-control"
                                  //  value={this.state.nome} //onChange={this.changeNome}
                                    />
                            </div>
                            <div className="form-group">
                                <label>Descrição</label>
                                <input placeholder="Descrição" name="descricao" className="form-control"
                                 //   value={this.state.descricao} //onChange={this.changeDescricao}
                                    />
                            </div>
                            <button className="btn btn-primary" //</form>onClick={this.saveProject} 
                            >Salvar</button>
                            <button className="btn btn-secondary"//</form> onClick={this.projectList}
                            >Cancelar</button>
                        </form>
                    </div>
                </div>
            </div>




        </div>)
    }
}

export default CreateProjectComponent;