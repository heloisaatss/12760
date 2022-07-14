import axios from 'axios'

const BASE_URL = "https://app12759.herokuapp.com/prd"

class ProductServices {

    getProducts() {
       return axios.get(BASE_URL);
    }

}

export default new ProductServices()