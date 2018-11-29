import { Router } from 'express'
// Import all the routes
import { taskRouter } from './tasks'

// Use all these routes in the router
let apiRouter = Router()
  .use('/tasks', taskRouter)
//.use('/anotherpath', another_route)

export { apiRouter }