const passport = require("passport")
const GoogleStrategy = require("passport-google-oauth20")
const keys = require("./keys")
const User = require("../models/user")

passport.use(
    new GoogleStrategy({
        callbackURL: "/auth/google/redirect",
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
    }, (accessToken, refreshToken, profile, done) => {
        console.log("passport cb")
        // console.log(profile)
        User.find({ userName: profile.displayName }).then((userData) => {
            console.log(userData)
            if (userData === undefined || userData.length == 0) {
                console.log('creating new user')
                const user = new User({
                    userName: profile.displayName,
                    googleId: profile.id
                })
                User.create(user).then(data => {
                    console.log("new user")
                    console.log(data)
                }).catch(err => console.log(err))
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