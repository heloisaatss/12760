import axios from "axios"

const BASE_URL = 'https://app12759.herokuapp.com/usuarios/login'

class AuthServices {

    login(credenciais) {
        axios.post(BASE_URL, credenciais).then(x => {
            console.log(x.data)
        })
    }

}

export default new AuthServices();