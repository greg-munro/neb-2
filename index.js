const express = require('express')
const app = express()
app.use(express.static(__dirname + '/dist'))

app.get('/*', (req, res, next) => {
  res.sendFile(path.join(__dirname + '/dist/index.html'))
})
app.listen(process.env.PORT || 4000)