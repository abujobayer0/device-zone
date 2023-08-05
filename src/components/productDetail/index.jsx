import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/zoom";
import "./carousel.module.css";
import Navbar from "../navbar/Navbar";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineMessage,
} from "react-icons/ai";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useGetData } from "../../hooks/useFetch";
import RecommendedProductCard from "../recomendedProductSection";
import { styled } from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
const ProductDetails = () => {
  const Product = useSelector(
    (state) => state.product.selectedProductForDetail
  );
  const { data: recomendedProducts } = useGetData(
    `/products/recomended?type=${Product?.type}`
  );
  const filterdRecomendedProducts = recomendedProducts?.filter(
    (item) => item._id !== Product._id
  );
  const handleBeforeUnload = (e) => {
    e.preventDefault();
    e.returnValue = "";
  };

  const [recData, setRecData] = useState(false);
  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [recData]);
  const handleTopPage = () => {
    setRecData((prev) => !prev);
  };
  const AccordionWrapper = styled.div`
    width: 100%;
  `;

  const AccordionItem = styled.div`
    background-color: #f1f1f1;
    padding: 10px;
    border-radius: 5px;

    cursor: pointer;
  `;

  const AccordionContent = styled(motion.div)`
    overflow: hidden;
  `;
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar></Navbar>
      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8">
          <div className="relative">
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
              className="rounded-lg swiper overflow-hidden"
            >
              {Product.selectedImages?.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="w-96 h-96 mx-auto">
                    <img
                      src={image?.image}
                      className="w-full h-full object-contain"
                      alt={`Product ${index + 1}`}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="flex  w-full px-10 absolute mt-5  gap-4 justify-between">
              <button className="prev-button text-2xl text-[#1f1e1f] bg-gray-100  rounded-full  p-2 ">
                <AiOutlineArrowLeft />
              </button>
              <button className="next-button text-2xl text-[#1f1e1f]  bg-gray-100 rounded-full p-2 ">
                <AiOutlineArrowRight />
              </button>
            </div>
            <div className="mb-4 mt-28 text-black">
              <h2 className="text-lg font-semibold mb-2">Description:</h2>
              <div
                className="text-gray-600 hidden md:block mt-4"
                dangerouslySetInnerHTML={{
                  __html: Product.description,
                }}
              ></div>
              <div className="block md:hidden w-full">
                <AccordionWrapper>
                  <AccordionItem onClick={toggleAccordion}>
                    see Description
                  </AccordionItem>
                  <AnimatePresence>
                    {isOpen && (
                      <AccordionContent
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                      >
                        <div
                          className="text-gray-600 mt-4"
                          dangerouslySetInnerHTML={{
                            __html: Product.description,
                          }}
                        ></div>
                      </AccordionContent>
                    )}
                  </AnimatePresence>
                </AccordionWrapper>
              </div>
            </div>
          </div>

          <div className="p-8  md:mt-0 text-[#1f1e1f] bg-gray-100 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-2">{Product.productName}</h1>
            <div className="text-xl font-semibold mb-4">${Product.price}</div>

            <div className="mb-4">
              <h2 className="text-lg font-semibold mb-2">Colors:</h2>
              <div className="flex">
                <div
                  className="w-8 h-8 rounded-full bg-gray-400 mr-2"
                  style={{ backgroundColor: Product.colorVariation }}
                ></div>
              </div>
            </div>

            <div className="mb-4">
              <h2 className="text-lg font-semibold mb-2">Category:</h2>
              <p>{Product?.categories}</p>
            </div>

            <div className="mb-4">
              <h2 className="text-lg font-semibold mb-2">
                Seller Information:
              </h2>
              <p>Seller Name: {Product.seller?.userName}</p>
              <p>Email: {Product.seller?.email}</p>
              <p>Address: {Product.seller?.address}</p>
            </div>

            <div className="mb-4">
              <h2 className="text-lg font-semibold mb-2">Message to Seller:</h2>
              <textarea
                className="w-full p-2 border bg-gray-200 rounded"
                placeholder="Enter your message here..."
                rows="4"
              ></textarea>
            </div>
            <div className="flex cursor-pointer items-center mb-4">
              <AiOutlineMessage className="text-2xl text-gray-600 mr-2" />
              <p className="text-sm text-gray-600">
                Click here to message the seller
              </p>
            </div>

            <button className="w-full flex items-center justify-center bg-[#1f1e1f] text-white p-3 rounded">
              Buy Now
              <IoIosArrowDroprightCircle className="text-xl ml-2" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="col-span-2 text-[#1f1e1f]">
            <h2 className="text-2xl font-semibold mb-4">
              Recommended Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {filterdRecomendedProducts?.slice(0, 3)?.map((product) => (
                <RecommendedProductCard
                  key={product.id}
                  handleTopPage={handleTopPage}
                  product={product}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
