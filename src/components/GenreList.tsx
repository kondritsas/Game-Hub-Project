import { Box, Button, HStack, Heading, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-urls';
import GenreSkeleton from './GenreSkeleton';

interface Props {
  onSelectGenre: (genre: Genre) => void
  selectedGenre: Genre | null
}

const GenreList = ({selectedGenre,onSelectGenre}: Props) => {
  const {data, error, isLoading} = useGenres();
  if(error) return null;
  if(isLoading) return <Spinner />;

  return (
    <Box   borderRadius={8}>
      <>
        <Heading fontSize={'2xl'} marginBottom={3} color="white">Genres</Heading>
        <List>
          {data.map((genre)=> 
            <ListItem key={genre.id} paddingY='5px'>
              <HStack>
                <Image objectFit={'cover'} boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)}></Image>
                <Button whiteSpace='normal' textAlign='left' onClick={()=>onSelectGenre(genre)} fontSize='lg' variant='link' fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} color="white">{genre.name}</Button>
              </HStack>
            </ListItem>)}
        </List>
      </>
    </Box>
  )
}

export default GenreList;


