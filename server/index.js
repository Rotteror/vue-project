const express = require('express')
const consola = require('consola')
const cors = require('cors')

const {appsList, appsDetails} = require('./appData')

const app = express()

const host = 'localhost'
const port = 5000


app.use(cors())

app.get('/api/apps', (req, res) => {
  res.status(200).json(appsList)
})

app.get('/api/apps/:appKey', (req, res) => {
  const details = appsDetails[req.params.appKey]
  if (!details) {
    res.status(404)
  } else {
    res.status(200).json(details)
  }
})

app.listen(port, host)
consola.ready({
  message: `Server listening on http://${host}:${port}`,
  badge: true
})
