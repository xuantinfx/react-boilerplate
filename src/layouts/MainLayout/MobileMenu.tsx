import React, { useEffect } from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { matchPath, useLocation } from 'react-router-dom';
import { AppAction, RootReducerState } from 'src/redux';
import { Colors } from 'src/shared';
import { INavigationLink } from '../types';
import { ProfileLinks, MainLinks } from '../constants';
import MenuLink from './MenuLink';

const MobileMenu = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AppAction.toggleMobileNavbar(false));
  }, [dispatch, pathname]);
  const mobileNavbarVisible = useSelector(
    (state: RootReducerState) => state.app.mobileNavbarVisible
  );
  const onCloseMenu = () => {
    dispatch(AppAction.toggleMobileNavbar(false));
  };
  const menuLinks = [...MainLinks, ...ProfileLinks];
  const defaultBg = useColorModeValue(Colors.dark.secondaryBg, Colors.dark.secondaryBg);
  return (
    <Drawer isOpen={mobileNavbarVisible} onClose={onCloseMenu} placement="right">
      <DrawerOverlay />
      <DrawerContent bg={defaultBg}>
        <DrawerCloseButton />
        <DrawerBody>
          <Flex mt={10} mb={2}>
            header
          </Flex>
          <Flex as={'nav'} direction="column">
            {menuLinks.map((navData: INavigationLink) => {
              const isActive = (navData.matchRoutes || [navData.route]).some((path) =>
                matchPath(pathname, { path: path, exact: navData.activeOnlyWhenExact })
              );
              return <MenuLink key={navData.route} item={navData} isActive={isActive} />;
            })}
          </Flex>
        </DrawerBody>
        <DrawerFooter justifyContent={'center'}>header</DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileMenu;
