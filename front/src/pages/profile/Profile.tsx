import { Rightbar } from "../../components/Rightbar/Rightbar";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { TimeLine } from "../../components/TimeLine/TimeLine";
import { Topbar } from "../../components/Topbar/Topbar";
import "./Profile.css";

export const Profile: React.FC = () => {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src={PUBLIC_FOLDER + "/post/3.jpeg"}
                alt="cover"
                className="profileCoverImg"
              />
              <img
                src={PUBLIC_FOLDER + "/person/1.jpeg"}
                alt="profileIcon"
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Kiyo</h4>
              <span className="profileInfoDesc">ニートです</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <TimeLine username="佐藤" />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
};
