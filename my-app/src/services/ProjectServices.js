
import api from './ApiInterceptor'

class ProjectServices {

    async getProjects() {
        try {
            return await api.get('projetos');

        } catch (err) {
            console.log(err)
            return err.response.status
        }
    }

    async getProjectByCodigo(codigo) {
        let project = ''
        try {
            project = await (await api.get('projetos/' + codigo)).data;
            console.log('json, resposta da api => ' + project.nome)

        } catch (error) {
            console.log(error)
        }

        return project;
    }


    createProject(project) {
        return api.post('projetos', project)
    }

    deleteProject(codigo) {
        return api.delete('projetos/' + codigo)
    }

    updateProject(project) {
        return api.put('projetos/' + project.codigo, project)
    }

}

export default new ProjectServices()