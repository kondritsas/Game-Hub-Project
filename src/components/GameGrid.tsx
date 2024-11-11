import { Box, Button, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import useGameQueryStore from '../store';




const GameGrid = () => {
  const{data, error, isLoading, isFetchingNextPage,  fetchNextPage, hasNextPage} = useGames();
  const skeletons = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  const fetchGamesCounter = data?.pages.reduce((total, page)=>total + page.results.length,0);

  return (
    <>
      {error && <Text>{error.message}</Text>}
      <InfiniteScroll 
        dataLength={fetchGamesCounter || 0}
        next={()=>fetchNextPage()}
        hasMore={!!hasNextPage}
        loader={<Spinner></Spinner>}
      >
        <SimpleGrid padding="10px" columns={{sm: 1, xl:4}} spacing={6}>
          {isLoading && skeletons.map((skeleton)=> (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton ></GameCardSkeleton>
            </GameCardContainer>
          ))}
            {data?.pages.map((page, index)=> 
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <GameCardContainer key={game.id}>
                  <GameCard  game={game}></GameCard>
                </GameCardContainer>))}
            </React.Fragment>)}    
        </SimpleGrid>
      </InfiniteScroll>
    </>
  )
}

export default GameGrid
