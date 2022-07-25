
import React from "react";
import ProjectServices from "../services/ProjectServices";

class DeleteProjectComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            codigo: this.props.match.params.codigo,
            descricaoView: ''
        }

        this.deleteProject = this.deleteProject.bind(this)
        this.projectList = this.projectList.bind(this);
    }

    projectList() {
        this.props.history.push('/projects')
    }

    async componentDidMount() {
        let project = await ProjectServices.getProjectByCodigo(this.state.codigo);
        this.setState({ descricaoView: project.codigo + ' - ' + project.nome + ' - ' + project.descricao })


    }

    deleteProject = async (e) => {
        e.preventDefault();
        // ProductServices.deleteProduct(this.state.codigo).then(res => {
        //     alert(res.data)
        // })


        try {
            let res = await ProjectServices.deleteProject(this.state.codigo)
            alert(res.data);
            this.projectList();

        } catch (error) {
            alert(error)
        }

    }

    render() {
        return (<div>
            <div className="container" >
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h2 className="text-center">Excluir Projeto</h2>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label>Deseja excluir o projeto?</label>
                                <div>{this.state.descricaoView}</div>
                            </div>

                            <button className="btn btn-danger" onClick={this.deleteProject} >Excluir</button>
                            <button className="btn btn-secondary" onClick={this.projectList}>Cancelar</button>
                        </form>
                    </div>
                </div>
            </div>




        </div>)
    }
}

export default DeleteProjectComponent;