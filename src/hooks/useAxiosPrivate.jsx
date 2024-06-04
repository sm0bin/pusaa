import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosPrivate = axios.create({
    baseURL: import.meta.env.VITE_SERVER,
    withCredentials: true
});

const useAxiosPrivate = () => {
    const navigate = useNavigate();
    const { logoutUser } = useAuth();

    // Add a request interceptor
    axiosPrivate.interceptors.request.use(
        config => {
            const token = localStorage.getItem('token');
            if (token) {
                config.headers.authorization = `Bearer ${token}`;
            } else {
                logoutUser().then(() => navigate('/login'));
            }
            return config;
        },
        error => Promise.reject(error)
    );

    // Add a response interceptor
    axiosPrivate.interceptors.response.use(
        response => response,
        error => {
            if (error.response) {
                const { status } = error.response;
                if (status === 401 || status === 403) {
                    logoutUser().then(() => navigate('/login'));
                }
            } else {
                console.error('Network or unexpected error', error);
            }
            return Promise.reject(error);
        }
    );

    return axiosPrivate;
};

export default useAxiosPrivate;
