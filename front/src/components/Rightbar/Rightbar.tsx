import { Online } from "../Online/Online";
import "./Rightbar.css";

import { Users } from "../../dummyData";
import { User2 } from "../../types/type";

interface Props {
  user?: User2;
}

export const Rightbar: React.FC<Props> = ({ user }) => {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  const HomeRightbar = () => {
    return (
      <>
        <div className="eventContainer">
          <img
            src={PUBLIC_FOLDER + "/star.png"}
            alt="starIcon"
            className="starImg"
          />
          <span className="eventText">
            <b>フォロワー限定</b>イベント開催中!
          </span>
        </div>
        <img
          src={PUBLIC_FOLDER + "/event.jpeg"}
          alt="eventImg"
          className="eventImg"
        />
        <h4 className="rightbarTitle">オンラインの友達</h4>
        <ul className="rightbarFriendList">
          {Users.map((user) => {
            return <Online key={user.id} user={user} />;
          })}
        </ul>
        <p className="promotionTitle">プロモーション広告</p>
        <img
          src={PUBLIC_FOLDER + "/promotion/promotion1.jpeg"}
          alt="promotion"
          className="rightbarPromotionImg"
        />
        <p className="promotionName">ショッピング</p>

        <img
          src={PUBLIC_FOLDER + "/promotion/promotion2.jpeg"}
          alt="promotion"
          className="rightbarPromotionImg"
        />
        <p className="promotionName">カーショップ</p>
        <img
          src={PUBLIC_FOLDER + "/promotion/promotion3.jpeg"}
          alt="promotion"
          className="rightbarPromotionImg"
        />
        <p className="promotionName">株式会社わわわ</p>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">ユーザー情報</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">出身: </span>
            <span className="rightbarInfoKey">静岡</span>
          </div>
          <h4 className="rightbarTitle">あなたの友達</h4>
          <div className="rightbarFollowings">
            <div className="rightbarFollowing">
              <img
                src={PUBLIC_FOLDER + "/person/1.jpeg"}
                alt="avatar"
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">Kiyo</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src={PUBLIC_FOLDER + "/person/2.jpeg"}
                alt="avatar"
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">Tnaka</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src={PUBLIC_FOLDER + "/person/3.jpeg"}
                alt="avatar"
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">Nishioka</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src={PUBLIC_FOLDER + "/person/4.jpeg"}
                alt="avatar"
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">Kuga</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src={PUBLIC_FOLDER + "/person/5.jpeg"}
                alt="avatar"
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">Mikumo</span>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};
