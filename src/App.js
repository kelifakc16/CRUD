import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AddUser from './component/adduser';
import EditUser from './component/edituser';
import Home from './component/home';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add" component={AddUser} />
          <Route path="/edit" component={EditUser} />
        </Switch>
      </Router>
    </div>
  )
}


