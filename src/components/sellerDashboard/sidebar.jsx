import { useEffect, useState } from "react";
import {
  AiFillDashboard,
  AiFillFileAdd,
  AiFillSetting,
  AiOutlineMessage,
  AiOutlineOrderedList,
  AiOutlineShopping,
} from "react-icons/ai";

import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
const SidebarSeller = () => {
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
    <div className="">
      <Sidebar collapsed={!toggle}>
        <Menu
          rootStyles={{
            color: "#1f1e1f",
          }}
        >
          <MenuItem
            icon={<AiFillDashboard />}
            component={<Link to="/dashboard" />}
          >
            Dashboard
          </MenuItem>
          <MenuItem
            icon={<AiOutlineShopping />}
            component={<Link to="/dashboard/products" />}
          >
            Products
          </MenuItem>

          <MenuItem
            component={<Link to="/dashboard/product/add" />}
            icon={<AiFillFileAdd />}
          >
            Add Product
          </MenuItem>
          <MenuItem
            component={<Link to="/dashboard/manage/orders" />}
            icon={<AiOutlineOrderedList />}
          >
            Manage Orders
          </MenuItem>
          <MenuItem
            component={<Link to="/dashboard/chat" />}
            icon={<AiOutlineMessage />}
          >
            Chat
          </MenuItem>

          <MenuItem
            icon={<AiFillSetting />}
            component={<Link to="/dashboard/settings" />}
          >
            Settings
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default SidebarSeller;
