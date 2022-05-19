import { useMediaQuery } from '@chakra-ui/react';

const useIsMobile = () => {
  const [isMobile] = useMediaQuery('(max-width: 425px)');
  return isMobile;
};

export default useIsMobile;
