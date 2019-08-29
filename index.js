const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname,'frontend/build')))
app.get('/',(req, res) => {
    res.send('Fairly')
})
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/frontend/build/index.html'))
})

app.listen(process.env.PORT || 5000, () => {
    console.log('SErver is listening on the port now!!')
})