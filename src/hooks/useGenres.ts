import { useQuery } from "@tanstack/react-query";
import genres from "../static_data/genre";
import APIClient, { FetchResponse } from "../services/api-client";
import ms from 'ms';

const apiClient = new APIClient<Genre>('/genres');


export interface Genre {
    id: number,
    name:string
    image_background: string
}

const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'), //24h,
    initialData: {count: genres.length,next:null,  results:genres}
})


export default useGenres