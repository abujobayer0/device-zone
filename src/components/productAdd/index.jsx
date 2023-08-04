import axios from "axios";
import { useRef, useState } from "react";
import { useUser } from "../../hooks/useUser";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const ProductAddPage = () => {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);
  const [colorVariation, setColorVariation] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);
  const [discountedPrice, setDiscountedPrice] = useState(0);
  const [categories, setCategories] = useState([]);
  const [type, setType] = useState("");
  const [loading, setLoading] = useState(false);
  const imageRef = useRef();
  const { data } = useUser();

  const uploadImage = async () => {
    const localImage = imageRef.current.files[0];
    setLoading(true);
    if (localImage) {
      try {
        const formData = new FormData();
        formData.append("image", localImage);

        const response = await fetch(
          `https://api.imgbb.com/1/upload?key=1cd23bee497c22ad7961a64de0399e56`,
          { method: "POST", body: formData }
        );

        if (response.ok) {
          const data = await response.json();

          if (data && data.data && data.data.display_url) {
            const imageUrl = data.data.display_url;
            setSelectedImages((prev) => [...prev, { image: imageUrl }]);
            setLoading(false);
          } else {
            throw new Error("Failed to upload image or retrieve URL.");
          }
        } else {
          throw new Error("Image upload request failed.");
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    console.log("Form submitted:", {
      productName,
      description,
      price,
      discountPercent,
      colorVariation,
      selectedImages,
      discountedPrice,
      categories,
      user: data,
    });
    axios
      .post("https://device-zone.onrender.com/create/product", {
        productName,
        description,
        price,
        discountPercent,
        colorVariation,
        selectedImages,
        discountedPrice,
        categories,
        seller: data,
      })
      .then((response) => {
        console.log("Server response:", response.data);

        setProductName("");
        setDescription("");
        setPrice("");
        setDiscountPercent(0);
        setColorVariation("");
        setSelectedImages([]);
        setDiscountedPrice(0);
        form.reset();
        setCategories("");
      })
      .catch((error) => {
        console.error("Error sending data to server:", error);
      });
  };
  const handleDiscountPercentChange = (e) => {
    setDiscountPercent(e.target.value);
    calculateDiscountedPrice(price, e.target.value);
  };

  const calculateDiscountedPrice = (originalPrice, discountPercent) => {
    const discountedPrice = (originalPrice * (100 - discountPercent)) / 100;
    setDiscountedPrice(discountedPrice.toFixed(2));
  };
  const quillModules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link"],
      ["clean"],
    ],
  };

  const quillFormats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
  ];
  const editorStyles = {
    border: "1px solid #ccc",
    borderRadius: "4px",
    minHeight: "300px",
    padding: "10px",
    fontFamily: "Arial, sans-serif",
    fontSize: "16px",
    color: "black",
  };

  return (
    <div className="container text-[#1f1e1f] w-full mx-auto my-10 p-5">
      <h1 className="text-2xl font-bold mb-5">Add Product</h1>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-4 w-full sm:grid-cols-2 md:grid-cols-3"
      >
        <div>
          <label className="block mb-2 font-bold">Product Name:</label>
          <input
            type="text"
            required
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="w-full px-4 py-2 rounded border"
            placeholder="Enter Product Name"
          />
        </div>

        <div>
          <label className="block mb-2 font-bold">Price:</label>
          <input
            type="number"
            value={price}
            required
            onChange={(e) => {
              setPrice(e.target.value);
              calculateDiscountedPrice(e.target.value, discountPercent);
            }}
            className="w-full px-4 py-2 rounded border"
            placeholder="Enter Price"
          />
        </div>

        <div>
          <label className="block mb-2 font-bold">Discount Percent:</label>
          <input
            type="number"
            value={discountPercent}
            onChange={handleDiscountPercentChange}
            className="w-full px-4 py-2 rounded border"
            placeholder="Enter Discount Percent"
          />
        </div>
        <div>
          <label className="block mb-2 font-bold">Color Variation:</label>
          <select
            value={colorVariation}
            required
            onChange={(e) => setColorVariation(e.target.value)}
            className="w-full px-4 py-2 rounded border"
          >
            <option>Select Color Variation</option>
            <option value="silver">silver</option>
            <option value="gold">gold</option>
            <option value="black">black</option>
            <option value="white">white</option>
            <option value="purple">purple</option>
            <option value="green">green</option>
            <option value="red">red</option>
            <option value="blue">blue</option>
          </select>
          {colorVariation && (
            <div
              className="w-6 border h-6 rounded-full mt-2"
              style={{ backgroundColor: colorVariation }}
            ></div>
          )}
        </div>
        <div>
          <label className="block mb-2 font-bold">Product Type:</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full px-4 py-2 rounded border"
          >
            <option value="">Select Product Type</option>
            <option value="phone">Phone</option>
            <option value="tablet">Tablet</option>
            <option value="laptop">Laptop</option>
            <option value="smart_watch">Smart Watch</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 font-bold">Category:</label>
          <select
            value={categories}
            onChange={(e) => setCategories(e.target.value)}
            className="w-full px-4 py-2 rounded border"
          >
            <option value="">Select Category</option>

            <option>New Arrival</option>
            <option>Featured</option>
            <option>Hot Deal</option>
          </select>
        </div>

        <div className="sm:col-span-2 md:col-span-3">
          <label className="block mb-2 font-bold">
            Select Multiple Images{" "}
          </label>
          <input
            type="file"
            multiple
            accept="image/*"
            className="w-full"
            required
            ref={imageRef}
            onChange={uploadImage}
          />
        </div>
        <div className="sm:col-span-2 md:col-span-3">
          <p className="font-bold">Discounted Price:</p>
          <p>{discountedPrice}</p>
        </div>
        <div className="w-full grid grid-cols-3 gap-2">
          {selectedImages.map((item, index) => (
            <img
              key={index}
              src={item.image}
              className="w-full rounded"
              alt=""
            />
          ))}
        </div>
        {loading && <h2 className="text-sm">Loading...</h2>}

        <div className="sm:col-span-2 md:col-span-3">
          <label className="block mb-2 font-bold">Product Description</label>

          <ReactQuill
            id="description"
            value={description}
            onChange={setDescription}
            theme="snow"
            modules={quillModules}
            formats={quillFormats}
            placeholder="Write an Impressive Product description..."
            style={editorStyles}
          />
        </div>
        <div className="sm:col-span-2 md:col-span-3">
          <button
            type="submit"
            className=" border px-10 bg-[#1f1e1f] py-2 rounded text-white hover:bg-[#413e41]  duration-125 transition-all ease"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductAddPage;
