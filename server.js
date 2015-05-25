import http from 'http'
import Router from 'router'
import finalHandler from 'finalhandler'
// import bodyParser from 'body-parser'
import body from 'body/form'
// import config from './config/twilio'

// Parse
// ---------------------------------------------------------------------------

function parseBody (req, res, next) {
  body(req, function (err, body) {
    if (err) {
      error('err:', err)
      req.body = null
      return next()
    }
    req.body = body
    next()
  })
}

// Routes
// ---------------------------------------------------------------------------

const router = new Router()

router.post('/inbound', parseBody, function(req, res) {
  // let {sid, token} = config
  // let client = require('twilio')(sid, token);
  console.log(req.body)

  // res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  // res.end('Hello World!')
})

// router.post('/fallback', function() {
//   let {sid, token} = config
//   let client = require('twilio')(sid, token);

//   res.setHeader('Content-Type', 'text/plain; charset=utf-8')
//   res.end('Hello World!')
// })


// Server
// ---------------------------------------------------------------------------
// twilio shiz
// http://bit.ly/1Fn4uVR

const server = http.createServer(function (req, res) {
  router(req, res, finalHandler(req, res))
})

// Export
// ---------------------------------------------------------------------------

export default server
