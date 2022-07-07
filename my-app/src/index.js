import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Ola(props) {
  return <h1>Opa! {props.name} {props.sobrenome}</h1>
}

const element = <Ola name='João' sobrenome='Souza'></Ola>

root.render(
  element,
  document.getElementById('root')
)


  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
