import { useEffect, useState } from "react";
import SidebarUser from "../components/Account/SidebarUser";
import Navbar from "../components/navbar/Navbar";

const Account = ({ children }) => {
  const [scrollTop, setScrollTop] = useState(0);
  console.log(scrollTop);
  const handleScroll = () => {
    const currentScrollTop =
      window.pageYOffset || document.documentElement.scrollTop;
    setScrollTop(currentScrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Navbar />
      <div className="flex relative w-full">
        <SidebarUser topPosition={scrollTop} />
        <>{children}</>
      </div>
    </>
  );
};

export default Account;
