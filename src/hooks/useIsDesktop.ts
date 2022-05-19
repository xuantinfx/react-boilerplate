import { useMediaQuery } from '@chakra-ui/react';

const useIsDesktop = () => {
  const [isDesktop] = useMediaQuery('(min-width: 1024px)');
  return isDesktop;
};

export default useIsDesktop;
