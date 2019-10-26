require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const authRoutes = require("./routes/auth-routes")
const passportConfig = require("./config/passport-config")

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));
app.use("/auth", authRoutes)

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});
const uri = process.env.MONGODB_URI || "mongodb://localhost/expenseIT"

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("connected to mongoDb")
}).catch(error => handleError(error));
// require('./routes/api-routes')(app);

app.listen(PORT, () => {
    console.log(` server listening on port ${PORT}`);
})
