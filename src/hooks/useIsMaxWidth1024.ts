import { useMediaQuery } from '@chakra-ui/react';

const useIsMaxWidth1024 = () => {
  const [isMaxWidth1024] = useMediaQuery('(max-width: 1024px)');
  return isMaxWidth1024;
};

export default useIsMaxWidth1024;
