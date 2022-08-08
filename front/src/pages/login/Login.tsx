import { FormEvent, useContext, useRef } from "react";
import { loginCall } from "../../dispatch";
import { AuthContext } from "../../state/AuthContext";
import { State } from "../../types/reducer";
import "./Login.css";

export const Login: React.FC = () => {
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const { user, isFetching, error, dispatch } = useContext<State>(AuthContext);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    loginCall(
      {
        email: email.current?.value,
        password: password.current?.value,
      },
      dispatch
    );
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Real SNS</h3>
          <span className="loginDesc">本格的なSNSを自分の手で</span>
        </div>
        <div className="loginRight">
          <form onSubmit={(e) => handleSubmit(e)} className="loginBox">
            <p className="loginMsg">ログインはこちら</p>
            <input
              type="email"
              className="loginInput"
              placeholder="メールアドレス"
              required
              ref={email}
            />
            <input
              type="password"
              className="loginInput"
              placeholder="パスワード"
              required
              minLength={6}
              ref={password}
            />
            <button type="submit" className="loginButton">
              ログイン
            </button>
            <span className="loginForgot">パスワードを忘れた方へ</span>
            <button className="loginRegisterButton">アカウント作成</button>
          </form>
        </div>
      </div>
    </div>
  );
};
