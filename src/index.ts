// App class import
import { App } from './app'
// DB object import
import { db } from './db'
// Get environment variables
const PORT = process.env.PORT || 3000
// Initialize new App
const app = new App()
// Connect to database
db.connect()

app.express.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})