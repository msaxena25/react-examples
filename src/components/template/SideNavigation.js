import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";

import "react-pro-sidebar/dist/css/styles.css";
import { FaGem, FaHeart } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const SideNavigation = () => {
  const [collapsed, setCollapsed] = useState(false);

  const styles = {
    sideBarHeight: {
      height: "100vh",
    },
    menuIcon: {
      float: "right",
      margin: "10px",
    },
  };
  const onClickMenuIcon = () => {
    setCollapsed(!collapsed);
  };
  return (
    <ProSidebar style={styles.sideBarHeight} collapsed={collapsed}>
      <SidebarHeader>
        <div style={styles.menuIcon} onClick={onClickMenuIcon}>
          <AiOutlineMenu />
        </div>
      </SidebarHeader>
      <Menu iconShape="square">
        <MenuItem icon={<FaGem />}>
          {" "}
          <Link to="/">Stepper Component</Link>
        </MenuItem>
        <MenuItem icon={<FaGem />}>
          <Link to="/email">Email</Link>
        </MenuItem>
        <SubMenu title="Forms" icon={<FaHeart />}>
          <MenuItem>
            <Link to="/formikform">Formik Form</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/form">Form</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/basic">Simple Form</Link>
          </MenuItem>
        </SubMenu>
        <SubMenu title="AutoComplete" icon={<FaHeart />}>
          <MenuItem>
            <Link to="/typeahead">Typeahead</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/asynctypeahead">Async Typeahead</Link>
          </MenuItem>
        </SubMenu>
        <SubMenu title="Router" icon={<FaHeart />}>
          <MenuItem>
            <Link to="/routerA">Router A</Link>
          </MenuItem>
         
        </SubMenu>
      </Menu>
    </ProSidebar>
  );
};

export default SideNavigation;
