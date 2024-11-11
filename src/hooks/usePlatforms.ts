import { useQuery } from "@tanstack/react-query";
import platforms from "../static_data/platforms";
import APIClient, { FetchResponse } from "../services/api-client";
import ms from 'ms'

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => useQuery({
  queryKey: ['platforms'],
  queryFn: apiClient.getAll,
  staleTime: ms('24h'), //24h
  initialData: {count:platforms.length, next: null, results:platforms}
});

export default usePlatforms;
