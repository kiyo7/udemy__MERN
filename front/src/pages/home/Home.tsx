import { Sidebar } from "../../components/Sidebar/Sidebar";
import { TimeLine } from "../../components/TimeLine/TimeLine";
import { Topbar } from "../../components/Topbar/Topbar";

import "./Home.css";

export const Home = () => {
  return (
    <>
      <Topbar />

      <div className="homeContainer">
        <Sidebar />
        <TimeLine />
      </div>
    </>
  );
};
