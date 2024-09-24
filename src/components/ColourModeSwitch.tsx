import { HStack, Switch, Text, useColorMode, Icon, VStack } from '@chakra-ui/react'
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';

const ColourModeSwitch = () => {

  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <VStack>
      <Text fontSize={"0.75rem"}>Colour mode:</Text>
      <HStack>
        <Icon as={MdOutlineDarkMode} onClick={colorMode === "light" ? toggleColorMode : undefined} />
        <Switch colorScheme="yellow" isChecked={colorMode === 'light'} onChange={toggleColorMode} />
        <Icon as={MdOutlineLightMode} onClick={colorMode === "dark" ? toggleColorMode : undefined} />
      </HStack>
      {/* <Text>{colorMode.toUpperCase()}</Text> */}
    </VStack>
  )
}

export default ColourModeSwitch