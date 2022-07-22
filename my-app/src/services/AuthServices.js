
import api from './ApiInterceptor'

class AuthServices {

    login(credenciais) {
        return api.post('usuarios/login', credenciais)
    }

    setLoggedUser(token_user) {
        localStorage.setItem('token_user', token_user)
    }

    getLoggedUser() {
        return localStorage.getItem('token_user')
    }

}

export default new AuthServices();