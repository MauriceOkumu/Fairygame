import React, { Component } from 'react'
import { BrowserRouter , Route, NavLink, Switch} from 'react-router-dom';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux';
import { logoutUser } from '../actions/authentication'
import Login from './Login'
import Register from './Register'
import Fairy from '../gamelogic/fairy'
import '../css/routes.css'

class Routes extends Component {
    onLogout = (e) => {
      console.log('Props', this.props)
     this.props.logoutUser(this.props.history)
  
    }
    render() {
      const { isAuthenticated } = this.props.auth;
      const authLinks = (
        <div>
          <ul className="navbar-nav ml-auto">
          <li  className="nav-item">
                <NavLink activeClassName="active" to="/cargame">Car Game</NavLink>
          </li>
          <li  className="nav-item">
                <NavLink activeClassName="active" to="/fairyland">FairyLand</NavLink>
          </li>
          
          <li></li>
          <li  className="nav-item">
            <NavLink exact activeClassName="active"  onClick={this.onLogout} to="/">Logout </NavLink>
          </li>
        </ul>
        </div>
      )

        const guestLinks = (
            <ul className="navbar-nav ml-auto">
                   <li className="nav-item">
                     <NavLink exact activeClassName="active" to="/">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName="active" to="/login">Login</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName="active" to="/register">Register</NavLink>
                  </li>
                </ul>
          )
        return (
            <BrowserRouter>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Awesome</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    { isAuthenticated ? authLinks : guestLinks }
                </div>
            </nav>
            <Switch>
              <Route exact path="/login" component={ Login } />
              <Route exact path="/register" component={ Register } />
              <Route exact path="/fairyland" component={ Fairy } />
            </Switch>
          </BrowserRouter>
        )
    }
}
Routes.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = dispatch => bindActionCreators({logoutUser}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Routes);