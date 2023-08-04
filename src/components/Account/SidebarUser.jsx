import { useEffect, useState } from "react";
import {
  AiFillDashboard,
  AiFillFileAdd,
  AiFillMessage,
  AiFillSetting,
  AiOutlineMessage,
  AiOutlineShopping,
  AiOutlineShoppingCart,
} from "react-icons/ai";

import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
const SidebarUser = () => {
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    const checkWindowSize = () => {
      setToggle(window.innerWidth > 768);
    };

    checkWindowSize();

    window.addEventListener("resize", checkWindowSize);

    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);
  return (
    <div className="-z-10">
      <Sidebar collapsed={!toggle}>
        <Menu rootStyles={{ color: "#1f1e1f" }}>
          <MenuItem
            icon={<AiOutlineShoppingCart />}
            component={<Link to="/account" />}
          >
            Cart
          </MenuItem>
          <MenuItem
            icon={<AiFillMessage />}
            component={<Link to="/account/chat" />}
          >
            Chat
          </MenuItem>

          <MenuItem
            component={<Link to="/account/Settings" />}
            icon={<AiFillSetting />}
          >
            Settings
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default SidebarUser;
