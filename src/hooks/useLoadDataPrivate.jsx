import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "./useAxiosPrivate";

const useLoadDataPrivate = (url, key) => {
    const axiosPrivate = useAxiosPrivate();

    const { data, isPending, error, refetch } = useQuery({
        queryKey: [key],
        queryFn: async () => {
            const res = await axiosPrivate(url)
            return res.data
        }
    })
    return [data, isPending, refetch, error];
};

export default useLoadDataPrivate;
