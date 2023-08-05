import Navbar from "../components/navbar/Navbar.jsx";
import Footer from "../components/footer";
import { useSelector } from "react-redux";
import { useGetData } from "../hooks/useFetch.js";
import { useEffect, useState } from "react";
import ProductCard from "../components/cart/btn/cart.jsx";
const SearchPage = () => {
  const handleBeforeUnload = (e) => {
    e.preventDefault();
    e.returnValue = "";
  };

  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
  const query = useSelector((state) => state.product.searchQuery);
  console.log(query);

  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  console.log(products);
  useEffect(() => {
    setIsLoading(true);
    fetch(`https://device-zone.onrender.com/products/search?query=${query}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
  }, [query]);

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

export default SearchPage;
