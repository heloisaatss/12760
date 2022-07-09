import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));


class Lista extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dados: [{
        "nome": "Maria",
        "sobrenome": "Santos",
        "idade": "40",
      }, {
        "nome": "João",
        "sobrenome": "Silva",
        "idade": "53",
      }, , {
        "nome": "José",
        "sobrenome": "Souza",
        "idade": "60",
      }]
    }
  }

  render() {
    return (
      <div>
        <h2>Dados Básicos</h2>
        <ul>
          {this.state.dados.map((dados) => <li>{dados.nome} {dados.sobrenome} {dados.idade}</li>)}
        </ul>
      </div>
    )
  }
}


root.render(
  <Lista />
)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();