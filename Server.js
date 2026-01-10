import express from "express"
import dotenv from  "dotenv"
import passport from "passport"


dotenv.config()

const app = express()

app.use(passport.initialize())

const port =process.env.PORT||3000;
app.listen(port,()=>{
 console.log(`http://localhost:${port}/`)
})


