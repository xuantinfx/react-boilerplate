import React from 'react';
import { Spinner as ChakraSpinner, SpinnerProps, useColorModeValue } from '@chakra-ui/react';
import { Colors } from 'src/shared';

const Spinner = (props: SpinnerProps) => {
  const primaryColor = useColorModeValue(Colors.dark.primary, Colors.dark.primary);
  const emptyColor = useColorModeValue(Colors.dark.bg, Colors.dark.bg);
  return (
    <ChakraSpinner
      className={'spinner'}
      thickness="2px"
      speed="0.65s"
      emptyColor={emptyColor}
      color={primaryColor}
      size="md"
      pos={'absolute'}
      {...props}
    />
  );
};
export default Spinner;
