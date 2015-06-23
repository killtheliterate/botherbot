import db from '../src/db'
import debug from 'debug'

const log = debug('botherbot:query')

db.createIndex({
  index: {
    fields: ['when'],
    name: 'when'
  }
}).catch(function(err) {
  log(err)
})

function query() {
  let now = Date.now()

  db.find({
    selector: {
      when: {$lt: now}
    }
  }).then(function (res) {
  }).catch(function (err) {
    log(err)
  })
}

export default query
