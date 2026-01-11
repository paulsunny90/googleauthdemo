import express from "express"
import dotenv from  "dotenv"
import passport from "passport"
import router from "./Routes/auth.routes.js"
import profileRoutes from "./routes/profile.routes.js"


dotenv.config()

const app = express()


app.use(passport.initialize())

app.use("/auth",router)
app.use("/api", profileRoutes);

const port =process.env.PORT||3000;
app.listen(port,()=>{
 console.log(`http://localhost:${port}/`)
})


