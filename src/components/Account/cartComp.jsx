import CartSidebar from "./cartSideBar";
import { useGetData } from "../../hooks/useFetch";
import { ImCross } from "react-icons/im";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import app from "../../utils/firebase.init";
import { useEffect, useState } from "react";
const auth = getAuth(app);
const CartComp = () => {
  const [user] = useAuthState(auth);
  const { data: cartItems, refetch } = useGetData(
    `/cart?email=${user?.email} `
  );
  console.log(cartItems && cartItems);
  const handleRemoveFromCart = async (e) => {
    console.log(e);
    try {
      await fetch(
        `http://localhost:7000/cart/product/delete?id=${e}&&email=${user?.email}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          refetch();
          console.log(data);
        });
    } catch (err) {
      console.log(err);
    } finally {
      console.log("success");
    }
  };
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
      <div className="container mt-5 text-[#1f1e1f] w-full mx-auto px-4">
        <div className="flex w-full flex-col md:flex-row gap-4">
          <div className="md:col-span-2 w-full  flex-1">
            <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
            {cartItems?.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b gap-10 py-4"
              >
                <img
                  src={item.selectedImages[0].image}
                  className="w-20"
                  alt=""
                />
                <div className="w-full">
                  <p className="text-lg font-semibold">{item.productName}</p>
                  <p className="text-gray-500">Price: ${item.price}</p>
                  <p className="text-gray-500">
                    Discount: % {item.discountPercent}
                  </p>
                  <p className="text-gray-500">
                    Discounted Price: $ {item.discountedPrice}
                  </p>
                </div>
                <div className="flex gap-2 flex-col md:flex-row">
                  <button className="text-white bg-[#1f1e1f] p-4 rounded-full md:mr-5 font-semibold">
                    <AiOutlineShoppingCart />
                  </button>
                  <button
                    onClick={() => handleRemoveFromCart(item._id)}
                    className="text-red-500 bg-gray-100 p-4 rounded-full md:mr-5 font-semibold"
                  >
                    <ImCross />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <CartSidebar
            title={"Cart summery"}
            topPosition={scrollTop}
            cartItems={cartItems}
          />
        </div>
      </div>
    </>
  );
};

export default CartComp;
