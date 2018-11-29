import * as mongoose from 'mongoose'

// Define Task schema
const Task = new mongoose.Schema({
  name: { type: String, required: true },
  priority: { type: Number, default: 0, min: 0, max: 2 },
  created_at: { type: Date, default: Date.now() }
})

// Generate and register the Mongoose model from the schema
const taskModel = mongoose.model('Task', Task)

export { taskModel }
