import { Router } from 'express'
import { taskModel } from '../models/Task'

let taskRouter = Router()
  // Handle GET 'api/tasks/'
  .get('/', (req, res) => {
    taskModel.find().then(
      (docs) => { res.status(200).json(docs) },
      (err) => { console.error(err.message); res.status(500).end(err.message); }
    )
  })
  // Handle GET 'api/tasks/:id'
  .get('/:id', (req, res) => {
    taskModel.findById(req.params.id).then(
      (doc) => { res.status(200).json(doc) },
      (err) => { console.error(err.message); res.status(500).end(err.message); }
    )
  })
  // Handle POST 'api/tasks/'
  .post('/', (req, res) => {
    taskModel.create(req.body).then(
      (doc) => { res.status(200).json(doc) },
      (err) => { console.error(err.message); res.status(500).end(err.message); }
    )
  })

export { taskRouter }