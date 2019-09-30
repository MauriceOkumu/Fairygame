import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import passport from 'passport'
import path from 'path'
import routes from './dbroutes/dbRoutes'

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

import './test/test_helper'
require('./passport/passport')(passport)


app.use('/users', routes)
app.use(express.static(path.join(__dirname,'../frontend/build')))

if(process.env.NODE_ENV === 'production') {
    
    app.get('*', (req, res) => {
        res.sendfile(path.join(__dirname +'../frontend/build/index.html'))
    })
}

export default app;