import {Box, Grid, GridItem, HStack, Show} from "@chakra-ui/react";

import ColorModeSwitch from "./components/ColorModeSwitch";

import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";




function App() {

  return (
    <Grid templateAreas={{base: `"main"`,
                          lg:`"aside main"`
    }}
    templateColumns={{
      base: '1fr',
      lg: '200px 1fr'
    }}>
      <GridItem bg="gray.800" area={'nav'}>
          <NavBar ></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem bg = "gray.800" area='aside' paddingX={5}>
          <GenreList></GenreList>
        </GridItem>
      </Show>
      <GridItem area='main'>
        <Box  paddingLeft={2}>
        <GameHeading ></GameHeading>
        <HStack spacing={5}  marginBottom={5}>
          <PlatformSelector ></PlatformSelector>
          <SortSelector ></SortSelector>
        </HStack>
        </Box>
        <GameGrid ></GameGrid>
      </GridItem>
    </Grid>
  )}

export default App
