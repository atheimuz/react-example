import { useQuery } from "@tanstack/react-query";
import { Props } from "@/components/form/UserItem";
import client from "@/lib/client";

export const QUERY_KEY = "/users";
const fetcher = () => client.get<Props[]>(`/users`).then(({ data }) => data);

const useUserQuery = () =>
    useQuery({
        queryKey: [QUERY_KEY],
        queryFn: fetcher,
        staleTime: 5000,
        gcTime: 5000,
        retry: 0,
    });

export default useUserQuery;
