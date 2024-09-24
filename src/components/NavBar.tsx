import { Image, VStack, Stack, Icon, Link } from '@chakra-ui/react';
import { MdOutlineMessage, MdFormatListBulleted, MdCode } from 'react-icons/md'
import logo from '../assets/BSlogo.webp';
import NavItem from './NavItem';

interface Props {
  orientation: "row" | "column";
}

const NavBar = ({orientation}: Props) => {
  return (
    <>
    <VStack alignItems="center" justifyItems="center" gap="0" padding="0" margin="0">
      <Link href="/">
      <Image src={logo} boxSize={"8rem"} padding="1rem" alt="BenSmylie.com" title="BenSmylie.com"/>
      </Link>
    </VStack>
    <Stack direction={orientation} width="100%" alignItems="center" justifyContent="center" padding={"1rem"} gap="0rem">
      <NavItem url="#" text="Resume" icon={MdFormatListBulleted} />
      <NavItem url="#" text="Projects" icon={MdCode} />
      <NavItem url="#" text="Contact" icon={MdOutlineMessage} />
    </Stack>
    </>
  )
}

export default NavBar