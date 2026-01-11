import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import jwt from "jsonwebtoken";


passport.use(
    new GoogleStrategy({
        clinentID: process.env.GOOGLE_CLINT_ID,
        clintScript: process.env.GOOGEL_CLINT_SCRIPT,
        URL:"http://localhost:5000/auth/google/callback"
    },

    async(accessToken,refreshToken,profile,done)=>{

        try {
            console.log(profile)

            const googleId=profile.id;
            const email=profile.emails
            const name =profile.name

            const tokenn=jwt.sign(
                {
                    googleId,
                    email,

                },
                process.env.JWT_SECRET,
                {expiresIn:"id"}
            );
            return done(null,{
                tokenn,
                user:{googleId,email,name},
        })
            
        } catch (error) {
            console.log(error)
            
        }

    }
)
);