const router = require("express").Router();
const ObjectId = require("mongoose").Types.ObjectId;
const User = require("../models/user");
const express = require("express");

const isAuthenticated = (req, res, next) => {
  if (!req.user) {
    res.status(401).json(req.user);
  } else {
    next();
  }
};

router.get("/", isAuthenticated, (req, res) => {
  console.log("redireceted");
  const payload = {
    cookies: req.cookies,
    message: "user has succesfully authenticated",
    success: true,
    user: req.user
  };
  res.status(200).json(payload);
});

router.get("/expenses", function(req, res) {
  console.log(req.user);
  console.log("expsnese");
  if (req.user) {
    User.find({ googleID: req.user.googleID }).then(function(data) {
      res.json(data);
    });
  } else {
    res.send("PLEASE LOGIN");
  }
});

router.post("/add_expense", function(req, res) {
  // console.log("body   **********")
  // console.log(req)
  console.log("addding");
  if (req.user) {
    console.log(req.user);
    console.log(req.body);
    const expense = {
      businessName: req.body.businessName,
      category: req.body.category,
      amount: req.body.amount,
      dueDate: req.body.dueDate,
      paidDate: req.body.paidDate,
      date: req.body.date
    };
    console.log(expense);
    User.findOneAndUpdate(
      { _id: req.user._id },
      {
        $push: {
          expenses:
            //  {
            //     expense
            // }
            req.body
        }
      },
      { new: true }
    ).then(data => {
      // console.log(data)
      res.json(data);
    });
  } else {
    res.send("PLEASE LOGIN");
  }
});

router.post("/update_expense", function(req, res) {
  console.log("updating   **********");
  console.log("addding");
  if (req.user) {
    // console.log(req.user);
    // console.log(req.body);
    const expense = {
      businessName: req.body.businessName,
      category: req.body.category,
      amount: req.body.amount,
      dueDate: req.body.dueDate,
      paidDate: req.body.paidDate,
      date: req.body.date
    };
    console.log(req.body.expenseId);
    console.log(expense);
    User.updateOne(
      { _id: req.user._id, "expenses._id": ObjectId(req.body.expenseId) },
      {
        $set: {
          expense
        }
      }
    ).then(data => {
      console.log(data);
      res.json(data);
    });
  } else {
    res.send("please login");
  }
});

router.put("/delete_expense", function(req, res) {
  console.log("delete***************");
  console.log(req.body.expenseId);
  if (req.user) {
    User.findOneAndUpdate(
      { _id: req.user._id },
      { $pull: { expenses: { _id: ObjectId(req.body.expenseId) } } },
      { new: true }
    ).then(data => console.log(data));
  } else {
    res.send("please login");
  }
});

module.exports = router;
