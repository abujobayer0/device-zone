import CBtn from "../cart/btn/CBtn";
import SBtn from "../secondaryBtn/SBtn";

const Hero = () => {
  return (
    <div className="primary-bgcolor py-10 flex w-full  justify-start items-center flex-col md:flex-row px-5">
      <div className="w-full order-2 flex flex-col gap-5 text-sm sm:text-xl text-gray-300 justify-center items-start ">
        <h1 className="text-white font-bold text-6xl sm:text-7xl  ">
          Acer Swift 3 OLED
        </h1>
        <p>
          Say hello to the all-new pick-up-and-go. Bringing heavyweight
          performance to a color-infused 14-inch lightweight shell lets you make
          magic whenever, wherever-featuring 12th Gen Intel® Core™ processors1
          and a brilliant OLED display1.
        </p>
        <div className="flex gap-2 justify-start items-start w-full ">
          <SBtn prop={"Read more"} />
          <CBtn prop={"Add to Cart"} />
        </div>
      </div>
      <div className="w-full flex justify-end md:order-2">
        <img
          src="https://cdn.uc.assets.prezly.com/9223727f-be83-4b31-9b8a-d50f0e33674e/Spin-5-SP514-51N-01.png"
          alt=""
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Hero;
