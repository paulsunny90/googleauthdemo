import express from "express";
import passport from "passport";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import "./config/config.passport.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());




app.use(passport.initialize());


app.use("/auth", authRoutes);

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/`);
});

