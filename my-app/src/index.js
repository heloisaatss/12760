import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

class Cadastro extends React.Component {
  render() {
    return <h1>Cadastro de Usuário</h1>
  }
}

class DadosBasicos extends React.Component {
  render() {
    return <div>
      <h2>Dados Básicos</h2>
      <p>Nome:</p>
      <p>Sobrenome:</p>
      <p>Idade:</p>
    </div>
  }
}

class Endereco extends React.Component {
  render() {
    return <div>
      <h2>{this.props.tipo}</h2>
      <p>Logradouro:</p>
      <p>CEP:</p>
      <p>Cidade/Estado:</p>
    </div>
  }
}

class AreaAtuacao extends React.Component {
  render() {
    return <div>
      <h3>{this.props.title}</h3>
      <p>{this.props.description}</p>
    </div>
  }
}

root.render(
  <div>
    <Cadastro></Cadastro>
    <DadosBasicos></DadosBasicos>
    <Endereco tipo='Endereço Residencial'></Endereco>
    <Endereco tipo='Endereço Comercial'></Endereco>
    <AreaAtuacao title='Gerente' description='Descrição xxx'></AreaAtuacao>
    <AreaAtuacao title='Analista' description='Descrição xxx'></AreaAtuacao>
    <AreaAtuacao title='Assistente' description='Descrição xxx'></AreaAtuacao>
  </div>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
