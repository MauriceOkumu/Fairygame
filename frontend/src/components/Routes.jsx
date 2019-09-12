import React, { Component } from 'react'
import { BrowserRouter , Route, NavLink, Switch} from 'react-router-dom';
// import { connect } from 'react-redux';;
// import PropTypes from 'prop-types';
// import { bindActionCreators } from 'redux';
import Login from './Login'
import '../css/routes.css'

class Routes extends Component {
    render() {
        const guestLinks = (
            <ul className="navbar-nav ml-auto">
                   <li className="nav-item">
                     <NavLink exact activeClassName="active" to="/">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName="active" to="/login">Login</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName="active" to="/add">Register</NavLink>
                  </li>
                </ul>
          )
        return (
            <BrowserRouter>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Awesome</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    { guestLinks }
                </div>
            </nav>
            <Switch>
              <Route exact path="/login" component={ Login } />
            </Switch>
          </BrowserRouter>
        )
    }
}

export default Routes;