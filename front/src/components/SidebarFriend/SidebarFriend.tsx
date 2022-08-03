import { User } from "../../types/type";
interface Props {
  user: User;
}

export const SidebarFriend: React.FC<Props> = ({ user }) => {
  return (
    <li className="sidebarFriend">
      <img
        src={user.profilePicture}
        alt="avatar"
        className="sidebarFriendImg"
      />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
};
