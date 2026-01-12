import express from "express";
import passport from "passport";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";


dotenv.config();
import "./config/config.passport.js";

const app = express();

app.use(cookieParser());

app.use(cors({origin:"http://localhost:5173/"}));
app.use(express.json());




app.use(passport.initialize());


app.use("/auth", authRoutes);

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/`);
});

