import { HStack, Switch, Text, useColorMode, Icon, VStack } from '@chakra-ui/react'
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';

const ColourModeSwitch = () => {

  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <VStack>
      <Text fontSize={"0.75rem"}>Colour mode:</Text>
      <HStack>
        <Icon as={MdOutlineDarkMode} />
        <Switch colorScheme="yellow" isChecked={colorMode === 'light'} onChange={toggleColorMode} ></Switch>
        <Icon as={MdOutlineLightMode} />
      </HStack>
      {/* <Text>{colorMode.toUpperCase()}</Text> */}
    </VStack>
  )
}

export default ColourModeSwitch