import axios from 'axios';

const axiosPrivate = axios.create({
    baseURL: import.meta.env.VITE_SERVER,
    withCredentials: true
});
const useAxiosPrivate = () => {
    return axiosPrivate;
};

export default useAxiosPrivate;