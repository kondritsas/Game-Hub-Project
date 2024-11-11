import { Grid, GridItem, Show, Box, HStack } from '@chakra-ui/react'
import GameGrid from '../components/GameGrid'
import GameHeading from '../components/GameHeading'
import GenreList from '../components/GenreList'
import PlatformSelector from '../components/PlatformSelector'
import SortSelector from '../components/SortSelector'

const HomePage = () => {
  return (
    <Grid templateAreas={{base: `"main"`,
        lg:`"aside main"`
}}
templateColumns={{
base: '1fr',
lg: '200px 1fr'
}}>
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
  )
}

export default HomePage