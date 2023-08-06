import React from "react";
import Navbar from "../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";

const CategoryPage = () => {
  const navigate = useNavigate();
  const handleCategory = (category) => {
    navigate(`/categories/products/${category}`);
    console.log("Clicked category:", category);
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center">
        <div className="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-[25] 2xl:px-0 w-full">
          <div className="flex flex-col justify-center items-center space-y-10">
            <div className="flex title-before-border flex-col justify-start w-full text-left items-start"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 md:gap-x-8 w-full">
              <div className="relative group flex justify-center items-center h-full w-full">
                <img
                  className="object-center object-cover h-full w-full"
                  src="https://www.apple.com/newsroom/images/product/iphone/standard/8plus_and_8_glass_back_big.jpg.large.jpg"
                  alt="girl-image"
                  loading="lazy"
                />
                <button
                  onClick={() => handleCategory("phone")}
                  className="cursor-pointer  dark:bg-[#f3f3f3] dark:text-[#1f1e1f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-50 absolute text-base font-medium leading-none text-[#f3f3f3] py-3 w-36 bg-[#1f1e1f]"
                >
                  Phone
                </button>
                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-opacity-50"></div>
              </div>

              <div className="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0">
                <div className="relative group flex justify-center items-center h-full w-full">
                  <img
                    className="object-center object-cover h-full w-full"
                    src="https://a-static.mlcdn.com.br/450x450/tablet-samsung-galaxy-tab-s6-lite-4g-bluetooth-android-10-0-64gb-8mp-tela-de-10-4-cinza-sm-p615nzavzto/kabum/114929/9fc2d995f476b248939fca6feb98658d.jpeg"
                    alt="shoe-image"
                    loading="lazy"
                  />
                  <button
                    onClick={() => handleCategory("tablet")}
                    className="cursor-pointer  dark:bg-[#f3f3f3] dark:text-[#1f1e1f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-50 absolute text-base font-medium leading-none text-[#f3f3f3] py-3 w-36 bg-[#1f1e1f]"
                  >
                    Tablet
                  </button>
                  <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36  bg-opacity-50"></div>
                </div>
                <div className="relative group flex justify-center items-center h-full w-full">
                  <img
                    className="object-center object-cover h-full w-full"
                    src="https://thethaiger.com/wp-content/uploads/2021/06/ezgif.com-gif-maker1-1.jpg"
                    alt="watch-image"
                    loading="lazy"
                  />
                  <button
                    onClick={() => handleCategory("laptop")}
                    className="cursor-pointer  dark:bg-[#f3f3f3] dark:text-[#1f1e1f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-50 absolute text-base font-medium leading-none text-[#f3f3f3] py-3 w-36 bg-[#1f1e1f]"
                  >
                    Laptop
                  </button>
                  <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36  bg-opacity-50"></div>
                </div>
              </div>

              <div className="relative group justify-center items-center h-full w-full hidden lg:flex">
                <img
                  className="object-center object-cover h-full w-full"
                  src="https://adminapi.applegadgetsbd.com/storage/media/large/Apple-Watch-SE-2020-Gold-GPS-Cellular-5728.jpg"
                  alt="girl-image"
                  loading="lazy"
                />
                <button
                  onClick={() => handleCategory("smart_watch")}
                  className="cursor-pointer  dark:bg-[#f3f3f3] dark:text-[#1f1e1f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-50 absolute text-base font-medium leading-none text-[#f3f3f3] py-3 w-36 bg-[#1f1e1f]"
                >
                  Smart Watch
                </button>
                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36  bg-opacity-50"></div>
              </div>
              <div className="relative group flex justify-center items-center h-full w-full mt-4 md:hidden md:mt-8 lg:hidden">
                <img
                  className="object-center object-cover h-full w-full hidden md:block"
                  src="https://adminapi.applegadgetsbd.com/storage/media/large/Apple-Watch-SE-2020-Gold-GPS-Cellular-5728.jpg"
                  alt="girl-image"
                  loading="lazy"
                />
                <img
                  className="object-center object-cover h-full w-full md:hidden"
                  src="https://adminapi.applegadgetsbd.com/storage/media/large/Apple-Watch-SE-2020-Gold-GPS-Cellular-5728.jpg"
                  alt="olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2"
                  loading="lazy"
                />
                <button
                  onClick={() => handleCategory("smart_watch")}
                  className="cursor-pointer  dark:bg-[#f3f3f3] dark:text-[#1f1e1f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-50 absolute text-base font-medium leading-none text-[#f3f3f3] py-3 w-36 bg-[#1f1e1f]"
                >
                  Smart Watch
                </button>
                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-opacity-50"></div>
              </div>
              <div className="relative group hidden justify-center items-center h-full w-full mt-4 md:flex md:mt-8 lg:hidden">
                <img
                  className="object-center object-cover h-full w-full hidden md:block"
                  src="https://adminapi.applegadgetsbd.com/storage/media/large/Apple-Watch-SE-2020-Gold-GPS-Cellular-5728.jpg"
                  alt="girl-image"
                  loading="lazy"
                />
                <img
                  className="object-center object-cover h-full w-full md:hidden"
                  src="https://adminapi.applegadgetsbd.com/storage/media/large/Apple-Watch-SE-2020-Gold-GPS-Cellular-5728.jpg"
                  alt="olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2"
                  loading="lazy"
                />
                <button
                  onClick={() => handleCategory("smart_watch")}
                  className="cursor-pointer  dark:bg-[#f3f3f3] dark:text-[#1f1e1f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-50 absolute text-base font-medium leading-none text-[#f3f3f3] py-3 w-36 bg-[#1f1e1f]"
                >
                  Smart Watch
                </button>
                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36  bg-opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
