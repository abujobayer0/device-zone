import SellerDashboard from "../components/sellerDashboard";

const Dashboard = ({ children }) => {
  return (
    <>
      <SellerDashboard>{children}</SellerDashboard>
    </>
  );
};

export default Dashboard;
