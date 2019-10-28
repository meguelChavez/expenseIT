const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: {
    type: String,
    unique: true,
    required: true
  },
  googleId: String,
  expenses: [
    {
      businessName: {
        type: String,
        required: true
      },
      category: {
        type: String,
        required: true
      },
      amount: {
        type: Number,
        required: true
      },
      dueDate: {
        type: Date
      },
      paid: Boolean,
      paidDate: {
        type: Date
      },
      date: {
        type: Date,
        required: true
      },
      createdAt: {
        type: Date,
        default: Date.now
      }
    }
  ]
});

const User = mongoose.model("User", userSchema);
module.exports = User;
