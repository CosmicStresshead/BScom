import { HStack, Image, Text, VStack, Stack } from '@chakra-ui/react';
import logo from '../assets/BSlogo.webp';

interface Props {
  orientation: "row" | "column";
}

const NavBar = ({orientation}: Props) => {
  return (
    <>
    <VStack>
      <Image src={logo} boxSize={"6rem"} padding="1rem" />
    </VStack>
    <Stack direction={orientation} width="100%" alignItems="center" justifyContent="center" padding={"1rem"} gap="1rem">
        <Text>Link 1</Text>
        <Text>Link 2</Text>
        <Text>Link 3</Text>
        <Text>Link 4</Text>
    </Stack>
    </>
  )
}

export default NavBar