const router = require("express").Router();

const User = require("../models/User");
const bcrypt = require("bcrypt");

//register
router.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = await new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    const user = await newUser.save();

    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// //login

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(404).send("User Not Found");

    const compared = await bcrypt.compare(req.body.password, user.password);

    if (!compared) return res.status(400).send("invalid password");

    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
