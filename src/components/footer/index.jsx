const Footer = () => {
  return (
    <footer className="bg-[#1f1e1f] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Footer logo and address */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Device Zone</h3>
            <p className="text-gray-400 mb-2">1234 E-commerce Street</p>
            <p className="text-gray-400 mb-2">City, State, ZIP</p>
          </div>
          {/* Quick links */}
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
          {/* Social media icons */}
          <div className="text-right">
            <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
            <div>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300 mr-4"
              >
                <i className="fab fa-facebook-f text-2xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300 mr-4"
              >
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <i className="fab fa-instagram text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
