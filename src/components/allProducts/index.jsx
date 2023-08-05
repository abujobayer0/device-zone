import { useEffect, useState } from "react";
import { AiFillFilter } from "react-icons/ai";
import ProductCard from "../cart/btn/cart";
import { useGetData } from "../../hooks/useFetch";
import Sheet from "react-modal-sheet";
import SideBarFilter from "./sideBarFilter";
const configs = [
  {
    stiffness: 300,
    damping: 30,
    mass: 0.2,
  },
  {
    stiffness: 150,
    damping: 20,
    mass: 1,
  },
];
const ProductPage = () => {
  // Dummy data for category, color, and type options
  const categories = ["Electronics", "Clothing", "Home & Kitchen"];
  const colors = ["Red", "Blue", "Green", "Black", "White"];
  const types = ["Shirt", "Dress", "Phone", "Laptop", "Appliance"];
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);
  const { data: products } = useGetData("/products");
  const [isOpen, setOpen] = useState(false);
  const [config, setConfig] = useState(configs[0]);

  const handlePriceChange = (event) => {
    const { name, value } = event.target;
    if (name === "minPrice") {
      setMinPrice(parseInt(value));
    } else if (name === "maxPrice") {
      setMaxPrice(parseInt(value));
    }
  };

  const handleToggleSidebar = () => {
    setConfig(
      config?.stiffness === configs[0]?.stiffness ? configs[1] : configs[0]
    );
    setOpen(true);
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
    <div className="w-full relative mx-auto text-black p-4">
      <div className="grid md:grid-cols-4 lg:grid-cols-4 gap-4">
        <button
          onClick={handleToggleSidebar}
          className="md:hidden fixed right-4 top-96 p-2 bg-[#1f1e1f]  z-50 text-white text-3xl rounded"
        >
          <AiFillFilter />
        </button>

        <SideBarFilter
          colors={colors}
          categories={categories}
          handlePriceChange={handlePriceChange}
          maxPrice={maxPrice}
          setMinPrice={setMinPrice}
          minPrice={minPrice}
          types={types}
        />

        <div className="col-span-3 w-full grid justify-items-center items-center justify-center grid-cols-2  lg:grid-cols-3 gap-4">
          {products?.map((p, index) => (
            <ProductCard product={p} key={index} />
          ))}
        </div>
      </div>
      <Sheet
        springConfig={config}
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        snapPoints={[500, 0]}
        onSnap={(snapIndex) =>
          console.log("> Current snap point index:", snapIndex)
        }
      >
        <Sheet.Container>
          <Sheet.Content>
            <div
              className={`h-full flex md:hidden flex-col col-span-1 z-10 text-black bg-gray-200 p-4 px-10 md:px-4 rounded`}
            >
              <div className="flex">
                <div className="mb-4 w-full">
                  <h2 className="text-lg font-semibold mb-2">Categories</h2>
                  <select className="w-full p-2 border rounded">
                    <option value="">Select</option>
                    {categories?.map((category, index) => (
                      <option key={index} value={categories}>
                        {categories}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-4 w-full">
                  <h2 className="text-lg font-semibold mb-2">Type</h2>
                  <select className="w-full p-2 border rounded">
                    <option value="">Select</option>

                    {types?.map((type, index) => (
                      <option key={index} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="mb-4">
                <h2 className="text-lg font-semibold mb-2">Price Range</h2>
                <div>
                  <label htmlFor="minPrice">Min Price:</label>
                  <input
                    type="number"
                    id="minPrice"
                    name="minPrice"
                    value={minPrice}
                    onChange={handlePriceChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div className="mt-2">
                  <label htmlFor="maxPrice">Max Price:</label>
                  <input
                    type="number"
                    id="maxPrice"
                    name="maxPrice"
                    value={maxPrice}
                    onChange={handlePriceChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
              </div>

              <div className="flex">
                <div className="mb-4 w-full">
                  <h2 className="text-lg font-semibold mb-2">Sort By</h2>
                  <select className="w-full p-2 border rounded">
                    <option value="">Select</option>
                    <option value="price_low_to_high">
                      Price: Low to High
                    </option>
                    <option value="price_high_to_low">
                      Price: High to Low
                    </option>
                    <option value="name_a_to_z">Name: A to Z</option>
                    <option value="name_z_to_a">Name: Z to A</option>
                  </select>
                </div>

                <div className="mb-4 w-1/2">
                  <h2 className="text-lg font-semibold mb-2">
                    Color Variation
                  </h2>
                  <select className="w-full p-2 border rounded">
                    <option value="">Select</option>

                    {colors?.map((color, index) => (
                      <option key={index} value={color}>
                        {color}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-4 w-full">
                <button className="text-white py-2 rounded bg-[#1f1e1f] w-full">
                  Filter
                </button>
              </div>
            </div>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop onClick={() => setOpen(false)} />
      </Sheet>
    </div>
  );
};

export default ProductPage;
