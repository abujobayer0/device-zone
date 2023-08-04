import CartSidebar from "./cartSideBar";

const CartComp = () => {
  const cartItems = [
    { id: 1, name: "Product 1", price: 20 },
    { id: 2, name: "Product 2", price: 30 },
    { id: 3, name: "Product 3", price: 25 },
    { id: 1, name: "Product 1", price: 20 },
    { id: 2, name: "Product 2", price: 30 },
    { id: 3, name: "Product 3", price: 25 },
    { id: 1, name: "Product 1", price: 20 },
    { id: 2, name: "Product 2", price: 30 },
    { id: 3, name: "Product 3", price: 25 },
    { id: 1, name: "Product 1", price: 20 },
    { id: 2, name: "Product 2", price: 30 },
    { id: 3, name: "Product 3", price: 25 },
    { id: 1, name: "Product 1", price: 20 },
    { id: 2, name: "Product 2", price: 30 },
    { id: 3, name: "Product 3", price: 25 },
    { id: 1, name: "Product 1", price: 20 },
    { id: 2, name: "Product 2", price: 30 },
    { id: 3, name: "Product 3", price: 25 },
  ];

  return (
    <>
      <div className="container mt-5 text-[#1f1e1f] w-full mx-auto px-4">
        <div className="flex w-full flex-col md:flex-row gap-4">
          <div className="md:col-span-2 w-full  flex-1">
            <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b py-4"
              >
                <div>
                  <p className="text-lg font-semibold">{item.name}</p>
                  <p className="text-gray-500">${item.price}</p>
                </div>
                <button className="text-red-500 font-semibold">Remove</button>
              </div>
            ))}
          </div>
          <CartSidebar />
        </div>
      </div>
    </>
  );
};

export default CartComp;
