import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/BSlogo.webp';
import ColourModeSwitch from './ColourModeSwitch';

const NavBar = () => {
  return (
    <HStack padding={"1rem"} justifyContent="space-between">
        <Image src={logo} boxSize={"4rem"} />
        <ColourModeSwitch />
    </HStack>
  )
}

export default NavBar