import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { HEADER_HEIGHT } from 'src/globals/constants';
import { useTranslation } from 'react-i18next';
import { AppSizes, Resources } from 'src/shared';

const Login = () => {
  const { t } = useTranslation();
  return (
    <Flex
      minHeight={`calc(100vh - ${HEADER_HEIGHT})`}
      flex={{ base: 1 }}
      p={{ base: 2, md: 4 }}
      flexDirection={'column'}
      alignItems={'center'}
    >
      <Box>
        <Image
          maxWidth={AppSizes.BannerMaxWidth}
          marginX="auto"
          src={Resources.images.logo}
          alt={t('logo')}
        />
      </Box>
      <Box marginY={10} fontSize="md" fontWeight="bold" textAlign="center">
        <Text>{t('Component:Login.Description')}</Text>
      </Box>
      <Box mt={3}>Login</Box>
    </Flex>
  );
};

export default Login;
