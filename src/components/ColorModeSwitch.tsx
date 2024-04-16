import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'


const ColorModeSwitch = () => {
  
  const {toggleColorMode, colorMode} = useColorMode();
  return (
    <HStack padding="8px">
        <Switch colorScheme="green" isChecked={colorMode==='dark'} onChange={toggleColorMode}/>
        <Text mr='5px'>Dark Mode</Text>
    </HStack>
  )
}

export default ColorModeSwitch
