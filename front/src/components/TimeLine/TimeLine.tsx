import { useEffect, useState } from "react";
import { Post } from "../Post/Post";
import { Share } from "../Share/Share";
import "./TimeLine.css";

import axios from "axios";
import { PostType } from "../../types/type";

interface Props {
  username?: string;
}

export const TimeLine: React.FC<Props> = ({ username }) => {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = username
        ? await axios.get(`/posts/profile/${username}`)
        : await axios.get<PostType[]>(
            "/posts/timeline/62e7e43141fd29fb885c677e"
          );
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="timeline">
      <div className="timelineWrapper">
        <Share />
        {posts.map((post) => {
          return <Post key={post._id} post={post} />;
        })}
      </div>
    </div>
  );
};
