import PouchDB from 'pouchdb'
import pouchdbFind from 'pouchdb-find'

PouchDB.plugin(pouchdbFind)
PouchDB.debug.enable('pouchdb:find')

const database = new PouchDB('database/bothers')

export default database
