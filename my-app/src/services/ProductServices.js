
import api from './ApiInterceptor'

class ProductServices {

    async getProduts() {
        try {
            return await api.get('produtos');

        } catch (err) {
            console.log(err)
            return err.response.status
        }
    }

    async getProdutByCodigo(codigo) {
        let product = ''
        try {
            product = await (await api.get('produtos/' + codigo)).data;
            console.log('json, resposta da api => ' + product.nome)

        } catch (error) {
            console.log(error)
        }

        return product;
    }


    createProduct(product) {
        return api.post('produtos', product)
    }

    deleteProduct(codigo) {
        return api.delete('produtos/' + codigo)
    }

    updateProduct(product) {
        return api.put('produtos/' + product.codigo, product)
    }

}

export default new ProductServices()