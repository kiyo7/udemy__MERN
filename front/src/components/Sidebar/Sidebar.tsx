import {
  Home,
  Search,
  Notifications,
  MessageRounded,
  Person,
  Bookmark,
  Settings,
} from "@mui/icons-material";
import { SidebarFriend } from "../SidebarFriend/SidebarFriend";

import { Link } from "react-router-dom";

import "./Sidebar.css";
import { AuthContext } from "../../state/AuthContext";
import { useContext } from "react";

export const Sidebar: React.FC = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Home className="sidebarIcon" />
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <span className="sidebarListItemText">ホーム</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Search className="sidebarIcon" />
            <span className="sidebarListItemText">検索</span>
          </li>
          <li className="sidebarListItem">
            <Notifications className="sidebarIcon" />
            <span className="sidebarListItemText">通知</span>
          </li>
          <li className="sidebarListItem">
            <MessageRounded className="sidebarIcon" />
            <span className="sidebarListItemText">メッセージ</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">ブックマーク</span>
          </li>
          <li className="sidebarListItem">
            <Person className="sidebarIcon" />
            <Link
              to="profile/kiyo"
              style={{ textDecoration: "none", color: "black" }}
            >
              <span className="sidebarListItemText">プロフィール</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Settings className="sidebarIcon" />
            <span className="sidebarListItemText">設定</span>
          </li>
        </ul>
        <hr className="sidebarHr" />
        {user && (
          <ul className="sidebarFriendList">
            {user.followings.map((friend: any, i: any) => {
              return <SidebarFriend key={i} user={friend} />;
            })}
          </ul>
        )}
      </div>
    </div>
  );
};
