import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import ListProductComponent from './components/ListProductComponent'
import CreateProductComponent from './components/CreateProductComponent'

function App() {
  return (<div>
    <Router>
      <HeaderComponent />
      <div className='container'>
        <Switch>
          <Route path="/" exact component={ListProductComponent} ></Route>
          <Route path="/add-product" exact component={CreateProductComponent} ></Route>
        </Switch>
      </div>
      <FooterComponent />
    </Router>
  </div>
  );
}

export default App;