import Navbar from "../components/navbar/Navbar.jsx";
import Footer from "../components/footer";
import { useGetData } from "../hooks/useFetch.js";
import { useEffect } from "react";
import ProductCard from "../components/cart/btn/cart.jsx";
import { useParams } from "react-router-dom";
const CategoryProductsPage = () => {
  const { query } = useParams();
  const handleBeforeUnload = (e) => {
    e.preventDefault();
    e.returnValue = "";
  };
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
  const { data: products, isLoading } = useGetData(
    `http://localhost:7000/products/type?type=${query}`
  );

  return (
    <>
      <Navbar />
      {isLoading && (
        <h1 className="text-gray-400 text-2xl text-center mt-10">
          Loading {query}...
        </h1>
      )}
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-5 min-h-screen">
        {products?.map((product, indx) => (
          <ProductCard key={indx} product={product} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default CategoryProductsPage;
