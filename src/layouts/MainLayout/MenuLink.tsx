import React from 'react';
import { LinkButton } from 'src/components/Button';
import { Flex, useColorModeValue, Box } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Colors } from 'src/shared';
import { INavigationLink } from '../types';
import MenuIcon from './MenuIcon';

interface MenuLinkProps {
  isActive?: boolean;
  item: INavigationLink;
}
const MenuLink = (props: MenuLinkProps) => {
  const { item, isActive } = props;
  const { t } = useTranslation();
  const activeBg = useColorModeValue(Colors.dark.bg, Colors.dark.bg);
  const activeColor = useColorModeValue(Colors.dark.text, Colors.dark.text);
  const defaultColor = useColorModeValue(Colors.dark.description, Colors.dark.description);

  const color = isActive ? activeColor : defaultColor;
  const bg = isActive ? activeBg : 'transparent';
  return (
    <LinkButton
      p={4}
      borderRadius={'md'}
      textAlign="left"
      fontWeight="bold"
      to={item.route}
      color={color}
      bg={bg}
      _hover={{
        textDecoration: 'none',
        color: color,
        bg: activeBg,
        borderRadius: 'md',
      }}
      _focus={{
        textDecoration: 'none',
        color: color,
        bg: activeBg,
        borderRadius: 'md',
      }}
    >
      <Flex alignItems="center">
        <MenuIcon label={item.label} color={color} />
        <Box ml={2}>{t(item.label)}</Box>
      </Flex>
    </LinkButton>
  );
};
export default MenuLink;
