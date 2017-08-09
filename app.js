const { parse } = require('url')
const app = require('express')()
const server = require('http').Server(app)
const next = require('next')
const cookieParser = require('cookie-parser')

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev: dev, dir: process.cwd() })
const nextHandler = nextApp.getRequestHandler()

nextApp.prepare().then(() => {
  app.use(cookieParser())

  app.get('*', (req, res) => {
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl 
    return nextHandler(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})