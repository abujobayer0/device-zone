import { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { ProductDetails } from "../../../global/redux/productAction";
import { Link } from "react-router-dom";
import { useUser } from "../../../hooks/useUser";
const ProductCard = ({ product }) => {
  const Dispatch = useDispatch();
  const [isWishlist, setIsWishlist] = useState(false);
  const [isImgHover, setIsImgHover] = useState(false);
  const { data: user } = useUser();
  useEffect(() => {
    // Check if the product is in the wishlist (in local storage)
    const savedWishlist = localStorage.getItem("wishlist");
    if (savedWishlist) {
      const wishlist = JSON.parse(savedWishlist);
      setIsWishlist(wishlist.includes(product._id));
    }
  }, [product]);

  const toggleWishlist = () => {
    setIsWishlist(!isWishlist);
    const savedWishlist = localStorage.getItem("wishlist");
    const wishlist = savedWishlist ? JSON.parse(savedWishlist) : [];

    // If the product is in the wishlist, remove it. Otherwise, add it.
    if (isWishlist) {
      const updatedWishlist = wishlist.filter((id) => id !== product._id);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      console.log("Product removed from wishlist:", product);
    } else {
      wishlist.push(product._id);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      console.log("Product added to wishlist:", product);
    }
  };
  const addToCart = () => {};
  const handleViewDetails = (product) => {
    console.log("Added to redux:", product);
    Dispatch(ProductDetails(product));
  };
  return (
    <div className="relative my-10 rounded-lg shadow-lg overflow-hidden">
      <div className="transition-transform  transform duration-500 ease-in-out overflow-hidden ">
        {product?.selectedImages?.length < 1 ? (
          <img
            src={product.selectedImages[0]?.image}
            alt={product.productName}
            onMouseEnter={() => setIsImgHover(true)}
            onMouseLeave={() => setIsImgHover(false)}
            className=" w-64 hover:scale-105 transition-transform  transform duration-500 ease-in-out object-cover mx-auto  p-2 h-64"
          />
        ) : (
          <img
            src={
              isImgHover
                ? product.selectedImages[1]?.image
                : product.selectedImages[0]?.image
            }
            alt={product.productName}
            onMouseEnter={() => setIsImgHover(true)}
            onMouseLeave={() => setIsImgHover(false)}
            className=" w-96  object-cover transition-transform  transform duration-500 ease-in-out hover:scale-105  mx-auto  p-2 h-64"
          />
        )}
      </div>
      <div className="absolute top-2 right-2">
        <button
          title={
            user?.isAdmin || (user?.isSeller && "not allow seller or admin")
          }
          className={`p-2 rounded-full bg-white shadow-lg transition ${
            isWishlist ? "text-red-500" : "text-gray-500 hover:text-red-500"
          } ${user?.isAdmin || (user?.isSeller && "hidden")}`}
          onClick={() => toggleWishlist(product)}
        >
          {isWishlist ? (
            <AiFillHeart className="w-6 h-6 animate-heartbeat" />
          ) : (
            <AiOutlineHeart className="w-6 h-6" />
          )}
        </button>
      </div>
      <div className="p-4 text-[#1f1e1f] bg-white w-full  md:max-w-md">
        <h3 className="text-lg font-semibold">{product.productName}</h3>
        <p className="text-gray-600">${product.price}</p>
        <div className="flex flex-col md:flex-row md:justify-between w-full gap-0 md:items-center mt-4">
          <button
            disabled={user?.isAdmin || user?.isSeller}
            title={
              user?.isAdmin || (user?.isSeller && "not allow seller or admin")
            }
            className="w-full flex items-center gap-2 bg-[#1f1e1f] text-white p-2 rounded mb-2 md:mb-0 md:mr-2"
            onClick={addToCart}
          >
            <AiOutlineShoppingCart />
            Add to Cart
          </button>
          <button
            onClick={() => handleViewDetails(product)}
            className="w-full  bg-gray-200 text-[#1f1e1f] font-semibold p-2 rounded"
          >
            <Link to={`/product/details/${product._id}`}>View Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
