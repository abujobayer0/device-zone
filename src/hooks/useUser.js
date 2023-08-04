import { getAuth } from "firebase/auth";
import app from "../utils/firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
const auth = getAuth(app);
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./axiosInstance";
export const useUser = () => {
  const [user] = useAuthState(auth);
  const url = `https://device-zone.onrender.com/user?email=${user?.email}`;
  const query = useQuery({
    queryKey: [url],
    queryFn: () => axiosInstance.get(url).then((response) => response.data),
  });

  return query;
};
