import React, { ReactElement } from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';
import { HEADER_HEIGHT } from 'src/globals/constants';
import { Colors } from 'src/shared';
import { useIsDesktop } from '../../hooks';
import HeaderLayout from './HeaderLayout';
import MobileMenu from './MobileMenu';

interface MainLayoutProps {
  children: ReactElement | ReactElement[];
}
const MainLayout = ({ children }: MainLayoutProps) => {
  const bg = useColorModeValue(Colors.dark.secondaryBg, Colors.dark.secondaryBg);
  const isDesktop = useIsDesktop();
  return (
    <>
      <HeaderLayout />
      <Box mt={HEADER_HEIGHT} w={'full'} bg={bg}>
        {children}
      </Box>
      {!isDesktop && <MobileMenu />}
    </>
  );
};

export default MainLayout;
