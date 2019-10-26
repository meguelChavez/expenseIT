const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    userName: {
        type: String,
        unique: true,
        required: true
    },
    googleId: String,
    expenses: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Expense'
        }
    ]
})

const User = mongoose.model('User', userSchema)
module.exports = User