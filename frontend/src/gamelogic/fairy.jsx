import React, { Component } from 'react'
import { connect } from 'react-redux'

class Fairy extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render () {
        const { user } = this.props.auth
        console.log('User =>', user)
        return (
            <div>Hello {user.name}</div>
        )
    }
}
const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(Fairy);