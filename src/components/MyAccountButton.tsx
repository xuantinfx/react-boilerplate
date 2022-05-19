import React from 'react';
import { useColorModeValue } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { RoutePath } from '../globals/constants';
import useDefaultBackground from '../hooks/useDefaultBackground';
import { LinkButton } from './Button';

const MyAccountButton = React.memo(() => {
  const defaultBg = useDefaultBackground();
  const color = useColorModeValue('main', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.500', 'white');

  const { t } = useTranslation();

  return (
    <LinkButton
      color={color}
      bg={defaultBg}
      _hover={{
        textDecoration: 'none',
        color: linkHoverColor,
      }}
      py={2}
      px={4}
      rounded={'full'}
      to={RoutePath.PROFILE}
    >
      {t('Component:MyAccountButton.LinkButton')}
    </LinkButton>
  );
});

export default MyAccountButton;
