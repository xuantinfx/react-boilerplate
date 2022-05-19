import React, { PropsWithChildren } from 'react';
import { Link, useColorModeValue, LinkProps, forwardRef } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export interface LinkButtonProps extends PropsWithChildren<LinkProps> {
  to: string;
}

const LinkButton = forwardRef((props: LinkButtonProps, ref) => {
  const { to, children, ...remainingProps } = props;
  const color = useColorModeValue('main', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  return (
    <Link
      ref={ref}
      as={RouterLink}
      color={color}
      px={4}
      py={1}
      textAlign="center"
      to={to}
      _hover={{
        textDecoration: 'none',
        color: linkHoverColor,
      }}
      _focus={{
        boxShadow: 'none',
      }}
      {...remainingProps}
    >
      {children}
    </Link>
  );
});

export default LinkButton;
