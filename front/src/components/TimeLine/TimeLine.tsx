import { Post } from "../Post/Post";
import { Share } from "../Share/Share";
import "./TimeLine.css";

import { Posts } from "../../dummyData";

export const TimeLine: React.FC = () => {
  return (
    <div className="timeline">
      <div className="timelineWrapper">
        <Share />
        {Posts.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
};
