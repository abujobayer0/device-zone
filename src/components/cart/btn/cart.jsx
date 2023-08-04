import { useState } from "react";
import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { ProductDetails } from "../../../global/redux/productAction";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const Dispatch = useDispatch();
  const [isWishlist, setIsWishlist] = useState(false);
  const [isImgHover, setIsImgHover] = useState(false);

  const toggleWishlist = () => {
    setIsWishlist(!isWishlist);
  };
  const addToCart = () => {};
  const handleViewDetails = (product) => {
    console.log("Added to redux:", product);
    Dispatch(ProductDetails(product));
  };
  return (
    <div className="relative my-10 rounded-lg shadow-lg overflow-hidden">
      <div
        onMouseEnter={() => setIsImgHover(true)}
        onMouseLeave={() => setIsImgHover(false)}
        className="transition-transform w-full transform duration-500 ease-in-out hover:scale-105"
      >
        <img
          src={
            isImgHover
              ? product.selectedImages[1]?.image
              : product.selectedImages[0]?.image
          }
          alt={product.productName}
          className=" w-[80% ] mx-auto  p-2 h-64"
        />
      </div>
      <div className="absolute top-2 right-2">
        <button
          className={`p-2 rounded-full bg-white shadow-lg transition ${
            isWishlist ? "text-red-500" : "text-gray-500 hover:text-red-500"
          }`}
          onClick={toggleWishlist}
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
