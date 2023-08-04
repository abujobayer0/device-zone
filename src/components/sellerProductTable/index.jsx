import { Link } from "react-router-dom";

const SellerProductsTable = ({ products, onEdit, onDelete }) => {
  return (
    <div className="w-full text-[#1f1e1f] overflow-x-auto">
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="text-left bg-gray-100">
            <th className="px-4 py-2">Image</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => (
            <tr key={product._id} className="border-t border-gray-200">
              <td className="px-4 py-2">
                <img
                  src={product.selectedImages[0].image}
                  alt={product.productName}
                  className="w-16 h-16 object-cover rounded"
                />
              </td>
              <td className="px-4 py-2">{product.productName}</td>
              <td className="px-4 py-2">
                <Link to={`/dashboard/update/product/${product._id}`}>
                  <button
                    onClick={() => onEdit(product)}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
                  >
                    Edit
                  </button>
                </Link>
                <button
                  onClick={() => onDelete(product._id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SellerProductsTable;
