import { Image, VStack, Stack, Icon, Link } from '@chakra-ui/react';
import { MdOutlineMessage, MdFormatListBulleted, MdCode } from 'react-icons/md'
import logo from '../assets/BSlogo.webp';
import NavItem from './NavItem';

interface Props {
  orientation: "row" | "column";
}

const NavBar = ({orientation}: Props) => {
  return (
    
    <VStack>
      <Link href="/">
      <Image src={logo} boxSize={"8rem"} padding="2rem" alt="BenSmylie.com" title="BenSmylie.com"/>
      </Link>
    <Stack direction={orientation} width="100%" alignItems="center" justifyContent="center" gap="0rem">
      <NavItem url="#" text="Resume" icon={MdFormatListBulleted} />
      <NavItem url="#" text="Projects" icon={MdCode} />
      <NavItem url="#" text="Contact" icon={MdOutlineMessage} />
    </Stack>
    </VStack>
    
  )
}

export default NavBar