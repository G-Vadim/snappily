'use client';
import Image from 'next/image';
import { Box } from '@chakra-ui/react';

import { useMobile } from '@/app/utils/useMobile';

export const Phone = (props) => {
  const isMobile = useMobile();

  return (
    <Box position="relative" rounded="base" overflow="hidden" minW={{ base: 'auto', md: '482px' }} {...props}>
      <Image src="/images/MobilePhone.jpg" alt="phone-background" width={482} height={643} style={{ zIndex: 1 }} />
      <Image
        src="/images/App.png"
        alt="phone-app"
        width={544}
        height={1172}
        style={{
          zIndex: 2,
          position: 'absolute',
          border: '1px solid #FF0033',
          ...(isMobile
            ? {
                width: '248px',
                height: '537px',
                top: '35px',
                left: '57px',
                borderRadius: '28px',
              }
            : { width: '332px', height: '720px', top: '47px', left: '75px', borderRadius: '38px' }),
        }}
      />
    </Box>
  );
};
