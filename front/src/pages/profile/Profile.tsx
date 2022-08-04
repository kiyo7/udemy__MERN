import { Rightbar } from "../../components/Rightbar/Rightbar";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { TimeLine } from "../../components/TimeLine/TimeLine";
import { Topbar } from "../../components/Topbar/Topbar";
import "./Profile.css";

export const Profile: React.FC = () => {
  return (
    <>
      <Topbar />

      <div className="profile">
        <Sidebar />
        <div className="profileRitht">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src="/assets/post/3.jpeg"
                alt="cover"
                className="profileCoverImg"
              />
              <img
                src="/assets/person/1.jpeg"
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
            <TimeLine />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
};
