import { getAuth } from "firebase/auth";
import { useGetData } from "../../hooks/useFetch";
import app from "../../utils/firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
const auth = getAuth(app);
const SellerManageOrder = () => {
  const [user] = useAuthState(auth);
  const { data } = useGetData(`/orders/manage?email=${user?.email}`);
  const products = data && data;
  console.log(products, "from oreder");
  return (
    <div className="container mt-5 text-[#1f1e1f] w-full mx-auto px-4">
      <div className="flex w-full flex-col md:flex-row gap-4">
        <div className="md:col-span-2 w-full  flex-1">
          <h1 className="text-3xl font-bold pl-4 md:pl-0 mb-4">Manage Order</h1>
          {products?.map((item, index) => (
            <div
              key={index}
              className="flex items-center text-black justify-between bSellerManageorder-b gap-10 py-4"
            >
              <img
                src={item?.selectedImages[0]?.image}
                className="w-16"
                alt=""
              />
              <div className="w-full">
                <p className="text-lg font-semibold">{item.productName}</p>
                <p className="text-gray-500">Price: $ {item.discountPrice}</p>
              </div>
              <div className="flex gap-2 flex-col md:flex-row">
                <select
                  value={item.status}
                  onChange={(e) => {
                    try {
                      fetch("https://device-zone.onrender.com/manage/status", {
                        method: "POST",
                        headers: { "Content-type": "application/json" },
                        body: JSON.stringify({
                          value: e.target.value,
                          id: item._id,
                        }),
                      })
                        .then((res) => res.json())
                        .then((data) => console.log(data));
                    } catch (err) {
                      console.log(err);
                    } finally {
                      console.log("success");
                    }
                    console.log(e.target.value);
                  }}
                  className="px-4 py-2 border border-gray-300 rounded-lg"
                >
                  <option value="pending">Pending</option>
                  <option value="delivered">Delivered</option>
                  <option value="processing">Processing</option>
                  <option value="shipped">Shipped</option>
                </select>
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

export default SellerManageOrder;
