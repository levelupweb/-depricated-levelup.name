const express = require('express')
const next = require('next')
const cookie = require('react-cookie')
const { parse } = require('url')
const cookieParser = require('cookie-parser')
const app = next({ dev: true, dir: process.cwd() })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()
  server.use(cookieParser())

  server.get('*', (req, res) => {
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl 
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})