import { AiOutlineInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-[#1f1e1f] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h3 className="text-2xl font-bold mb-4">Device Zone</h3>
            <p className="text-gray-400 mb-2">1234 E-commerce Street</p>
            <p className="text-gray-400 mb-2">City, State, ZIP</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
            <ul className="list-none">
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Shop
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="text-right flex flex-col items-end space-y-4">
            <div>
              <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
              <div className="flex gap-2">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300 mr-4"
                >
                  <BsFacebook />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300 mr-4"
                >
                  <AiFillTwitterCircle />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  <AiOutlineInstagram />
                </a>
              </div>
            </div>
            <div className="border-t border-gray-500 pt-4">
              <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
              <p className="text-gray-400 mb-2">Email: info@devicezone.com</p>
              <p className="text-gray-400">Phone: +1 (123) 456-7890</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
