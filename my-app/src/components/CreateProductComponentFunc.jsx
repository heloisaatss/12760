import React, { useState } from "react";

import ProductServices from "../services/ProductServices";


function CreateProductComponentFunc() {

    const [codigo, setCodigo] = useState('')
    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')

    const salvar = async (e) => {
        e.preventDefault();

        let product = {
            codigo: codigo,
            nome: nome,
            descricao: descricao
        }

        let res = await (await ProductServices.createProduct(product)).data
        alert(res)

        console.log(res)
    }


    return (<div>
        <div className="container" >
            <div className="card col-md-6 offset-md-3 offset-md-3">
                <h2 className="text-center">Criar Produto</h2>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label>Código</label>
                            <input placeholder="Código" name="codigo" className="form-control"
                                onChange={(e) => setCodigo(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Nome</label>
                            <input placeholder="Nome" name="nome" className="form-control"
                                onChange={(e) => setNome(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Descrição</label>
                            <input placeholder="Descrição" name="descricao" className="form-control"
                                onChange={(e) => setDescricao(e.target.value)}
                            />
                        </div>
                        <button className="btn btn-primary" onClick={(e) => salvar(e)} >Salvar</button>
                        <button className="btn btn-secondary">Cancelar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>)
}


export default CreateProductComponentFunc;