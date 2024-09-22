import { HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/BSlogo.webp';

const NavBar = () => {
  return (
    <HStack padding={"1rem"}>
        <Image src={logo} boxSize={"4rem"} />
        <Text>Navbar</Text>
    </HStack>
  )
}

export default NavBar