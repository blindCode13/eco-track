import axios from "axios";

const axiosInstance = axios.create({ baseURL: "https://eco-track-server-eta.vercel.app" });

export const useAxios = () => {
    return axiosInstance;
};