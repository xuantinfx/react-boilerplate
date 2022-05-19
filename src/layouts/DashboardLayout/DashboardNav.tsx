import React, { useEffect, useState } from 'react';
import { HStack, StackProps } from '@chakra-ui/react';
import { matchPath, useLocation } from 'react-router-dom';
import { useIsDesktop } from 'src/hooks';
import { INavigationLink } from '../types';
import DashboardNavLink from './DashboardNavLink';
import MobileNav from './MobileNav';

interface DashboardNavProps extends StackProps {
  menuLinks: INavigationLink[];
}

const DashboardNav = (props: DashboardNavProps) => {
  const { menuLinks, ...remainingProps } = props;

  const { pathname } = useLocation();
  const isDesktop = useIsDesktop();

  const [selectedMenu, setSelectedMenu] = useState<INavigationLink | null>(null);

  useEffect(() => {
    const selected = menuLinks.find((link) => isActive(pathname, link));
    setSelectedMenu(selected || null);
  }, [menuLinks, pathname]);

  if (isDesktop) {
    return (
      <HStack as={'nav'} spacing="0" h="100%" overflow={'hidden'} {...remainingProps}>
        {menuLinks.map((navData) => {
          return (
            <DashboardNavLink
              key={navData.route}
              item={navData}
              isActive={isActive(pathname, navData)}
            />
          );
        })}
      </HStack>
    );
  }
  return <MobileNav menuLinks={menuLinks} selectedMenu={selectedMenu} />;
};

const isActive = (pathname: string, navLink: INavigationLink) =>
  Boolean(
    matchPath(pathname, {
      path: navLink.route,
      exact: navLink.activeOnlyWhenExact || false,
    })
  );

export default DashboardNav;
