import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../../utils/firebase.init";
const auth = getAuth(app);
const CartSidebar = ({ cartItems, title, topPosition }) => {
  const [user] = useAuthState(auth);
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
  const handlePrrchase = async () => {
    console.log(cartItems);
    await fetch(
      `https://device-zone.onrender.com/order/product?email=${user?.email}`,
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ products: cartItems }),
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  console.log(user);
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
          </div>{" "}
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4 mt-4">
            <div className="flex flex-col">
              <label
                htmlFor="cardNumber"
                className="text-sm font-medium text-gray-700"
              >
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                className="py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter card number"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col">
                <label
                  htmlFor="expiry"
                  className="text-sm font-medium text-gray-700"
                >
                  Expiry Date
                </label>
                <input
                  type="text"
                  id="expiry"
                  name="expiry"
                  className="py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="MM/YY"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="cvv"
                  className="text-sm font-medium text-gray-700"
                >
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  className="py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="CVV"
                />
              </div>
            </div>
            <button
              type="submit"
              onClick={handlePrrchase}
              className="bg-[#1f1e1f] text-white py-2 px-4 rounded-lg w-full mt-6"
            >
              Pay Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
