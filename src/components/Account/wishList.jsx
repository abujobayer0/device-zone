import CartSidebar from "./cartSideBar";
import { useGetData } from "../../hooks/useFetch";
import { ImCross } from "react-icons/im";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import app from "../../utils/firebase.init";
import ProductCard from "../cart/btn/cart";
import { useEffect, useState } from "react";
const auth = getAuth(app);
const WishlistComp = () => {
  const [user] = useAuthState(auth);
  const savedWishlist = localStorage.getItem("wishlist");
  const wishlist = savedWishlist ? JSON.parse(savedWishlist) : [];
  const queryParams = new URLSearchParams({ data: wishlist });
  const { data: cartItems, refetch } = useGetData(
    `/cart/wishlist?${queryParams} `
  );
  console.log(cartItems && cartItems);

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
            <h1 className="text-3xl font-bold mb-4">WishList Products</h1>
            <div
              className={`grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  `}
            >
              {cartItems?.map((item, indx) => (
                <ProductCard key={indx} product={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WishlistComp;
