import { MOBILE_SECONDARY_HEADER_HEIGHT, SECONDARY_HEADER_HEIGHT } from '../globals/constants';
import useIsDesktop from './useIsDesktop';

const useGetSecondaryHeaderBarHeight = () => {
  const isDesktop = useIsDesktop();
  const secondaryHeaderBarHeight = isDesktop
    ? SECONDARY_HEADER_HEIGHT
    : MOBILE_SECONDARY_HEADER_HEIGHT;
  return secondaryHeaderBarHeight;
};

export default useGetSecondaryHeaderBarHeight;
