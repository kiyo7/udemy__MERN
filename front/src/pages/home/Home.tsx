import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Topbar } from "../../components/Topbar/Topbar";

import "./Home.css";

export const Home = () => {
  return (
    <>
      <Topbar />

      <div className="homeContainer">
        <Sidebar />
      </div>
    </>
  );
};
