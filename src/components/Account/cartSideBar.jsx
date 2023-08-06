const CartSidebar = ({ cartItems, title, topPosition }) => {
  const totalProducts = cartItems?.length;
  const totalDiscountedPrice = cartItems?.reduce(
    (total, item) => total + parseInt(item.discountedPrice),
    0
  );
  const totalPrice = cartItems?.reduce(
    (total, item) => total + parseInt(item.price),
    0
  );
  const platformFee = 5;
  const finalPrice = totalDiscountedPrice + platformFee;
  const totalDiscountedPercent = totalPrice - totalDiscountedPrice;

  return (
    <div
      className={`md:col-span-1 w-full mb-4 md:min-h-screen  md:w-1/3 p-4  bg-gray-100 rounded-lg `}
    >
      <div
        className={` md:relative md:right-0 lg:px-6 lg:right-4 lg:fixed lg:w-1/4 lg:${
          topPosition > 100 ? " top-4  right-6 px-2" : "relative"
        } w-full`}
      >
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <div className="flex items-center justify-between mb-2">
          <p>Total Products:</p>
          <p>{totalProducts}</p>
        </div>
        <div className="flex items-center justify-between mb-2">
          <p>Total Price:</p>
          <p>${parseInt(totalPrice)}</p>
        </div>
        <div className="flex items-center justify-between mb-2">
          <p>Total Discount:</p>
          <p>${parseInt(totalDiscountedPercent)}</p>
        </div>
        <div className="flex items-center justify-between mb-2">
          <p>Discounted Price:</p>
          <p>${parseInt(totalDiscountedPrice)}</p>
        </div>
        <div className="flex items-center justify-between mb-2">
          <p>Platform Fee:</p>
          <p>${platformFee}</p>
        </div>
        <div className="border-t py-2">
          <div className="flex items-center justify-between">
            <p className="text-xl font-semibold">Final Price:</p>
            <p className="text-xl font-semibold">${parseInt(finalPrice)}</p>
          </div>
          <button className="w-full mt-4 bg-[#1f1e1f] text-white py-3 rounded">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
