import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));


class Pesquisa extends React.Component {
  render() {
    return <h1>Componente de pesquisa</h1>
  }
}

class ListaProdutos extends React.Component {
  render() {
    return <div>
      <h2>Lista de resultado</h2>
      <Categoria></Categoria>
      <Itens></Itens>
      <Itens></Itens>
      <Itens></Itens>
      <Categoria></Categoria>
      <Itens></Itens>
      <Itens></Itens>
      <Itens></Itens>
    </div>
  }
}

class Categoria extends React.Component {
  render() {
    return <h3>Componente Categoria</h3>
  }
}

class Itens extends React.Component {
  render() {
    return <h4>Componente Itens</h4>
  }
}

root.render(
  <div>
    <Pesquisa></Pesquisa>
    <ListaProdutos></ListaProdutos>
  </div>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
