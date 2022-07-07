import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));


// function BoasVindas(props) {
//   return <Opa name={props.name}></Opa>
// }

class Chegada extends React.Component {
  render() {
    return <h1>Opa, {this.props.name}</h1>
  }
}

class BoasVindas extends React.Component {
  render() {
    return <Chegada name={this.props.name}></Chegada>
  }
}

function Opa(props) {
  return <div>
    <BoasVindas name={props.name}></BoasVindas>
    <BoasVindas name={props.name}></BoasVindas>
  </div>

}

root.render(
  <div>
    <Opa name='Pessoa 01'></Opa>
    <Opa name='Pessoa 04'></Opa>
  </div>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
