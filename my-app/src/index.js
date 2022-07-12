import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ListaService from './services/ListaService';

const root = ReactDOM.createRoot(document.getElementById('root'));


class Opa extends React.Component {
  render() {
    const mystyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "50px",
      fontFamily: "Arial"
    };

    return (<div>
      <h1 style={mystyle}>Opa, {this.props.name}</h1>
    </div>
    )
  }
}


        root.render(
        <Opa />
        )



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();