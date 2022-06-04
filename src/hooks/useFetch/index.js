import useSWR, { useSWRConfig } from 'swr'
import axios from "axios";

export function useFetch(url) {
    const { cache } = useSWRConfig();
    const revalidationOptions = {
        revalidateOnMount: !cache.has(url),
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    };

    const { data, error } = useSWR(url, async url => {
        const response = await axios.get(url);
        return response.data;
    }, revalidationOptions);

    return { data, error }
}
