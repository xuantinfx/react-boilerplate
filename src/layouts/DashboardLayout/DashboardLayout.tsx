import React, { ReactElement } from 'react';
import { Box, Flex, useColorModeValue, VStack, HStack } from '@chakra-ui/react';
import { HEADER_HEIGHT } from 'src/globals/constants';
import { useSelector } from 'react-redux';
import { Colors } from 'src/shared';
import useIsDesktop from 'src/hooks/useIsDesktop';
import { RootReducerState } from 'src/redux';
import { useGetSecondaryHeaderBarHeight } from 'src/hooks';
import DashboardNav from './DashboardNav';

interface DashboardLayoutProps {
  children: ReactElement | ReactElement[];
  renderSidebarContent?: () => JSX.Element;
}
const DashboardLayout = ({ children, renderSidebarContent }: DashboardLayoutProps) => {
  const borderColor = useColorModeValue(Colors.dark.divider, Colors.dark.divider);
  const bg = useColorModeValue(Colors.dark.secondaryBg, Colors.dark.secondaryBg);
  const defaultBg = useColorModeValue(Colors.dark.secondaryBg, Colors.dark.secondaryBg);

  const isDesktop = useIsDesktop();
  const secondaryHeaderBarHeight = useGetSecondaryHeaderBarHeight();
  const sidebarVisible = useSelector((state: RootReducerState) => state.app.sidebarVisible);

  const renderSidebarComponent = () => {
    if ((isDesktop || sidebarVisible) && renderSidebarContent) {
      return (
        <Flex
          pos={isDesktop ? 'relative' : 'sticky'}
          borderRight={{ base: 'none', md: `1px solid ${borderColor}` }}
          borderBottom={{ base: `1px solid ${borderColor}`, md: 'none' }}
          w={{ base: 'full', md: '220px', lg: '280px' }}
          h={isDesktop ? 'auto' : '100vh'}
          zIndex={99}
          backgroundColor={defaultBg}
          top={0}
        >
          {renderSidebarContent()}
        </Flex>
      );
    }

    return null;
  };

  return (
    <VStack spacing={0}>
      <HStack
        // h={SECONDARY_HEADER_HEIGHT}
        pos="fixed"
        zIndex="sticky"
        top={{ base: 0 }}
        spacing={{ base: 4, xl: 8 }}
        direction="column"
        mt={HEADER_HEIGHT}
        w="full"
        justifyContent="space-between"
        borderBottom={1}
        borderStyle="solid"
        borderColor={borderColor}
        bg={bg}
        alignItems={{ base: 'center', md: 'flex-start' }}
        px={4}
      >
        <DashboardNav menuLinks={[]} />
      </HStack>
      <Box h={secondaryHeaderBarHeight} pos={'relative'} w="full" zIndex="hide" />
      <Flex
        w={'full'}
        mt={0}
        minHeight={`calc(100vh - ${secondaryHeaderBarHeight} - ${HEADER_HEIGHT})`}
        flexDirection={{ base: 'column', md: 'row' }}
      >
        {renderSidebarComponent()}
        <Flex flex={{ base: 1 }} p={{ base: 2, md: 4 }} flexDirection="column">
          {children}
        </Flex>
      </Flex>
    </VStack>
  );
};

export default DashboardLayout;
