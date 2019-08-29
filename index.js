import express from 'express'
import path from 'path'
import cors from 'cors'
import bodyParser from 'body-parser'
const app = express()
app.use(cors())

app.use(express.static(path.join(__dirname,'frontend/build')))
app.get('/api',(req, res) => {
    res.send({Name:'Fairly'})
})
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/frontend/build/index.html'))
})
let PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log('SErver is listening on the port now!!', PORT)
})