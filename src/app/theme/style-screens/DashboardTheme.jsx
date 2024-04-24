import { useState } from "react";
import "./DashboardTheme.css";
import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header/Header";
export default function DashboardTheme(props) {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div>
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div className="page-content">
        <Header setShowSidebar={setShowSidebar} />
        <div className="page-content-items">{props.children}</div>
      </div>
    </div>
  );
}
