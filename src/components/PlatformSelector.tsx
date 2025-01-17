import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms, { Platform } from '../hooks/usePlatforms'
import usePlatform from '../hooks/usePlatform'
import useGameQueryStore from '../store'



const PlatformSelector = () => {
    const{data, error}=usePlatforms();
    const selectedPlatformId = useGameQueryStore((s)=> s.gameQuery.platformId)
    const setSelectedPlatformId = useGameQueryStore((s)=> s.setPlatformId)

    const platform = usePlatform(selectedPlatformId);

    if(error) return null;
    return (
        <Menu>
            <MenuButton bg="gray.800" _hover={{ bg: "gray.800" }} as={Button} rightIcon={<BsChevronDown />} >{platform?.name || 'Platforms'}</MenuButton>
            <MenuList>
                {data?.results.map((platform)=><MenuItem onClick={()=>setSelectedPlatformId(platform.id)} key={platform.id}>{platform.name} </MenuItem>)}
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector
