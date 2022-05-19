import React from 'react';
import { Flex, Stack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { SEO } from 'src/seo';

const Dashboard = () => {
  const { t } = useTranslation();
  return (
    <Flex justifyContent="center" minHeight="100vh">
      <SEO title={t('PageName:Dashboard')} />
      <Stack {...styles.container}>
        <Stack width="100%" spacing={[4, 8]} direction={{ base: 'column', lg: 'row' }}>
          abc
        </Stack>
      </Stack>
    </Flex>
  );
};

export default Dashboard;

const styles = {
  container: {
    p: { base: 2, md: 4 },
    width: '100%',
    direction: 'column' as 'column',
    maxWidth: { base: 'none' as 'none', lg: '1024px', xl: '1200px' },
    alignItems: 'flex-start',
  },
};
