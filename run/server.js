// Libraries
// ---------------------------------------------------------------------------

// vendor
import http from 'http'
import Router from 'router'
import finalHandler from 'finalhandler'

// src
import parseBody from '../src/parse'
import receive from '../src/msg_receive'

// Routes
// ---------------------------------------------------------------------------

const router = new Router()

router.post('/inbound', parseBody, receive)

// Server
// ---------------------------------------------------------------------------

const server = http.createServer(function (req, res) {
  router(req, res, finalHandler(req, res))
})

// Export
// ---------------------------------------------------------------------------

export default server
