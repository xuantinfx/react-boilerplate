import React from 'react';
import { PrimaryLink } from 'src/components/Button';
import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Colors } from 'src/shared';
import { INavigationLink } from '../types';
import MenuIcon from './MenuIcon';

interface NavigationLinkProps {
  isActive?: boolean;
  item: INavigationLink;
}
const NavigationLink = (props: NavigationLinkProps) => {
  const { item, isActive } = props;
  const { t } = useTranslation();

  const color = useColorModeValue(Colors.dark.text, Colors.dark.text);
  return (
    <PrimaryLink className="navLink" to={item.route} isActive={isActive} py={2} px={4}>
      <Flex alignItems="center">
        <MenuIcon label={item.label} color={color} />
        <Box ml={2}>{t(item.label)}</Box>
      </Flex>
    </PrimaryLink>
  );
};
export default NavigationLink;
