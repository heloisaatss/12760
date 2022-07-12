import axios from 'axios'

const BASE_URL = "https://app12759.herokuapp.com/prd"

class ListaService {

    getLista() {
       return axios.get(BASE_URL);
    }

}

export default new ListaService()