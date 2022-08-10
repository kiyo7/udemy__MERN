import axios from "axios";
import { FormEvent, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

export const Register: React.FC = () => {
  const username = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const confirmPassword = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (password.current?.value !== confirmPassword.current?.value) {
      confirmPassword.current?.setCustomValidity("パスワードが違います。");
    } else {
      try {
        const user = {
          username: username.current?.value,
          email: email.current?.value,
          password: password.current?.value,
        };
        await axios.post("auth/register", user);
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">Real SNS</h3>
          <span className="registerDesc">本格的なSNSを自分の手で</span>
        </div>
        <div className="registerRight">
          <form onSubmit={(e) => handleSubmit(e)} className="registerBox">
            <p className="registerMsg">新規登録はこちら</p>
            <input
              type="text"
              className="registerInput"
              placeholder="ユーザー名"
              required
              ref={username}
            />
            <input
              type="email"
              className="registerInput"
              placeholder="メールアドレス"
              required
              ref={email}
            />
            <input
              type="password"
              className="registerInput"
              placeholder="パスワード"
              required
              minLength={6}
              ref={password}
            />
            <input
              type="password"
              className="registerInput"
              placeholder="確認用パスワード"
              required
              minLength={6}
              ref={confirmPassword}
            />
            <button type="submit" className="registerButton">
              サインアップ
            </button>
            <button
              onClick={() => {
                navigate("/login");
              }}
              className="registerRegisterButton"
            >
              ログインする
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
