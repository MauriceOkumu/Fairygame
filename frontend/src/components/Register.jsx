import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { registerUser } from '../actions/authentication';
import classnames from 'classnames';


class Register extends Component {
    constructor () {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            errors: {}
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, password} = this.state;
        const user = {
            name,
            email,
            password
        }
        this.props.registerUser(user, this.props.history);
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        if(nextProps.auth.isAuthenticated) {
            this.props.history.push('/')
        }
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            })
        }
    }
    componentDidMount() {
        if(this.props.auth.isAuthenticated) {
            this.props.history.push('/')
        }
    }

    render() {
        const { errors , name, email, password} = this.state; 
        return (
            <div className="container">
                <form onSubmit={ this.handleSubmit }>
                    <div className="form-group">
                        <input type="text" placeholder="name" name="name"
                        className={classnames('form-control form-control-lg', {
                        'is-invalid': errors.name
                       })}
                      onChange ={this.handleInputChange }
                         value={ name }  className="form-control"/>
                         {errors.name && (<div classnames="invalid-feedback">{errors.name}</div>)}
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="email" 
                         className={classnames('form-control form-control-lg', {
                            'is-invalid': errors.email
                           })}
                        onChange ={this.handleInputChange }
                         value={ email } name="email" className="form-control"/>
                         {errors.email && (<div classnames="invalid-feedback">{errors.email}</div>)}
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="password" 
                         className={classnames('form-control form-control-lg', {
                            'is-invalid': errors.password
                           })}
                        onChange ={this.handleInputChange }
                         value={ password} name="password" className="form-control"/>
                         {errors.password && (<div classnames="invalid-feedback">{errors.password}</div>)}
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Register</button>
                    </div>    
                </form>
            </div>
        )
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth
});

const mapDispatchToProps = dispatch => bindActionCreators({registerUser}, dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(Register);