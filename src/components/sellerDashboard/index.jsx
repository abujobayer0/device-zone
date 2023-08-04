import Navbar from "../navbar/Navbar";
import SidebarSeller from "./sidebar";

const SellerDashboard = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="flex ">
        <SidebarSeller />
        {children}
      </div>
    </>
  );
};

export default SellerDashboard;
