import db from '../src/db'

// pouchdb-find is blowing up

db.createIndex({
  index: {
    fields: ['when'],
    name: 'when'
  }
}).catch(function(err) {
  console.log(err)
})

function query() {
  let now = Date.now()

  console.log('running query')

  db.find({
    selector: {
      when: {$lt: now}
    }
  }).then(function (res) {
    console.log(res)
  }).catch(function (err) {
    console.log(err)
  })
}

export default query
