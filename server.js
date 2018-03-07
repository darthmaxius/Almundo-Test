import express from 'express'
import path from 'path'
import compression from 'compression'

const app = express()

app.use(compression())
app.use(express.static(__dirname + '/dist'))
app.use("/assets", express.static(__dirname + '/assets'))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'))
})


app.listen(8000)

console.log('Running at Port 8000')