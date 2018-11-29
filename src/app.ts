import * as express from 'express'
import * as bp from 'body-parser'
import * as dateformat from 'dateformat'
import { apiRouter } from './routes/api'

class App {
  // Express app
  public express : express.Application

  constructor () {
    // Express app init
    this.express = express()
    // Run configuration function
    this.config()
  }

	private config () : void {
    // Make possible getting JSON from the requests
    this.express.use(bp.json())

  	// Enable CORS
  	this.express.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
  		res.header('Access-Control-Allow-Origin', '*')
  		res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  		next()
    })
    
  	// Simple Route Logging
  	this.express.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
  		console.log(`INCOMING ${req.method} REQUEST AT ${dateformat(new Date(), 'longTime', true)}: from ${req.connection.remoteAddress} into ${req.path}`)
  		next()
    })
    
    // Use API routes
    this.express.use('/api', apiRouter)
  }
}

export { App }