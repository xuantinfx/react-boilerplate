import React from 'react';
import { HStack, useColorModeValue } from '@chakra-ui/react';
import { matchPath, useLocation } from 'react-router-dom';
import { Colors } from 'src/shared';
import { MainLinks } from '../constants';
import { INavigationLink } from '../types';
import NavigationLink from './NavigationLink';

const Navigation = () => {
  const { pathname } = useLocation();

  const defaultBg = useColorModeValue(Colors.dark.secondaryBg, Colors.dark.secondaryBg);
  return (
    <HStack as="nav" spacing={2} bg={defaultBg} borderRadius="full">
      {MainLinks.map((navData: INavigationLink) => {
        const isActive = (navData.matchRoutes || [navData.route]).some((path) =>
          matchPath(pathname, { path: path, exact: navData.activeOnlyWhenExact })
        );
        return <NavigationLink key={navData.route} item={navData} isActive={isActive} />;
      })}
    </HStack>
  );
};

export default Navigation;
