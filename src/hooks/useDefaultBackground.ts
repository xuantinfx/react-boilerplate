import { useColorModeValue } from '@chakra-ui/react';
import { Colors } from 'src/shared';

const useDefaultBackground = () => {
  return useColorModeValue(Colors.dark.secondary, Colors.dark.secondary);
};

export default useDefaultBackground;
