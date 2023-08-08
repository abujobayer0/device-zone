import { useEffect, useState } from "react";
import {
  AiFillHeart,
  AiFillMessage,
  AiFillSetting,
  AiOutlineDeliveredProcedure,
  AiOutlineShoppingCart,
} from "react-icons/ai";

import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
const SidebarUser = ({ topPosition }) => {
  const [toggle, setToggle] = useState(true);
  useEffect(() => {
    const checkWindowSize = () => {
      setToggle(window.innerWidth > 1050);
    };

    checkWindowSize();

    window.addEventListener("resize", checkWindowSize);

    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);
  return (
    <div className="relative w-1/6 lg:w-1/3 min-h-screen">
      <Sidebar collapsed={!toggle}>
        <Menu rootStyles={{ color: "#1f1e1f", background: "#fff" }}>
          <MenuItem
            icon={<AiOutlineShoppingCart />}
            component={<Link to="/account" />}
          >
            Cart
          </MenuItem>
          <MenuItem
            icon={<AiFillHeart />}
            component={<Link to="/account/wishlist" />}
          >
            Wishlist
          </MenuItem>
          <MenuItem
            icon={<AiOutlineDeliveredProcedure />}
            component={<Link to="/account/track" />}
          >
            Track Order
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
