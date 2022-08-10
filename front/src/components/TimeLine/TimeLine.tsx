import { useContext, useEffect, useState } from "react";
import { Post } from "../Post/Post";
import { Share } from "../Share/Share";
import "./TimeLine.css";

import axios from "axios";
import { PostType } from "../../types/type";
import { AuthContext } from "../../state/AuthContext";

interface Props {
  username?: string;
}

export const TimeLine: React.FC<Props> = ({ username }) => {
  const [posts, setPosts] = useState<PostType[]>([]);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = username
        ? await axios.get(`/posts/profile/${username}`)
        : await axios.get<PostType[]>(`/posts/timeline/${user._id}`);
      setPosts(
        response.data.sort((post1: any, post2: any) => {
          return (
            new Date(post2.createdAt).getTime() -
            new Date(post1.createdAt).getTime()
          );
        })
      );
    };
    fetchPosts();
  }, [user._id, username]);

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
