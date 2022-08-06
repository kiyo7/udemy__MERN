const router = require("express").Router();
const User = require("../models/User");

//Create

router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("Updated!");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("Permission denied");
  }
});

//Delete
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("Deleted!");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("Permission denied");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    const { password, updatedAt, ...other } = user._doc;

    res.status(200).json(other);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// User follow
router.put("/:id/follow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const opponent = await User.findById(req.params.id);

      const myself = await User.findById(req.body.userId);

      if (!opponent.followers.includes(req.body.userId)) {
        await opponent.updateOne({
          $push: {
            followers: req.body.userId,
          },
        });
        await myself.updateOne({
          $push: {
            followings: req.params.id,
          },
        });
        return res.status(200).json("followed success");
      } else {
        return res.status(403).json("User Followed");
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(500).json("can't follow up myself");
  }
});

//User Unfollow

router.put("/:id/unfollow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const opponent = await User.findById(req.params.id);

      const myself = await User.findById(req.body.userId);

      if (opponent.followers.includes(req.body.userId)) {
        await opponent.updateOne({
          $pull: {
            followers: req.body.userId,
          },
        });
        await myself.updateOne({
          $pull: {
            followings: req.params.id,
          },
        });
        return res.status(200).json("unfollowed success");
      } else {
        return res.status(403).json("User UnFollowed");
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(500).json("can't unFollow up myself");
  }
});

module.exports = router;
