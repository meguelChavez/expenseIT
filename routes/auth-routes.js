const router = require("express").Router();
const passport = require("passport");
const ClientURL = process.env.ClientURL || "http://localhost:3000";

// router.post("/login", (req, res) => {

// })

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(ClientURL);
});

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile"],
    prompt: "select_account"
  })
);

router.get(
  "/google/redirect",
  passport.authenticate("google", {
    successRedirect: ClientURL,
    failureRedirect: "/auth/login/failed"
  })
);

router.get("/login/success", (req, res) => {
  console.log("dashboard");
  console.log(req.user);
  if (req.user) {
    res.json({
      cookies: req.cookies,
      message: "user has succesfully authenticated",
      success: true,
      user: req.user
    });
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "user failed to authenticate."
  });
});

module.exports = router;
