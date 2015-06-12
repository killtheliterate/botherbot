import db from './db'

import pouchCollate from 'pouchdb-collate'

function receive (req, res) {
  let sid = req.body.AccountSid
  let from = req.body.From
  let body = req.body.Body
  let when = Date.now()

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
    console.log('record: ', record)

    res.statusCode = 200
    res.setHeader('Content-Type', 'text/xml')
    res.write('<Response><Message>Hello there! Thanks for whatever.</Message></Response>')
    res.end()
  })
}

export default receive
