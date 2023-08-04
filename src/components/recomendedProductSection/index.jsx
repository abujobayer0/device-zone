const RecommendedProductCard = ({ product }) => {
  return (
    <div className="p-4 border text-[#1f1e1f] border-gray-200 rounded-md">
      <img
        src={product.selectedImages[0].image}
        alt={product.productName}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold mb-2">{product.productName}</h3>
      <div className="text-xl font-semibold mb-2">${product.price}</div>
      <button className="w-full flex items-center justify-center bg-[#1f1e1f] text-white p-2 rounded">
        View Details
      </button>
    </div>
  );
};

export default RecommendedProductCard;
