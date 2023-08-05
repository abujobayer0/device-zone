import { getAuth, signOut } from "firebase/auth";
import { AiOutlineLogout } from "react-icons/ai";
import app from "../../utils/firebase.init";
import { useNavigate } from "react-router-dom";
const auth = getAuth(app);

const SettingsSeller = () => {
  const navigate = useNavigate();
  const handleSignout = () => {
    signOut(auth);
    navigate("/");
  };
  return (
    <div className="w-full bg-gray-100">
      <button
        onClick={handleSignout}
        className="border md:my-10 my-96 mx-auto px-10 py-2 rounded hover:text-[#fff]  bg-white text-[#1f1e1f] hover:bg-[#1f1e1f] flex items-center gap-2 duration-125 transition-all ease"
      >
        <AiOutlineLogout />
        Logout
      </button>
    </div>
  );
};

export default SettingsSeller;
