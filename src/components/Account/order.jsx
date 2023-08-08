import { useGetData } from "../../hooks/useFetch";

const Order = () => {
  const { data } = useGetData("/orders");
  const products = data && data;
  console.log(products, "from oreder");
  return (
    <div className="container mt-5 text-[#1f1e1f] w-full mx-auto px-4">
      <div className="flex w-full flex-col md:flex-row gap-4">
        <div className="md:col-span-2 w-full  flex-1">
          <h1 className="text-3xl font-bold pl-4 md:pl-0 mb-4">Track Order</h1>
          {products?.map((item, index) => (
            <div
              key={index}
              className="flex items-center text-black justify-between border-b gap-10 py-4"
            >
              <img
                src={item?.selectedImages[0]?.image}
                className="w-16"
                alt=""
              />
              <div className="w-full">
                <p className="text-lg font-semibold">{item.productName}</p>
                <p className="text-gray-500">Price: $ {item.price}</p>
              </div>
              <div className="flex gap-2 flex-col md:flex-row">
                <span
                  className={`px-6 py-2 ${
                    item.status === "pending" && "bg-red-100 text-red-800"
                  } ${
                    item.status === "delivered" && "bg-green-100 text-green-800"
                  } ${
                    item.status === "shipped" && "bg-orange-100 text-orange-800"
                  } ${
                    item.status === "processing" &&
                    "bg-purple-100 text-purple-800"
                  }  `}
                >
                  {item.status}
                </span>
                <span className="px-6 py-2 bg-green-100 text-green-800">
                  Paid{" "}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Order;
