import SidebarUser from "../components/Account/SidebarUser";
import Navbar from "../components/navbar/Navbar";

const Account = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="flex w-full">
        <SidebarUser />
        <>{children}</>
      </div>
    </>
  );
};

export default Account;
