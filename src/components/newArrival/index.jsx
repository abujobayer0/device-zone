import ProductCard from "../cart/btn/cart";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./carousel.module.css";
import { Navigation, Pagination } from "swiper/modules";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useGetData } from "../../hooks/useFetch";

const NewArrival = () => {
  const { data, loading } = useGetData("/products/newarrival");
  const products = !loading && data;

  return (
    <div className="mt-10 px-5 w-full">
      <h1 className="text-5xl sm:text-6xl font-semibold text-[#1f1e1f] ">
        New Arrival
      </h1>
      <div className="flex md:hidden mt-5 gap-4 justify-end">
        <button className="prev-button text-2xl text-[#1f1e1f] bg-gray-100  rounded-full  p-2 ">
          <AiOutlineArrowLeft />
        </button>
        <button className="next-button text-2xl text-[#1f1e1f]  bg-gray-100 rounded-full p-2 ">
          <AiOutlineArrowRight />
        </button>
      </div>

      <div className="md:grid hidden  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:p-8">
        {products?.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
        <div className="relative my-10 rounded-lg shadow-lg overflow-hidden">
          <div className="transition-transform  transform duration-500 ease-in-out hover:scale-105">
            <img
              src={
                "https://images01.nicepagecdn.com/page/56/39/website-template-preview-56398.jpg"
              }
              alt={""}
              className="object-cover w-[80% ] mx-auto md:w-full p-2 h-64"
            />
          </div>
          <div className="absolute top-2 right-2"></div>
          <div className="p-4 bg-white">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-4">
              <button className="w-full  bg-gray-200 text-[#1f1e1f] font-semibold p-2 rounded">
                Explore New Arrivals
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="gap-4 md:p-8 md:hidden">
        <Swiper
          spaceBetween={30}
          rewind={true}
          pagination={{
            clickable: true,
          }}
          navigation={{
            prevEl: ".prev-button",
            nextEl: ".next-button",
          }}
          modules={[Pagination, Navigation]}
        >
          {" "}
          {products?.map((product, index) => (
            <SwiperSlide key={index}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
          <SwiperSlide>
            {" "}
            <div className="relative my-10 rounded-lg shadow-lg overflow-hidden">
              <div className="transition-transform  transform duration-500 ease-in-out hover:scale-105">
                <img
                  src={
                    "https://images01.nicepagecdn.com/page/56/39/website-template-preview-56398.jpg"
                  }
                  alt={""}
                  className="object-cover w-[80% ] mx-auto md:w-full p-2 h-64"
                />
              </div>
              <div className="absolute top-2 right-2"></div>
              <div className="p-4 bg-white">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-4">
                  <button className="w-full  bg-gray-200 text-[#1f1e1f] font-semibold p-2 rounded">
                    Explore New Arrivals
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default NewArrival;
