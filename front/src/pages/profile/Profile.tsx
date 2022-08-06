import { useEffect, useState } from "react";
import { Rightbar } from "../../components/Rightbar/Rightbar";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { TimeLine } from "../../components/TimeLine/TimeLine";
import { Topbar } from "../../components/Topbar/Topbar";
import "./Profile.css";

import axios from "axios";
import { User2 } from "../../types/type";
import { useParams } from "react-router-dom";

export const Profile: React.FC = () => {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  const [user, setUser] = useState<User2>();

  const username = useParams().username;

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get<User2>(`/users?username=${username}`);
      console.log(response);
      setUser(response.data);
    };
    fetchUser();
  }, [username]);
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src={user?.coverPicture || PUBLIC_FOLDER + "/post/3.jpeg"}
                alt="cover"
                className="profileCoverImg"
              />
              <img
                src={
                  user?.profilePicture || PUBLIC_FOLDER + "/person/noAvatar.png"
                }
                alt="profileIcon"
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user?.username}</h4>
              <span className="profileInfoDesc">{user?.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <TimeLine username={username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
};
