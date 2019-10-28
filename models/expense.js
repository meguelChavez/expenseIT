const mongoose = require("mongoose")
const Schema = mongoose.Schema

const expenseSchema = new Schema({
    businessName: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    amouont: {
        type: Number,
        required: true
    },
    dueDate: {
        type: Date,
    },
    paidDate: {
        type: Date,
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