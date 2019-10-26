const mongoose = require("mongoose")
const Schema = mongoose.Schema

const expenseSchema = new Schema({
    businessName: {
        type: String,
        required: true
    },
    amouont: {
        type: Number,
        required: true
    },
    dueDate: {
        type: Date,
        required: true
    },
    paidDate: {
        type: Date,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Expense = mongoose.model('Expense', expenseSchema)

module.exports = Expense