import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import ListProductComponent from './components/ListProductComponent'
import CreateProductComponent from './components/CreateProductComponent'
import CreateProductComponentFunc from './components/CreateProductComponentFunc'

import DeleteProductComponent from './components/DeleteProductComponent';
import UpdateProductComponent from './components/UpdateProductComponent';
import Login from './components/Login';
import { useEffect, useState } from 'react';
import AuthServices from './services/AuthServices';
import CreateProductFormHook from './components/CreateProductFormHook';

function App() {

  const [auth, setAuth] = useState(false)


  useEffect(() => {
    let token_user = AuthServices.getLoggedUser()
    if (token_user)
      setAuth(true)
    else
      setAuth(false)
  })

  return (<div>
    <Router>
      <HeaderComponent />
      <div className="container">
        <Switch>
          <Route path="/" exact component={Login} ></Route>
          <Route path="/products" exact component={ListProductComponent} ></Route>
          <Route path="/add-product" >
            {auth ? <CreateProductComponentFunc /> : <Login />}
          </Route>
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