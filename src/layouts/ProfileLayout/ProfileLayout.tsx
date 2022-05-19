import React, { ReactElement } from 'react';
import { Flex, VStack } from '@chakra-ui/react';
import { HEADER_HEIGHT } from 'src/globals/constants';
import { SEO } from 'src/seo';
import { useGetSecondaryHeaderBarHeight } from 'src/hooks';
import ProfileLayoutSideBar from './ProfileLayoutSideBar';

interface ProfileLayoutProps {
  children: ReactElement | ReactElement[];
}
const ProfileLayout = ({ children }: ProfileLayoutProps) => {
  const secondaryHeaderBarHeight = useGetSecondaryHeaderBarHeight();
  return (
    <VStack spacing={0}>
      <SEO>
        <meta name="robots" content="noindex,nofollow" />
      </SEO>
      <Flex
        w={'full'}
        mt={0}
        minHeight={`calc(100vh - ${secondaryHeaderBarHeight} - ${HEADER_HEIGHT})`}
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <ProfileLayoutSideBar />
        <Flex flex={{ base: 1 }} flexDirection={'column'} pos={'relative'} w={'full'}>
          {children}
        </Flex>
      </Flex>
    </VStack>
  );
};

export default ProfileLayout;
