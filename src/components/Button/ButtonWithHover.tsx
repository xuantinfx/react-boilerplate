import React from 'react';
import { Button, useColorModeValue, ButtonProps, forwardRef } from '@chakra-ui/react';
import { Colors } from 'src/shared';

const ButtonWithHover = forwardRef((props: ButtonProps, ref) => {
  const { children, ...remainingProps } = props;

  const hoverColor = useColorModeValue(Colors.dark.bg, Colors.dark.bg);
  const primaryColor = useColorModeValue(Colors.dark.primary, Colors.dark.primary);

  return (
    <Button
      ref={ref}
      p={2}
      borderRadius="full"
      bg="transparent"
      _hover={{ backgroundColor: hoverColor }}
      _active={{ backgroundColor: primaryColor }}
      {...remainingProps}
    >
      {children}
    </Button>
  );
});

export default ButtonWithHover;
