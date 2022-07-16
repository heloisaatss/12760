import axios from 'axios'

const BASE_URL = "https://app12759.herokuapp.com/prd"

class ProductServices {

    getProduts() {
        return axios.get(BASE_URL);
    }

    async getProdutByCodigo(codigo) {
        let URL = BASE_URL + '/' + codigo;

        let product = ''

        try {
            product = await (await axios.get(URL)).data;
            console.log('json, resposta da api => ' + product.nome)

        } catch (error) {
            console.log(error)
        }

        return product;
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