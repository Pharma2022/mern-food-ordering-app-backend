import express, {Request,Response} from 'express'
import cors from 'cors'
import "dotenv/config"
import mongoose from 'mongoose'
import myUserRoute from './routes/MyUserRoute'
const PORT = 7000

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(()=>console.log(`Connected to database`))

const app = express()

app.use(express.json())
app.use(cors())
app.get('/health',async (req:Request,res:Response)=>{
    res.send({message:'health ok'})
})

app.use('/api/my/user',myUserRoute)

app.listen(PORT, () => console.log(`Sever started on localhost:${PORT}!`))