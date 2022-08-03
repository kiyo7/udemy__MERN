import { User } from "../../types/type";

interface Props {
  user: User;
}

export const Online: React.FC<Props> = ({ user }) => {
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img
          src={user.profilePicture}
          alt="avatar"
          className="rightbarProfileImg"
        />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{user.username}</span>
    </li>
  );
};
