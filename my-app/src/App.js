import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import ListProjectComponent from './components/ListProjectComponent';
import CreateProjectComponent from './components/CreateProjectComponent';
import CreateProjectComponentFunc from './components/CreateProjectComponentFunc';

import DeleteProjectComponent from './components/DeleteProjectComponent';
import UpdateProjectComponent from './components/UpdateProjectComponent';
import Login from './components/Login';
import { useEffect, useState } from 'react';
import AuthServices from './services/AuthServices';
import CreateProjectFormHook from './components/CreateProjectFormHook';

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
          <Route path="/projects" exact component={ListProjectComponent} ></Route>
          <Route path="/add-project" >
            {auth ? <CreateProjectComponent /> : <Login />}
          </Route>
          <Route path="/delete-project/:codigo" component={DeleteProjectComponent} ></Route>
          <Route path="/update-project/:codigo" component={UpdateProjectComponent} ></Route>
        </Switch>
      </div>
      <FooterComponent />
    </Router>

  </div>
  );
}

export default App;