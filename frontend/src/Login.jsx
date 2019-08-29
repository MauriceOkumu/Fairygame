import React , { Component }from 'react';
import Axios from 'axios';
// import axios from 'axios'

class Login extends Component  {
    constructor() {
      super()
      this.state = {
          data: {}
      }
    }
    componentDidMount () {
     Axios.get('/api', {
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
      })
      .then(data => {

          console.log('Data => ',data)
          return data
      })
      .then(values => {
        console.log('Values', values)
        this.setState({
            data:values.data
        })
      })
    }
    render() {
        const { data } = this.state
        return (
            <div className="Login">
            <div>{data.Name}</div>
              Hello
            </div>
          );
    }
}

export default Login;
