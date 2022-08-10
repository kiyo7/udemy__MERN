const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");

//post crate
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    return res.status(200).json(savedPost);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//post update

router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.updateOne({
        $set: req.body,
      });
      return res.status(200).json("Success post update");
    } else {
      return res.status(403).json("Permission denied");
    }
  } catch (err) {
    return res.status(403).json(err);
  }
});

//post delete
router.delete("/:id/delete", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.deleteOne();
      return res.status(200).json("Success post delete");
    } else {
      return res.status(403).json("Permission denied");
    }
  } catch (err) {
    return res.status(403).json(err);
  }
});

//get post

router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    return res.status(200).json(post);
  } catch (err) {
    return res.status(403).json(err);
  }
});

//likes post

router.put("/:id/like", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({
        $push: {
          likes: req.body.userId,
        },
      });

      return res.status(200).json("Liked success");
    } else {
      await post.updateOne({
        $pull: {
          likes: req.body.userId,
        },
      });
      return res.status(403).json("UnLiked success");
    }
  } catch (err) {
    return res.status(500).json(err);
  }
});

// relation post

router.get("/timeline/:userId", async (req, res) => {
  try {
    const currentUser = await User.findById(req.params.userId);
    const userPosts = await Post.find({ userId: currentUser._id });

    const friendPosts = await Promise.all(
      currentUser.followings.map((friendId) => {
        return Post.find({ userId: friendId });
      })
    );
    return res.status(200).json(userPosts.concat(...friendPosts));
  } catch (err) {
    return res.status(500).json(err);
  }
});

//profile timeline
router.get("/profile/:username", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    const posts = await Post.find({ userId: user._id });

    return res.status(200).json(posts);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
