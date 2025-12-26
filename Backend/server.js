import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import authrouter from "./routes/authrouter.js"
import examroute from "./routes/examroute.js"
import questionroute from './routes/questionroute.js'
import Result from "./models/Result.js"
import result from "./routes/resultroute.js"
import cors from "cors"
const app = express()
dotenv.config()
const port = process.env.PORT
//connection to the database
connectDB();

//middleware
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/api/auth',authrouter)
app.use('/api/exam',examroute)
app.use('/api/question',questionroute)
app.use('/api/result',result)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
