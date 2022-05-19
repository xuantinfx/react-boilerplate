import React from 'react';
import { Link, Box, Flex, useColorModeValue, HStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { HEADER_HEIGHT, RoutePath } from 'src/globals/constants';
import { Colors, Resources } from 'src/shared';
import useIsDesktop from 'src/hooks/useIsDesktop';
import { ProfileButton } from 'src/features/authentication';
import { LanguageSelector } from 'src/features/language';
import { SEO } from 'src/seo';
import ToggleMobileMenuButton from './ToggleMobileMenuButton';
import Navigation from './Navigation';

const LogoView = React.memo(function Logo() {
  return (
    <Link as={RouterLink} to={RoutePath.ROOT} marginRight={'3'}>
      <Box width={{ base: '120px', md: '140px' }}>
        <img src={Resources.images.logo} alt="Fantasy World - Marketplace" />
      </Box>
    </Link>
  );
});

const HeaderLayout = () => {
  const bg = useColorModeValue(Colors.dark.bg, Colors.dark.bg);
  const borderColor = useColorModeValue(Colors.dark.divider, Colors.dark.divider);
  const addressBackground = useColorModeValue(
    Colors.dark.addressBackground,
    Colors.dark.addressBackground
  );
  const isDesktop = useIsDesktop();
  return (
    <Box
      as="header"
      w="full"
      h={HEADER_HEIGHT}
      zIndex="sticky"
      pos="fixed"
      top="0"
      left="0"
      right="0"
    >
      <SEO />
      <Flex
        w="full"
        align="center"
        justify="flex-start"
        bg={bg}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={borderColor}
        shadow="sm"
        h="100%"
        px={{ base: 4, md: 6 }}
      >
        <Flex flex={{ base: 1 }} position={'relative'}>
          <LogoView />
          <Flex display={{ base: 'none', md: 'flex' }} ml={10} alignItems="center">
            <Navigation />
          </Flex>
        </Flex>
        <HStack spacing="24px">
          <LanguageSelector />
          {isDesktop && (
            <Box
              as="span"
              textAlign="center"
              borderRadius={50}
              backgroundColor={addressBackground}
              display="flex"
            >
              header
            </Box>
          )}
          {isDesktop && <ProfileButton />}
          {!isDesktop && <ToggleMobileMenuButton />}
        </HStack>
      </Flex>
    </Box>
  );
};

export default HeaderLayout;
