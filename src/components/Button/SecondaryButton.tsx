import React from 'react';
import { Button, useColorModeValue, ButtonProps, forwardRef } from '@chakra-ui/react';
import { Colors } from 'src/shared';

const SecondaryButton = forwardRef((props: ButtonProps, ref) => {
  const { children, ...remainingProps } = props;

  const defaultBg = useColorModeValue(Colors.dark.secondary, Colors.dark.secondary);
  const color = useColorModeValue('main', 'gray.200');

  return (
    <Button
      ref={ref}
      color={color}
      px={4}
      py={1}
      textAlign="center"
      bg={defaultBg}
      rounded={'full'}
      {...remainingProps}
    >
      {children}
    </Button>
  );
});

export default SecondaryButton;
