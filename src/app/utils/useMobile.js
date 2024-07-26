import { useMediaQuery } from '@chakra-ui/react';
import { MD_BREAKPOINT } from '../theme/breakpoints';

export const useMobile = () => {
  const [isMobile] = useMediaQuery(`(max-width: ${MD_BREAKPOINT})`);
  return isMobile;
};
