
import app from './backend/server'

let PORT = process.env.PORT || 5000


app.listen(PORT, () => {
    console.log('SErver is listening on the port now!!!', PORT)
})

