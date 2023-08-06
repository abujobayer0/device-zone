import { useDispatch } from "react-redux";
import { ProductDetails } from "../../global/redux/productAction";
import { Link } from "react-router-dom";

const RecommendedProductCard = ({ product, handleTopPage }) => {
  const Dispatch = useDispatch();
  const handleViewDetails = (product) => {
    Dispatch(ProductDetails(product));
    handleTopPage();
  };
  return (
    <div className="p-4 border text-[#1f1e1f] border-gray-200 rounded-md">
      <img
        src={product.selectedImages[0].image}
        alt={product.productName}
        className="w-full h-48 object-cover rounded-md mb-4"
        loading="lazy"
      />
      <h3 className="text-lg font-semibold mb-2">{product.productName}</h3>
      <div className="text-xl font-semibold mb-2">${product.price}</div>
      <button
        onClick={() => handleViewDetails(product)}
        className="w-full flex items-center justify-center bg-[#1f1e1f] text-white p-2 rounded"
      >
        <Link to={`/product/details/${product._id}`}>View Details</Link>
      </button>
    </div>
  );
};

export default RecommendedProductCard;
