import { useState } from "react";
import "./DashboardTheme.css";
import Sidebar from "../../../common/components/Sidebar";

export default function DashboardTheme(props) {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div>
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div className="page-content">
        {/* <Header setShowSidebar={setShowSidebar} /> */}
        <div className="page-content-items">{props.children}</div>
      </div>
    </div>
  );
}
