import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import passport from 'passport'
import routes from './dbroutes/dbRoutes'

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

import './test/test_helper'
require('./passport/passport')(passport)


app.use('/users', routes)
app.get('/',(req, res) => {
    res.send('Hello')
})


export default app;