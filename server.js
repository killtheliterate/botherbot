import http from 'http'
import Router from 'router'
import finalHandler from 'finalhandler'
import finalHandler from 'finalhandler'

// Routes
// ---------------------------------------------------------------------------

const router = new Router()

router.get('/')

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
