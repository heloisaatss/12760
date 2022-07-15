import axios from 'axios'

const BASE_URL = "https://app12759.herokuapp.com/prd"

class ProductServices {

    getProduts() {
        return axios.get(BASE_URL);
    }

    createProduct(product) {
        return axios.post(BASE_URL, product)
    }

    deleteProduct(codigo) {
        let URL = BASE_URL + '/' + codigo;
        return axios.delete(URL)
    }

}
export default new ProductServices()