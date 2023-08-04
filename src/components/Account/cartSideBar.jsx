const CartSidebar = () => {
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

  const totalProducts = cartItems.length;
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  const platformFee = 5;
  const finalPrice = totalPrice + platformFee;

  return (
    <div className="md:col-span-1 w-full md:w-1/3 p-4  bg-gray-100 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Cart Summary</h2>
      <div className="flex items-center justify-between mb-2">
        <p>Total Products:</p>
        <p>{totalProducts}</p>
      </div>
      <div className="flex items-center justify-between mb-2">
        <p>Total Price:</p>
        <p>${totalPrice}</p>
      </div>
      <div className="flex items-center justify-between mb-2">
        <p>Platform Fee:</p>
        <p>${platformFee}</p>
      </div>
      <div className="border-t py-2">
        <div className="flex items-center justify-between">
          <p className="text-xl font-semibold">Final Price:</p>
          <p className="text-xl font-semibold">${finalPrice}</p>
        </div>
        <button className="w-full mt-4 bg-[#1f1e1f] text-white py-3 rounded">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default CartSidebar;
