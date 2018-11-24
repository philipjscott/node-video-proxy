'use strict'

const port = process.env.PORT || 3000

const express = require('express')
const path = require('path')
const axios = require('axios')
const app = express()

app.use('/static', express.static(path.join(__dirname, './static')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './static/index.html'))
})

app.get('/video/:url', (req, res) => {
  const url = decodeURI(req.params.url)

  axios.interceptors.request.use(request => {
    console.log(request)

    return request
  })

  axios.get(url, {
    responseType: 'stream'
  })
    .then((stream) => {
      res.writeHead(stream.status, stream.headers)
      stream.data.pipe(res)
    })
    .catch(err => console.error(err.message))
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
