import { useQuery } from "@tanstack/react-query";
import { productProps } from "@/components/ProductItem";
import client from "@/lib/client";

export const QUERY_KEY = "/product";
const fetcher = ({ page }: { page: number }) =>
    client
        .get<productProps[]>(`/test/goods${page}.json`)
        .then(({ data }) => data?.data?.list);

const useProductQuery = ({ page = 0 } = {}): { page: number } =>
    useQuery({
        queryKey: [QUERY_KEY, page],
        queryFn: () => fetcher({ page }),
        staleTime: 5000,
        gcTime: 5000,
        enabled: false,
        throwOnError: true,
        retry: 0,
        // keepPreviousData: true,
    });

export default useProductQuery;
