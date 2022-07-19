import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import ListProductComponent from './components/ListProductComponent'
import CreateProductComponent from './components/CreateProductComponent'
import DeleteProductComponent from './components/DeleteProductComponent';
import UpdateProductComponent from './components/UpdateProductComponent';
import Login from './components/Login';


function App() {
  return (<div>
    <Router>
      <HeaderComponent />
      <div className="container">
        <Switch>
          <Route path="/" exact component={Login} ></Route>
          <Route path="/" exact component={ListProductComponent} ></Route>
          <Route path="/add-product" component={CreateProductComponent} ></Route>
          <Route path="/delete-product/:codigo" component={DeleteProductComponent} ></Route>
          <Route path="/update-product/:codigo" component={UpdateProductComponent} ></Route>

        </Switch>
      </div>
      <FooterComponent />
    </Router>

  </div>
  );
}

export default App;