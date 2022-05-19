import React from 'react';
import { Box, Flex } from '@chakra-ui/react';

const HEADER_HEIGHT = '75px';

const FooterLayout = () => {
  return (
    <Box as="footer" w="full" h={HEADER_HEIGHT} top="0" left="0" right="0">
      <Flex
        w="full"
        align="center"
        justify="flex-start"
        shadow="sm"
        h="100%"
        px={{ base: 4, md: 6 }}
      ></Flex>
    </Box>
  );
};

export default FooterLayout;
