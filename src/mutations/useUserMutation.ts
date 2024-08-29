import { useMutation } from "@tanstack/react-query";
import { FormProps } from "@/components/form/FirstForm";
import client from "@/lib/client";

export const QUERY_KEY = "/users";
const fetcher = (props: FormProps) =>
    client.post("/users", props).then(({ data }) => data);

export const useCreateUser = (options = {}) =>
    useMutation({
        mutationKey: [QUERY_KEY],
        mutationFn: fetcher,
        gcTime: 5000,
        retry: 0,
        ...options,
    });
