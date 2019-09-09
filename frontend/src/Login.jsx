import React , { Component }from 'react';
import Axios from 'axios';

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
      .then(values => {
        this.setState({
            data:values.data
        })
      })
      // console.log('Hurray', this)
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
