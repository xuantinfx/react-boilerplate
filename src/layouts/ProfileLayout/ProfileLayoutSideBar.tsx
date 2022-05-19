import React from 'react';
import { matchPath, useLocation } from 'react-router-dom';
import { useColorModeValue, Flex } from '@chakra-ui/react';
import useIsDesktop from 'src/hooks/useIsDesktop';
import { Colors } from 'src/shared';
import { INavigationLink } from '../types';
import { ProfileLinks } from '../constants';
import MenuLink from '../MainLayout/MenuLink';

const ProfileLayoutSideBar = () => {
  const { pathname } = useLocation();
  const borderColor = useColorModeValue(Colors.dark.divider, Colors.dark.divider);
  const isDesktop = useIsDesktop();
  if (isDesktop) {
    return (
      <Flex
        pos={'relative'}
        borderRight={{ base: 'none', md: `1px solid ${borderColor}` }}
        borderBottom={{ base: `1px solid ${borderColor}`, md: 'none' }}
        w={{ base: 'full', md: '220px', lg: '280px' }}
      >
        <Flex flex={1} p={4} as={'nav'} direction="column">
          {ProfileLinks.map((navData: INavigationLink) => {
            const isActive = (navData.matchRoutes || [navData.route]).some((path) =>
              matchPath(pathname, { path: path, exact: navData.activeOnlyWhenExact })
            );
            return <MenuLink key={navData.route} item={navData} isActive={isActive} />;
          })}
        </Flex>
      </Flex>
    );
  }

  return null;
};

export default ProfileLayoutSideBar;
