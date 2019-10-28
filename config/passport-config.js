const passport = require("passport")
const GoogleStrategy = require("passport-google-oauth20")
const keys = require("./keys")
const User = require("../models/user")

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        console.log(user)
        done(null, user)
    }).catch((err) => {
        done(new Error(err))
    })
})

passport.use(
    new GoogleStrategy({
        callbackURL: "/auth/google/redirect",
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
    }, (accessToken, refreshToken, profile, done) => {
        console.log("passport cb")
        // console.log(profile)
        User.findOne({ googleId: profile.id }).then((userData) => {
            console.log(userData)
            if (!userData) {
                console.log('creating new user')
                const user = new User({
                    userName: profile.displayName,
                    googleId: profile.id
                })
                User.create(user).then(data => {
                    console.log("new user")
                    console.log(data)
                    done(null, data)
                }).catch(err => console.log(err))
            } else {
                done(null, userData)
            }
        }).catch((err) => console.log(err))
        // new User({
        //     userName: profile.displayName,
        //     googleId: profile.id
        // }).save().then((userData) => {
        //     console.log("saved")
        //     console.log('new user', userData)
        // })
    })
)