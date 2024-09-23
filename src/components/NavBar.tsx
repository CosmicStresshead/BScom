import { Image, VStack, Stack, Icon } from '@chakra-ui/react';
import { MdOutlineBadge, MdFormatListBulleted, MdCode } from 'react-icons/md'
import logo from '../assets/BSlogo.webp';
import NavItem from './NavItem';

interface Props {
  orientation: "row" | "column";
}

const NavBar = ({orientation}: Props) => {
  return (
    <>
    <VStack>
      <Image src={logo} boxSize={"10rem"} padding="2rem" />
    </VStack>
    <Stack direction={orientation} width="100%" alignItems="center" justifyContent="center" padding={"1rem"} gap="1rem">
      <NavItem url="#" text="Resume" icon={MdFormatListBulleted} />
      <NavItem url="#" text="Projects" icon={MdCode} />
      <NavItem url="#" text="About Ben" icon={MdOutlineBadge} />
    </Stack>
    </>
  )
}

export default NavBar