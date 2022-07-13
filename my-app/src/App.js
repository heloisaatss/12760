import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import ListProductComponent from './components/ListProductComponent'
import CreateProductComponent from './components/CreateProductComponent'

function App() {
  return (<div>
    <HeaderComponent />
    <div className='container'>
      <ListProductComponent />
      <CreateProductComponent />
    </div>
    <FooterComponent />
  </div>
  );
}

export default App;