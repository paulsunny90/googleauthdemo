import dotenv from "dotenv";
dotenv.config();

import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import jwt from "jsonwebtoken";


passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL:`http://localhost:3000/auth/google/callback`,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const token = jwt.sign(
          { email: profile.emails[0].value },
          process.env.JWT_SECRET,
          { expiresIn: "1d" }
        );
        return done(null, { token });
      } catch (err) {
        return done(err);
      }
    }
  )
);

