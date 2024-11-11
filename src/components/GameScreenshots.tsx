import React from "react";
import useScreenshots from "../hooks/useScreenshots";
import { Image, SimpleGrid } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return null;
  if (error) throw error;
  return (
    <>
      <SimpleGrid paddingTop={3} columns={{ sm: 1, md: 2 }} spacing={2}>
        {data?.results.map((screenshot) => (
          <Image overflow="hidden" src={screenshot.image} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameScreenshots;
