import body from 'body/form'

function parse (req, res, next) {
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

export default parse
