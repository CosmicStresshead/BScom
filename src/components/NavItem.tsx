import { Icon, Link, Text, VStack } from '@chakra-ui/react'
import { IconType } from 'react-icons';

interface Props {
  url: string;
  text: string;
  icon: IconType;
}

const NavItem = ({ url, text, icon }: Props) => {
  return (
    <Link className="nav-item" href={url}>
      <VStack boxSize="8rem" justifyContent="center" alignContent="center">
        <Icon className="nav-item-icon" as={icon} boxSize="3rem" />
        <Text className="nav-text">{text}</Text>
      </VStack>
    </Link>
  )
}

export default NavItem