import { Online } from "../Online/Online";
import "./Rightbar.css";

import { Users } from "../../dummyData";

export const Rightbar: React.FC = () => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="eventContainer">
          <img src="/assets/star.png" alt="starIcon" className="starImg" />
          <span className="eventText">
            <b>フォロワー限定</b>イベント開催中!
          </span>
        </div>
        <img src="/assets/event.jpeg" alt="eventImg" className="eventImg" />
        <h4 className="rightbarTitle">オンラインの友達</h4>
        <ul className="rightbarFriendList">
          {Users.map((user) => {
            return <Online key={user.id} user={user} />;
          })}
        </ul>
        <p className="promotionTitle">プロモーション広告</p>
        <img
          src="/assets/promotion/promotion1.jpeg"
          alt="promotion"
          className="rightbarPromotionImg"
        />
        <p className="promotionName">ショッピング</p>

        <img
          src="/assets/promotion/promotion2.jpeg"
          alt="promotion"
          className="rightbarPromotionImg"
        />
        <p className="promotionName">カーショップ</p>
        <img
          src="/assets/promotion/promotion3.jpeg"
          alt="promotion"
          className="rightbarPromotionImg"
        />
        <p className="promotionName">株式会社わわわ</p>
      </div>
    </div>
  );
};
