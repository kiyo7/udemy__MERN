import { Analytics, Face, Gif, Image } from "@mui/icons-material";
import axios from "axios";
import { FormEvent, useContext, useRef, useState } from "react";
import { AuthContext } from "../../state/AuthContext";
import "./Share.css";

export const Share: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  const desc = useRef<HTMLInputElement>(null);

  const { user } = useContext(AuthContext);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current?.value,
      img: "",
    };

    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;

      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      axios.post("/posts", newPost);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src={
              user?.profilePicture
                ? PUBLIC_FOLDER + user?.profilePicture
                : PUBLIC_FOLDER + "/person/noAvatar.png"
            }
            alt="avatar"
            className="shareProfileImg"
          />
          <input
            type="text"
            className="shareInput"
            placeholder="今どうしてる？"
            ref={desc}
          />
        </div>
        <hr className="shareHr" />
        <form onSubmit={(e) => handleSubmit(e)} className="shareButtons">
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <Image className="shareIcon" htmlColor="blue" />
              <span className="shareOptionText">写真</span>
              <input
                type="file"
                id="file"
                accept=".png, .jpeg, .jpg"
                style={{ display: "none" }}
                onChange={(e) => setFile(e.target.files![0])}
              />
            </label>
            <div className="shareOption">
              <Gif className="shareIcon" htmlColor="hotpink" />
              <span className="shareOptionText">GIF</span>
            </div>
            <div className="shareOption">
              <Face className="shareIcon" htmlColor="green" />
              <span className="shareOptionText">気持ち</span>
            </div>
            <div className="shareOption">
              <Analytics className="shareIcon" htmlColor="red" />
              <span className="shareOptionText">投票</span>
            </div>
          </div>
          <button type="submit" className="shareButton">
            投稿
          </button>
        </form>
      </div>
    </div>
  );
};
