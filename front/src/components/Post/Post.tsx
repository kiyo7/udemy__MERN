import { Favorite, FavoriteBorder, MoreVert } from "@mui/icons-material";

import { Users } from "../../dummyData";

import "./Post.css";

import { PostType } from "../../types/type";
import { useState } from "react";

interface Props {
  post: PostType;
}

export const Post: React.FC<Props> = ({ post }) => {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={
                Users.filter((user) => user.id === post.id)[0].profilePicture
              }
              alt="avatar"
              className="postProfileImg"
            />
            <span className="postUsername">
              {Users.filter((user) => user.id === post.id)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img src={post.photo} alt="avatar" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <span className="likeIcon" onClick={handleLike}>
              {isLiked ? <Favorite htmlColor="red" /> : <FavoriteBorder />}
            </span>
            <span className="postLikeCounter">
              {like}人がいいねを押しました
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment}:コメント</span>
          </div>
        </div>
      </div>
    </div>
  );
};
