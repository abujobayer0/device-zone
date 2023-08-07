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
import { Link } from "react-router-dom";

const HotDeals = () => {
  const { data, loading } = useGetData("/hotdeal");
  const products = !loading && data;

  return (
    <div className="mt-10 px-5 w-full">
      <Link to={"/all/products"}>
        <h1 className="text-5xl w-full flex  justify-start sm:text-6xl font-semibold text-[#1f1e1f] ">
          Hot Deal
          <span className="text-gray-900 mt-4 hover:text-gray-500 cursor-pointer text-sm md:text-lg underline text-start">
            <AiOutlineArrowRight />
          </span>
        </h1>
      </Link>
      <div className="flex md:hidden mt-5 gap-4 justify-end">
        <button className="prev-btn text-2xl text-[#1f1e1f] bg-gray-100  rounded-full  p-2 ">
          <AiOutlineArrowLeft />
        </button>
        <button className="next-btn text-2xl text-[#1f1e1f]  bg-gray-100 rounded-full p-2 ">
          <AiOutlineArrowRight />
        </button>
      </div>

      <div className="md:grid hidden  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:p-8">
        {products?.slice(0, 6)?.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      <div className="gap-4 md:p-8 md:hidden">
        <Swiper
          spaceBetween={30}
          rewind={true}
          pagination={{
            clickable: true,
          }}
          navigation={{
            prevEl: ".prev-btn",
            nextEl: ".next-btn",
          }}
          modules={[Pagination, Navigation]}
        >
          {" "}
          {products?.slice(0, 6)?.map((product, index) => (
            <SwiperSlide key={index}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HotDeals;
