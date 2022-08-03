import { Post } from "../Post/Post";
import { Share } from "../Share/Share";
import "./TimeLine.css";

export const TimeLine: React.FC = () => {
  return (
    <div className="timeline">
      <div className="timelineWrapper">
        <Share />
        <Post />
      </div>
    </div>
  );
};
