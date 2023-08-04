const MainSellerDash = () => {
  return (
    <div className="grid grid-cols-1 text-[#1f1e1f] md:grid-cols-2  w-full lg:grid-cols-3 gap-4 p-5">
      <div className="w-full bg-gray-100 p-5 rounded-lg shadow-sm">
        <h2 className="dashboard-title text-lg font-semibold">
          Yearly Revenue
        </h2>
        <p className="dashboard-amount text-2xl">$500,000</p>
      </div>
      <div className="w-full bg-gray-100 p-5 rounded-lg shadow-sm">
        <h2 className="dashboard-title text-lg font-semibold">
          Monthly Revenue
        </h2>
        <p className="dashboard-amount text-2xl">$42,000</p>
      </div>
      <div className="w-full bg-gray-100 p-5 rounded-lg shadow-sm">
        <h2 className="dashboard-title text-lg font-semibold">
          Weekly Revenue
        </h2>
        <p className="dashboard-amount text-2xl">$9,800</p>
      </div>
      <div className="w-full bg-gray-100 p-5 rounded-lg shadow-sm">
        <h2 className="dashboard-title text-lg font-semibold">Daily Revenue</h2>
        <p className="dashboard-amount text-2xl">$1,500</p>
      </div>
    </div>
  );
};

export default MainSellerDash;
