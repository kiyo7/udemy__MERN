const express = require("express");

const app = express();

const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postsRoute = require("./routes/posts");
const uploadRoute = require("./routes/upload");
const PORT = 8000;

const path = require("path");

const mongoose = require("mongoose");

require("dotenv").config();

//db connect
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("DB connected!"))
  .catch((err) => console.log(err));

// middleware
app.use(express.json());

app.use("/images", express.static(path.join(__dirname, "public/images")));

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postsRoute);
app.use("/api/upload", uploadRoute);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => console.log("サーバー起動"));
