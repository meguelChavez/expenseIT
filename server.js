require("dotenv").config();
const keys = require("./config/keys")
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const authRoutes = require("./routes/auth-routes")
const apiRoutes = require("./routes/api-routes")
const passportConfig = require("./config/passport-config")
const cookieSession = require("cookie-session")
const cookieParser = require('cookie-parser')
const cors = require('cors')
const passport = require("passport")

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieSession({
    maxAge: 3 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
}))

//initialize passport
app.use(passport.initialize())
app.use(passport.session())
const MONGODB_URI = keys.MongoDB.URI || "mongodb://localhost/expenseIT"

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, () => {
    console.log("connected to mongoDb")
}).catch(error => handleError(error));

app.use(cookieParser());
app.use(
    cors({
        origin: "http://localhost:3000", // allow to server to accept request from different origin
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true // allow session cookie from browser to pass through
    })
);

app.use(express.static('public'));

app.use("/auth", authRoutes)
app.use("/dashboard", apiRoutes)

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});




app.listen(PORT, () => {
    console.log(` server listening on port ${PORT}`);
})
