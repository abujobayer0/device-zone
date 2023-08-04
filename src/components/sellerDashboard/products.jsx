import SellerProductsTable from "../sellerProductTable";
import { useGetData } from "../../hooks/useFetch.js";
import { useUser } from "../../hooks/useUser";
import { useDispatch } from "react-redux";
import { selectProductToEdit } from "../../global/redux/productAction";
const Products = () => {
  const { data: user } = useUser();
  const { data: products, loading } = useGetData(
    `seller/products?email=${user.email}`
  );
  const dispatch = useDispatch();
  const handleEdit = (product) => {
    dispatch(selectProductToEdit(product));
    console.log("Edit product:", product);
  };
  console.log(!loading && products);
  const handleDelete = (product) => {
    console.log("Delete product:", product);
  };

  return (
    <div className="container px-5 mx-auto my-4">
      <h1 className="text-2xl text-[#1f1e1f] font-bold mb-4">Products</h1>
      <SellerProductsTable
        products={products}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Products;
