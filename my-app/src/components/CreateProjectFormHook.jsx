import React from "react";

import { useForm } from 'react-hook-form';
import ProjectServices from "../services/ProjectServices";



function CreateProjectFormHook() {

    const {
        register,
        handleSubmit,
        formState: { errors }

    } = useForm();


    const onSubmit = async (data) => {
        console.log(data)
        let res = await (await ProjectServices.createProject(data)).data
        alert(res)
    }


    return (<div className="container" >
        <div className="card col-md-6 offset-md-3 offset-md-3">
            <h2 className="text-center">Criar Projeto</h2>
            <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="form-group">
                        <label>Código:</label>
                        <input {...register('codigo', { required: true })} placeholder="Código" name="codigo" className="form-control"></input>
                        {errors.codigo && <p className='alert alert-warning'>Código é obrigatório!</p>}
                    </div>
                    <div className="form-group">
                        <label>Nome</label>
                        <input {...register('nome', { required: true })} placeholder="Nome" name="nome" className="form-control" />
                        {errors.nome && <p className='alert alert-warning'>Nome é obrigatório!</p>}
                    </div>
                    <input type="submit" className='btn btn-success' />
                </form>
            </div>
        </div>
    </div>)
}


export default CreateProjectFormHook;