import React, { PropsWithChildren } from 'react';
import { useColorModeValue, LinkProps, forwardRef } from '@chakra-ui/react';
import { Colors } from 'src/shared';
import LinkButton from './LinkButton';

export interface PrimaryLinkProps extends PropsWithChildren<LinkProps> {
  to: string;
  isActive?: boolean;
}

const PrimaryLink = forwardRef((props: PrimaryLinkProps, ref) => {
  const { to, children, isActive = false, ...remainingProps } = props;

  const defaultBg = useColorModeValue(Colors.dark.secondaryBg, Colors.dark.secondaryBg);
  const activeBg = useColorModeValue(Colors.dark.primary, Colors.dark.primary);
  const color = useColorModeValue('main', 'gray.200');

  const bg = isActive ? activeBg : defaultBg;

  return (
    <LinkButton ref={ref} color={color} bg={bg} to={to} rounded={'full'} {...remainingProps}>
      {children}
    </LinkButton>
  );
});

export default PrimaryLink;
