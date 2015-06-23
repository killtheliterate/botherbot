import db from './db'
import pouchCollate from 'pouchdb-collate'
import debug from 'debug'

const log = debug('botherbot:msg_received')

function receive (req, res) {
  let cookies = req.headers.cookie
  let sid = req.body.AccountSid
  let from = req.body.From
  let body = req.body.Body
  let when = Date.now() // @TODO
  // tomorrow
  // at
  // next {week/month/}
  // on {date}

  log(cookies)

  let record = {
    message: body,
    from: {
      vendor: 'twilio',
      number: from
    },
    when: when
  }

  record._id = pouchCollate
    .toIndexableString([record.when, record.from.number, record.from.vendor])

  db.put(record).then(function(record) {
    log('record: ', record)
    let cookie = 'foo'

    res.writeHead(200, {
      'Set-Cookie': `${cookie}`,
      'Content-Type': 'text/xml'
    })
    // response.setHeader("Set-Cookie", ["type=ninja", "language=javascript"]);
    res.write('<Response><Message>Alright, I\'ll remind you.</Message></Response>')
    res.end()
  })
}

export default receive
