import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Stage , Text} from '@inlet/react-pixi'
import { style } from './gameStyles'

class Fairy extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render () {
        const { user } = this.props.auth
        const welcomeText = `Hello ${user.name}-Fairy`
        const Welcome = () =><Text text={welcomeText} style={style} x={100}/>
        console.log('User =>', user)
        return (
            
            <Stage width={window.innerWidth} height={window.innerHeight} options={
                { backgroundColor:  0x1099bb , antialias: true, interactive: true ,resolution: 1}
                }>
                <Welcome />
             </Stage>
        )
    }
}
const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(Fairy);