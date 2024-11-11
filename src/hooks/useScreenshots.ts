import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

interface Screenshot {
  id: number;
  height: number;
  width: number;
  image: string;
}

const useScreenshots = (gameId: number) => {
  const apiClient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useScreenshots;
