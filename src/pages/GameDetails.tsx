import React from "react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import {
  Box,
  GridItem,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import DefinitionItem from "../components/DefinitionItem";
import CriticScore from "../components/CriticScore";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

const GameDetails = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);

  if (isLoading) return <Spinner></Spinner>;
  if (error || !game) throw error;

  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={3}>
        <GridItem>
          <Heading>{game.name}</Heading>
          <ExpandableText>{game.description_raw}</ExpandableText>
          <GameAttributes game={game}></GameAttributes>
        </GridItem>
        <GridItem>
          <GameTrailer gameId={game.id}></GameTrailer>
          <GameScreenshots gameId={game.id}></GameScreenshots>
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default GameDetails;
