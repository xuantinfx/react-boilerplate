import React from 'react';
import { Button, ButtonProps, forwardRef } from '@chakra-ui/react';

const OutlineButton = forwardRef((props: ButtonProps, ref) => {
  const { children, color, ...remainingProps } = props;

  return (
    <Button
      ref={ref}
      color={color}
      borderColor={color}
      px={4}
      py={1}
      textAlign="center"
      rounded="full"
      variant="outline"
      {...remainingProps}
    >
      {children}
    </Button>
  );
});

export default OutlineButton;
