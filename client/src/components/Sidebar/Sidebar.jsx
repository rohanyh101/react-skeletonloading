import React from "react";
import {
  Menu,
  Home,
  Explore,
  Subscriptions,
  VideoLibrary,
} from "@mui/icons-material";
import "./Sidebar.css";
import Skeleton from "../skeleton/skeleton";

const Sidebar = ({ isLoading }) => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <Menu />
        {/* JSX expressions must have one parent element */}
        {isLoading ? (
          <Skeleton type="menu" />
        ) : (
          <>
            <div className="sidebarItem active">
              <Home />
              <span>Home</span>
            </div>
            <div className="sidebarItem">
              <Explore />
              <span>Explore</span>
            </div>
            <div className="sidebarItem">
              <Subscriptions />
              <span>Subsriptions</span>
            </div>
            <div className="sidebarItem">
              <VideoLibrary />
              <span>Library</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
