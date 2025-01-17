import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'


const ColorModeSwitch = () => {
  
  const {toggleColorMode, colorMode} = useColorMode();
  return (
    <HStack paddingLeft = {8}padding="8px">
        <Switch colorScheme="green" isChecked={colorMode==='dark'} onChange={toggleColorMode}/>
        <Text whiteSpace='nowrap' mr='5px'>Dark Mode</Text>
    </HStack>
  )
}

export default ColorModeSwitch
