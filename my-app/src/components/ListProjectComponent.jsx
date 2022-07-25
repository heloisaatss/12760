import React from "react";
import ProjectServices from "../services/ProjectServices";


class ListProjectComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            projects: []
        }

        this.addProject = this.addProject.bind(this);
    }

    async componentDidMount() {
        let res = await ProjectServices.getProjects();

        if (res == 403) {
            this.props.history.push('/')
        }
        else {
            this.setState({ projects: res.data })
        }
    }

    addProduct() {
        this.props.history.push('/add-project')
    }

    deleteProduct(codigo) {
        this.props.history.push(`/delete-project/${codigo}`)
    }

    updateProduct(codigo) {
        this.props.history.push(`/update-project/${codigo}`)
    }



    render() {
        return (
            <div>
                <h2 className="text-center">Lista de Projetos</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addProject}>Novo Projeto</button>
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
                                this.state.projects.map((project, index) =>
                                    <tr key={index}>
                                        <td> {project.codigo} </td>
                                        <td> {project.nome}</td>
                                        <td> {project.descricao}</td>
                                        <td>
                                            <button className="btn btn-danger" onClick={() => this.deleteProject(project.codigo)}>Excluir</button>
                                            <button style={{ marginLeft: "10px" }} className="btn btn-info" onClick={() => this.updateProject(project.codigo)}>Alterar</button>
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

export default ListProjectComponent;