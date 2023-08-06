import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Navbar from "../components/navbar/Navbar";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import app from "../utils/firebase.init.js";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

const auth = getAuth(app);

const Authentication = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const [user] = useAuthState(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [userName, setUserName] = useState("");
  const [isSeller, setIsSeller] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [error, setError] = useState("");
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const handleLogin = () => {
    if (emailRegex.test(email)) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate(from);
        })
        .catch((error) => {
          const errorMessage = error.message;
          setError(errorMessage);
        });
    } else {
      setError("please provide email address properly");
    }
  };
  const handleNormalLogin = () => {
    if (emailRegex.test(email)) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          try {
            fetch("https://device-zone.onrender.com/user/create", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: user.email,
                address: user.displayName,
                zipCode: null,
                isSeller: false,
                isAdmin: false,
              }),
            })
              .then((res) => res.json())
              .then((data) => {
                navigate(from);
                console.log(data);
              });
          } catch (err) {
            console.log(err);
            setError(err);
          } finally {
            console.log("successful");
          }
          // ...
        })
        .catch((error) => {
          const errorMessage = error.message;
          setError(errorMessage);
        });
      console.log(email, password);
    } else {
      setError("Make Sure Your Email is Correct!");
    }
  };

  const handleRegister = () => {
    if (emailRegex.test(email)) {
      console.log("Registered User Data: ", {
        email,
        address,
        zipCode,
        isSeller,
        isAdmin,
        userName,
      });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);

          axios
            .post("https://device-zone.onrender.com/user/create", {
              email: user.email,
              address,
              zipCode,
              isSeller,
              isAdmin,
              userName,
            })
            .then((response) => {
              navigate(from);

              console.log(
                "User data sent to server successfully:",
                response.data
              );
            })
            .catch((error) => {
              console.error("Error sending user data to server:", error);
            });
        })
        .catch((error) => {
          const errorMessage = error.message;
          setError(errorMessage);
        });
      console.log(email, password);
    } else {
      setError("Make Sure Your Email is Correct!");
    }
  };

  const provider = new GoogleAuthProvider();
  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        navigate(from);

        axios
          .post("https://device-zone.onrender.com/user/create", {
            email: user.email,
            userName: user.displayName,
            zipCode: null,
            address: "",
            isSeller: false,
            isAdmin: false,
          })
          .then((response) => {
            console.log(
              "User data sent to server successfully:",
              response.data
            );
          })
          .catch((error) => {
            console.error("Error sending user data to server:", error);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  useEffect(() => {
    if (user) {
      navigate(from);
    }
  }, []);
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-white p-6 rounded text-[#1f1e1f] shadow w-96">
          {error && <span className="text-red-500 text-xs"> {error}</span>}
          <h2 className="text-2xl font-bold mb-4">
            {isSeller ? "Register as Seller" : "Login"}
          </h2>
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-gray-100 p-2 mb-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-gray-100 p-2 mb-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {isSeller && (
            <>
              <input
                type="text"
                placeholder="User Name"
                className="w-full bg-gray-100 p-2 mb-2 border rounded"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Address"
                className="w-full bg-gray-100 p-2 mb-2 border rounded"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <input
                type="text"
                placeholder="Zip Code"
                className="w-full bg-gray-100 p-2 mb-2 border rounded"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
              />
            </>
          )}
          {!isSeller && (
            <button
              className="w-full bg-[#1f1e1f] text-white p-2 rounded mb-4"
              onClick={handleLogin}
            >
              Login
            </button>
          )}
          <div className="flex justify-between items-center">
            <label className="text-sm text-[#1f1e1f]">
              Register as seller:
              <input
                type="checkbox"
                className="ml-1"
                checked={isSeller}
                onChange={() => setIsSeller((prev) => !prev)}
              />
            </label>
            {!isSeller && (
              <button
                className="text-blue-500  text-sm focus:outline-none"
                onClick={handleGoogleLogin}
              >
                <FcGoogle className="text-4xl" />
              </button>
            )}
          </div>
          {isSeller && (
            <button
              className="w-full bg-gray-500 text-white p-2 rounded mt-4"
              onClick={handleRegister}
            >
              Register as Seller
            </button>
          )}
          {!isSeller && (
            <button
              className="w-full bg-gray-500 text-white p-2 rounded mt-4"
              onClick={handleNormalLogin}
            >
              Register
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Authentication;
