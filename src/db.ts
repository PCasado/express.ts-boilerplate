import * as mongoose from 'mongoose'

mongoose.Promise = global.Promise
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)
mongoose.set('useNewUrlParser', true)

// Get user and password from environment (These are required if the mongod is running with auth required)
const dbuser = process.env.dbuser,
      dbpass = process.env.dbpass
// Get Database Connection URI from environment
const dburi = process.env.dburi || 'mongodb://localhost:27017/test'

let db = {
  connection : mongoose.connection,
  connect () : void {
    // Mongoose's connection
    mongoose.connect(dburi,{ user: dbuser, pass: dbpass, useNewUrlParser: true }).then(
      () => { console.log('Connected to MongoDB') },
      err => { console.log(`An error has occurred! \n${err}`) }
    )
  }
}

export { db }
