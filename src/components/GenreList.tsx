import { Box, Button, HStack, Heading, Image, List, ListItem, Spinner} from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-urls';
import useGameQueryStore from '../store';


const GenreList = () => {
  const {data, error, isLoading} = useGenres();
  const selectedGenreId = useGameQueryStore((s)=>s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s)=>s.setGenreId);

  if(error) return null;
  if(isLoading) return <Spinner />;

  return (
    <Box   borderRadius={8}>
      <>
        <Heading fontSize={'2xl'} marginBottom={3} color="white">Genres</Heading>
        <List>
          {data?.results.map((genre)=> 
            <ListItem key={genre.id} paddingY='5px'>
              <HStack>
                <Image objectFit={'cover'} boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)}></Image>
                <Button whiteSpace='normal' textAlign='left' onClick={()=>setSelectedGenreId(genre.id)} fontSize='lg' variant='link' fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'} color="white">{genre.name}</Button>
              </HStack>
            </ListItem>)}
        </List>
      </>
    </Box>
  )
}

export default GenreList;


