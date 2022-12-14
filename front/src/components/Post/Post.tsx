import { Favorite, FavoriteBorder, MoreVert } from "@mui/icons-material";

import "./Post.css";

import { PostType } from "../../types/type";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { format } from "timeago.js";

import { User } from "../../types/type";

import { Link } from "react-router-dom";
import { AuthContext } from "../../state/AuthContext";

interface Props {
  post: PostType;
}

export const Post: React.FC<Props> = ({ post }) => {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState<User>();

  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get<User>(`/users?userId=${post.userId}`);
      setUser(response.data);
    };
    fetchUser();
  }, [post.userId]);

  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  const handleLike = async () => {
    try {
      await axios.put(`/posts/${post._id}/like`, { userId: currentUser?._id });
    } catch (err) {
      console.log(err);
    }
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${user?.username}`}>
              <img
                src={
                  user?.profilePicture
                    ? PUBLIC_FOLDER + user?.profilePicture
                    : PUBLIC_FOLDER + "/person/noAvatar.png"
                }
                alt="avatar"
                className="postProfileImg"
              />
            </Link>
            <span className="postUsername">{user?.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          {currentUser._id === post.userId && (
            <div className="postTopRight">
              <MoreVert />
            </div>
          )}
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          {post.img && (
            <img
              src={PUBLIC_FOLDER + post.img}
              alt="contents"
              className="postImg"
            />
          )}
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <span className="likeIcon" onClick={handleLike}>
              {isLiked ? <Favorite htmlColor="red" /> : <FavoriteBorder />}
            </span>
            <span className="postLikeCounter">
              {like}?????????????????????????????????
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment}:????????????</span>
          </div>
        </div>
      </div>
    </div>
  );
};
