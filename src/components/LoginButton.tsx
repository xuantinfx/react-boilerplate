import React from 'react';
import { useColorModeValue } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { RoutePath } from '../globals/constants';
import useDefaultBackground from '../hooks/useDefaultBackground';
import { LinkButton } from './Button';

const LoginButton = () => {
  const { t } = useTranslation();

  const defaultBg = useDefaultBackground();
  const color = useColorModeValue('main', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.500', 'white');

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
      to={RoutePath.LOGIN}
    >
      {t('Term:Auth.LogIn')}
    </LinkButton>
  );
};

export default LoginButton;
