import "./Register.css";

export const Register: React.FC = () => {
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">Real SNS</h3>
          <span className="registerDesc">本格的なSNSを自分の手で</span>
        </div>
        <div className="registerRight">
          <div className="registerBox">
            <p className="registerMsg">新規登録はこちら</p>
            <input
              type="text"
              className="registerInput"
              placeholder="ユーザー名"
            />
            <input
              type="text"
              className="registerInput"
              placeholder="メールアドレス"
            />
            <input
              type="password"
              className="registerInput"
              placeholder="パスワード"
            />
            <input
              type="password"
              className="registerInput"
              placeholder="確認用パスワード"
            />
            <button className="registerButton">サインアップ</button>
            <button className="registerRegisterButton">ログイン</button>
          </div>
        </div>
      </div>
    </div>
  );
};
