import axios from "axios";
import config from "./config";

const getAuthHeaders = () => {
  const token = sessionStorage.getItem("token");
  return { headers: { token: token } };
};


